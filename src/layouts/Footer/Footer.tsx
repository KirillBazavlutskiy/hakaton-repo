import { FC } from 'react';

import s from './Footer.module.scss';
import cn from 'classnames';

interface FooterProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export function Footer({ className, ...props }: FooterProps): JSX.Element {
    return (
        <footer className={cn(s.footer, className)} {...props}>
            <>
                <span><span className={s.designed}>designed</span> by F5</span> 
            </>
        </footer>
    );
};