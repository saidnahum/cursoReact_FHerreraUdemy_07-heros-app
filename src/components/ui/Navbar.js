import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
   return (
      <nav className="bg-gray-700 py-3 text-white">
         <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center">
               <Link to="/" className="text-2xl font-bold">
                  Super Heroes
               </Link>
               <div className="ml-10 space-x-5">
                  <NavLink to="/marvel" activeClassName="text-red-400 font-bold">
                     Marvel
                  </NavLink>
                  <NavLink to="dc" activeClassName="text-red-400 font-bold">
                     DC
                  </NavLink>
                  <NavLink to="/search" activeClassName="text-red-400 font-bold">
                     <i className="fas fa-search"></i>
                  </NavLink>
               </div>
            </div>
            <div>
            <NavLink to="login" activeClassName="text-red-400 font-bold">
               Login
            </NavLink>
            </div>
         </div>
      </nav>
   )
}