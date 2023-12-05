import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit'

const Footer = () => (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
        <section className='d-flex justify-content-center justify-content-lg-center p-4 border-bottom'>
            <div className='me-lg-5'>
                <span>Get connected with me on social networks:</span>
            </div>

            <div className='d-flex justify-content-center'>
                <a href='https://twitter.com/flimits' target="_blank" className='me-4 text-reset'>
                    <MDBIcon fab icon="twitter" />
                </a>
                <a href='mailto:flimits@gmail.com' className='me-4 text-reset'>
                    <MDBIcon fab icon="google" />
                </a>
                <a href='https://linkedin.com/in/jason-savoie' target="_blank" className='me-4 text-reset'>
                    <MDBIcon fab icon="linkedin" />
                </a>
                <a href='https://github.com/flimits' target="_blank" className='me-4 text-reset'>
                    <MDBIcon fab icon="github" />
                </a>

            </div>
        </section>

        <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
            © 2023 Copyright:
            <a className='text-reset fw-bold' href='https://github.com/flimits/portfolio-de-react'>
                Jason Savoie
            </a>
        </div>
    </MDBFooter>
);

export default Footer;