import dotenv from 'dotenv'
const envFile =
  process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development'
dotenv.config({ path: envFile })

import db from '../models/index'

const concerts = 
    [
        {
            id: 1,
            venue: "Distrito 7",
            venueLink: "https://www.d7entradas.com.ar/",
            city: "Rosario",
            country: "Argentina",
            ticketsLink: "https://www.d7entradas.com.ar/",
            concertDate: '2018-12-06'
        },
        {
            id: 2,
            venue: "Distrito 7",
            venueLink: "https://www.d7entradas.com.ar/",
            city: "Rosario",
            country: "Argentina",
            ticketsLink: "https://www.d7entradas.com.ar/",
            concertDate: '2019-05-01'
        },
        {
            id: 3,
            venue: "Distrito 7",
            venueLink: "https://www.d7entradas.com.ar/",
            city: "Rosario",
            country: "Argentina",
            ticketsLink: "https://www.d7entradas.com.ar/",
            concertDate: '2019-09-20'
        },
        {
            id: 4,
            venue: "Galpon 11",
            venueLink: "https://www.instagram.com/galpon11rosario/",
            city: "Rosario",
            country: "Argentina",
            ticketsLink: "https://www.instagram.com/galpon11rosario/",
            concertDate: '2021-12-03'
        },
        {
            id: 5,
            venue: "Galpon 11",
            venueLink: "https://www.instagram.com/galpon11rosario/",
            city: "Rosario",
            country: "Argentina",
            ticketsLink: "https://www.instagram.com/galpon11rosario/",
            concertDate: '2022-07-04'
        },
        {
            id: 6,
            venue: "Galpon 11",
            venueLink: "https://www.instagram.com/galpon11rosario/",
            city: "Rosario",
            country: "Argentina",
            ticketsLink: "https://www.instagram.com/galpon11rosario/",
            concertDate: '2022-12-17'
        },
        {
            id: 7,
            venue: "Asociación japonesa",
            venueLink: "https://www.instagram.com/asociacionjaponesarosario/",
            city: "Rosario",
            country: "Argentina",
            ticketsLink: "https://www.instagram.com/asociacionjaponesarosario/",
            concertDate: '2023-07-14'
        },
        {
            id: 8,
            venue: "Galpon 11",
            venueLink: "https://www.instagram.com/galpon11rosario/",
            city: "Rosario",
            country: "Argentina",
            ticketsLink: "https://www.instagram.com/galpon11rosario/",
            concertDate: '2024-04-05'
        },
    ]


async function seed() {
  try {
    for (const concert of concerts) {
      await db.concerts.create(concert)
    }
    console.log('Seeding completed successfully.')
    process.exit(0)
  } catch (err) {
    console.error('Seeding failed:', err)
    process.exit(1)
  }
}

seed()