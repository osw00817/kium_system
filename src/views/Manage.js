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
        <Link class="mx-auto h-16 w-full bg-gray-300 flex flex-row my-8" to={`/manage/${x.id}`}>
          <div class="w-1/6 text-center">{x.id}</div>
          <div class="w-2/3">{x.name}</div>
          <div class="w-2/4 text-right pr-8">{x.date}</div>
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
      <p>{info.name}님께서 {info.money}원을 내셧습니까?</p>
      <Link to="/manage" onClick={() => post(true)}>승인</Link>
      <Link to="/manage" onClick={() => post(false)}>불허</Link>
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
