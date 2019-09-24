# ByeCouch - Hack4Vilnius 2019

[![Netlify Status](https://api.netlify.com/api/v1/badges/16548c3a-fe58-4937-b067-2e162cd41159/deploy-status)](https://app.netlify.com/sites/pensive-murdock-64377c/deploys)

A project built for [Hack4Vilnius 2019](https://hack4vilnius.lt/) hackathon. Main idea: connecting people and hobbies (dance classes, language schools, etc.).

## Prerequisites

### Environment

- `AIRTABLE_API_KEY`: an API key to acccess airtable database. How to: https://support.airtable.com/hc/en-us/articles/219046777-How-do-I-get-my-API-key-
- `GOOGLE_API_KEY`: should allow access to Maps Javascript API and Geocoding API

## Developing

1. `npm i -g lerna`
2. `lerna bootstrap`
3. `lerna run dev`
