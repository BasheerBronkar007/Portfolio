import React from 'react'


import '../../../styles/About/Route/Graduation.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'

const Graduation = () => {
    return (
        <>
            <div className="graduation">
                <div className="graduation__container">
                    <div className="graduation__header">
                        <h2 className="graduation__number">0<span>4</span></h2>
                        <h1 data-aos='fade-down' data-aos-offset="0">E<span>ngineering</span>.</h1>
                    </div>

                    <div className="graduation__description">
                        <h1>Anjuman - I - Kalsekar Technical Campus</h1>
                        <h2><FontAwesomeIcon icon={faCalendarDays} className="internships__calendar" />&nbsp;&nbsp;JUL/2023 - JUN/2026 - PRESENT</h2>
                        <p>Currently Pursuing B.Tech in Computer Science Engineering from 'AIKTC'.</p>
                    </div>
                    <div className="graduation__description">
                        <h1>Anjuman - I - Kalsekar Polytechnic</h1>
                        <h2><FontAwesomeIcon icon={faCalendarDays} className="internships__calendar" />&nbsp;&nbsp;JUL/2020 - AUG/2023</h2>
                        <p> Pursued Diploma in Computer Science Engineering from 'AI ARKP'.</p>
                        <p> AGGREGATE : 83.20%</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Graduation