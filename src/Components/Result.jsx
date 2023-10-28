import React from 'react'
import './style.css'
import { useSelector, useDispatch } from 'react-redux'
import { BTDatVeSlice, btDatVeActions } from '../store/BTDatVe/slice'

export const Result = () => {
  const { chairBooking } = useSelector((state) => state.btDatVe)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Kết quả đặt vé</h2>
      <div>
        <div className="d-flex gap-3 mt-3 align-items-center">
          <div className="custom customBooked"></div>
          <span>Ghế đã đặt</span>
        </div>
        <div className="d-flex gap-3 mt-3 align-items-center">
          <div className="custom customBooking"></div>
          <span>Ghế đang đặt</span>
        </div>
        <div className="d-flex gap-3 mt-3 align-items-center">
          <div className="custom"></div>
          <span>Ghế chưa đặt</span>
        </div>
      </div>
      <table className="table mt-3">
        <thead>
          <tr>
            <th>Số ghế</th>
            <th>Giá</th>
            <th>Hủy</th>
          </tr>
        </thead>
        <tbody>
          {chairBooking.map((item) => {
            return (
              <tr key={item.soGhe}>
                <td>{item.soGhe}</td>
                <td>{item.gia}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      dispatch(btDatVeActions.cancelChair(item.soGhe))
                    }}
                  >
                    Hủy
                  </button>
                </td>
              </tr>
            )
          })}
          <tr>
            <td>Tổng</td>
            <td>
              {chairBooking.reduce((tongTien, item, index) => {
                return (tongTien += item.gia)
              }, 0)}
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>

      <button
        className="btn btn-success"
        onClick={() => {
          dispatch(btDatVeActions.setChairBooked())
        }}
      >
        Thanh toán
      </button>
    </div>
  )
}
