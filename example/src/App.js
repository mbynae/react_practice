import React, { useEffect, useState, useRef, useLayoutEffect } from 'react';
import useInterval from './useInterval';

const arr = [{ color: 'red' }, { color: 'blue' }, { color: 'green' }, { color: 'yellow' }, { color: 'purple' }];

const Slide = ({ color }) => {
    return <div className="slide" style={{ backgroundColor: color }}></div>;
};

// const slideAnimation = () => {
//     const inner = document.querySelector('.inner');
//     const slide = document.querySelectorAll('.slide');
//     const slideClone = inner.firstElementChild.cloneNode(true);
//     inner.appendChild(slideClone);
//     let slideWidth = slide[0].offsetWidth;
//     let slideCount = slide.length;

//     const slideEffect = (count) => {
//         console.log(`함수안${count}`);
//         currentCount++;
//         inner.style.transition = 'all 0.6s';
//         inner.style.transform = 'translateX(-' + slideWidth * count + 'px)';

//         if (count === slideCount) {
//             setTimeout(() => {
//                 inner.style.transition = '0s';
//                 inner.style.transform = 'translateX(0px)';
//             }, 700);
//         }
//     };
// };

const App = () => {
    const slideInner = useRef();
    const slideView = useRef();
    const [count, setCount] = useState(0);
    const [move, setMove] = useState(0);

    useEffect(() => {
        let sliderClone = document.querySelector('.inner').firstElementChild.cloneNode(true);
        document.querySelector('.inner').appendChild(sliderClone);
    }, []);

    // useEffect(() => {
    //     setMove(500 * count);
    //     slideInner.current.style.transition = 'all 0.6s';
    //     slideInner.current.style.transform = `translateX(-${move}px)`;

    //     if (count === document.querySelectorAll('.slide').length)
    //         setTimeout(() => {
    //             setMove(0);
    //             slideInner.current.style.transition = '0s';
    //             slideInner.current.style.transform = `translatX(0px)`;
    //         }, 700);
    // }, [count]);

    // useEffect(() => {
    //     const ce = setInterval(() => {
    //         count <= 4 ? setCount((count) => count + 1) : setCount(0);
    //     }, 2000);

    //     return () => clearInterval(ce);
    // }, [count <= 4]);
    // console.log(count);

    useInterval(() => {
        if (count < 7) {
            setMove(500 * count);
            setCount(count + 1);
            slideInner.current.style.transition = 'all 0.6s';
            slideInner.current.style.transform = `translateX(-${move}px)`;
        } else {
            setTimeout(() => {
                setMove(0);
                setCount(0);
                slideInner.current.style.transition = 'all 0s';
                slideInner.current.style.transform = `translateX(0px)`;
            }, 100);
        }
    }, 1000);

    return (
        <div className="wrap">
            <div className="view" ref={slideView}>
                <div className="inner" ref={slideInner}>
                    {/* <div className="slide"></div>
                    <div className="slide"></div>
                    <div className="slide"></div>
                    <div className="slide"></div>
                    <div className="slide"></div> */}
                    {arr.map((color, index) => (
                        <Slide key={index} color={color.color} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default App;
