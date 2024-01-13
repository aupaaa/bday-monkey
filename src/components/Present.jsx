import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import ReactPlayer from 'react-player';
import gift from '../assets/img/gift.svg';
import love from '../assets/img/love.svg';
import face from '../assets/img/partying-face.svg';
import popper from '../assets/img/party-popper.svg';
import ok from '../assets/img/ok.svg';
import sound from '../assets/sound/Jamrud-SUT.mp3'
import './FadeTransition.css';

const Present = ({ isDarkMode }) => {
    const [showModal, setShowModal] = useState(false);
    const [isPlaying, setPlaying] = useState(false);
    const [inProp, setInProp] = useState(false);

    useEffect(() => {
        setInProp(true);
    }, []);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    useEffect(() => {
        if (showModal) {
            setPlaying(true);
        }
    }, [showModal]);

    useEffect(() => {
        return () => {
            setPlaying(false);
        };
    }, []);

    return (
        <CSSTransition
            in={inProp}
            timeout={300}
            classNames="fade"
            unmountOnExit
        >
            <div className="input-todo flex items-center justify-center h-screen">
                <div>
                    <h1 className="text-4xl sm:text-2xl text-center font-bold p-4">
                        Selamat ulang tahun yaaaa sayangg
                        <span className="inline-block align-middle">
                            <img src={face} className="w-12" alt="Emoji" />
                        </span>
                    </h1>
                    <div className="flex items-center justify-center p-4 m-6">
                        <img
                            src={gift}
                            onClick={openModal}
                            className="w-35 transition-transform duration-300 hover:scale-110"
                        />
                    </div>
                    <div className="flex items-center justify-center m-6">
                        <h4 className="text-center">
                            niiii, aku ada special gift buat kamu byyy, klik ajaaa
                        </h4>
                    </div>
                    {showModal && (
                        <div className="fixed inset-0 flex items-center justify-center animate-fade-in">
                            <div className="bg-black opacity-50 fixed inset-0"></div>
                            <div
                                className={`rounded-lg z-10 p-6 mx-50 sm:mx-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'
                                    }`}
                            >
                                {/* Konten Modal */}
                                <div className="flex items-center justify-center ml-4 p-4">
                                    <img src={face} className="w-20" />{' '}
                                    <img src={popper} className="w-20" />
                                </div>
                                <p>-14 Januari 2024-</p>
                                <p>
                                    Selamat ulang tahun yaa byy, udah 23 nih.. semoga tahun ini
                                    apa yang kamu cita-citakan dan kamu usahakan bisa terwujud,
                                    semoga kamu juga sehat selalu, diberi rezeki yang melimpah dan
                                    urusannya diperlancar semua, Aamiin. Kamu jaga kesehatan yaa byy
                                    disana, jangan lupa makan, ibadahnya jangan lupa diperbaiki
                                    yaaa..
                                </p>
                                <p>
                                    Aku minta maaf kalo ternyata aku kurang buat kamu, dan aku juga
                                    bukan tipe kamu sampe kamu gabisa bersyukur punya aku, aku minta
                                    maaf juga cuma bisa ngasi ini ke kamu, semoga kamu seneng yaa
                                </p>
                                <p>-</p>
                                <p>Selamat ulang tahun byy</p>
                                <p>
                                    Lovyou
                                    <span className="inline-block align-middle">
                                        <img src={love} className="w-5" alt="Emoji" />
                                    </span>
                                </p>
                                <p>-aufa-</p>
                                {/* Tombol Tutup Modal */}
                                <div className="flex flex-row-reverse">
                                    <img
                                        src={ok}
                                        onClick={closeModal}
                                        className="w-12 cursor-pointer transition-transform duration-300 hover:scale-110"
                                        alt="OK Icon"
                                    />
                                </div>
                                {/* ReactPlayer dengan auto play */}
                                <ReactPlayer
                                    url={sound}
                                    playing={isPlaying}
                                    controls
                                    style={{ display: 'none' }}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </CSSTransition>
    );
};

export default Present;

