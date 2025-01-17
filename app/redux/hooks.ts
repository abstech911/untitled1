import {useDispatch, useStore, TypedUseSelectorHook, useSelector} from 'react-redux'
import type {RootState, AppStore, AppDispatch} from "@/app/redux/store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore = useStore.withTypes<AppStore>();