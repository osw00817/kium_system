import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import { add } from '../actions'
import '.././tailwind.css'
import { Link } from 'react-router-dom';

function Set() {
    const [ name , setname ] = useState('');
    const onChangename = e => {
      setname(e.target.value);
    };
    const dispatch = useDispatch();
  return (
    <div class="h-screen bg-white-100 pt-8 items-center">
            <p>이름을 입력해주세요</p>
            <p class="mb-8"><input name="target" class="text-3xl py-2 text-1xl w-full" type="text" placeholder="홍길동" onChange={onChangename} /></p>
            <Link class="bg-gray-200 px-48 py-2" to="/" onClick={() => dispatch(add(name))}>이름 등록하기</Link> 
    </div>
  );
}

export default Set;
