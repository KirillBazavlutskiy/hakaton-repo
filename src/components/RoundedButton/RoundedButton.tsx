import cn from 'classnames';

import { useAppSelector } from "@/redux/store";

import s from './RoundedButton.module.scss';

interface RoundedButtonProps {
    children: React.ReactNode,
    className?: string,
}

export function RoundedButton({children, className}: RoundedButtonProps): JSX.Element {

    return (
        <div className={cn(s.container, className)}>
            {children}
        </div>
    );
};