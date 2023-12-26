import { configureStore } from '@reduxjs/toolkit'
import { productApi } from './services/productApi'
import { authApi } from './src/auth/services/user.service'
import { setupListeners } from '@reduxjs/toolkit/dist/query'

export const store = configureStore({
  reducer: {
   [productApi.reducerPath]: productApi.reducer,
   [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(productApi.middleware).concat(authApi.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments,: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);