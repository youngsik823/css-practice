import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // BrowserRouter를 Router로 임포트
import M from "./conponent/M";
import P1 from "./conponent/P1";
import "./App.css";
import P2 from "./conponent/P2";
import P3 from "./conponent/P3";
import P4 from "./conponent/P4";
import P5 from "./conponent/P5";
import P6 from "./conponent/P6";
import P7 from "./conponent/P7";
import P8 from "./conponent/P8";
import P9 from "./conponent/P9";
import P10 from "./conponent/P10";

function App() {
    return (
        <div className="body">
            <Router>
                <Routes>
                    <Route path="/" element={<M />} />
                    <Route path="/P1" element={<P1 />} />
                    <Route path="/P2" element={<P2 />} />
                    <Route path="/P3" element={<P3 />} />
                    <Route path="/P4" element={<P4 />} />
                    <Route path="/P5" element={<P5 />} />
                    <Route path="/P6" element={<P6 />} />
                    <Route path="/P7" element={<P7 />} />
                    <Route path="/P8" element={<P8 />} />
                    <Route path="/P9" element={<P9 />} />
                    <Route path="/P10" element={<P10 />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
