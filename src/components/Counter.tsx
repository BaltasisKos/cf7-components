import {useState} from "react";
import CounterButton from "./CounterButton.tsx";

const Counter = () => {
    const [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount(count + 1);
    }

    const decreaseCount = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    const resetCount = () => {
        setCount(0)
    }

    return (
        <>
            <div className="space-y-4 text-2xl pt-12">
                <h1 className="text-center">Count is {count}</h1>
                <div className="text-center space-x-4 ">
                   <CounterButton onClick={increaseCount}  label="Increase"/>
                    <CounterButton onClick={decreaseCount} disabled={count === 0} label="Descrease"/>
                    <CounterButton onClick={resetCount} disabled={count === 0} label="Reset" addClass="bg-cf-dark-red"/>

                    {/*<button*/}
                    {/*    className="bg-black text-white py-2 px-4"*/}
                    {/*    onClick={increaseCount}*/}
                    {/*>*/}
                    {/*    Increase*/}
                    {/*</button>*/}
                    {/*<button*/}
                    {/*    className="bg-black disabled:bg-gray-600 text-white py-2 px-4"*/}
                    {/*    onClick={decreaseCount}*/}
                    {/*    disabled={count === 0}*/}
                    {/*>*/}
                    {/*    Decrease*/}
                    {/*</button>*/}
                    {/*<button*/}
                    {/*    className="bg-red-400 disabled:bg-gray-600 text-white py-2 px-4"*/}
                    {/*    onClick={resetCount}*/}
                    {/*    disabled={count === 0}*/}
                    {/*>*/}
                    {/*    Reset*/}
                    {/*</button>*/}
                </div>
            </div>
        </>
    )
}

export default Counter;