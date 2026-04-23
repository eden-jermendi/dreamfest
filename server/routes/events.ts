import express from 'express'

import { validateDay } from './helpers.ts'

import * as db from '../db/index.ts'

const router = express.Router()
export default router

router.post('/', async (req, res, next) => {
  try {
    const { name, description, time, locationId } = req.body
    const day = validateDay(req.body.day)
    const newEvent = {
      name,
      description,
      time,
      day,
      location_id: Number(locationId),
    }
    const id = await db.addNewEvent(newEvent) // TODO: call your new db.addNewEvent function and use the returned ID
    const url = `/api/v1/events/${id}`
    res.setHeader('Location', url)
    res.status(201).json({ location: url })
  } catch (e) {
    next(e)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id)
    await db.deleteEvent(id) // TODO: DELETE the event with this matching ID
    res.sendStatus(204)
  } catch (e) {
    next(e)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id)
    // TODO: Replace event below with the event from the database using its id
    // NOTE: It should have the same shape as this one
    const event = await db.getEventById(id)
    if (!event) {
      res.sendStatus(404)
      return
    }

    const locations = await db.getAllLocations()
    const updatedLocations = locations.map((location) => {
      return {
        ...location,
        selected: location.id === event.locationId,
      }
    })

    const formData = { event, locations: updatedLocations }

    res.json(formData)
  } catch (e) {
    next(e)
  }
})

router.patch('/:id', async (req, res, next) => {
  console.log('patch route hit')
  try {
    const { name, description, time } = req.body
    const id = Number(req.body.id)
    const day = validateDay(req.body.day)
    const locationId = Number(req.body.locationId)
    console.log(locationId)

    // TODO: UPDATE the event in the db with the matching ID using these details,
    const updatedEvent = {
      name,
      description,
      time,
      day,
      location_id: Number(locationId),
    }

    await db.updateEvent(updatedEvent, id)

    // if no event has a matching id, respond with a 404 instead
    res.sendStatus(204)
  } catch (e) {
    next(e)
  }
})
