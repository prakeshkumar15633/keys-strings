import React from 'react'
import { useNavigate } from 'react-router-dom'
import img1 from '../../Assets/About Us/img1.png'
import img2 from '../../Assets/About Us/img2.png'
import img3 from '../../Assets/About Us/img3.png'
import img4 from '../../Assets/About Us/img4.png'
import img5 from '../../Assets/About Us/img5.png'
import img6 from '../../Assets/About Us/img6.png'
import img7 from '../../Assets/About Us/img7.png'
import img8 from '../../Assets/About Us/img8.png'
import './AboutUs.css'

function AboutUs() {
    let navigate = useNavigate()
    return (
        <div style={{ backgroundColor: '#FFF7E6' }}>
            <div className='row py-5 mx-5'>
                <div className="col-7">
                    <h1 className='heading fw-lighter text-center' style={{ fontSize: '4rem' }}>Meet Our Talented Instructors</h1>
                    <p className='text-secondary'>We are a team of passionate musicians dedicated to sharing our love of music with aspiring guitarists and pianists. With years of experience and a deep understanding of music theory and performance, we've helped countless students of all ages and skill levels unlock their potential.</p>
                    <button className='btn btn-dark' onClick={() => { navigate('/contactus') }} style={{ paddingLeft: '20px', paddingRight: '20px' }}>Discover Your Musical Journey</button>
                </div>
                <div className='col-5'>
                    <img className='d-block mx-auto' src={img1} style={{ height: '65vh' }} />
                </div>
            </div>
            <div className="row py-5 mx-5">
                <div className="col">
                    <h1 className='heading fw-lighter text-center' style={{ fontSize: '4rem' }}>Unlock Your Musical Potential With Us</h1>
                    <div className='m-4 p-4 bg-dark text-white rounded-3'>
                        <p>We Are Passionate Musicians</p>
                        <h2 className='heading text-center' style={{ fontSize: '3rem' }}><p>Dedicated to </p><p>Sharing Our Skill</p></h2>
                        <p>At our music school, we believe that everyone has the ability to become a skilled musician. Our experienced instructors are committed to guiding you through a personalized learning journey</p>
                        <p>Unlock Your Musical Potential Today</p>
                    </div>
                </div>
                <div className="col row">
                    <div className="col">
                        <img className='rounded-2' src={img2} style={{ width: '100%' }} />
                    </div>
                    <div className="col">
                        <div className='bg-dark text-white p-3 rounded-2'>
                            <h3 className='heading'>Inspire Your Musical</h3>
                            <p>Embrace the power of music</p>
                        </div>
                        <div className='bg-white p-3'>
                            <p>Unlock Your Musical Potential</p>
                            <h3 className='heading'>Discover Your</h3>
                            <p>At our music school, we understand that every student is unique, with their own learning style, goals, and aspirations. That's why we take a personalized approach to teaching</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-white p-5' style={{ backgroundColor: '#1B0951' }}>
                <div className="col-8" style={{ marginTop: '5rem', marginBottom: '5rem' }}>
                    <h1 className='heading' style={{ fontSize: '4rem' }}>Embark on Your Transformation</h1>
                    <p>Our music school has been inspiring and empowering aspiring musicians for over a decade. Founded by a team of passionate musicians, we have dedicated ourselves to creating a nurturing and supportive environment where students of all ages and skill levels can unlock their musical potential</p>
                    <p>Unlock Your Musical Potential Today</p>
                </div>
                <div style={{ marginTop: '5rem', marginBottom: '5rem' }}>
                    <h4>Discover Yout Musical Passion</h4>
                    <p>Embrace the power<br />of music at Our studio</p>
                </div>
            </div>
            <div className="row py-5 mx-5">
                <div className="col">
                    <h1 className='heading'>Unleash Your Musical</h1>
                    <div className='d-flex'>
                        <img className='rounded-circle' src={img3} style={{ width: '4.8rem', marginRight: '1rem' }} />
                        <p className='m-1' style={{ width: 'calc(80% - 5.8rem)' }}>Our experienced instructors are not only skilled musicians but also dedicated educators who are passionate about</p>
                    </div>
                    <br /><br />
                    <p>At our music school, we believe that every student has the potential to become a talented musician. Our personalized approach to teaching, combined with our expertise in music theory, performance, and pedagogy, allows us to guide each student on a transformative</p>
                    <br /><br />
                    <p>At our music school, we pride ourselves on our ability to provide a truly unique and enriching learning experience for our students. Our team of experienced and passionate instructors is dedicated to helping you unlock your musical potential, whether you're interested in mastering the guitar</p>
                    <br /><br />
                    <p>Explore Your Musical Talents</p>
                    <p>Discover Your Passion for Music at Our Acclaimed School</p>
                    <p>Unlock Your Musical Potential with Our Experienced Instructors</p>
                    <br /><br />
                    <p>At our music school, we believe that every student has the ability to become a skilled and confident musician. Our personalized approach to teaching, combined with our deep understanding of music theory and performance</p>
                    <br /><br />
                    <p>Our team of passionate and experienced instructors are committed to guiding you on a transformative journey of self-discovery and artistic growth</p>
                    <br /><br />
                    <p>Discover Your Musical Passion</p>
                    <p>Embrace the power of music</p>
                </div>
                <div className="col">
                    <img src={img4} style={{ width: '60%' }} />
                    <div className="row text-white p-3" style={{ backgroundColor: '#081626' }}>
                        <div className="col-7">
                            <h2 className='heading'>Unleash Your Potential</h2>
                            <p>Our music school has been a beacon of artistic excellence for over a decade, helping countless students of all ages and skill levels discover their passion for music and reach new heights.</p>
                        </div>
                        <div className="col-3">
                            <img className='d-block mx-auto' src={img5} style={{ height: '12rem' }} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col p-2">
                            <div className="bg-white p-3 rounded-3 m-2">
                                <h5>Explore Your Musical Potential</h5>
                                <p>At our music school, we understand that every student is unique, with their own learning style, goals, and aspirations <br /><br /></p>
                            </div>
                            <div className="bg-white p-3 rounded-3 m-2">
                                <h5>Unlock Your Musical Talents</h5>
                                <p>Our team of experienced and passionate instructors are dedicated to guiding you on a transformative journey of self-discovery and artistic growth<br /><br /></p>
                            </div>
                        </div>
                        <div className="col p-2">
                            <div className="bg-white p-3 rounded-3 m-2">
                                <h5>Discover Your Musical Passion</h5>
                                <p>At our music school, we believe that the journey of becoming a musician is not just about mastering skills, but also about cultivating a deep appreciation.</p>
                            </div>
                            <div className="bg-white p-3 rounded-3 m-2">
                                <h5>Embrace the Power of Music</h5>
                                <p>Our music school is a hub of artistic excellence, where aspiring musicians of all ages and backgrounds come together to unlock their full potential</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row py-5 mx-5'>
                <div className="col p-5">
                    <img className='d-block mx-auto' src={img6} style={{ width: '100%' }} />
                    <h3 className='heading p-2'>Discover the Joy of Music at Out Acclaimed School</h3>
                    <p>Unlock Your Music Potential with our Experienced Instructors</p>
                </div>
                <div className="col p-5">
                    <img className='d-block mx-auto' src={img7} style={{ width: '100%' }} />
                    <h3 className='heading p-2'>Embrace the Power of Music at Our Acclaimed School</h3>
                    <p>Unleash Your Musical Talents with Our Guidance</p>
                </div>
                <div className="col p-5">
                    <img className='d-block mx-auto' src={img8} style={{ width: '100%' }} />
                    <h3 className='heading p-2'>Explore the Art of Music at out Renowned School</h3>
                    <p>Cultivate Your usical Passion eith Our Support</p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs