import { useRouter } from 'next/router';
import {FC, useEffect} from 'react';

const Error: FC = () => {
    const router = useRouter();
    useEffect(() => {router.push('/')})
    return (
        <div />
    );
};

export default Error;