import './App.css';
import styled from 'styled-components';
import { Header } from './layout/header/Header';
import { Main } from './layout/sections/main/Main';
import { About } from './layout/sections/about/About';


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <About/>
        </div>
    );
}

export default App;

