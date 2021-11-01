import React from 'react'
import { Link } from 'react-router-dom'

export const HeroCard = ({ id, superhero, publisher, alter_ego, first_appearance, characters }) => {
   return (
      <div className="col-span-12 sm:col-span-6 lg:col-span-4">
         <div className="flex items-center p-4 bg-white border-2 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800">
            <img alt="mountain" className="w-36 rounded-md border-2 border-gray-300" src={`./assets/heroes/${id}.jpg`} />
            <div id="body" className="flex flex-col ml-5">
               <h4 id="name" className="text-xl font-semibold mb-2">{superhero}</h4>
               <p className="text-gray-800 mt-2">{ alter_ego }</p>
               {
                  (alter_ego !== characters)
                     && <p className="text-gray-800 mt-2 italic">{ characters }</p>
               }
               <p id="job" className="text-gray-500 mt-2">{first_appearance}</p>
               <Link to={`/hero/${id}`}>
                  <p className="text-blue-500 mt-5 font-bold">Más...</p>
               </Link>
            </div>
         </div>
      </div>
   )
}
