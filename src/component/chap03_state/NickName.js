import React, { useState } from 'react'

const NickName = () => {


    //useState 훅은 배열을 리턴하는데, 0번에는 상태변수값을 리턴하고 1번에는 상태변수 값을 변경할 수 있는 setter함수가 제공된다. f12보면 배열로 온다는 것을 확인을 할 수 있다.
    const [nickName, setNickName] = useState('김철수'); //초기값을 김철수로했다. 배열이 리턴되고 값은 2개다. 첫번째 값은 상태변수값인 김철수가 올 것이고, 저 result는 배열이잖아? result의 0번 인덱스는 김철수다. setter함수를 부르고 싶으면 1번인덱스를 호출하면 되는데 지저분 하니까 배열 디스트럭쳐링을 쓰자. []열어~
    //즉, useState의 리턴 타입이 배열이기 때문에 구조 분해 할당을 통해 쉽게 이름을 지어서 사용이 가능하다.
    //[nickName] 이 값이고, setNickName이 세터메서드다. 세터메서드는 관례식으로 상태변수값, set상태변수값으로 매겨준다.
    //useState의 리턴을 받을 때에는, 이름 지어주고 set + NickName(함수이름) 을 지었다. 함수이름은 마음대로 지어도 되는데, set + 함수이름이 관례이다.
    //이제 김철수 값을 변경하고 싶으면 setNickName을 통해 바꾸면 된다!
    
    //const result = useState(); 리턴하는 값을 단순하게 찍어볼까?
    //console.log('result: ', result);

    //let nickName = '김철수'; 그럼 useState를 어떻게 사용하는가? 김철수를 주석처리하고 위로가자

    const changeNickname = e => { 
        console.log('changeNickname called!!!'); //버튼클릭하면 함수호출되는지 확인하는용.
        //nickName = '척척박사';
        //이제 척척박사는 바로 위처럼 부르는게 아닌 이렇게 부르면된다.
        setNickName('척척박사'); //useState의 setter를 호출해서 상태변수의 값을 변경한다.
        //이제 김철수 에서 버튼을 누르면 척척박사로 바뀐다.

        console.log('nickName의 값은? ', nickName); //f12보면 척척박사로 바뀌는 것을 알 수 있다. 
        //화면에서 왜 안바뀌어? > let nickName = '김철수'; 가 지금 지역변수이다. 함수내에 있는 지역변수.
        //그래서 실행 순서를 알고 있다면, 왜 이름이 안바뀌는지에 대해 알 수 있다.
        //App.js에서는 const NickName을 부르고, 우리가 지역변수로 nickName='김철수'라고 해놨다.
        //리턴에 이미 {nickName}으로 해놨기 때문에 김철수만 나오는 것이다.
        //김철수를 바꾸고 싶으면 위로가서 읽으면서 공부하자
    }

  return (
    
        <>
            <h1>Hello ~~~ {nickName}</h1>
            <button className='btn' onClick={changeNickname}>버튼</button>

            {/*버튼2는 즉석에서 선언해보자. 함수선언하기귀찮으니*/}
            <button className='btn' onClick={() => setNickName('척척석사')}>버튼2</button>
        </>
  
    );
}

export default NickName
//이제 김철수 에서 버튼을 누르면 척척박사로 바뀐다.
