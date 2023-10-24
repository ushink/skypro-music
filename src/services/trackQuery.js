import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const tracksApi = createApi({
  reducerPath: "tracksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://skypro-music-api.skyeng.tech/",
  }),
  endpoints: (build) => ({
    getFavTrack: build.query({
      query: () => `catalog/track/favorite/all/`,
    }),
  }),
});

export const { useGetFavTrackQuery } = tracksApi;
