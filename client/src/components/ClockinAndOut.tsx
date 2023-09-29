import React from 'react'
import { useClockStatus } from '../utils/clockHooks' // Import the custom hook

const ClockinAndOut = () => {
  const { status, isLoading, toggleAttendance } = useClockStatus()

  return (
    <div>
      <button
        className={status==='true' ? 'btn-info btn' : 'btn-error btn'}
        onClick={toggleAttendance}
        disabled={isLoading} // Disable the button while the API call is in progress
      >
        {isLoading ? 'Loading...' : status==='true' ? 'ClockIn' : 'ClockOut'}
      </button>
      <p>Status: {status}</p>
    </div>
  )
}

export default ClockinAndOut
