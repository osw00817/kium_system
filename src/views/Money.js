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
    <div class="h-auto bg-white-100 flex flex-col">
        <h1 class="mx-auto text-2xl py-8">추가된 벌금과 사유를 입력해주세요</h1>
            <div class="flex flex-row">
            {money_list.map(id => {
                return  <button id={id} class="bg-gray-200 h-30 w-1/5 mx-1 text-5xl flex items-center px-auto" onClick={(e) => setmoney(e.target.id)}>
                            <p  id={id} style={{display:"block"}} class="m-auto p-auto" onClick={(e) => setmoney(e.target.id)}>{id}</p>
                        </button>})}
            </div>
            <select class="h-12 my-8 mx-2 border-2" name="why" onChange={(e) => {setreason(e.target.value)}}>
                <option value="숙제">숙제</option>
                <option value="시험">시험</option>
                <option value="결석(지각)">결석,지각</option>
                <option value="수업 태보 불량">수업 태보 불량</option>
                <option value="기타">기타</option>
            </select>
            <Link style={{display:"block"}} class="bg-gray-200 mx-auto rounded-lg h-12 w-3/4 text-center text-2xl" to="/" onClick={add}>{money+"천원"} 추가하기({reason})</Link>
    </div>
  )
}

export default Money;
