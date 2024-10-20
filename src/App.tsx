import './App.css';
import styled from 'styled-components';
import { Header } from './layout/header/Header';
import { Main } from './layout/sections/main/Main';
import { About } from './layout/sections/about/About';
import { Skills } from './layout/sections/skills/Skills';
import { WorkExp } from './layout/sections/workExp/WorkExp';
import { Footer } from './layout/footer/Footer';


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <About/>
            <Skills/>
            <WorkExp/>
            <Footer/>
        </div>
    );
}

export default App;

