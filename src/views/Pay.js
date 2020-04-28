import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import '.././tailwind.css'
import { Link } from 'react-router-dom';
import api from './api/api';

function Pay() {
    const name = useSelector(state => state.set)
    const [ money , setmoney ] = useState(1);
    const add = () => {
        api.post('/fine/pay',{값:money,이름:name[0]["name"]}).then(response => console.log(response)).catch(error=>console.log(error.response));
    };
  return (
    <div class="h-screen bg-white-100 flex flex-col">
        <h1 class="mx-auto text-2xl py-8">지불한 금액을 적어주세요</h1>
        <input class="w-1/2 mx-auto h-16 text-2xl mb-4 border-2 text-center" type="number" name="number" onChange={(e) => {setmoney(e.target.value)}}/>
        <Link style={{display:"block"}} class="bg-gray-200 mx-auto rounded-lg h-12 w-3/4 text-2xl text-center py-2" to="/" onClick={add}>{money+"원"} 납부         신청</Link>
    </div>
  )
}

export default Pay;
