import React from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon,
    MDBBtn
} from 'mdb-react-ui-kit';

const Footer = () => (
          <MDBFooter className='text-center text-white' style={{ backgroundColor: '#f1f1f1', position: 'fixed', bottom: 0, width: '100%' }}>

        <MDBContainer className='pt-4'>
            <section className='mb-4'>
                <MDBBtn
                    rippleColor="dark"
                    color='link'
                    floating
                    size="lg"
                    className='text-dark m-1'
                    href='#!'
                    role='button'
                >
                    <MDBIcon fab className='fab fa-facebook-f' />
                </MDBBtn>

                <MDBBtn
                    rippleColor="dark"
                    color='link'
                    floating
                    size="lg"
                    className='text-dark m-1'
                    href='#!'
                    role='button'
                >
                    <MDBIcon fab className='fa-twitter' />
                </MDBBtn>

                <MDBBtn
                    rippleColor="dark"
                    color='link'
                    floating
                    size="lg"
                    className='text-dark m-1'
                    href='#!'
                    role='button'
                >
                    <MDBIcon fab className='fa-google' />
                </MDBBtn>

                <MDBBtn
                    rippleColor="dark"
                    color='link'
                    floating
                    size="lg"
                    className='text-dark m-1'
                    href='#!'
                    role='button'
                >
                    <MDBIcon fab className='fa-instagram' />
                </MDBBtn>

                <MDBBtn
                    rippleColor="dark"
                    color='link'
                    floating
                    size="lg"
                    className='text-dark m-1'
                    href='#!'
                    role='button'
                >
                    <MDBIcon fab className='fa-linkedin' />
                </MDBBtn>

                <MDBBtn
                    rippleColor="dark"
                    color='link'
                    floating
                    size="lg"
                    className='text-dark m-1'
                    href='#!'
                    role='button'
                >
                    <MDBIcon fab className='fa-github' />
                </MDBBtn>
            </section>
        </MDBContainer>

        <div className='text-center text-dark p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            © 2023 Copyright:
            <a className='text-dark' href='https://github.com/flimits/portfolio-de-react'>
                Jason Savoie
            </a>
        </div>
    </MDBFooter>
);
export default Footer