import { useRouter } from 'next/router';
import {FC, useEffect} from 'react';

const Error: FC = () => {
    const router = useRouter();
    const { pathname, asPath, query, locale } = router;
    useEffect(() => { router.push({ pathname, query }, asPath, { locale: locale }) })
    return (
        <div />
    );
};

export default Error;