import {configureStore} from '@reduxjs/toolkit'
import example  from "@/app/redux/slices/example";
import {exampleApi} from "@/app/redux/apislices/exampleApiSlice";

export const makeStore = () => {
    return configureStore({
        reducer: {
            input: example,
            [exampleApi.reducerPath]: exampleApi.reducer
        },
        middleware:(getDefaultMiddleware)=>{
            return getDefaultMiddleware({}).concat([exampleApi.middleware])
        }
    });
}

export type AppStore = ReturnType<typeof makeStore>

export type RootState = ReturnType<AppStore['getState']>

export type AppDispatch = AppStore['dispatch'];