import db from '../models/index';
import { type Concert, type CreateConcert } from '../types/Concerts';

export const resolvers = {
  Query: {
    getConcerts: async (): Promise<Concert[]> => {
      try {
        return await db.concerts.findAll();
      } catch (error) {
        console.error('Error fetching concerts:', error);
        return [];
      }
    },
    getConcertById: async (
      _: unknown,
      { id }: { id: number },
    ): Promise<Concert | null> => {
      try {
        return await db.concerts.findByPk(id);
      } catch (error) {
        console.error('Error fetching concert:', error);
        return null;
      }
    },
  },
  Mutation: {
    addConcert: async (
      _: unknown,
      { input }: { input: CreateConcert },
    ): Promise<Concert | null> => {
      try {
        const concert = await db.concerts.create(input);
        return concert;
      } catch (error) {
        console.error('Error adding concert:', error);
        return null;
      }
    },
    deleteConcert: async (_: unknown, { id }: { id: number }) => {
      try {
        await db.concerts.destroy({ where: { id } });
      } catch (error) {
        console.error('Error deleting concert:', error);
        return false;
      }
    },
  },
};
