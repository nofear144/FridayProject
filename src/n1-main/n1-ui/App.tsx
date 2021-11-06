import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {RoutesPage} from "./routes/Routes";
import {Header} from "./header/Header";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Header/>
                <RoutesPage/>
            </BrowserRouter>
        </div>
    );
}

export default App;
