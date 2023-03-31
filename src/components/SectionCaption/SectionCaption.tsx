import cn from 'classnames';

import { useAppSelector } from "@/redux/store";
import { localisation } from "../../../data/localisation.json";

import s from './SectionCaption.module.scss';

interface SectionCaptionProps {
    children: React.ReactNode,
    className?: string,
}

export function SectionCaption({children, className}: SectionCaptionProps): JSX.Element {

    const { language } = useAppSelector(state => state.language);

    return (
        <h2 className={cn(s.caption, className)}>
            {children}
        </h2>
    );
};