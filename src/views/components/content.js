import React from 'react';
import '../../tailwind.css'
import { Link } from 'react-router-dom';

function Content({link,img,title,subtitle,button,option}) {
  return (
    <div class="h-24 w-full flex flex-row"> 
        <div class="flex item-right w-1/4">
  {typeof(img)=="string" ?  <img class="my-auto h-16 sm:h-16 md:h-24 lg:h-24 xl:h-24" src={img}></img> : <p>{img}</p>}
        </div>
        <div class="flex flex-col my-auto w-2/4">
        <h1 class="pl-3 md:pl-1 lg:pl-1 xl:pl-1 text-xl">{title}</h1>
          <h1 class="pl-3 md:pl-1 lg:pl-1 xl:pl-1">{subtitle}</h1>
        </div>
        <div class="my-auto w-1/4">
  {option ? <Link style={{display:"block"}} to={link} class="rounded-lg w-20 text-center py-1 bg-white h-8">{button}</Link> : 
                <p class="w-20">{button}</p>
            }
        </div>
    </div>
  );
}

export default Content;
