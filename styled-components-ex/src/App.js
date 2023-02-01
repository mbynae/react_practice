import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Button from './components/Button';
// css모듈화 하는 방법
// import classes from './App.module.css';

const AppBlock = styled.div`
    width: 512px;
    margin: 4rem auto 0 auto;
    border: 1px solid black;
    padding: 1rem;
`;

const ButtonGroup = styled.div`
    & + & {
        margin-top: 1rem;
    }
`;

const App = () => {
    return (
        <ThemeProvider
            theme={{
                palette: {
                    blue: '#228be6',
                    gray: '#495057',
                    pink: '#f06595',
                },
            }}
        >
            {/* <div className={classes['name-name']}></div>
            <div className={classes.id}></div>
            <div className={classes['name-name']}></div> */}
            <AppBlock>
                <ButtonGroup>
                    <Button size="large">BUTTON</Button>
                    <Button>BUTTON</Button>
                    <Button size="small">BUTTON</Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button size="large" color="gray">
                        BUTTON
                    </Button>
                    <Button color="gray">BUTTON</Button>
                    <Button size="small" color="gray">
                        BUTTON
                    </Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button size="large" color="pink">
                        BUTTON
                    </Button>
                    <Button color="pink">BUTTON</Button>
                    <Button size="small" color="pink">
                        BUTTON
                    </Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button size="large" outline>
                        BUTTON
                    </Button>
                    <Button color="gray" outline>
                        BUTTON
                    </Button>
                    <Button size="small" color="pink" outline>
                        BUTTON
                    </Button>
                </ButtonGroup>
            </AppBlock>
        </ThemeProvider>
    );
};

export default App;
