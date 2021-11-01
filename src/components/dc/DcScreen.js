import React from 'react';
import { HeroList } from '../heroes/HeroList';


export const DcScreen = () => {
   return (
      <div>
         <h1 className="text-3xl font bold my-3">DC Screen</h1>
         <hr className="mb-5"/>
         <HeroList publisher="DC Comics"/>
      </div>
   )
}
