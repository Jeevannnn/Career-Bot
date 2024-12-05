import React from 'react';
import '../assets/styles/EntranceExams.css'; // Ensure the correct CSS file is imported

const EntranceExams = () => {
    return (
        <div>
            {/* Primary Container */}
            <div className="container">
                <h2>Entrance Exams After 12th Grade</h2>
                <ul>
                    <li>
                        <strong>Engineering:</strong>{' '}
                        <a href="https://jeemain.nta.nic.in/" target="_blank" rel="noopener noreferrer" aria-label="JEE Main">
                            JEE Main
                        </a>,{' '}
                        <a href="https://jeeadv.ac.in/" target="_blank" rel="noopener noreferrer" aria-label="JEE Advanced">
                            JEE Advanced
                        </a>,{' '}
                        <a href="https://bitsadmission.com/" target="_blank" rel="noopener noreferrer" aria-label="BITSAT">
                            BITSAT
                        </a>,{' '}
                        <a href="https://viteee.vit.ac.in/" target="_blank" rel="noopener noreferrer" aria-label="VITEEE">
                            VITEEE
                        </a>.
                    </li>
                </ul>

                <h2>Entrance Exams After Bachelor's Degree</h2>
                <ul>
                    <li>
                        <strong>Engineering:</strong>{' '}
                        <a href="https://gate.iitb.ac.in/" target="_blank" rel="noopener noreferrer" aria-label="GATE">
                            GATE
                        </a>,{' '}
                        <a href="https://jam.iitr.ac.in/" target="_blank" rel="noopener noreferrer" aria-label="IIT JAM">
                            IIT JAM
                        </a>.
                    </li>
                </ul>

                <h2>Entrance Exams for Studying Abroad</h2>
                <h3>English Language Proficiency Tests</h3>
                <ul>
                    <li>
                        <strong>IELTS:</strong>{' '}
                        <a href="https://www.ielts.org/" target="_blank" rel="noopener noreferrer" aria-label="IELTS">
                            International English Language Testing System
                        </a>
                    </li>
                    <li>
                        <strong>TOEFL:</strong>{' '}
                        <a href="https://www.ets.org/toefl" target="_blank" rel="noopener noreferrer" aria-label="TOEFL">
                            Test of English as a Foreign Language
                        </a>
                    </li>
                </ul>
            </div>

            {/* Secondary Container */}
            <div className="container secondary">
                <h2>Popular Certifications</h2>
                <ul>
                    <li>
                        <strong>Cloud Computing:</strong>{' '}
                        <a href="https://aws.amazon.com/certification/" target="_blank" rel="noopener noreferrer" aria-label="AWS Certification">
                            AWS Certified Solutions Architect
                        </a>,{' '}
                        <a href="https://cloud.google.com/certification" target="_blank" rel="noopener noreferrer" aria-label="Google Cloud Certification">
                            Google Cloud Certified
                        </a>.
                    </li>
                    <li>
                        <strong>Programming:</strong>{' '}
                        <a href="https://www.oracle.com/certifications/" target="_blank" rel="noopener noreferrer" aria-label="Oracle Certification">
                            Oracle Certified Java Programmer
                        </a>,{' '}
                        <a href="https://www.microsoft.com/en-us/learn/certifications/" target="_blank" rel="noopener noreferrer" aria-label="Microsoft Certifications">
                            Microsoft Certified: Azure Developer Associate
                        </a>.
                    </li>
                </ul>

                <h2>Popular Standardized Tests</h2>
                <ul>
                    <li>
                        <strong>GRE:</strong>{' '}
                        <a href="https://www.ets.org/gre" target="_blank" rel="noopener noreferrer" aria-label="GRE">
                            Graduate Record Examination
                        </a>
                    </li>
                    <li>
                        <strong>GMAT:</strong>{' '}
                        <a href="https://www.mba.com/exams/gmat" target="_blank" rel="noopener noreferrer" aria-label="GMAT">
                            Graduate Management Admission Test
                        </a>
                    </li>
                    <li>
                        <strong>SAT:</strong>{' '}
                        <a href="https://satsuite.collegeboard.org/sat" target="_blank" rel="noopener noreferrer" aria-label="SAT">
                            Scholastic Assessment Test
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default EntranceExams;
