import { FC } from 'react';
import s from './Button.module.scss';

interface ButtonProps {
    children: React.ReactNode;
    color: 'red' | 'yellow' | 'blue';
    size: 'big' | 'small';
    shadow?: boolean;
    onClick: () => void | Promise<void>;
}

const Button: FC<ButtonProps> = ({children, color, size, shadow = false, onClick}) => {
    return (
        <button
            className={s.button}
            style={{
                backgroundColor:
                    color === 'red' ? '#E90909' :
                    color === 'blue' ? '#00A6FF' : '#FFED00',
                color: color === 'yellow' ? '#000' : '#fff',
                padding: size === 'big' ? '13px 56px' : '7px 40px',
                boxShadow:
                    color === 'blue' && shadow ? '4px 5px #777AF6' :
                    color === 'yellow' && shadow ? '4px 5px #9B8900' : 'none'
            }}
            onClick={onClick}
        >{children}</button>
    );
};

export default Button;