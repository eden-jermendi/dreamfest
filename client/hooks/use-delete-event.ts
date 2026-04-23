import { useMutation, useQueryClient } from '@tanstack/react-query'
import request from 'superagent'

const rootURL = new URL(`/api/v1`, document.baseURI)

export default function useDeleteEvent(id: number) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async () => {
      await request.delete(`${rootURL}/events/${id}`)
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ['schedule'] })
    },
  })
}
