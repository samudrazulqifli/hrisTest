import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { apiBaseUrl } from '@/config/env'

// Custom hook for managing clock status
export function useClockStatus() {
  const router = useRouter()
  const [status, setStatus] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const id = router.query.id

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${apiBaseUrl}/staffs/${id}`)
      setStatus(response.data.data[0].attributes.attendance.status)
    }

    if (id) {
      fetchData()
    }
  }, [id])

  const toggleAttendance = async () => {
    try {
      setIsLoading(true)

      const response = await axios.get(`${apiBaseUrl}/staffs/attendance/toggle/${id}`)
      setStatus(response.data.data[0].attributes.status)

      setIsLoading(false)
    } catch (error) {
      console.error('Error updating attendance:', error)
      setIsLoading(false)
    }
  }

  return { status, isLoading, toggleAttendance }
}
