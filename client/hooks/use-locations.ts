import { useQuery } from '@tanstack/react-query'
import request from 'superagent'

import type { Location } from '../../models/Location.ts'

const rootURL = new URL(`/api/v1`, document.baseURI)

export default function useLocations() {
  return useQuery({
    queryKey: ['location'],
    queryFn: async () => {
      const res = await request.get(`${rootURL}/locations`)
      if (res.ok) {
        return res.body as { locations: Location[] }
      }

      throw new Error(res.text)
    },
  })
}
