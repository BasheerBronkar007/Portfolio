import React from 'react'

import '../../../styles/About/Route/Experience.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'

const Experience = () => {
    return (
        <>
            <div className="experience">
                <div className="experience__container">
                    <div className="experience__header">
                        <h2 className="experience__number">0<span>2</span></h2>
                        <h1 data-aos='fade-down' data-aos-offset="0">E<span>xperience</span>.</h1>
                    </div>
                    <div className="experience__description">
                        <div className="experience__main-box">
                            <div className="experience__box">
                                <h2>Algorithm 8.0 [Hackathon] </h2>
                                <h3><FontAwesomeIcon icon={faCalendarDays} className="experience__calendar" />&nbsp; &nbsp; MAR/2024 </h3>
                                <ul>
                                    <li data-aos='fade-right' data-aos-delay='200'>
                                        <span>Contributed as a Technical Member in Hackathon </span>
                                    </li>
                                    <li data-aos='fade-right' data-aos-delay='400'>
                                        <span>Enhaced Problem solving Skills</span>
                                    </li>
                                </ul>
                            </div>

                            {/* You can put this repeated code as a child component similar to internship.js  */}
                            <div className="experience__box">
                                <h2>Smart India Hackathon </h2>
                                <h3><FontAwesomeIcon icon={faCalendarDays} className="experience__calendar" />&nbsp; &nbsp;OCT/2023</h3>
                                <ul>
                                    <li data-aos='fade-right' data-aos-delay='200' data-aos-offset="-5000">
                                        <span>Participated in SIH - National Level Hackthon</span>
                                    </li>
                                    <li data-aos='fade-right' data-aos-delay='400' data-aos-offset="-5000">
                                        <span>Implemented new user-facing features</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Experience