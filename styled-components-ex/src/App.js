import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Button from './components/Button';
import Dialog from './components/Dialog';
// css모듈화 하는 방법
// import classes from './App.module.css';

const AppBlock = styled.div`
    width: 512px;
    // margin: 4rem auto 0 auto;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid black;
    padding: 1rem;
`;

const ButtonGroup = styled.div`
    & + & {
        margin-top: 1rem;
    }
`;

const App = () => {
    const [visible, setVisible] = useState(false);

    const onClick = () => {
        setVisible(true);
    };

    const onConfirm = () => {
        console.log('확인');
        setVisible(false);
    };

    const onCancel = () => {
        console.log('취소');
        setVisible(false);
    };

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
            <>
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
                    <ButtonGroup>
                        <Button size="large" fullWidth>
                            BUTTON
                        </Button>
                        <Button size="large" color="gray" fullWidth>
                            BUTTON
                        </Button>
                        <Button size="large" color="pink" fullWidth onClick={onClick}>
                            삭제
                        </Button>
                    </ButtonGroup>
                </AppBlock>
                <Dialog title="정말로 삭제하시겠습니까?" confirmText="삭제" cancelText="취소" onConfirm={onConfirm} onCancel={onCancel} visible={visible}>
                    데이터를 정말로 삭제하시겠습니까?
                </Dialog>
            </>
        </ThemeProvider>
    );
};

export default App;
