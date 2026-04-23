import { useMutation, useQueryClient } from '@tanstack/react-query'
import request from 'superagent'
import { Event } from '../../models/Event'

const rootURL = new URL(`/api/v1`, document.baseURI)

export default function useEditEvent(id: number) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (values: Event) => {
      await request.patch(`${rootURL}/events/${id}`).send(values)
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ['event', id] })
      queryClient.invalidateQueries({ queryKey: ['schedule'] })
    },
  })
}
