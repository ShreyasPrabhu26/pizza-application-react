import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ children, disabled, to, type }) => {

    const base = "text-sm bg-yellow-400 uppercase font-semibold text-stone-800 inline-block tracking-wide rounded-full hover:bg-yellow-300 transition-colors duration-100 focus:outline-none focus:ring focus:ring-yellow-300 focus:bg-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed";

    const styles = {
        primary: base + "px-4 py-3 sm:px-6 sm:py-4 md:py-4",

        small: base + "px-4 py-2 md:px-5 md:py-2.5 text-xs",

        secoundary: "text-sm border-2 border-stone-300 bg-transparent uppercase font-semibold text-stone-400 inline-block tracking-wide rounded-full hover:bg-stone-300 hover:text-stone-800 focus:ring-stone-200 transition-colors duration-100 focus:outline-none  focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 sm:px-6 sm:py-4 md:py-3.5"
    }


    if (to) {
        return <Link
            to={to}
            className={styles[type]}>
            {children}
        </Link>
    }
    return (
        <button
            disabled={disabled}
            className={styles[type]}>
            {children}
        </button>
    )
}

export default Button