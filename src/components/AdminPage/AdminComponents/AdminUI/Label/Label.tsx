import s from './Label.module.scss';
import {Dispatch, SetStateAction} from "react";
interface LabelProps<T> {
    title?: string;
    type?: 'input' | 'textarea';
    placeholder?: string;
    height?: number;
    maxLength: number;
    state: T;
    path: string[];
    setState: Dispatch<SetStateAction<T>>;
}

function getValue(state: any, keys: string[]): string {
    let value: any = state;

    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];

        if (value.hasOwnProperty(key)) {
            value = value[key];
        } else {
            return 'Value does not exist!';
        }
    }

    return value;
}

function updateValue<T>(state: T, keys: string[], newValue: string, maxLength: number, setState: Dispatch<SetStateAction<T>>): void {
    setState(prevState => {
        const updatedState: T = { ...prevState }
        let currentState: any = updatedState;
        keys.forEach((key) => {
            if (!currentState.hasOwnProperty(key)) {
                return prevState;
            }
            if (typeof currentState[key] === "string") {
                currentState[key] = newValue;
            } else {
                currentState = currentState[key];
            }
        })
        return updatedState;
    });
}


function Label<T>(
    {
        title,
        type = 'input',
        placeholder = '',
        height = 300,
        maxLength = 600,
        state,
        path,
        setState
    }: LabelProps<T>) {
    return (
        <div className={s.container}>
            <p>{title}</p>
            {
                type === 'input'
                    ?
                    <input
                        type="text"
                        placeholder={placeholder}
                        value={getValue(state, path)}
                        onChange={e => updateValue(state, path, e.target.value, maxLength, setState)}
                    />
                    :
                    <>
                        <textarea
                            style={{
                                height: `${height}px`
                            }}
                            maxLength={maxLength}
                            placeholder={placeholder}
                            value={getValue(state, path)}
                            onChange={e => updateValue(state, path, e.target.value, maxLength, setState)}
                        />
                        <span>{getValue(state, path).length}/{maxLength}</span>
                    </>
            }
        </div>
    )
}

export default Label;
