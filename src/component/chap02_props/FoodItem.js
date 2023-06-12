import React from 'react'

const FoodItem = ({foodId: id, foodName: fname, price}) => {
    //console.log('props: ', props);
  return (
   // <li id={props.foodId}>{props.foodName} ({props.price}원)</li>
      <li id={id}>{fname} ({price}원)</li>

    //그러나 props를 계속 쓰는 것이 마음에 안든다.
    //구조분해할당이 기억나는가..
    //프롭스는 지우고 맨위처럼 써주자.
    //FoodId는 id라는 변수로 대체해줬다..이런식.


  )
}
;
export default FoodItem;