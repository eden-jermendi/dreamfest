import knexFile from './knexfile.js'
import knex from 'knex'
import type { Location, LocationData } from '../../models/Location.ts'
import type { Event, EventWithLocation, EventData } from '../../models/Event.ts'

type Environment = 'production' | 'test' | 'development'

const environment = (process.env.NODE_ENV || 'development') as Environment
const config = knexFile[environment]
export const connection = knex(config)

export async function getAllLocations() {
  return connection('locations')
}

export async function getEventsByDay(day: string) {
  return connection('events')
    .join('locations', 'events.location_id', 'locations.id')
    .where('events.day', day) //why is this still underlined w this error "The left-hand side of an assignment expression must be a variable or a property access."
    .select(
      'events.id',
      'events.day',
      'events.time',
      'events.description',
      'events.location_id',
      'events.name as eventName',
      'locations.name as locationName',
    )
}

export async function getLocationById(id: number) {
  return connection('locations').where('id', id).first()
}

export async function updateLocation(
  updatedLocation: LocationData,
  id: number,
) {
  return connection('locations').where('id', id).update(updatedLocation)
}

export async function addNewEvent(newEvent: object) {
  const result = await connection('events').insert(newEvent)
  return result[0]
}
export async function deleteEvent(id: number) {
  return await connection('events').where('id', id).delete()
}

export async function getEventById(id: number) {
  return await connection('events')
    .select(
      'day',
      'description',
      'id',
      'events.location_id as locationId',
      'name',
      'time',
    )
    .where('id', id)
    .first()
}

export async function updateEvent(updatedEvent: object, id: number) {
  return await connection('events').where('id', id).update(updatedEvent)
}
