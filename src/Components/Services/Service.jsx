import React from 'react';

const ServicePage = () => {
    return (
        <div className="d-flex flex-column align-items-center bg-black text-white" style={{ minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>

            <div className="container text-center py-5">
                <h1>Discover the Joy of Music</h1>
                <p>Welcome to our music website, where we offer exceptional guitar and piano lessons for both beginners and advanced musicians</p>
                <button className="btn btn-dark my-3">Enroll Now</button>
                <img src="https://c4.wallpaperflare.com/wallpaper/257/116/964/light-strings-music-sound-wallpaper-preview.jpg" alt="Music" className="img-fluid rounded mt-3" />
            </div>

            <div className="container py-5 bg-dark">
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <div className="card bg-dark text-white h-100">
                            <img src="https://c1.wallpaperflare.com/preview/87/872/945/guitar-amplifier-marshall-rock.jpg" alt="Guitar" className="card-img-top" />
                            <div className="card-body">
                                <h2 className="card-title">Guitar Lessons</h2>
                                <p className="card-text">Explore our guitar lessons.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-4">
                        <div className="card bg-dark text-white h-100">
                            <img src="https://c4.wallpaperflare.com/wallpaper/893/101/145/piano-photo-backgrounds-wallpaper-preview.jpg" alt="Piano" className="card-img-top" />
                            <div className="card-body">
                                <h2 className="card-title">Piano Lessons</h2>
                                <p className="card-text">Explore our piano lessons.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container py-5 text-white">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="p-4 bg-white text-dark rounded-3 h-100">
                            <h2>Hone Your Skills</h2>
                            <img src="https://c1.wallpaperflare.com/preview/604/836/939/hostile-band-rock-guitar.jpg" alt="Music" className="img-fluid rounded my-3" />
                            <p>Whether you're a complete beginner or an experienced player, our expert instructors will guide you through a personalized learning experience tailored to your goals and aspirations</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="p-4 text-dark rounded-3 h-100"  style={{backgroundColor:'#F5F5DC'}}>
                            <h2>Nurture Your Passion</h2>
                            <img src="https://c1.wallpaperflare.com/preview/540/282/508/audience-band-concert-crowd.jpg" alt="Music" className="img-fluid rounded my-3" />
                            <p>Unlock Your Musical Potential. Dive into our comprehensive curriculum and explore a wide range of music genres, from classical and jazz to contemporary styles. Our lessons are designed to cater to your individual preferences, helping you develop a well-rounded musical skill set</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="p-4 bg-white text-dark rounded h-100">
                            <h2>Enrich Your Experience</h2>
                            <img src="https://c1.wallpaperflare.com/preview/403/884/988/rock-music-artist-concert.jpg" alt="Music" className="img-fluid rounded my-3" />
                            <p>Discover the transformative power of our music lessons. Our experienced instructors will work closely with you to cultivate your skills, expand your knowledge, and help you achieve your musical goals. Embark on a Rewarding Musical Experience</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="p-4 text-dark rounded-3 h-100"  style={{backgroundColor:'#F5F5DC'}}>
                            <h2>Immerse Yourself</h2>
                            <img src="https://images.pexels.com/photos/164693/pexels-photo-164693.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Music" className="img-fluid rounded my-3" />
                            <p>Immerse yourself in our vibrant community of music enthusiasts and professionals. Explore our diverse range of music lessons and achieve your musical aspirations. Unlock Your Musical Potential. Dive into our comprehensive curriculum and explore a wide range of music genres, from classical and jazz to contemporary styles. Our lessons are designed to cater to your individual preferences.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="p-4 text-dark rounded-3 h-100" style={{backgroundColor:'#F5F5DC'}}>
                            <h2>Unlock a New Level of Mastery</h2>
                            <img src="https://e0.pxfuel.com/wallpapers/706/241/desktop-wallpaper-music-artist-band-art.jpg" alt="Music" className="img-fluid rounded my-3" />
                            <p>Explore our diverse range of music lessons and achieve your musical aspirations. Unlock Your Musical Potential. Dive into our comprehensive curriculum and explore a wide range of music genres, from classical and jazz to contemporary styles. Our lessons are designed to cater to your individual preferences, helping you develop a well-rounded musical skill set</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-100 p-3 bg-black text-center">
                <p>&copy; 2024 Music Lessons. All rights reserved.</p>
            </div>
        </div>
    );
};

export default ServicePage;
