import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import '.././tailwind.css'
import { Link } from 'react-router-dom';
import api from './api/api';
function Money() {
    const name = useSelector(state => state.set)
    const [ money , setmoney ] = useState(1);
    const [ reason , setreason ] = useState("숙제");
    const money_list = [1,2,3,4,5];
    const add = () => {
      api.post('/fine/add',{값:money,사유:reason,이름:name[0]["name"]}).then(response => console.log(response)).catch(error=>console.log(error.response));
    };
  return (
    <div class="h-screen bg-white-100 flex flex-col">
        <p><img class="h-48 mx-auto mt-16" src="https://cdn.discordapp.com/attachments/540167366730842143/697718856034287636/money-bag_1.png"></img></p>
        <h1 class="mx-auto text-2xl py-8">추가된 벌금과 사유를 입력해주세요</h1>
            <div class="flex flex-row">
            {money_list.map(id => {
                return  <button id={id} class="bg-gray-200 h-40 w-1/5 mx-1 text-5xl flex items-center px-auto" onClick={(e) => setmoney(e.target.id)}>
                            {id}
                        </button>})}
            </div>
            <select class="h-12 my-8 mx-2 border-2" name="why" onChange={(e) => {setreason(e.target.value)}}>
                <option value="숙제">숙제</option>
                <option value="시험">시험</option>
                <option value="결석(지각)">결석,지각</option>
            </select>
            <Link class="bg-gray-200 rounded-lg mx-4 h-12 w-full text-center text-3xl" to="/" onClick={add}>{money+"천원"} 추가하기({reason})</Link>
    </div>
  )
}

export default Money;
