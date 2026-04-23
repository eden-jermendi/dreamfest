import { useQuery } from '@tanstack/react-query'
import request from 'superagent'

import { Location } from '../../models/Location.ts'

const rootURL = new URL(`/api/v1`, document.baseURI)

export default function useLocationData(id: number) {
  return useQuery({
    queryKey: ['location', id],
    queryFn: async () => {
      const res = await request.get(`${rootURL}/locations/${id}`)
      return res.body as Location
    },
  })
}
