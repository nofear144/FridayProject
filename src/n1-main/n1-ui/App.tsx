import React from 'react';
import './App.css';
import {BrowserRouter, HashRouter} from "react-router-dom";
import { RoutesPage} from "./routes/Routes";
import {Header} from "./header/Header";

function App() {
    return (
        <div>
        <BrowserRouter>
                <RoutesPage/>
                <Header/>
        </BrowserRouter>
        </div>
    );
}

export default App;
