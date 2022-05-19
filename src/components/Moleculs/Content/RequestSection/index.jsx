import React from 'react'
import { motion } from 'framer-motion';

const ImageVariants = {
  hidden: {
    opacity: 0,
    scale: 0
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 120
    }
  }
}

const RequestSection = () => {
  return (
    <>
      <div className="container-fluid bg-secondary my-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 py-5 py-lg-0">
              <h6 className="text-primary text-uppercase font-weight-bold">Get A Quote</h6>
              <h1 className="mb-4">Request A Free Quote</h1>
              <p className="mb-4">Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore sed et. Sit rebum labore sit sit ut vero no sit. Et elitr stet dolor sed sit et sed ipsum et kasd ut. Erat duo eos et erat sed diam duo</p>
              <div className="row">
                <div className="col-sm-4">
                  <h1 className="text-primary mb-2" data-toggle="counter-up">225</h1>
                  <h6 className="font-weight-bold mb-4">SKilled Experts</h6>
                </div>
                <div className="col-sm-4">
                  <h1 className="text-primary mb-2" data-toggle="counter-up">1050</h1>
                  <h6 className="font-weight-bold mb-4">Happy Clients</h6>
                </div>
                <div className="col-sm-4">
                  <h1 className="text-primary mb-2" data-toggle="counter-up">2500</h1>
                  <h6 className="font-weight-bold mb-4">Complete Projects</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="bg-primary py-5 px-4 px-sm-5">
                <form className="py-5">
                  <div className="form-group">
                    <input type="text" className="form-control border-0 p-4" placeholder="Your Name" required="required" />
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control border-0 p-4" placeholder="Your Email" required="required" />
                  </div>
                  <div className="form-group">
                    <select className="custom-select border-0 px-4" style={{ height: '47px' }}>
                      <option selected>Select A Service</option>
                      <option value={1}>Service 1</option>
                      <option value={2}>Service 1</option>
                      <option value={3}>Service 1</option>
                    </select>
                  </div>
                  <div>
                    <button className="btn btn-dark btn-block border-0 py-3" type="submit">Get A Quote</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div> {/* Quote Request Start */} {/* Services Start */}
    </>
  )
}

export default RequestSection
