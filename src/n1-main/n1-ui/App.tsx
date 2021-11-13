import React from 'react';
import './App.css';
import { HashRouter} from "react-router-dom";
import {RoutesPage} from "./routes/Routes";
import {Header} from "./header/Header";

function App() {
    return (
        <div>
            <HashRouter>
                <Header/>
                <RoutesPage/>
            </HashRouter>
        </div>
    );
}

export default App;
