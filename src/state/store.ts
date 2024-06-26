import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { subscribeApi } from './services/subscribeApi';
import { citiesApi } from './services/citiesApi';
import { lastTicketApi } from './services/lastTicketApi';
import { routesApi } from './services/routesApi';
import { seatsApi } from './services/seatsApi';

import { setDirectionsInfoReducer } from './reducers/setDirectionsInfoSlice';
import { setSearchOptionsReducer } from './reducers/setSearchOptionsSlice';

export const store = configureStore({
  reducer: {
    [subscribeApi.reducerPath]: subscribeApi.reducer,
    [citiesApi.reducerPath]: citiesApi.reducer,
    [lastTicketApi.reducerPath]: lastTicketApi.reducer,
    [routesApi.reducerPath]: routesApi.reducer,
    [seatsApi.reducerPath]: seatsApi.reducer,
    directionInfo: setDirectionsInfoReducer,
    searchOptions: setSearchOptionsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      subscribeApi.middleware,
      citiesApi.middleware,
      lastTicketApi.middleware,
      routesApi.middleware,
      seatsApi.middleware
    ),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
