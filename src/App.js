// import logo from './logo.svg'; 에러뜨는거 신경쓰이면 이거 주석처리
import './App.css';
import Hello from './Hello';
import Sayhello from './Sayhello';




function App() {
  const looping = () => {
    const helloList = []; //반복문 5바퀴 돌때마다 hellolist배열에 추가한다. 세이헬로우를.
    for(let i=0; i<5; i++){
      helloList.push(<Sayhello/>);
    }    
    return helloList;
  }
  return (
    //일단 주석 처리 하고 간단한 h1태그 메모를 하고 출력이 되는지 살펴보자.
    //<h1>리액트 초보입니다.</h1>

    //리액트 에서는 하나의 컴포넌트가 여러 개 엘리먼트를 반환할 수 있다. (지금 Sayhello.js가면 태그가 여러개지?)
    //JSX를 작성할 때 return 문 안에 반드시 하나의 최 상위 태그가 있어야 한다.
    //Fragment(EX <>)를 사용하면 의미없는 태그를 줄여 가독성을 좋게 한다.
    

    //리액트에서 작성할 때에는 모든 태그에 반드시 /가 붙어야한다. br로 <br/>로 써야 한다.


    //JSX 문법에서는 스크립트를 코드로 직접 사용이 불가능하다.
    //{} 안에서 함수의 호출문이나 변수참조는 가능하다.
    <> 
  { looping()}
    </>
  );
}

export default App; //App이라는 함수 자체를 export한다. 
