import React from 'react';
import '../../tailwind.css'

function Title({title}) {
  return (
    <div class="h-8 xl:h-12 lg:h-12 md:h-12 w-full text-xl lg:text-2xl xl:text-2xl md:text-2xl  text-bold bold"> 
        <h1>{title}</h1>
    </div>
  );
}

export default Title;
