import React, { useState } from 'react'
import SearchContainer from './SearchContainer'
import Select from './Select'
import CardContainer from './CardContainer'


const MainContainer = () => {
  const [query,setQuery] = useState('')
  const [isRegionQuery,setIsRegionQuery] = useState(false)
  

  return (
    <div className='px-12 dark:text-[#fff] flex flex-col gap-4 sm:px-28 py-32 w-full mx-auto max-w-screen-2xl'>
        <div className='flex justify-between sm:flex-row gap-4 flex-col'>
        <SearchContainer setIsRegionQuery={setIsRegionQuery} setQuery = {setQuery} />
        <Select  setQuery = {setQuery} setIsRegionQuery={setIsRegionQuery}/>
        </div>
        <CardContainer isRegionQuery = {isRegionQuery} query = {query} />
    </div>
  )
}

export default MainContainer