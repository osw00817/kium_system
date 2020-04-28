import React, { useState, useEffect, Fragment } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {Content ,Title} from './components/index'
import api from './api/api';

function Rank() {
  const name = useSelector(state => state.set); 
  return (
    <div class="h-screen bg-white-100 pt-8">
        <Ranking />
    </div>
  )
}
function Ranking() {
  const [ rank , setrank ] = useState([]);
  let number = 0;
  useEffect(() => {
    api("/rank").then(response => setrank(response.data))
  },[]);
  return (
    <div class="flex flex-col h-auto w-11/12 mx-auto rounded-lg bg-gray-200 px-8 pt-6 py-6 mb-20">
        <Title title={"호구의 전당"} />
        {rank.map(user => { number += 1;
            return <div class="h-24 w-full flex flex-row"> 
                <div class="flex item-right w-1/12 text-center">
                    <h1 class="text-xl xl:text-2xl md:text-2xl lg:text-2xl text-bold my-auto">{number}</h1>
                </div>
            <div class="flex flex-row w-full my-auto">
                <img class="my-auto w-1/4 h-12 xl:h-16 md:h-16 lg:h-16" src="https://image.flaticon.com/icons/svg/527/527489.svg"></img>
                <h1 class="my-auto w-2/4 text-xl xl:text-2xl md:text-2xl lg:text-2xl text-center">{user.이름}</h1>
                <h1 class="my-auto text-xl text-bold w-full text-right">{`${user.총벌금}원`}</h1>
            </div>
        </div>})}
    </div>
  )
}

export default Rank;
