//baesd on redux toolkit documentation

import { configureStore } from "@reduxjs/toolkit";

import { articleApi } from "./article";

export const store = configureStore({
  reducer: {
    [articleApi.reducerPath]: articleApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articleApi.middleware),
});

//this middleware make
//reducer to work
