import React from 'react'
import InputBox from '../atoms/inputs/InputBox'

const SearchBar = ({value,onChange,className,crossButtonRequired=false,onClickCross}) => {
  return (
    <div className='inline-flex items-center border-2 rounded-3xl border-zinc-500 '>
       <InputBox
              type="text"
              id="search-bar"
              placeholder="Search"
              value={value}
              onChange={onChange}
              className={`outline-none border-0 focus:outline-none focus:border-0 ${className}`}
            />
            { crossButtonRequired? <span onClick={onClickCross}className="material-symbols-outlined text-gray-100 pr-2">close
</span>:null}
           

    </div>
  )
}

export default SearchBar
