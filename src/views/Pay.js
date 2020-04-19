import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import '.././tailwind.css'
import { Link } from 'react-router-dom';
import api from './api/api';

function Pay() {
    const name = useSelector(state => state.set)
    const [ money , setmoney ] = useState(1);
    const money_list = [1,2,3,4,5];
    const add = () => {
        api.post('/fine/pay',{값:money,이름:name[0]["name"]}).then(response => console.log(response)).catch(error=>console.log(error.response));
    };
  return (
    <div class="h-screen bg-white-100 flex flex-col">
        <p><img class="h-48 mx-auto mt-16" src="https://cdn.discordapp.com/attachments/532950071583440899/698043631147417630/1585831355621-2.jpg"></img></p>
        <h1 class="mx-auto text-2xl py-8">지불한 금액을 선택해주세요</h1>
            <div class="flex flex-row">
            {money_list.map(id => {
                return  <button id={id} class="bg-gray-200 h-40 w-1/5 mx-1 text-5xl flex items-center px-auto" onClick={(e) => setmoney(e.target.id)}>
                            {id}
                        </button>})}
            </div>
            <Link class="bg-gray-200 rounded-lg mx-4 h-12 w-full text-center text-3xl mt-8" to="/" onClick={add}>{money+"천원"} 납부 신청</Link>
    </div>
  )
}

export default Pay;
