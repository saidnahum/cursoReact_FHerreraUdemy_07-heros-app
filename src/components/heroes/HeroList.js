import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {

   //const heroes = getHeroesByPublisher( publisher );
   const heroes = useMemo(() => getHeroesByPublisher( publisher ), [ publisher ])

   return (
      <div className="grid grid-cols-12 gap-5 animate__animated animate__fadeIn">
         {
            heroes.map(hero => (
               <HeroCard 
                  key={hero.id}
                  {...hero}
               >
                  
               </HeroCard>
            ))
         }
      </div>
   )
}
