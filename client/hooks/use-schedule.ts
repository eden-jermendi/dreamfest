import { useQuery } from '@tanstack/react-query'
import request from 'superagent'
import { EventWithLocation } from '../../models/Event'

const rootURL = new URL(`/api/v1`, document.baseURI)

export default function useSchedule(day: string) {
  return useQuery({
    queryFn: async () => {
      const res = await request.get(`${rootURL}/schedule/${day}`)
      return res.body as { events: EventWithLocation[] }
    },

    queryKey: ['schedule', day],
  })
}
