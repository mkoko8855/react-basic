//rafce


import React from 'react'

const ClickEvent = () => {

  const greeting = e => {
    alert('안뇽안뇽');
  }


  const changeBox = e => {
    const $box = document.querySelector('.box');
    $box.style.background = 'skyblue';
    $box.style.width = '200px';
    $box.style.height = '200px';   
  }



  return (
    <>
        <button id='btn1' onClick={ () => alert('클릭잘했어!') } >클릭해봐~</button> {/*방법1*/}
        <button id='btn2' onClick={ greeting }>클릭2</button> {/*방법2*/}
        <button id='btn3' onMouseOver={ changeBox }>클릭3</button> {/*마우스를 올린다면.*/ }


        <div class="box"></div> {/*그러나 자동완성으로, <div className='box'></div> 라고 하는 것이 정석이다. 이렇게 사용하는 것을 권장한다.*/}
    
    
    </>
  )
}

export default ClickEvent;