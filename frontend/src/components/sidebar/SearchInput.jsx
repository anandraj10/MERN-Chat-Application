import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
const SearchInput = () => {
    return (
        <div>
            <form className='flex items-center gap-2 mt-3'>
                <input type="text" placeholder='Search...' className='input input-bordered rounded-full' />

                <button className='btn btn-circle text-white'>
                <IoSearchSharp className='w-6 h-5 outline-none'/>
                </button>

            </form>
        </div>
    )
}

export default SearchInput









//starter code for searchinput

// const SearchInput = () => {
//     return (
//         <div>
//             <form className='flex items-center gap-2 mt-3'>
//                 <input type="text" placeholder='Search...' className='input input-bordered rounded-full' />

//                 <button className='btn btn-circle text-white'>
//                 <IoSearchSharp className='w-6 h-5 outline-none'/>
//                 </button>

//             </form>
//         </div>
//     )
// }