import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AuthReducer } from "../Store/slices/authSlice";

const baseQueryAuth = async (args, api, extraOptions) => {
  const baseQuery = fetchBaseQuery({
    baseUrl: "https://skypro-music-api.skyeng.tech/",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.accessToken;

      console.debug("Использую токен из стора", { token });

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  });

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

  const { auth } = api.getState();
  console.debug("Данные пользователя в сторе", { auth });

  if (!auth.refresh) {
    return forseLogout();
  }
};

export const tracksApi = createApi({
  reducerPath: "tracksApi",
  tagTypes: ["Tracks"],
  baseQuery: baseQueryAuth,
  endpoints: (build) => ({
    // получить избранные треки
    getFavTrack: build.query({
      query: () => `catalog/track/favorite/all/`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Tracks", id })),
              { type: "Post", id: "LIST" },
            ]
          : [{ type: "Post", id: "LIST" }],
    }),

    // поставить лайк
    likeTrack: build.mutation({
      query: ({ id }) => ({
        url: `catalog/track/${id}/favorite/`,
        method: "POST",
      }),
      invalidatesTags: [{ type: "Post", id: "LIST" }],
    }),

    // убрать лайк
    dislikeTrack: build.mutation({
      query: ({ id }) => ({
        url: `catalog/track/${id}/favorite/`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Post", id: "LIST" }],
    }),
  }),
});

export const {
  useGetFavTrackQuery,
  useLazyGetFavTrackQuery, // как Query только с ручным контролем
  useLikeTrackMutation,
  useDislikeTrackMutation,
} = tracksApi;
