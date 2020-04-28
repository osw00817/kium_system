import React, { useState, Fragment, useEffect } from 'react';
import {useSelector} from 'react-redux';
import '.././tailwind.css'
import { Link, Switch } from 'react-router-dom';
import api from './api/api';
import {BrowserRouter  , Route } from 'react-router-dom';

function 접근권한이없습니다() {
  return (
   <div class="w-full h-64 w-full flex flex-col">
        <p><img class="mx-auto h-40 mt-24" src="https://image.flaticon.com/icons/svg/2345/2345337.svg"></img></p>
        <h1 class="text-2xl w-30 mx-auto mt-20">401 권한 없음</h1>
   </div>
  )
}

function List() {
  const [ info , setinfo ] = useState([]);
  useEffect(() => {
    api("/fine/pay_list").then(response => setinfo(response.data))
  },[]);
  return (
    <div>
      {info.map(x=>
        <Link style={{display:"block"}} class="mx-auto h-16 w-5/6 bg-gray-300 flex flex-row my-4" to={`/manage/${x.id}`}>
          <p class="py-auto">{x.name}</p>
            <p class="py-auto">{x.date}</p>
        </Link>
      )}
   </div>
  )
}
//
function Allow({match}) {
  const [ info , setinfo ] = useState("");
  const post = (result) => {
    api.post('/fine/ok',{id:info.id,값:info.money,이름:info.name,result}).then(response => console.log(response)).catch(error=>console.log(error.response));
  }
  useEffect(() => {
    api(`/fine/pay_list?id=${match.params.id}`).then(response => setinfo(response.data[0]))
  },[]);
  return (
    <div>
      <p class="text-center pt-16 text-xl text-bold">{info.name}님께서 {info.money}원을 내셧습니까?</p>
      <div class="mx-auto flex flex-row mt-24">
      <div class="w-1/2 h-12">
        <Link style={{display:"block"}} class="mx-auto h-12 w-1/2 bg-blue-300 text-center" to="/manage" onClick={() => post(true)}>승인
        </Link>
      </div>
      <div class="w-1/2 h-12">
        <Link style={{display:"block"}} class="mx-auto h-12 w-1/2 bg-red-300 text-center" to="/manage" onClick={() => post(false)}>불허</Link>
      </div>
      </div>
   </div>
  )
}

function Manage() {
    const name = useSelector(state => state.set)
    let check = (JSON.stringify(name[0]["name"]) == `"오승원"`) ? true : false;
    return (
      <Fragment>
        {check ? <BrowserRouter>
         <Switch>
           <Route exact path="/manage" component={List}></Route>
           <Route path="/manage/:id" component={Allow}></Route>
         </Switch>
       </BrowserRouter> :  <접근권한이없습니다 />}
      </Fragment>
  )
}

export default Manage;
