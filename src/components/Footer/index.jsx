import React from 'react'

const Footer = () => {
    return (

        <>
            {/* Footer Start */} <div className="container-fluid bg-dark text-white mt-5 py-5 px-sm-3 px-md-5">
                <div className="row pt-5">
                    <div className="col-lg-7 col-md-6">
                        <div className="row">
                            <div className="col-md-6 mb-5">
                                <h3 className="text-primary mb-4">Get In Touch</h3>
                                <p>
                                    <i className="fa fa-map-marker-alt mr-2" />RT.1/RW.9 No.31, RT.1/RW.9, Cililitan, Kec. Kramat jati, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13650
                                </p>
                                <p>
                                    <i className="fa fa-phone-alt mr-2" />(+62-21) 801 5966, 80884546
                                </p>
                                <p>
                                    <i className="fa fa-envelope mr-2" />customer-service@ridhologistics.com
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            <div className="container-fluid bg-dark text-white border-top py-4 px-sm-3 px-md-5" style={{ borderColor: '#3E3E4E !important' }}>
                <div className="row">
                    <div className="col-lg-6 text-center text-md-left mb-3 mb-md-0">
                        <p className="m-0 text-white">© <a href="#">Your Site Name</a>. All Rights Reserved. Designed by <a href="https://htmlcodex.com">HTML Codex</a>
                        </p>
                    </div>
                    <div className="col-lg-6 text-center text-md-right">
                        <ul className="nav d-inline-flex">
                            <li className="nav-item">
                                <a className="nav-link text-white py-0" href="#">Privacy</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white py-0" href="#">Terms</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white py-0" href="#">FAQs</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white py-0" href="#">Help</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Footer End */}
        </>
    )
}

export default Footer
