export interface Concert {
  id: number;
  venue: string;
  venueLink: string;
  city: string;
  country: string;
  ticketsLink: string;
  concertDate: Date;
}

export interface DeleteConcert {
  id: number;
}

export type CreateConcert = Omit<Concert, 'id'>;
