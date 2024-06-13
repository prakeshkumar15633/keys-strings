import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import img1 from '../../Assets/img1.png';
import img2 from '../../Assets/img2.png';
import img3 from '../../Assets/img3.png';
import img4 from '../../Assets/img4.png';

function Home() {
    return (
        <div className="home-section container-fluid py-5 bg-light">
            <div className="row align-items-center mb-5 px-4">
                <div className="col-lg-6 col-md-12 text-center mb-4 mb-lg-0">
                    <img 
                        src={img1} 
                        alt="Musician Playing Guitar" 
                        className="img-fluid rounded shadow-lg" 
                        style={{ maxHeight: '500px', objectFit: 'cover' }}
                    />
                </div>
                <div className="col-lg-6 col-md-12 text-center text-lg-start px-4">
                    <h1 className="display-6 fw-bold mb-3">Unleash the Artistry of Our Musician</h1>
                    <p className="lead mb-4 text-muted">
                        From soulful ballads to upbeat melodies, our musician captivates audiences 
                        with a diverse repertoire that showcases their exceptional musical talent.
                    </p>
                    <p className="lead mb-4 text-muted">
                        Witness the virtuosity of our musician's performances as they blend intricate guitar work with expressive vocal prowess. Their music transcends genres and brings an unparalleled richness to every note.
                    </p>
                    <p className="lead mb-4 text-muted">
                        Dive into the enchanting world of melodies and harmonies created by our artist, and let their music take you on a journey of emotion and imagination.
                    </p>
                    <div className="d-flex justify-content-center justify-content-lg-start gap-3">
                        <a href="gallery" className="btn btn-dark btn-sm rounded-pill">
                            Explore the World of Our Musician
                        </a>
                    </div>
                </div>
            </div>
            <div className="row align-items-center px-4">
                <div className="col-lg-8 col-md-12 text-center text-lg-start px-4">
                    <h2 className="display-6 fw-bold mb-3 mt-5">Elevate Your Senses  and  Immerse Yourself in the Captivating World of Music</h2>
                    <h3 className="fw-bold mb-3">Discover the Virtuosity of Our Musician</h3>
                    <p className="lead mb-4 text-muted">
                        Prepare to be transported by the emotive performances of our musician.
                    </p>
                    <div className="d-flex justify-content-center justify-content-lg-start gap-3 mb-4">
                        <div className="col-md-4">
                            <img 
                                src={img2} 
                                alt="Musician Playing Guitar" 
                                className="img-fluid rounded shadow-lg" 
                                style={{ maxHeight: '150px', objectFit: 'cover' }}
                            />
                        </div>
                        <div className="col-md-4">
                            <img 
                                src={img3} 
                                alt="Musician at Piano" 
                                className="img-fluid rounded shadow-lg" 
                                style={{ maxHeight: '150px', objectFit: 'cover' }}
                            />
                        </div>
                        <div className="col-md-4">
                            <img 
                                src={img4} 
                                alt="Musician with Guitar" 
                                className="img-fluid rounded shadow-lg" 
                                style={{ maxHeight: '150px', objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                    <div className="d-flex justify-content-center justify-content-lg-start">
                        <a href="gallery" className="btn btn-dark btn-sm rounded-pill">
                            Witness the Captivating Artistry of Our Musician
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-12 text-center mb-4 mb-lg-0">
                    <img 
                        src={img2} 
                        alt="Musician" 
                        className="img-fluid rounded shadow-lg" 
                        style={{ maxHeight: '500px', objectFit: 'cover' }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
