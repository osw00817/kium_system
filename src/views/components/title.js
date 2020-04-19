import React from 'react';
import '../../tailwind.css'

function Title({title}) {
  return (
    <div class="h-12 w-full text-2xl text-bold bold"> 
        <h1>{title}</h1>
    </div>
  );
}

export default Title;
