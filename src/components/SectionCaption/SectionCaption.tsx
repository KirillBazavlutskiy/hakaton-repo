import cn from 'classnames';

import s from './SectionCaption.module.scss';

interface SectionCaptionProps {
    children: React.ReactNode,
    className?: string,
}

export function SectionCaption({children, className}: SectionCaptionProps): JSX.Element {
    return (
        <h2 className={cn(s.caption, className)}>
            {children}
        </h2>
    );
};