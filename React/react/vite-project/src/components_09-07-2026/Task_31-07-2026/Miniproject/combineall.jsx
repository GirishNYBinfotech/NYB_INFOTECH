import React,{useState,useMemo,useCallback,lazy, Suspense}from "react";
import Counter from "./Counter";
import UserList from "./UserList";
import Modal from "./Modal";
import Dashboard from "./Dashboard";
import PureChild from "./PureChild";
import withBorder from "./withBorder";

const About = lazy(() => import("./About"));
const DashboardWithBorder = withBorder(Dashboard);

function Combineall() {

    // Event Binding
    const [count, setCount] = useState(0);
    const [show, setShow] = useState(false);
    const users = [
        { id: 1, name: "Girish" },
        { id: 2, name: "Rahul" },
        { id: 3, name: "John" }
    ]

    // useMemo
    const square = useMemo(() => {
        console.log("Calculating...");
        return count * count;
    }, [count]);

    // useCallback
    const increase = useCallback(() => {
        setCount(c => c + 1);
    }, []);
    return (
        <>
            {/* Fragment */}
            <h1>React All Concepts Demo</h1>
            <button onClick={increase}>
                Increment
            </button>
            <h2>Count : {count}</h2>
            <h2>Square(useMemo): {square}</h2>
            <hr />
            <Counter />
            <hr />
            <UserList users={users} />
            <hr />
            <PureChild value={count} />
            <hr />
            <DashboardWithBorder />
            <hr />
            <button onClick={() => setShow(true)}>Open Portal</button>
            {
                show &&
                <Modal close={() => setShow(false)} />
            }
            <hr />
            <Suspense fallback={<h2>Loading...</h2>}>
                <About />
         </Suspense>
        </>
    );
}

export default Combineall