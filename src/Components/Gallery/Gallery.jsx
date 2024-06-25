import React, { useEffect, useState } from 'react';
import img1 from '../../Assets/Gallery/img1.png';
import img2 from '../../Assets/Gallery/img2.png';
import img3 from '../../Assets/Gallery/img3.png';
import img4 from '../../Assets/Gallery/img4.png';
import img5 from '../../Assets/Gallery/img5.png';
import img6 from '../../Assets/Gallery/img6.png';

function Gallery() {
    let [isWidthSmall, setIsWidthSmall] = useState(false)

    function handleResize() {
        if (window.innerWidth < 700) {
            setIsWidthSmall(true)
        }
        else {
            setIsWidthSmall(false)
        }
    }
    window.addEventListener("resize", () => handleResize);

    useEffect(() => {
        handleResize()
    })
    return (
        <div className="container">
            <div className="row py-5">
                <div className="col-lg-6 mb-4 mb-lg-0">
                    <img className='img-fluid' src={img1} alt="Gallery Image 1" />
                </div>
                <div className="col-lg-6">
                    <h1 className='heading' style={{ fontSize: '3rem' }}>Explore the artistry</h1>
                    <p>Welcome to the portfolio of our talented musician, where you'll discover a captivating blend of guitar and piano performances.</p>
                </div>
            </div>

            <div className="row p-3 mb-3">
                {isWidthSmall&&<div className="col-md-6 mb-3">
                    <img className='img-fluid' src={img2} alt="Gallery Image 2" />
                </div>}
                <div className="col-md-6 mb-4 mb-md-0">
                    <div className="row">
                        <div className="col-6 mb-3">
                            <img className='img-fluid' src={img3} alt="Gallery Image 3" />
                        </div>
                        <div className="col-6 mb-3">
                            <img className='img-fluid' src={img6} alt="Gallery Image 6" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6 mb-3">
                            <img className='img-fluid' src={img5} alt="Gallery Image 5" />
                        </div>
                        <div className="col-6 mb-3">
                            <img className='img-fluid' src={img4} alt="Gallery Image 4" />
                        </div>
                    </div>
                </div>
                {!isWidthSmall&&<div className="col-md-6">
                    <img className='img-fluid' src={img2} alt="Gallery Image 2" />
                </div>}
            </div>

            <div className="row p-3 mb-3">
                <div className="col-md-6 mb-4 mb-md-0">
                    <img className='img-fluid' src={img2} alt="Gallery Image 2" />
                </div>
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-6 mb-3">
                            <img className='img-fluid' src={img3} alt="Gallery Image 3" />
                        </div>
                        <div className="col-6 mb-3">
                            <img className='img-fluid' src={img6} alt="Gallery Image 6" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6 mb-3">
                            <img className='img-fluid' src={img5} alt="Gallery Image 5" />
                        </div>
                        <div className="col-6 mb-3">
                            <img className='img-fluid' src={img4} alt="Gallery Image 4" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="row p-3 mb-3">
                {isWidthSmall&&<div className="col-md-6 mb-3">
                    <img className='img-fluid' src={img2} alt="Gallery Image 2" />
                </div>}
                <div className="col-md-6 mb-4 mb-md-0">
                    <div className="row">
                        <div className="col-6 mb-3">
                            <img className='img-fluid' src={img3} alt="Gallery Image 3" />
                        </div>
                        <div className="col-6 mb-3">
                            <img className='img-fluid' src={img6} alt="Gallery Image 6" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6 mb-3">
                            <img className='img-fluid' src={img5} alt="Gallery Image 5" />
                        </div>
                        <div className="col-6 mb-3">
                            <img className='img-fluid' src={img4} alt="Gallery Image 4" />
                        </div>
                    </div>
                </div>
                {!isWidthSmall&&<div className="col-md-6">
                    <img className='img-fluid' src={img2} alt="Gallery Image 2" />
                </div>}
            </div>
        </div>
    );
}

export default Gallery;
