import React from 'react'
import GenderCheckbox from './GenderCheckbox'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup'

const SignUp = () => {

    const [inputs, setInput] = React.useState({
        fullname: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: ''
    })

    const handleCheckbox = (gender) => {
        setInput({ ...inputs,gender})
    }

    const {loading,signup}=useSignup()
    const handleSubmit = async (e) => {
        e.preventDefault()
        // console.log(inputs)
        await signup(inputs)
    }
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>

            <div className='w-full p-6 rounded-lg shadow-md bg-grey-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>

                <h1 className='text-3xl font-semibold text-center text-gray-100 '>SignUp
                    <span className='text-blue-500'>ChatApp</span>
                </h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text text-gray-100'> Full Name</span>
                        </label>
                        <input type='text' placeholder='Enter full name' className='w-full input input-bordered h-10' value={inputs.fullname} onChange={(e) => setInput({ ...inputs, fullname: e.target.value })} />
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text text-gray-100'>Username</span>
                        </label>
                        <input type='text' placeholder='Enter username' className='w-full input input-bordered h-10' value={inputs.username} onChange={(e) => setInput({ ...inputs, username: e.target.value })} />
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text text-gray-100'>Password</span>
                        </label>
                        <input type='password' placeholder='Enter password' className='w-full input input-bordered h-10' value={inputs.password} onChange={(e)=>setInput({...inputs,password:e.target.value})}/>
                    </div>

                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text text-gray-100'>Confirm Password</span>
                        </label>
                        <input type='password' placeholder='confirm password' className='w-full input input-bordered h-10' value={inputs.confirmPassword} onChange={(e)=>setInput({...inputs, confirmPassword:e.target.value})}/>
                    </div>

                    <GenderCheckbox onCheckboxChange={handleCheckbox} selectedGender={inputs.gender}/>

                    <Link to="/login" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-gray-100'>Already have an account?</Link>

                    <div>
                        <button className='btn btn-block btn-sm mt-2 border border-slate-700'>{
                            loading ? <span className='loading loading-spinner'></span> : 'SignUp'
                        }</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default SignUp









// starter code for sign up


// const SignUp = () => {
//     return (
//         <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>

//             <div className='w-full p-6 rounded-lg shadow-md bg-grey-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>

//                 <h1 className='text-3xl font-semibold text-center text-gray-100 '>SignUp
//                     <span className='text-blue-500'>ChatApp</span>
//                 </h1>

//                 <form >
//                     <div>
//                         <label className='label p-2'>
//                             <span className='text-base label-text text-gray-100'> Full Name</span>
//                         </label>
//                         <input type='text' placeholder='Enter full name' className='w-full input input-bordered h-10' />
//                     </div>
//                     <div>
//                         <label className='label p-2'>
//                             <span className='text-base label-text text-gray-100'>Username</span>
//                         </label>
//                         <input type='text' placeholder='Enter username' className='w-full input input-bordered h-10' />
//                     </div>
//                     <div>
//                         <label className='label p-2'>
//                             <span className='text-base label-text text-gray-100'>Password</span>
//                         </label>
//                         <input type='password' placeholder='Enter password' className='w-full input input-bordered h-10' />
//                     </div>

//                     <div>
//                         <label className='label p-2'>
//                             <span className='text-base label-text text-gray-100'>Confirm Password</span>
//                         </label>
//                         <input type='password' placeholder='confirm password' className='w-full input input-bordered h-10' />
//                     </div>

//                     <GenderCheckbox/>

//                     <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-gray-100'>Already have an account?</a>

//                     <div>
//                         <button className='btn btn-block btn-sm mt-2 '>SignUp</button>
//                     </div>
//                 </form>
//             </div>

//         </div>
//     )
// }