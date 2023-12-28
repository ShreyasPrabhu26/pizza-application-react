import React from 'react'
import { Link } from 'react-router-dom'
import SearchOrder from '../feautures/order/SearchOrder'
import Username from "../feautures/users/Username"

const Header = () => {
    return (
        <header className='bg-yellow-500 uppercase px-4 border-b border-stone-200 py-3 sm:px-6 flex items-center justify-between'>
            <Link to={"/"} className='tracking-[5px]'>Zomato Pizza Co.</Link>
            <SearchOrder />
            <Username />
        </header>
    )
}

export default Header