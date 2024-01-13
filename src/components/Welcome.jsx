import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import hand from '../assets/img/hand.svg'

const Welcome = () => {
    const [inProp, setInProp] = useState(false);

    useEffect(() => {
        setInProp(true);
    }, []);

    return (
        <CSSTransition
            in={inProp}
            timeout={300}
            classNames="fade"
            unmountOnExit
        >
            <div className="input-todo flex items-center justify-center h-screen ">
                <div>
                    <h1 className="text-4xl sm:text-2xl text-center font-bold flex items-center justify-center p-4">
                        Assalamu'alaikum ganteng <img src={hand} className="w-15 sm:w-12 pb-2" />
                    </h1>
                    <div className='flex items-center justify-center p-4'>
                        <p className='text-center'>aku ada sesuatu buat kamuu, ga seberapa banget sii, tapi ini khusus buat kamuu</p>
                    </div>
                    <div className='flex items-center justify-center'>
                        <Link to={'/mangea'}>
                            <button className="rounded-lg mx-2 px-4 py-3 bg-fuchsia-950 transition-transform duration-300 hover:scale-110 text-white font-bold">coba buka</button>
                        </Link>
                    </div>


                </div>

            </div>
        </CSSTransition>
    );
};



export default Welcome;
