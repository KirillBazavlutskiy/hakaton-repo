import {FC, useEffect} from 'react';
import {useRouter} from "next/router";

const Error: FC = () => {
    const router = useRouter();
    useEffect(() => {router.push('/')})
    return (
        <div />
    );
};

export default Error;