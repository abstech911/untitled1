'use client'
import {useAppDispatch, useAppSelector} from './redux/hooks';
import {exampleHandler} from "@/app/redux/slices/example";
import {useGetUsersQuery} from "@/app/redux/apislices/exampleApiSlice";
import {useEffect} from "react";

export default function Home() {
    const dispatch = useAppDispatch();
    const inputValue = useAppSelector(state => state.input.value);

    const {data, isLoading, error, isError,} = useGetUsersQuery('users');

    const handleButton = () => {
        dispatch(exampleHandler('Hi there'));
    }

    return (
        <div>
            <p>{inputValue} </p>
            <button onClick={handleButton}>Hello</button>
            {
                data?.map((value: any, index: number) => {
                    return <p key={index}>{value.id}</p>
                })
            }
        </div>
    );
}
