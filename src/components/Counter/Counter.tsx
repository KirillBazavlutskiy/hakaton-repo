import { useEffect, useState } from 'react';

interface CounterProps {
    val: number,
}

const Counter = ({ val }: CounterProps) => {
    const [currVal, setCurrVal] = useState<number>(0);

    const counterAnimation = () => {
        let i = 0;
        let step = Math.ceil(val/800);
        let time = 1000 * 2 / val;
        let interval = setInterval(
            function() {
                if (i < val) {
                    setCurrVal(i);
                } else {
                    setCurrVal(val);
                    clearInterval(interval);
                }
                i+=step;
            }, time);

    }

    useEffect(() => {
        counterAnimation();
    }, []);

    return (
        <>{currVal}</>
    );
}

export default Counter;