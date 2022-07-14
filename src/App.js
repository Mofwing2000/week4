import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';

const Container = styled.div`
    max-width: 1280px;
    margin: 0px auto;
`;

function App() {
    return (
        <div className="App">
            <Container>
                <Outlet />
            </Container>
        </div>
    );
}

export default App;
