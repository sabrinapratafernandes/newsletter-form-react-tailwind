import React, { useState } from 'react';

const Form = () => {
   


    return(
        <div className="
                text-blue-dark
                text-xs ">
         <span class="
            block 
            text-sm 
            font-medium 
            text-slate-700">
            Email address
        </span>
        <input type="email" name="email" 
            class="
                mt-1 
                px-3 
                py-2 
                bg-white 
                border 
                shadow-sm 
                border-slate-300 
                placeholder-slate-400 
                focus:outline-none 
                focus:border-sky-500 
                focus:ring-sky-500 block 
                w-full 
                rounded-md 
                sm:text-sm 
                focus:ring-1" 
            placeholder="email@company.com" />
        </div>  
    )
}

export default Form