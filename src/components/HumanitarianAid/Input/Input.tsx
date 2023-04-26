import s from './Input.module.scss';
import React, {Dispatch, HTMLInputTypeAttribute, SetStateAction} from "react";

interface InputProps<T> {
    type: HTMLInputTypeAttribute;
    placeholder: string;
    state: T;
    propertyKey: keyof T;
    setState: Dispatch<SetStateAction<T>>
}

function Input<T>({ placeholder, state, propertyKey, setState }: InputProps<T>) {
    return (
        <input
            className={s.input}
            type='text'
            placeholder={placeholder}
            value={String(state[propertyKey])}
            onChange={(e) => {setState({ ...state, [propertyKey]: e.target.value })}}
        />
    );
}

export default Input;
