import React, { useState } from 'react'
import styled from 'styled-components'

const JumboTron = ({ content, onChange, onClick, showInput }) => {
  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container text-center py-5">
          {content}
          {showInput === true && (

            <div className="mx-auto" style={{ width: '100%', maxWidth: '600px' }}>
              <div className="input-group">
                <input type="text" className="form-control border-light" style={{ padding: '30px' }} placeholder="Nomor SP" onChange={onChange} />
                <div className="input-group-append">
                  <button className="btn btn-primary px-3" onClick={onClick}>Track &amp; Trace</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div> {/* Header End */} {/* About Start */}
    </>
  )
}

export default JumboTron
