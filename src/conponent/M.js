import React from "react";
import { useNavigate } from "react-router-dom";

const M = () => {
    const navigate = useNavigate();
    const p1Click = () => {
        navigate("/P1");
    };
    const p2Click = () => {
        navigate("/P2");
    };
    const p3Click = () => {
        navigate("/P3");
    };
    const p4Click = () => {
        navigate("/P4");
    };
    const p5Click = () => {
        navigate("/P5");
    };
    const p6Click = () => {
        navigate("/P6");
    };
    const p7Click = () => {
        navigate("/P7");
    };
    const p8Click = () => {
        navigate("/P8");
    };
    const p9Click = () => {
        navigate("/P9");
    };
    const p10Click = () => {
        navigate("/P10");
    };
    return (
        <div className="main">
            <button onClick={p1Click}>P1</button>
            <button onClick={p2Click}>P2</button>
            <button onClick={p3Click}>P3</button>
            <button onClick={p4Click}>P4</button>
            <button onClick={p5Click}>P5</button>
            <button onClick={p6Click}>P6</button>
            <button onClick={p7Click}>P7</button>
            <button onClick={p8Click}>P8</button>
            <button onClick={p9Click}>P9</button>
            <button onClick={p10Click}>P10</button>
        </div>
    );
};

export default M;
