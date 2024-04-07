import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import Search from './Search';

export default function Header() {
    return (
        <div className="relative">
            <div className="flex justify-between items-center drop-shadow-md bg-dark-950 p-4">
                <MenuIcon />
                <div><h1 className='text-xl'>Lets Watch <span style={{fontSize:"1em"}}> 📺</span></h1></div>
                <div></div>
            </div>
            <div className="flex justify-center">
                    <Search />
                </div>
        </div>
    )
}
