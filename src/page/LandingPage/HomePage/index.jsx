import React, { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { TopBarStart, NavBar, JumboTron, AboutUsSection, RequestSection, ServiceSection } from '../../../components'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Table } from 'reactstrap'
const HomePage = () => {
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
      <JumboTron showInput={false} onChange={(e) => setDataPengiriman(e.target.value)} onClick={OnButtonCheck} />
      <AboutUsSection />


      {/* Back to Top */}
      <a href="#" className="btn btn-lg btn-primary back-to-top">
        <i className="fa fa-angle-double-up" />
      </a>


    </>
  )
}

export default HomePage
