import React, { useState, useEffect, Fragment } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {Content ,Title} from './components/index'
import api from './api/api';

function Main() {
  const name = useSelector(state => state.set); 
  return (
    <div class="h-screen bg-white-100 pt-8">
        <모인금액 />
        <돈정보 name={name[0]["name"]} />
        <지출내역/>
        <벌금내역 name={name[0]["name"]} />
    </div>
  )
}

function 모인금액() {
  const [ sum , setsum ] = useState(0);
  const [ use , setuse ] = useState(0);
  useEffect(() => {
    api("/sum").then(response => setsum(response.data[0]["SUM(총벌금)"]))
    api("/use").then(response => setuse(response.data[0]["SUM(price)"]))
  },[]);
  return (
    <div class="h-36 bg-gray-200 text-left rounded-lg w-11/12 mx-auto flex flex-row">
            <img class="my-auto h-40 md:h-48 gl:h-48 xl:h-48 py-8 w-1/2" src="https://image.flaticon.com/icons/svg/1511/1511168.svg"></img>
            <h1 class="my-auto text-2xl w-1/2 pr-4">{sum !== 0 && use !== 0 ? sum-use+"원" : "Loading"}</h1>
    </div>
  )
}

function 돈정보({name}) {
  const [ info , setinfo ] = useState('');
  useEffect(() => {
    if(name == "김유신") {
      api("/teacher").then(response => setinfo(response.data[0]));
    } else {
      api("/info?이름="+name).then(response => setinfo(response.data[0]))
    }
  },[]);
  return (
    <div class="flex flex-col my-4 h-auto w-11/12 mx-auto rounded-lg bg-gray-200 px-8 pt-6 py-6" >
      {info ? <Fragment>
      <Title title={name + "님의 돈 정보"} />
      <Content link="/money_add" img="https://cdn.discordapp.com/attachments/540167366730842143/697718923776491570/money_1.png" 
      title="벌금" subtitle={info["총벌금"]+"원"} button="벌금 추가" option="true" />
      <Content link="/pay" img="https://cdn.discordapp.com/attachments/540167366730842143/697718910115643403/money_2.png" 
      title="내지 않은 돈" subtitle={info["안낸돈"]+"원"} button="벌금 납부" option="true" />
      </Fragment> : <div>Loading</div>}
    </div>
  )
}

function 벌금내역({name}) {
  const [ reason , setreason ] = useState([]);
  useEffect(() => {
    api("/reason?이름="+name).then(response => setreason(response.data))
  },[]);
  return (
    <div class="flex flex-col my-4 h-auto w-11/12 mx-auto rounded-lg bg-gray-200 px-8 pt-6 py-6 mb-20">
      {reason ? <Fragment>
        <Title title={name + "님의 벌금 사유"} />
        {reason.map(res => <Content link="" img="https://cdn.discordapp.com/attachments/540167366730842143/697718910115643403/money_2.png" 
        title={res["money"]+"원"} subtitle={res["reason"]} button={res["date"]} option={false} /> )}
      </Fragment>:<div>Loading</div>}
    </div>
  )
}

function 지출내역({name}) {
  const [ reason , setreason ] = useState([]);
  useEffect(() => {
    api("/uselist").then(response => setreason(response.data))
  },[]);
  return (
    <div class="flex flex-col my-4 h-auto w-11/12 mx-auto rounded-lg bg-gray-200 px-8 pt-6 py-6">
      {reason ? <Fragment>
        <Title title={"벌금 지출 내역"} />
        {reason.map(res => <Content link="" img={res["picture"]} 
        title={res["price"]+"원"} subtitle={res["place"]} button={res["datetime"]} option={false} /> )}
      </Fragment>:<div>Loading</div>}
    </div>
  )
}

export default Main;
