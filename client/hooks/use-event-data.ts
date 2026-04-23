import { useQuery } from '@tanstack/react-query'
import request from 'superagent'
import { Event } from '../../models/Event'
import { Location } from '../../models/Location'

const rootURL = new URL(`/api/v1`, document.baseURI)

export default function useEventData(id: number) {
  return useQuery({
    queryKey: ['event', id],
    queryFn: async () => {
      const res = await request.get(`${rootURL}/events/${id}`)
      return res.body as { event: Event; locations: Location[] }
    },
  })
}
