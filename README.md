# DreamFest

Full-stack festival management app for organising locations and events across a multi-day music and wellbeing festival.

## Overview

DreamFest is an admin tool for managing a three-day festival schedule. Organisers can view locations, manage events, and update festival data in real time.

The frontend UI, routes, and initial database schema were provided. I implemented the backend logic and database functionality to make the application fully functional.

## What I built

- Implemented database access layer using Knex  
- Connected Express routes to real database queries  
- Built full CRUD functionality for events  
- Implemented read + update functionality for locations  
- Joined events and locations data for schedule views  
- Ensured API responses matched frontend expectations  

## Features

### Locations
- View all locations  
- Edit location details  

### Events
- View events by day  
- Add new events  
- Edit existing events  
- Delete events  
- Load event data by ID  

## Tech stack

- Node.js  
- Express  
- TypeScript / JavaScript  
- Knex.js  
- SQLite3  
- React  
- React Query  

## Project structure

    client/   # React frontend
    server/   # Express routes and API logic
    db/       # Database functions, migrations, seeds

## Running locally

    git clone https://github.com/eden-jermendi/dreamfest.git
    cd dreamfest
    npm install
    npm run knex migrate:latest
    npm run knex seed:run
    npm run dev

## Why this project

This project demonstrates my ability to:

- Work within an existing codebase  
- Implement backend logic for real features  
- Write and integrate database queries  
- Handle relational data and joins  
- Connect backend systems to a frontend UI  

## Notes

This project began as a Dev Academy challenge. The UI, routes, and database structure were provided; all backend functionality and data integration were implemented by me.

## Future improvements

- Add location creation and deletion  
- Improve test coverage  
- Add validation and error handling  
- Deploy the application  

## Author

Eden Jermendi
