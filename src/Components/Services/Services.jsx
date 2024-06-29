import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

function Services() {
    let path = useLocation().pathname.split('/');
    let navigate = useNavigate();
    let [f, setF] = useState(true);

    useEffect(() => {
        if (path.includes('explore')) {
            setF(false);
        } else {
            setF(true);
        }
    }, [path]);

    return (
        <div>
            {f && (
                <div className=" -page">
                    <main>
                        <section className="p-5 row align-items-center" style={{ backgroundColor: '#BDBDBD' }}>
                            <div className="col-md-6 hero-text">
                                <h1>Vintage Service for Music Enthusiasts</h1>
                                <p>
                                    Welcome into our best vintage-inspired music website! Discover the timeless charm of guitar and keyboard melodies that transport you back in time. Immerse yourself in the rich heritage of musical craftsmanship.
                                </p>
                                <button className="btn btn-dark mb-3 fw-bold text-center" onClick={() => {
                                    navigate('explore');
                                    setF(false);
                                }}>Explore Our Services</button>
                            </div>
                            <div className="col-md-6 hero-image">
                                <img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/the-guitar-man-shabby-chic-and-vintage-art.jpg" alt="Musician with vintage instruments" className="img-fluid rounded" />
                            </div>
                        </section>

                        
                    </main>
                </div>
            )}
            {!f && <Outlet />}
            <div className="d-flex flex-column align-items-center bg-black text-white" style={{ minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>

                <div className="container text-center py-5">
                    <h1>Discover the Joy of Music</h1>
                    <p>Welcome to our music website,where we offer guitar and piano lessons for beginners and advanced musicians</p>
                
                    <img src="https://c4.wallpaperflare.com/wallpaper/257/116/964/light-strings-music-sound-wallpaper-preview.jpg" alt="Music" className="img-fluid rounded mt-3" />
                </div>

                <div className="container py-5 bg-dark">
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <div className="card bg-dark text-white h-10">
                                <img src="https://c1.wallpaperflare.com/preview/87/872/945/guitar-amplifier-marshall-rock.jpg" alt="Guitar" className="card-img-top" />
                                <div className="card-body">
                                    <h2 className="card-title fw-bold text-center">Guitar Lessons</h2>
                                    <p className="card-text fw-bold text-center">Explore our guitar lessons.</p>
                                </div>
                            </div>
                            <div className="card bg-dark text-white h-10">
                                <img src="https://usa.yamaha.com/files/keyboardsindex_6aecfb3aa62a2ecfca1204dea45918da.jpg?impolicy=resize&imwid=4648&imhei=2848" alt="Guitar" className="card-img-top" />
                                <div className="card-body">
                                    <h2 className="card-title fw-bold text-center">Keyboard Lessons</h2>
                                    <p className="card-text fw-bold text-center">Explore our Keyboard lessons.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="card bg-dark text-white h-10">
                                <img src="https://c4.wallpaperflare.com/wallpaper/893/101/145/piano-photo-backgrounds-wallpaper-preview.jpg" alt="Piano" className="card-img-top" />
                                <div className="card-body">
                                    <h2 className="card-title fw-bold text-center">Piano Lessons</h2>
                                    <p className="card-text fw-bold text-center">Explore our piano lessons.</p>
                                </div>
                            </div>
                            <div className="card bg-dark text-white h-10">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8otDBIc68Jj5wc1E-ry5UJME5ARiHOteVHQ&s" alt="Guitar" className="card-img-top" />
                                <div className="card-body">
                                    <h2 className="card-title fw-bold text-center">Theory Lessons</h2>
                                    <p className="card-text fw-bold text-center">Explore our Theory lessons.</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
                <br></br>
                <button className="btn btn-dark my-3">Enroll Now</button>

                <div className="container py-5 text-white">
                    <div className="row justify-content-center">
                    
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="p-4 bg-secondary bg-gradient  rounded h-100">
                                <h2 className='fw-bold text-center'>Best Experience</h2>
                                <img src="https://c1.wallpaperflare.com/preview/403/884/988/rock-music-artist-concert.jpg" alt="Music" className="img-fluid rounded my-3" />
                                <p>Discover the transformative power of our music lessons. Our experienced instructors will work closely with you to cultivate your skills, expand your knowledge, and help you achieve your musical goals. Embark on a Rewarding Musical Experience</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="p-4 bg-secondary bg-gradient rounded-3 h-100" >
                                <h2 className='fw-bold text-center'>Immerse Yourself</h2>
                                <img src="https://images.pexels.com/photos/164693/pexels-photo-164693.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Music" className="img-fluid rounded my-3" />
                                <p>Immerse yourself in our vibrant community of music enthusiasts and professionals. Explore our diverse range of music lessons and achieve your musical aspirations. Unlock Your Musical Potential. </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="p-4 bg-secondary bg-gradient rounded-3 h-100" >
                                <h2 className='fw-bold text-center'>Master Them</h2>
                                <img src="https://e0.pxfuel.com/wallpapers/706/241/desktop-wallpaper-music-artist-band-art.jpg" alt="Music" className="img-fluid rounded my-3" />
                                <p>Dive into our comprehensive curriculum and explore a wide range of music genres, from classical and jazz to contemporary styles.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-100 p-3 bg-black text-center">
                    <p>&copy; 2024 Music Lessons. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
}

export default Services;