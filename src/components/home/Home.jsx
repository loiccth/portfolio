import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Container, Modal, Row } from 'react-bootstrap'
import Typewriter from 'typewriter-effect'
import './Home.css'

const Home = () => {
    const [show, setShow] = React.useState(false)


    return (
        <div className='home d-flex align-items-center'>
            <Container className='bg-circles'>
                <div className='circle-1'></div>
                <div className='circle-2'></div>
                <div className='circle-3'></div>
                <div className='circle-4'></div>
            </Container>
            <Container className='glass-container'>
                <Row className='home-row align-items-center'>
                    <Col className='intro'>
                        <p>Hello, I'm</p>
                        {/* <h1>Loïc Chung Tai Him</h1> */}
                        <Typewriter
                            options={{
                                strings: ['Loïc Chung Tai Him'],
                                autoStart: true,
                                loop: true
                            }}
                        />
                        <h2>Software Engineer</h2>
                        <Link to='/about' className='intro-link'>
                            <button className='intro-btn'>more about me</button>
                        </Link>
                        <Link to='portfolio' className='intro-link'>
                            <button className='intro-btn'>portfolio</button>
                        </Link>
                        <button className='intro-link intro-btn' onClick={() => setShow(true)}>contact</button>
                    </Col>
                    <Col>
                        foto ici xd
                    </Col>
                </Row>
            </Container>

            <Modal
                show={show}
                onHide={() => setShow(false)}
                centered
                backdropClassName='modal-background'
                contentClassName='modal-container'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Test</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    hello world
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Home