import { execSync } from 'child_process';
import { resolvers } from '../graphql/resolvers';
import db from '../models/index';
import seed from '../seeders/concertsSeeder';

describe('Resolvers', () => {
  beforeAll(async () => {
    try {
      await db.sequelize.authenticate();
      execSync('NODE_ENV=development npx sequelize-cli db:migrate', {
        stdio: 'inherit',
      });
    } catch (error) {
      console.error('Can notconnect to db:', error);
    }
  });

  beforeEach(async () => {
    await seed();
  });

  afterAll(async () => {
    await db.sequelize.close();
  });

  describe('Query', () => {
    it('does fetch all concerts', async () => {
      const result = await resolvers.Query.getConcerts();
      expect(result.length).toBeGreaterThan(0);
      expect(result[0]).toHaveProperty('venue');
      expect(result[0]).toHaveProperty('venueLink');
      expect(result[0]).toHaveProperty('city');
      expect(result[0]).toHaveProperty('country');
      expect(result[0]).toHaveProperty('ticketsLink');
      expect(result[0]).toHaveProperty('concertDate');
    });

    it('does fetch a concert by ID', async () => {
      const concerts = await resolvers.Query.getConcerts();
      const firstConcertId = concerts[0]?.id;

      if (firstConcertId != null) {
        const result = await resolvers.Query.getConcertById(null, {
          id: firstConcertId,
        });
        expect(result).not.toBeNull();
        expect(result).toHaveProperty('venue');
        expect(result).toHaveProperty('venueLink');
        expect(result).toHaveProperty('city');
        expect(result).toHaveProperty('country');
        expect(result).toHaveProperty('ticketsLink');
        expect(result).toHaveProperty('concertDate');
      } else {
        throw new Error('Can not fetch concert');
      }
    });
  });
});
