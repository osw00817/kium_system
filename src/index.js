import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import {BrowserRouter  , Route } from 'react-router-dom';
import {Tab,Nav} from './views/components'
import {Main,Set,Money,Pay,Manage,Rank} from './views/';
import * as serviceWorker from './serviceWorker';
import { Provider, useSelector } from 'react-redux';
import allReducers from './reducers';
import { createStore } from 'redux';
import './tailwind.css'


const store = createStore(allReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


function App() {
    const set = useSelector(state => state.set);
    const name = JSON.stringify(set[0]);
    let check = name !== undefined ? true : false;
    console.log(check);
    return(
        <BrowserRouter>
            <div class="max-w-screen-sm mx-auto">
                <Nav/>
                {check ? <Route exact path="/" component={Main} /> : <Route path="/" component={Set} />}
                {check ? <Route path="/money_add" component={Money} /> : "" }
                {check ? <Route path="/pay" component={Pay} /> : null} 
                {check ? <Route path="/manage" component={Manage} /> : null} 
                {check ? <Route path="/rank" component={Rank} /> : null} 
                <Tab />
            </div>
        </BrowserRouter>
    )
}

ReactDOM.render( <Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
