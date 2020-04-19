import React from 'react';
import '../../tailwind.css'
import { Link } from 'react-router-dom';

function Content({link,img,title,subtitle,button,option}) {
  return (
    <div class="h-24 w-full flex flex-row"> 
        <div class="flex item-right w-1/4">
  {typeof(img)=="string" ?  <img class="h-full p-2" src={img}></img> : <p>{img}</p>}
        </div>
        <div class="flex flex-col my-auto w-2/4">
        <h1 class="text-2xl">{title}</h1>
          <h1>{subtitle}</h1>
        </div>
        <div class="my-auto w-1/4">
  {option ? <Link to={link} class="rounded-lg w-16 bg-white h-16">{button}</Link> : 
                <p class="h-16 h-12">{button}</p>
            }
        </div>
    </div>
  );
}

export default Content;
