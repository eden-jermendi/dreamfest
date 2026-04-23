# DreamFest

DreamFest is a full-stack festival management app for organising locations and events across a multi-day music and wellbeing festival.

This project focuses on the backend database and route integration needed to manage festival scheduling data. It allows organisers to view locations, view events by day, add new events, edit locations, edit events, and delete events.

## Overview

DreamFest simulates an admin tool for a three-day festival with activities such as yoga, meditation, workshops, arts and crafts, food vendors, and live music.

The frontend UI, basic routing structure, and initial seeded database were provided as part of the original challenge brief. My work focused on implementing the application logic and database functionality that connects the existing routes and UI to real data.

## What I implemented

I completed the project through the event editing functionality and built the core data-handling features needed to make the app functional.

### Completed features

- Display all festival locations from the database
- Display events by day using joined event and location data
- Load individual location data for editing
- Update location records in the database
- Add new events
- Delete events
- Load individual event data for editing
- Update existing events

## My contribution

My main work on this project included:

- Writing database access functions for locations and events
- Connecting Express routes to real database queries
- Implementing CRUD-style backend functionality for event and location management
- Handling joined data between `events` and `locations`
- Returning correctly shaped API data for the existing frontend
- Completing functionality that had previously been hard-coded or left as TODOs

## Tech stack

- Node.js
- Express
- TypeScript / JavaScript
- Knex.js
- SQLite3
- React
- React Query

## Key backend functionality

### Locations
- Get all locations
- Get a location by ID
- Update a location

### Events
- Get events by day
- Get an event by ID
- Add a new event
- Update an event
- Delete an event

## Project structure

```text
client/     # React frontend
server/     # Express routes and server logic
db/         # Database functions, migrations, and seeds
