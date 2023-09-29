import { BaseRequest, BaseResponse, Meta } from '@/types/common'
import { type } from 'os'

// same with the attribute on responses
export interface Staff {
  type: string
  id: string
  staffId: string
  firstName: string
  lastName: string
  fullName: string
  email: string
  password: string
  status: string
}

export type StaffBrowseRequest = {
  page: number
  pageSize: number
}


export type StaffBrowseResponse = BaseResponse<Staff>
export type StaffDetailResponse = BaseResponse<Staff>
