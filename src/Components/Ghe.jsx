import React from 'react'
import './style.css'
import cn from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { btDatVeActions } from '../store/BTDatVe/slice'

export const Ghe = (props) => {
  const { ghe } = props
  const { chairBooking, chairBooked } = useSelector((state) => state.btDatVe)
  const dispatch = useDispatch()
  return (
    <div
      className={cn('ghe', {
        'ghe--dangDat': chairBooking.find((x) => x.soGhe === ghe.soGhe),
        'ghe--daDat': chairBooked.find((x) => x.soGhe === ghe.soGhe),
      })}
      onClick={() => dispatch(btDatVeActions.setChairBooking(ghe))}
    >
      {ghe.soGhe}
    </div>
  )
}
