import {FC} from 'react';

interface EllipseProps {
    top: number;
    left: number | 'auto';
    right: number | 'auto';
    width: number;
    height: number;
    color1: string | 'transparent';
    color2: string | 'transparent';
}

const Ellipse: FC<EllipseProps> = ({ top, right, width, height, color1, color2 }) => {
    return (
        <div
            // className={`absolute top-[${top}] right-[${right}] w-[${width}] h-[${height}]`}
            style={{
                zIndex: -1,
                position: 'absolute',
                opacity: 0.12,
                top: top,
                right: right,
                width: width,
                height: height,
                background: `radial-gradient(ellipse ${width / 2}px ${height / 2}px, ${color1}, ${color2})`
            }}
        />
    );
};

export default Ellipse;