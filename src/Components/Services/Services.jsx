import React, { useEffect, useState } from 'react';
import './Services.css';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

function Services() {
    let path=useLocation().pathname.split('/')
    let navigate = useNavigate()
    let [f, setF] = useState(true)
    useEffect(()=>{
        if(path.includes('explore')){
            setF(false)
        }
        else{
            setF(true)
        }
    })
    return (
        <div>
        {f&&<div className="service-page">
            <main>
                <section className="hero">
                    <div className="hero-text">
                        <h1>Vintage Service for Music Enthusiasts</h1>
                        <p>
                            Welcome to our vintage-inspired music website! Discover the timeless charm of guitar and keyboard melodies that transport you back in time. Immerse yourself in the rich heritage of musical craftsmanship and explore our curated services.
                        </p>
                        <button onClick={() => {
                            navigate('explore')
                            setF(false)
                        }}>Explore Our Services</button>
                    </div>
                    <div className="hero-image">
                        <img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/the-guitar-man-shabby-chic-and-vintage-art.jpg" alt="Musician with vintage instruments" />
                    </div>
                </section>

                <section className="content">
                    <div className="content-left">
                        <div className="feature">
                            <h2>Genererativc.</h2>
                            <p>Color: Embracing the Past</p>
                            <ul>
                                <li>Nostalgic Harmonies</li>
                                <li>Preserving the Essence</li>
                                <li>Vintage-Inspired Tones</li>
                                <li>Timeless Artistry</li>
                            </ul>
                            <p>
                                Uncover the Treasures of Vintage Music: Our Services Blend the Timeless with the Modern
                            </p>
                        </div>
                    </div>
                    <div className="content-right">
                        <h3>Retro Resonance</h3>
                        <h2>Discover the Allure of Vintage-Inspired Music</h2>
                        <p>
                            Immerse Yourself in the Captivating World of Vintage-Inspired Music. Our Curated Services Blend the Timeless Charm of Guitar and Keyboard Melodies with Modern Sensibilities.
                        </p>
                        <button>Find Out More</button>
                    </div>
                </section>
            </main>
        </div >}
        {!f&&<Outlet/>}
        </div>
    );
}

export default Services;