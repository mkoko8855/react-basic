import React from 'react'
import FoodItem from './FoodItem';

const FoodList = () => {

    //나중에는 fetch를 통해 서버에서 음식 목록을 json으로 받아오겠지?
    /* 받아왔다는 가정 하에,
*/
         const food = {
    id: 327432,
    foodList : [
        {
            fName: '짜장면',
            price: 6000,
            id: 'chinese'
        },
        {
            fName: '해물파전',
            price: 12000,
            id: 'korean'
        },
        {
            fName: '가츠동',
            price: 8000,
            id: 'japanese'
        },
        {
            fName: '김치찌개',
            price: 5000,
            id: 'korean'
        },
        {
            fName: '탕수육',
            price: 20000,
            id: 'chinese'
        },

    ]
  }
    
    
    



  return (

    <ul>
        {/*문자열에도 원래 {}를 붙여줘야 FM이다.*/}


        {/*위에꺼 적었으니 아래3개 일단 주석*/}
        {/*<FoodItem foodName = {'짜장면'} price={6000} foodId='chinese' />
        <FoodItem foodName = '해물파전' price={12000} foodId='korean'/>
        <FoodItem foodName = '가츠동' price={8000} foodId='japanese'/>  
        */}
        

        {
            food.foodList.map(f => <FoodItem foodName={f.fName} price={f.price} foodId={f.id}/>)
                //맵의 역할은 배열안에 있는 값(객체)이 콜백함수의 매개변수로 하나씩 들여온다.
                //그리고 나서 처리할 내용을 적어주면 된다.

            
            /*
            출력 결과 : 
            짜장면 (6000원)
            해물파전 (12000원)
            가츠동 (8000원)
            김치찌개 (5000원)
            탕수육 (20000원)
            */


        }






    </ul>

  )
}

export default FoodList;