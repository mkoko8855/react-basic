import React from 'react'
import './style.css'
const SubmitEvent = () => {

    const send = e => {
      e.preventDefault(); //기능을 막는 것임. 즉, submit의 기능을 일단 막아.
   
      const $nick = document.getElementById('nickName');
      console.log($nick.value);
    }

    /*폼은 submit발생하면 페이지가 변하잖아. 리액트는 페이지가 변하지 않고 비동기로 이뤄지잖아. 그래서 form이라는 태그를 작성할 일이 별로 없다. */
    /*폼에 submit이 발생하면 action에 지정한 경로로 날아가고, 페이지가 바뀌기 때문에*/


    //이번엔 버튼을 꾸며보자
    const buttonStyle = {
        //리터럴방식으로 객체를 하나 생성하자
        //자바스크립트는 키와 밸류로 이뤄져있으니,
        color : 'red',
        backgroundColor : 'orange',
        fontSize : '1.5em',
        //이 객체에 값을 버튼한테 전달해야됨 style={} 에 주면됨

        //CSS파일에 먹이고 싶다면,
        //CSS파일하나만들자. style.css라고 새파일 하나 만들어주고,
        //버튼에 style다지워주고 맨위에 임포트해주자.
        

    }



  return (
       
        <form onSubmit={send}>
            <input type='text' id='nickName' name='nick'/> 
            <button type='submit'>확인</button>           
        </form>

  );
}

export default SubmitEvent