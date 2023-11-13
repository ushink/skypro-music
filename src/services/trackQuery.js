import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AuthReducer } from "../Store/slices/authSlice";

const baseQueryAuth = async (args, api, extraOptions) => {
  const baseQuery = fetchBaseQuery({
    baseUrl: "https://skypro-music-api.skyeng.tech/",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.access;

      console.debug("Использую токен из стора", { token });

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  });
  // Делаем запрос
  const result = await baseQuery(args, api, extraOptions);
  console.debug("Результат запроса", { result });

  if (result?.error?.status !== 401) {
    return result;
  }

  const forseLogout = () => {
    console.debug("Принудительная авторизация");
    api.dispatch(AuthReducer(null));
    window.location.href = "/login";
  };
  // Функция getState возвращает состояние redux стейта целиком, ее нам предоставляет rtk query, она прилетает параметром запроса в функцию
  const { auth } = api.getState();
  console.debug("Данные пользователя в сторе", { auth });

  if (!auth.refresh) {
    return forseLogout();
  }

  // Делаем запрос за новым access токеном в API обновления токена
  const refreshResult = await baseQuery(
    {
      url: "/user/token/refresh/",
      method: "POST",
      body: {
        refresh: auth.refresh,
      },
    },
    api,
    extraOptions
  );

  console.debug("Результат запроса на обновление токена", { refreshResult });

  if (!refreshResult.data.access) {
    return forseLogout();
  }

  api.dispatch(AuthReducer({ ...auth, access: refreshResult.data.access }));

  const retryResult = await baseQuery(args, api, extraOptions);

  if (retryResult?.error?.status === 401) {
    return forseLogout();
  }

  console.debug("Повторный запрос завершился успешно");

  return retryResult;
};

export const tracksApi = createApi({
  reducerPath: "tracksApi",
  tagTypes: ["Tracks", "FavTracks"],
  baseQuery: baseQueryAuth,
  endpoints: (build) => ({
    // получить все треки
    getTrack: build.query({
      query: () => `catalog/track/all/`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Tracks", id })),
              { type: "Tracks", id: "LIST" },
            ]
          : [{ type: "Tracks", id: "LIST" }],
    }),

    // получить избранные треки
    getFavTrack: build.query({
      query: () => `catalog/track/favorite/all/`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "FavTracks", id })),
              { type: "FavTracks", id: "LIST" },
            ]
          : [{ type: "FavTracks", id: "LIST" }],
    }),

    // поставить лайк
    likeTrack: build.mutation({
      query: ({ id }) => ({
        url: `catalog/track/${id}/favorite/`,
        method: "POST",
      }),
      invalidatesTags: [
        { type: "FavTracks", id: "LIST" },
        { type: "Tracks", id: "LIST" },
      ],
    }),

    // убрать лайк
    dislikeTrack: build.mutation({
      query: ({ id }) => ({
        url: `catalog/track/${id}/favorite/`,
        method: "DELETE",
      }),
      invalidatesTags: [
        { type: "FavTracks", id: "LIST" },
        { type: "Tracks", id: "LIST" },
      ],
    }),

    // категория по id
    getCategoriesId: build.query({
      query: (params) => ({
        url: `catalog/selection/${params.id}`,
        method: "GET",
      }),
      transformResponse: (response) => ({
        playlist: response.items,
      }),
      providesTags: (result) =>
        result.playlist
          ? [
              ...result.playlist.map(({ id }) => ({ type: "Tracks", id })),
              { type: "Tracks", id: "LIST" },
            ]
          : [{ type: "Tracks", id: "LIST" }],
    }),
  }),
});

export const {
  useGetTrackQuery,
  useGetFavTrackQuery,
  useLazyGetFavTrackQuery, // как Query только с ручным контролем
  useLikeTrackMutation,
  useDislikeTrackMutation,
  useGetCategoriesIdQuery,
} = tracksApi;
