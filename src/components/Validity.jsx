import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import monkey from '../assets/img/monkey.svg';
import x from '../assets/img/delete.svg'
import popper from '../assets/img/party-popper.svg'

const Validity = ({ isDarkMode }) => {
    const [showModal, setShowModal] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
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
                        Sebelumnya aku mau mastiin, kamu beneran opal monyet bukan?!?!?!?!
                    </h1>
                    <div className='flex items-center justify-center p-4'>
                        <img src={monkey} className="w-20" />
                    </div>
                    <div className='flex items-center justify-center'>
                        <button className="rounded-lg mx-2 px-4 py-3 bg-red-900 transition-transform duration-300 hover:scale-110 text-white font-bold"
                            onClick={() => setShowModal(true)}>
                            bukan lah</button>
                        <button className="rounded-lg mx-2 px-4 py-3 bg-fuchsia-950 transition-transform duration-300 hover:scale-110 text-white font-bold"
                            onClick={() => setShowModal2(true)}
                        >iyain aja</button>
                    </div>
                    {showModal && (
                        <div className="fixed inset-0 flex items-center justify-center animate-fade-in">
                            <div className="bg-black opacity-50 fixed inset-0"></div>
                            <div className={`rounded-lg z-10 p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                                {/* Konten Modal */}
                                <div className='flex items-center justify-center ml-4 p-4'>
                                    <img src={x} className="w-25" />
                                </div>
                                <p>lah ngapain buka ini bjirr</p>
                                <p>ini cuma buat opal monyet doang!!!</p>
                                {/* Tombol Tutup Modal */}
                                <button
                                    className="mt-4 bg-fuchsia-950 hover:bg-red-900 text-white font-bold py-2 px-4 rounded-lg"
                                    onClick={() => setShowModal(false)}
                                >
                                    oh, oke
                                </button>
                            </div>
                        </div>
                    )}

                    {showModal2 && (
                        <div className="fixed inset-0 flex items-center justify-center animate-fade-in">
                            <div className="bg-black opacity-50 fixed inset-0"></div>
                            <div className={`rounded-lg z-10 p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                                {/* Konten Modal */}
                                <div className='flex items-center justify-center p-4'>
                                    <img src={monkey} className="w-25" />
                                </div>
                                <p>haiiii sayaaaanggg</p>
                                <p className='flex'>uhuyyy udah 23 <img src={popper} className="w-6" /></p>
                                {/* Tombol Tutup Modal */}
                                <button
                                    className="mt-4 mx-2 bg-red-900 hover:bg-fuchsia-950 text-white font-bold py-2 px-4 rounded-lg"
                                    onClick={() => setShowModal2(false)}
                                >
                                    back
                                </button>

                                <Link to={'/present'}>
                                    <button className="mt-4 mx-2 bg-fuchsia-950 hover:bg-red-900 text-white font-bold py-2 px-4 rounded-lg">okee lanjut ajaa</button>
                                </Link></div>
                        </div>
                    )}

                </div>

            </div>
        </CSSTransition>
    );
};



export default Validity;
