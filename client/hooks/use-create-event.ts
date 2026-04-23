import { useMutation, useQueryClient } from '@tanstack/react-query'
import request from 'superagent'
import { EventData } from '../../models/Event.js'

const rootURL = new URL(`/api/v1`, document.baseURI)

export default function useCreateEvent() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (data: EventData) => {
      await request.post(`${rootURL}/events`).send(data)
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ['schedule'] })
    },
  })
}
