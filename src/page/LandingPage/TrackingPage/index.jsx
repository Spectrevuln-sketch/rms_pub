import React, { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { TopBarStart, NavBar, JumboTron, AboutUsSection, RequestSection, ServiceSection } from '../../../components'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Table } from 'reactstrap'
import './tracker.css'
const TrackingPage = () => {
  /* ----------------------------- AXIOS INSTANCE ----------------------------- */
  var axiosInstnce = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    withCredentials: true,
  })
  /* ----------------------------- END AXIOS INSTANCE ----------------------------- */
  const [dataPengiriman, setDataPengiriman] = useState('');
  const [sp_data, setSPdata] = useState([])

  const [modalIsOpen, setIsOpen] = useState(false);




  const OnButtonCheck = async (e) => {
    e.preventDefault();

    await axiosInstnce.get(`/current-pengiriman/${dataPengiriman}`)
      .then(res => {
        if (res.status === 200) {
          setIsOpen(!modalIsOpen)
          setSPdata(res.data)
        }
      }).catch(err => {
        if (err) {
          if (err.response !== undefined) {
            if (err.response.status === 400) {
              Swal.fire(
                `${err.response.data.message}`,
                `Silahkan Coba Lagi`,
                'error'
              )
            }
          }
        }
      })
  }


  return (
    <>
      <JumboTron
        content={
          <h1 className="text-white display-3 mb-5" style={{ fontSize: '20px', textAlign: "center" }}>Silahkan Masukan Nomor Surat Pengiriman (SP)</h1>
        } showInput={true} onChange={(e) => setDataPengiriman(e.target.value)} onClick={OnButtonCheck} />
      {/* Back to Top */} <a href="#" className="btn btn-lg btn-primary back-to-top">
        <i className="fa fa-angle-double-up" />
      </a>

      <Modal
        toggle={() => setIsOpen(!modalIsOpen)}
        isOpen={modalIsOpen}
        modalTransition={{ timeout: 1000 }}
        size='md'
        centered
      >
        {sp_data.length > 0 || sp_data !== undefined && (
          <>
            <ModalHeader>
              No SP : {sp_data.no_sp}
            </ModalHeader>
            <ModalBody>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Customer</th>
                    <th scope="col">Tujuan</th>
                    <th scope="col">Barang</th>
                    <th scope="col">QTY</th>
                    <th scope="col">Laynan</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{sp_data.customer_id !== undefined ? sp_data.customer_id.customer_name : ""}</td>
                    <td>{sp_data.tujuan}</td>
                    <td>{sp_data.nama_barang}</td>
                    <td>{sp_data.jumlah_barang} {sp_data.satuan}</td>
                    <td>{sp_data.jenis_layanan}</td>
                  </tr>
                </tbody>
              </table>
              <div className="col">
                <table className="table d-flex border-0 justify-content-center algin-align-items-center" style={{ width: '100%' }}>

                  <tbody className="border-0">
                    <tr className="border-0">
                      <p className='bg-primary p-2 rounded-pill text-white'>Delivery Status</p>
                      {sp_data.history_tujuan && (
                        sp_data.history_tujuan.map((val, idx) => (
                          <tr className="border-0">
                            {console.log(val)}
                            <td className="border-0" key={idx}>{val.tanggal}</td>
                            <td className="border-0">
                              {idx === 0 && (
                                <i class="fas fa-dot-circle text-red"></i>
                              )}
                              {idx !== 0 && (
                                <i class="fas fa-dot-circle"></i>
                              )}

                            </td>
                            <td className="border-0" key={idx}>{val.deskripsi}</td>
                          </tr>
                        ))
                      )}
                    </tr>
                  </tbody>
                </table>
              </div>

            </ModalBody>
            <ModalFooter>

              <Button onClick={() => setIsOpen(!sp_data)}>
                Exit
              </Button>
            </ModalFooter>
          </>
        )}

      </Modal>
    </>
  )
}

export default TrackingPage
