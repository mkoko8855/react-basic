import React, {useState, useEffect} from 'react'

const Counter = () => {
  
    const [number, setNumber] = useState(0);

    const [nick, setNick] = useState('익명');

    const increase = () => {
        setNumber(number+1);
    }

    const decrease = () => {
        setNumber(number-1);
    }

    const changeNick = () => setNick('김철수');


    //useEffect란?
    //화면이 처음으로 렌더링(렌더링은 마운트라고도 한다) 될 때, 자동으로 호출이 되는 함수 이다.
    //그리고, 상태값이 변경이 될 때 마다 다시 호출된다.
    //만약, 첫 렌더링 시에만 useEffect를 호출하고 싶다면,
    //두 번째 매개값(파라미터) 값으로 빈 배열(의존성 배열)을 넣으면 된다.



    //useEffect를 먼저 불러보자.
    useEffect(()=>{ //userEffect의 첫번째 매개값은 콜백함수전달


        //화면이 처음 렌더링 될 때, fetch를 통해 서버 API를 호출하는 경우는?
        //처음 1회 호출 후에 또 할 필요가 있을까? (가정을했다. 지금 백엔드서버구축안되있으니)
        //만약, 첫 렌더링 시에만 useEffect를 호출하고 싶다면,
        //두 번째 매개값(파라미터) 값으로 빈 배열(의존성 배열)을 넣으면 된다.



        console.log('3 useEffect called!!! 호출되니?');
    }, [nick]); //두번째 매개값으로 빈 배열줘보자. 그러면 이제 상태가 변경되더라도 useEffect는 실행이 되지 않는다. 즉, 마지막 log값인 userEffect called!!는 호출안됨.
            //그러나 의존성 배열에 상태변수를 넣으면 해당 상태변수가 업데이트가 될 떄마다 useEffect가 재 호출됨!(즉, 제어가가능)
            //즉, nick이 바뀔 때 useEffect가 호출되게 하고 싶으면?
            //[]에 nick 써넣자. 즉, number가 바뀔땐 호출이 안되지만 nick이 변화될때는 useEffect가 재호출된다는 것을 알 수 있다.
            //+1이나 -1는 useEffect가 안불리는데, nick을 바꾸면 console.log('3 useEffect called!!! 호출되니?'); 이 호출됨을 알 수 있다. 즉, useEffect가 호출됨!




    //바깥에도 찍어보자. 아래 리턴안에도 찍어보자
    console.log('1 component function executed!!');


    return (
        <>
            {console.log('2 rendered html!!! useEffect가 호출되니?')}
            <h1>닉네임 : {nick}</h1>
            <h2>{number}</h2>
            <button onClick={increase}>+1</button>
            <button onClick={decrease}>-1</button>
            <button onClick={changeNick}>닉네임 변경</button>
        </>
    );
}

export default Counter;

//결과
/*
userEffect에 실행 순서를 보자
component function executed!!가 먼저 호출되고
rendered html!!이 호출되고
userEffect called!!가 호출된다.
*/