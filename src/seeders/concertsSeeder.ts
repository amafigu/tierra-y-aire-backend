import dotenv from 'dotenv';
import db from '../models/index';
import { type CreateConcert } from '../types/Concerts';

const envFile =
  process.env.NODE_ENV === 'production'
    ? '.env.production'
    : process.env.NODE_ENV === 'test'
      ? '.env.test'
      : '.env.development';
dotenv.config({ path: envFile });

const concerts: CreateConcert[] = [
  {
    venue: 'Distrito 7',
    venueLink: 'https://www.d7entradas.com.ar/',
    city: 'Rosario',
    country: 'Argentina',
    ticketsLink: 'https://www.d7entradas.com.ar/',
    concertDate: new Date('2018-12-06'),
  },
  {
    venue: 'Distrito 7',
    venueLink: 'https://www.d7entradas.com.ar/',
    city: 'Rosario',
    country: 'Argentina',
    ticketsLink: 'https://www.d7entradas.com.ar/',
    concertDate: new Date('2019-05-01'),
  },
  {
    venue: 'Distrito 7',
    venueLink: 'https://www.d7entradas.com.ar/',
    city: 'Rosario',
    country: 'Argentina',
    ticketsLink: 'https://www.d7entradas.com.ar/',
    concertDate: new Date('2019-09-20'),
  },
  {
    venue: 'Galpon 11',
    venueLink: 'https://www.instagram.com/galpon11rosario/',
    city: 'Rosario',
    country: 'Argentina',
    ticketsLink: 'https://www.instagram.com/galpon11rosario/',
    concertDate: new Date('2021-12-03'),
  },
  {
    venue: 'Galpon 11',
    venueLink: 'https://www.instagram.com/galpon11rosario/',
    city: 'Rosario',
    country: 'Argentina',
    ticketsLink: 'https://www.instagram.com/galpon11rosario/',
    concertDate: new Date('2022-07-04'),
  },
  {
    venue: 'Galpon 11',
    venueLink: 'https://www.instagram.com/galpon11rosario/',
    city: 'Rosario',
    country: 'Argentina',
    ticketsLink: 'https://www.instagram.com/galpon11rosario/',
    concertDate: new Date('2022-12-17'),
  },
  {
    venue: 'Asociación japonesa',
    venueLink: 'https://www.instagram.com/asociacionjaponesarosario/',
    city: 'Rosario',
    country: 'Argentina',
    ticketsLink: 'https://www.instagram.com/asociacionjaponesarosario/',
    concertDate: new Date('2023-07-14'),
  },
  {
    venue: 'Galpon 11',
    venueLink: 'https://www.instagram.com/galpon11rosario/',
    city: 'Rosario',
    country: 'Argentina',
    ticketsLink: 'https://www.instagram.com/galpon11rosario/',
    concertDate: new Date('2024-04-05'),
  },
];

export const seed = async () => {
  try {
    for (const concert of concerts) {
      const existingConcert = await db.concerts.findOne({
        where: {
          venue: concert.venue,
          city: concert.city,
          concertDate: concert.concertDate,
        },
      });
      if (existingConcert == null) {
        await db.concerts.create(concert);
      }
    }
    console.log('Seeding completed successfully.');
  } catch (err) {
    console.error('Seeding failed:', err);
    throw err;
  }
};

export default seed;
