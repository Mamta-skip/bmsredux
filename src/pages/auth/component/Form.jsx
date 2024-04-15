import React from 'react'
import { Link } from 'react-router-dom'

const Form = ({type}) => {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
	<div className="relative py-3 sm:max-w-xl sm:mx-auto">
		<div
			className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
		</div>
		<div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
			<div className="max-w-md mx-auto">
				<div>
					{(type=='register')?
                     <h1 className="text-2xl font-semibold">Register here to continuee..</h1>:
                     <h1 className="text-2xl font-semibold">Login here to continuee..</h1>}
				</div>
				<div className="divide-y divide-gray-200">
					<div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
						<div className="relative">
							<input autocomplete="off" id="email" name="email" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
							<label for="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
						</div>
                       {type=='register'&&(
                         <div className="relative">
                         <input autocomplete="off" id="email" name="email" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
                         <label for="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Username</label>
                     </div>
                       )}
						<div className="relative ">
							<input autocomplete="off" id="password" name="password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
							<label for="password" className="absolute left-0 -top-3.5  text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
						</div>
						{type=='register' ?
						<Link to={'/login'} className="relative">
						<button className="bg-blue-500 text-white rounded-md px-2 py-1 mt-4">Register</button>
					</Link>:
					<Link to={'/'} className="relative">
					<button className="bg-blue-500 text-white rounded-md px-2 py-1 mt-4">Login</button>
				</Link>}
						{type=='register'?(
							<div className='text-center text-sm text-blue-500'>
							<p>
							Alreday  have an account?
						</p>
						<Link to={'/login'}>Login here.</Link>
						</div>
						):
						<div className='text-center text-sm text-blue-500'>
							<p>
							Haven't Account?
						</p>
						<Link to={'/register'}>Register here to continuee.</Link>
						</div>
						}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
  )
}

export default Form
