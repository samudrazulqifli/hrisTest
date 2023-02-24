import staff from '@/services/staffs'

const rootServices = {
  reducers: {
    // staff
    [staff.reducerPath]: staff.reducer,
  },
  middlewares: [
    // staff
    staff.middleware,
  ],
}

export default rootServices
