import {Dispatch, FC, ReactNode, SetStateAction} from 'react';
import s from './ModalWindow.module.scss';

interface ModalWindowProps {
    state: boolean;
    setState: Dispatch<SetStateAction<boolean>>;
    children: ReactNode;
}

const ModalWindow: FC<ModalWindowProps> = ({ state, setState, children }) => {
    return (
        <>
            {
                state &&
                <div className={s.container}>
                    <div className={s.inner}>
                        {children}
                        <svg onClick={() => setState(prevState => !prevState)}
                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
            }
        </>
    )
}

export default ModalWindow;
