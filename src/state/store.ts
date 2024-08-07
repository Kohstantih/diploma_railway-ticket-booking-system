import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { subscribeApi } from './services/subscribeApi';
import { citiesApi } from './services/citiesApi';
import { lastTicketApi } from './services/lastTicketApi';
import { routesApi } from './services/routesApi';
import { seatsApi } from './services/seatsApi';
import { orderApi } from './services/orderApi';

import { setDirectionsInfoReducer } from './reducers/setDirectionsInfoSlice';
import { setSearchOptionsReducer } from './reducers/setSearchOptionsSlice';
import { setActiveRouteReducer } from './reducers/setActiveRouteSlice';
import { setTicketCountObjectReducer } from './reducers/setTicketCountObjectSlice';
import { setSeatsCheckedReducer } from './reducers/setSeatsCheckedSlice';
import { setServicesReducer } from './reducers/setServicesSlice';
import { setPriceReducer } from './reducers/setPriceSlice';
import { setPassengersReducer } from './reducers/setPassengersSlice';
import { setUserInfoReducer } from './reducers/setUserInfoSlice';

export const store = configureStore({
  reducer: {
    [subscribeApi.reducerPath]: subscribeApi.reducer,
    [citiesApi.reducerPath]: citiesApi.reducer,
    [lastTicketApi.reducerPath]: lastTicketApi.reducer,
    [routesApi.reducerPath]: routesApi.reducer,
    [seatsApi.reducerPath]: seatsApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
    directionInfo: setDirectionsInfoReducer,
    searchOptions: setSearchOptionsReducer,
    activeRoute: setActiveRouteReducer,
    ticketsCount: setTicketCountObjectReducer,
    seatsChecked: setSeatsCheckedReducer,
    services: setServicesReducer,
    price: setPriceReducer,
    passengers: setPassengersReducer,
    user: setUserInfoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      subscribeApi.middleware,
      citiesApi.middleware,
      lastTicketApi.middleware,
      routesApi.middleware,
      seatsApi.middleware,
      orderApi.middleware
    ),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
