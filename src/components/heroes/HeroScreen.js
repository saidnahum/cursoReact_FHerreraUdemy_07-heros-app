import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router'
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = ({history}) => {

   const { heroId } = useParams();

   const hero = useMemo(() => getHeroById(heroId), [ heroId ])
   //const hero = getHeroById(heroId);

   if (!hero) {
      return <Redirect to="/" />
   }

   const handleReturn = () => {
      history.goBack();
   }

   const { superhero, publisher, alter_ego, first_appearance, characters } = hero;

   return (
      <>
         <div className={`min-w-screen min-h-screen flex items-center p-5 lg:p-10 overflow-hidden relative ${publisher === 'Marvel Comics' ? 'bg-red-500' : 'bg-blue-900'}`}>
            <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
               <div className="md:flex items-center -mx-10">
                  <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                     <div className="relative ">
                        <img src={`/assets/heroes/${heroId}.jpg`} className="w-96 relative z-10 rounded-sm shadow-xl animate__animated animate__fadeInLeft" alt="" />
                     </div>
                  </div>
                  <div className="w-full md:w-1/2 px-10 animate__animated animate__fadeIn">
                     <div className="mb-10">
                        <h1 className="font-bold uppercase text-6xl mb-5">{superhero}</h1>
                        <p className=""><span className="font-bold">Alter Ego: </span>{alter_ego}</p>
                        <p className="mt-3"><span className="font-bold">Publisher: </span>{publisher}</p>
                        <p className="mt-3"><span className="font-bold">First Appearance: </span>{first_appearance}</p>
                        <h4 className="text-3xl font-bold mt-10">Chatacters</h4>
                        <p>{characters}</p>
                        <button  
                           className={`mt-5 p-2 rounded text-white ${publisher === 'Marvel Comics' ? 'bg-red-500 hover:bg-red-400' : 'bg-blue-900 hover:bg-blue-400'}`}
                           onClick={handleReturn}
                        >
                           Return
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}
