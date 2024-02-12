import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-slate-400'>
            <div className=' flex justify-between mx-auto items-center *:max-w-5xl p-4' >
                <Link to={'/'}>
                <h1 className='font-bold'>Auth</h1>
                </Link>    
                <ul className='flex gap-4 '>
                    <Link to={'/'}>
                    <li>Home</li>
                    </Link>
                    <Link to={'/about'}>
                    <li>about</li>
                    </Link>
                    
                    <Link to={'/sign-in'}>
                    <li>Signin</li>
                    </Link>

                    <li></li>
                </ul>
            </div>

        </div>
    );
};

export default Header;