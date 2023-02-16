import PageContainer from "@/components/PageContainer";
import {useAppSelector} from "@/redux/store";
import {useDispatch} from "react-redux";
import {decrement, increment} from "@/redux/Slices/CounterSlice";

const Index = () => {
    const { number } = useAppSelector((state) => state.counter);
    const dispatch = useDispatch();

    return (
        <PageContainer title={"Головна"} keywords={""}>
            <h1>
                <>
                    Головна {number}
                </>
            </h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </PageContainer>
    )
}

export default Index;