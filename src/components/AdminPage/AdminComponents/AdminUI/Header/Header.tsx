import { FC } from 'react';
import s from './Header.module.scss';
import Logo from '@/images/logo.png';
import Image from "next/image";
import Link from "next/link";

const Header: FC = () => {
    return (
        <div className={s.container}>
            <Link className={s.logo} href={'/'}>
                <Image src={Logo} alt={'Logo'} />
            </Link>
        </div>
    );
};

export default Header;
