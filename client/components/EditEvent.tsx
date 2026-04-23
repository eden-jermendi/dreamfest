import { useNavigate, useParams } from 'react-router'
import { EventData } from '../../models/Event'
import EditEventForm from './EditEventForm'
import LineupNav from './LineupNav'

import { useDeleteEvent, useEditEvent, useEventData } from '../hooks/api.ts'
import LoadingIndicator from './LoadingIndicator.tsx'

export default function EditEvent() {
  const params = useParams()
  const id = Number(params.id)
  const event = useEventData(id)
  const editEvent = useEditEvent(id)
  const deleteEvent = useDeleteEvent(id)
  const navigate = useNavigate()

  const handleSubmit = async (formData: EventData) => {
    await editEvent.mutateAsync({ id, ...formData })
  }

  const handleDelete = async (evt: React.FormEvent) => {
    evt.preventDefault()
    deleteEvent.mutate()
    navigate(`/schedule/friday`)
  }

  if (event.isPending) {
    return <LoadingIndicator />
  }

  if (event.isError || !event.data) {
    return 'Failed to load event data'
  }

  return (
    <>
      <LineupNav />
      <h2>
        edit event: <span className="data">{event.data.event.name}</span>
      </h2>
      <EditEventForm
        {...event.data.event}
        submitLabel="Update event"
        onSubmit={handleSubmit}
      />
      <form onSubmit={handleDelete} className="form">
        <div />
        <button className="delete">Delete event</button>
      </form>
    </>
  )
}
