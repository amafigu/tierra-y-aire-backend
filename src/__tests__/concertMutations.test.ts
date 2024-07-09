import { execSync } from 'child_process';
import { resolvers } from '../graphql/resolvers';
import db from '../models/index';
import { type CreateConcert } from '../types/Concerts';

describe('Resolvers', () => {
  beforeAll(async () => {
    try {
      await db.sequelize.authenticate();
      execSync('NODE_ENV=test npx sequelize-cli db:migrate', {
        stdio: 'inherit',
      });
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  });

  afterAll(async () => {
    await db.sequelize.close();
  });

  describe('Mutation', () => {
    it('should add and then delete a new concert', async () => {
      const newConcert: CreateConcert = {
        venue: 'Venue',
        venueLink: 'Link',
        city: 'City',
        country: 'Country',
        ticketsLink: 'Tickets Link',
        concertDate: new Date('2025-01-01'),
      };

      const addedConcert = await resolvers.Mutation.addConcert(null, {
        input: newConcert,
      });
      if (addedConcert == null) throw new Error('Failed to add concert');

      expect(addedConcert).toHaveProperty('id');
      expect(addedConcert).toHaveProperty('venue', 'Venue');

      const allConcertsAfterAdd = await resolvers.Query.getConcerts();
      expect(
        allConcertsAfterAdd.some(
          (concert) =>
            concert.venue === 'Venue' &&
            concert.city === 'City' &&
            concert.concertDate.toISOString() ===
              newConcert.concertDate.toISOString() &&
            concert.ticketsLink === 'Tickets Link',
        ),
      ).toBe(true);

      if (addedConcert.id !== 0) {
        await resolvers.Mutation.deleteConcert(null, { id: addedConcert.id });
        const allConcertsAfterDelete = await resolvers.Query.getConcerts();
        expect(
          allConcertsAfterDelete.some(
            (concert) => concert.id === addedConcert.id,
          ),
        ).toBe(false);
      } else {
        throw new Error('Failed to add concert');
      }
    });
  });
});
