import React from 'react'
import data from './data.json'
import { DSGhe } from './DSGhe'
import { Result } from './Result'

export const BTDatVe = () => {
  return (
    <div className="container mt-3">
      <h3>Đặt vé</h3>
      <div className="row">
        <div className="col-md-8">
          <div className="p-3 text-white text-center bg-dark fw-bold">
            SCREEN
          </div>
          <DSGhe data={data} />
        </div>
        <div className="col-md-4">
          <Result />
        </div>
      </div>
    </div>
  )
}
