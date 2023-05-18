import {FC, ReactNode} from 'react';
import s from './Button.module.scss';
import cn from "classnames";

interface ButtonProps {
    children: ReactNode;
    color: 'red' | 'yellow' | 'blue';
    size: 'big' | 'small';
    shadow?: boolean;
    onClick: () => void | Promise<void>;
}

const Button: FC<ButtonProps> = ({children, color, size, shadow = false, onClick}) => {
    return (
        <button
            className={cn(
                s.button,
                color === 'red' ? `bg-[#E90909] hover:bg-[#E90909]/50`: color === 'blue' ? 'bg-[#00A6FF] hover:bg-[#00A6FF]/80' : 'bg-[#FFED00] hover:bg-[#FFED00]/80',
                color === 'yellow' ? 'text-[#000]' : 'text-[#fff]',
                size === 'big' ? 'p-[13px_56px]' : 'p-[7px_40px]',
                shadow && (color === 'blue' ? 'shadow-[4px_5px_#777AF6]' : color === 'yellow' ? 'shadow-[4px_5px_#9B8900]' : 'none'),
                `hover:shadow-none`,
            )}
            onClick={onClick}
        >{children}</button>
    );
};

export default Button;
