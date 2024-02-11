import React from 'react'
import { useSelector } from 'react-redux'

function ThemeProvider({children}) {
    const {theme}=useSelector((state)=>(state.theme))
  return (
    <div className={theme}>
        <div className='bg-white text-gray-800 dark:text-gray-100 dark:bg-black'>

        {children}
        </div>
    </div>
  )
}

export default ThemeProvider