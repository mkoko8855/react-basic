import React from 'react'

const ChangeEvent = () => {

  const changeValue = e => {
        console.log(`value: ${e.target.value}`); //이벤트가 발생 된 곳에 밸류를 확인해보자
        
  }




  return (
    <>
        <input type='text' onChange={changeValue} />


        <select onChange={changeValue}>
            <option value={'pizza'}>피자</option>
            <option value={'chicken'}>치킨</option>
            <option value={'pasta'}>파스타</option>
        </select>
    </>
  );
}

export default ChangeEvent;