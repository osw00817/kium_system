import React from 'react';
import '../../tailwind.css'
import { Link } from 'react-router-dom';

function Tab() {
  return (
    <div class="bottom-0 border-t-2 bg-white flex flex-row inset-x-0 h-12 fixed max-w-screen-sm mx-auto">
            <div class="w-1/3 text-center">
                <Link to="/"><img class="h-full py-1 m-auto" src="https://cdn.discordapp.com/attachments/540167366730842143/697629772481822762/unknown.png"></img></Link>
            </div>
            <div class="h-full w-1/3  text-center">
              <Link to="manage"><img class="h-full py-1 m-auto" src="https://image.flaticon.com/icons/svg/639/639365.svg"></img></Link>
            </div>
            <div class="h-full w-1/3 text-center">
              <Link to="/rank"><img class="h-full py-1 m-auto" src="https://image.flaticon.com/icons/svg/1603/1603847.svg"></img></Link>
            </div>
    </div>
  );
}

export default Tab;
