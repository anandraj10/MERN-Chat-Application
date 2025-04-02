import React, { useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import useConversation from '../../zustand/useConversation';
import useGetConversations from '../../hooks/useGetConversations';
import toast from "react-hot-toast";

const SearchInput = () => {

    const [search, setSearch] = useState("");
    const { setSelectedConversation } = useConversation();
    const { conversations } = useGetConversations();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!search)return;

        if(search.length <3)return toast.error("Search term must be at least 3 characters long");

        const conversation=conversations.find((c)=>c.fullname.toLowerCase().includes(search.toLowerCase()));

        if(conversation){
            setSelectedConversation(conversation);
            setSearch("");
        }else{
            toast.error("No such user found!");
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className='flex items-center gap-2 mt-3'>
                <input type="text" placeholder='Search...' className='input input-bordered rounded-full'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)} />

                <button className='btn btn-circle text-white'>
                    <IoSearchSharp className='w-6 h-5 outline-none' />
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