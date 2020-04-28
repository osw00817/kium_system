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
            <p style={{display:"block"}} class="text-center mx-auto pb-4">이름을 입력해주세요</p>
            <input style={{display:"block"}} name="target" class="py-auto mx-auto text-3xl py-2 w-5/6 border-2 text-center" type="text" placeholder="홍길동" onChange={onChangename} />
            <Link style={{display:"block"}} class="mt-4 bg-gray-200 w-3/4 mx-auto text-center py-2" to="/" onClick={() => dispatch(add(name))}>이름 등록하기</Link> 
    </div>
  );
}

export default Set;
