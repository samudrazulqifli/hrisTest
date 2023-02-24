export type Meta = {
  count: number
  hasNextPage: boolean
  hasPreviousPage: boolean
  page: number
  pageCount: number
  pageSize: number
}

export type ModifiedBy = {
  id: string
  fullName: string
  role: string
}

export type BaseResponse<D> = {
  statusCode: number
  data: D
  included: any
  count?: number
  meta?: Meta
}
