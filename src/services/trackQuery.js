import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AuthReducer } from "../Store/slices/authSlice";

const baseQueryAuth = async (args, api, extraOptions) => {
  const baseQuery = fetchBaseQuery({
    baseUrl: "https://skypro-music-api.skyeng.tech/",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

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
    // localStorage.navigate("/login");
  };

  const { auth } = api.getState();
  console.debug("Данные пользователя в сторе", { auth });

  if (!auth.refresh) {
    return forseLogout();
  }
};

export const tracksApi = createApi({
  reducerPath: "tracksApi",
  baseQuery: baseQueryAuth,
  endpoints: (build) => ({
    // получить избранные треки
    getFavTrack: build.query({
      query: () => `catalog/track/favorite/all/`,
    }),

    // поставить лайк
    likeTrack: build.mutation({
      query: ({ id }) => ({
        url: `catalog/track/${id}/favorite/`,
        method: "POST",
      }),
    }),

    // убрать лайк
    dislikeTrack: build.mutation({
      query: ({ id }) => ({
        url: `catalog/track/${id}/favorite/`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useGetFavTrackQuery } = tracksApi;
