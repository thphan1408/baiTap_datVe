import React from 'react'
import { Ghe } from './Ghe'
import './style.css'

export const DSGhe = (props) => {
  const { data } = props
  // console.log(data)
  return (
    <div className="dsGhe">
      {data.map((hangGhe) => {
        return (
          <div key={hangGhe.hang} className="d-flex gap-3 mt-3 hang">
            <div
              style={{
                width: '50px',
                height: '50px',
                lineHeight: '50px',
                textAlign: 'center',
              }}
            >
              {hangGhe.hang}
            </div>
            <div className="d-flex gap-3 soGhe">
              {hangGhe.danhSachGhe.map((ghe) => {
                return <Ghe ghe={ghe} key={ghe.soGhe} />
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}
