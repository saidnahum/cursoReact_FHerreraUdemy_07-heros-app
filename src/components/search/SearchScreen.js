import queryString from 'query-string';
import { useMemo } from 'react';
//import React, { useState } from 'react'
import { useLocation } from 'react-router';
import { heroes } from '../../data/heroes'
import { useForm } from '../../hooks/useForm';
import { getHerosByName } from '../../selectors/getHerosByName';
import { HeroCard } from '../heroes/HeroCard';

export const SearchScreen = ({ history }) => {

   const location = useLocation();
   const { q = '' } = queryString.parse( location.search );
   //console.log(q);

   
   /*
   const [texto, setTexto] = useState('');

   const handleInputChange = (e) => {
      setTexto(e.target.value);
   }

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log(texto);
   }
   */

   const [ formValues, handleInputChange] = useForm({
      searchText: ''
   });

   const { searchText } = formValues;

   const heroesFiltered = useMemo(() => getHerosByName(q), [q])
   //const heroesFiltered = getHerosByName(searchText);

   const handleSearch = (e) => {
      e.preventDefault();
      history.push(`?q=${ searchText }`);
   }


   return (
      <div>
         <h1 className="text-3xl font-bold my-5 ">Search your Hero!!!</h1>
         <hr className="mb-5"/>

         <div className="grid grid-cols-12">
            <form className="flex items-baseline col-span-5" onSubmit={handleSearch}>
               <input 
                  type="text" 
                  placeholder="Find your hero"
                  className="border p-2 mr-5 rounded-md focus:outline-none"
                  name="searchText"
                  value={searchText}
                  onChange={handleInputChange}
                  autoComplete="off"
               />

               <button
                  type="submit"
                  className="p-2 rounded-md bg-blue-800 hover:bg-blue-700 text-white"
               >
                  Search
               </button>
            </form>

            <div className="col-span-7"> 
               <h1 className="text-3xl font-bold my-5 ">Results</h1>
               <hr className="mb-5"/>

               {
                  heroesFiltered.map(hero => (
                     <HeroCard key={hero.id} {...hero}/>
                     
                  ))
               }
            </div>
         </div>
      </div>
   )
}
