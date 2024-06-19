import React from 'react'
import img1 from '../../Assets/Gallery/img1.png'
import img2 from '../../Assets/Gallery/img2.png'
import img3 from '../../Assets/Gallery/img3.png'
import img4 from '../../Assets/Gallery/img4.png'
import img5 from '../../Assets/Gallery/img5.png'
import img6 from '../../Assets/Gallery/img6.png'
function Gallery() {
    return (
        <div>
            <div className="row py-5 mx-5">
                <div className="col">
                    <img className='d-block mx-auto' src={img1} style={{ height: '400px' }} />
                </div>
                <div className="col">
                    <h1 className='heading' style={{ fontSize: '6rem' }}>Explore the artistry</h1>
                    <p>
                        Welcome to the portfolio of our talented musician, where you'll discover a captivating blend of guitar and piano performances
                    </p>
                </div>
            </div>
            <div className="row p-5 mb-3">
                <div className="col">
                    <div>
                        <div className="row">
                            <div className="col">
                                <img className='d-block mx-auto' src={img3} style={{ height: '90%', width:'90%'}}/>
                            </div>
                            <div className="col">
                                <img className='d-block mx-auto' src={img6} style={{ maxHeight: '90%', maxWidth:'90%'}} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <img className='d-block mx-auto' src={img5} style={{ maxHeight: '90%', maxWidth:'90%'}} />
                            </div>
                            <div className="col">
                                <img className='d-block mx-auto' src={img4} style={{ maxHeight: '90%', maxWidth:'90%'}} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col" style={{ height: '100%' }}>
                    <img src={img2} style={{ width: '100%' }} />
                </div>
            </div>
            <div className="row p-5 mb-3">
            <div className="col" style={{ height: '100%' }}>
                    <img src={img2} style={{ width: '100%' }} />
                </div>
                <div className="col">
                    <div>
                        <div className="row">
                            <div className="col">
                                <img className='d-block mx-auto' src={img3} style={{ height: '90%', width:'90%'}}/>
                            </div>
                            <div className="col">
                                <img className='d-block mx-auto' src={img6} style={{ maxHeight: '90%', maxWidth:'90%'}} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <img className='d-block mx-auto' src={img5} style={{ maxHeight: '90%', maxWidth:'90%'}} />
                            </div>
                            <div className="col">
                                <img className='d-block mx-auto' src={img4} style={{ maxHeight: '90%', maxWidth:'90%'}} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row p-5 mb-3">
                <div className="col">
                    <div>
                        <div className="row">
                            <div className="col">
                                <img className='d-block mx-auto' src={img3} style={{ height: '90%', width:'90%'}}/>
                            </div>
                            <div className="col">
                                <img className='d-block mx-auto' src={img6} style={{ maxHeight: '90%', maxWidth:'90%'}} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <img className='d-block mx-auto' src={img5} style={{ maxHeight: '90%', maxWidth:'90%'}} />
                            </div>
                            <div className="col">
                                <img className='d-block mx-auto' src={img4} style={{ maxHeight: '90%', maxWidth:'90%'}} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col" style={{ height: '100%' }}>
                    <img src={img2} style={{ width: '100%' }} />
                </div>
            </div>
        </div>
    )
}

export default Gallery
