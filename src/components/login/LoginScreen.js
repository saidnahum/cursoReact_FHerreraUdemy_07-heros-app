import React from 'react'

export const LoginScreen = ({ history }) => {

   const handleClic = () => {
      // history.push("/")
      history.replace("/")
   }

   return (
      <div className="flex items-center justify-center">
         <div className="w-full max-w-md mt-20">
            <form className="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4">
               <div
                  className="text-gray-800 text-2xl flex justify-center border-b-2 py-2 mb-4"
               >
                  Heroe's Login
               </div>
               <div className="mb-4">
                  <label
                     className="block text-gray-700 text-sm font-normal mb-2"
                     htmlFor="username"
                     autoComplete="off"
                  >
                     Email
                  </label>
                  <input
                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                     name="email"
                     v-model="form.email"
                     type="email"
                     required
                     autoFocus
                     placeholder="Email"
                  />
               </div>
               <div className="mb-6">
                  <label
                     className="block text-gray-700 text-sm font-normal mb-2"
                     htmlFor="password"
                  >
                     Password
                  </label>
                  <input
                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                     v-model="form.password"
                     type="password"
                     placeholder="Password"
                     name="password"
                     required
                     autoComplete="current-password"
                  />
               </div>
               <div className="text-center">
                  <button 
                     className="px-4 py-2 rounded text-white inline-block shadow-lg bg-blue-500 hover:bg-blue-600 focus:bg-blue-700" 
                     type="submit"
                     onClick={ handleClic }
                  >
                     Login
                  </button>
               </div>
            </form>
            <p className="text-center text-gray-500 text-xs">
               &copy;2020 Gau Corp. All rights reserved.
            </p>
         </div>
      </div>
   )
}
