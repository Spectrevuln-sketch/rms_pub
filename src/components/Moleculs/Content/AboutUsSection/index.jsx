import React from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'

const ImageCardVariants = {
  hidden: {
    opacity: 0,
    scale: 0
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 1,
      duration: 2
    }
  }
}

const titleText = {
  hidden: {
    opacity: 0,
    x: "100vw",
    rotate: 180
  },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: {
      duration: 3,
      type: "spring",
      stiffness: 100,
      ease: "easeInOut",
    }
  }
}

const AboutUsSection = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  return (
    <>
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row align-items-center">
            <motion.div className="col-lg-5 pb-4 pb-lg-0"
              variants={ImageCardVariants}
              initial="hidden"
              animate="visible"
              style={{ x, y, rotateX, rotateY, z: 100 }}
              drag
              dragElastic={0.16}
              dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
              whileTap={{ cursor: "grabbing" }}
            >
              <img className="img-fluid w-100" src="assets/img/gedung_rms.jpg" alt="" />
              <div className="bg-primary text-dark text-center p-4">
                <h3 className="m-0">21+ Years Experience</h3>
              </div>
            </motion.div>
            <motion.div className="col-lg-7"
              variants={titleText}
              initial="hidden"
              animate="visible"
            >
              <h6 className="text-primary text-uppercase font-weight-bold">Solusi Bagi Permasalahan Logistics Anda</h6>
              <h1 className="mb-4">Company Overview</h1>
              <p className="mb-4">Ridho Makmur Sentosa (RMS), hadir sebagai partner Anda dalam bidang Penyedia Layanan Logistics, Warehousing, Transportation, Packing Crating, Courir, dan lain-lain.  Didirikan pada tahun 2001, hingga kini telah memberikan layanan pengiriman barang dari dan ke berbagai daerah di Indonesia, melalui darat, laut , dan udara.
                Berbekal pengalaman dan jaringan di seluruh Indonesia serta tim profesional yang cakap dan mengedepankan integritas, kami berkomitmen untuk memberikan jasa terbaik kami kepada Anda.
                Kami menyadari bahwa dunia usaha selalu bergerak dinamis menuju globalisasi serta digitalisasi.  Oleh karena itu untuk menjawab tantangan dan keinginan para pelanggan, kami senantiasa melakukan inovasi dalam wujud pelatihan, peremajaan dan penambahan kapasitas armada, serta perangkat monitoring untuk memantau pergerakan setiap posisi cargo, yang diharapkan dapat menjamin keselamatan serta ketepatan waktu pengiriman.
                Dengan berbekal motto Service is Quality, kami siap melayani Anda.
                Salam Hangat,

                H. Ribut
                Founder
              </p>

            </motion.div>
          </div>
        </div>
        {/* Video Modal */}
        <div className="modal fade" id="videoModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button> {/* 16:9 aspect ratio */} <div className="embed-responsive embed-responsive-16by9">
                  <iframe className="embed-responsive-item" src id="video" allowscriptaccess="always" allow="autoplay" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> {/* About End */} {/* Quote Request Start */}
    </>
  )
}

export default AboutUsSection
