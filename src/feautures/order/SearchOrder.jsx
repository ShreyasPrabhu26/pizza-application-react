import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SearchOrder = () => {
    const [query, SetQuery] = useState("");
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        if (!query) return;
        navigate(`/order/${query}`)
        SetQuery("");
    }

    return (
        <form onSubmit={handleSubmit}>

            <input
                type="text"
                placeholder='Search Order'
                value={query}
                onChange={e => SetQuery(e.target.value)}
                className='rounded-full px-4 py-2 text-sm placeholder:text-stone-400 w-28  sm:focus:w-72 sm:w-72 transition-all duration-300 focus:outline-none focus:ring-yellow-500 focus:ring-opacity-50'
            />
        </form>
    )
}

export default SearchOrder