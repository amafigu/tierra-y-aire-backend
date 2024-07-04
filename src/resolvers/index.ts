import db from "../models/index";

interface ConcertArgs {
    venue?: string;
    venueLink?: string;
    city?: string;
    country?: string;
    ticketsLink?: string;
    concertDate?: Date;
}

export const resolvers = {
    Query: {
        getConcerts: async () => {
            try {
                return await db.concerts.findAll();
            } catch (error) {
                console.error('Error fetching concerts:', error);
                return [];
            }
        },
        getConcertById: async (_: any, { id }: { id: number }) => {
            try {
                return await db.concerts.findByPk(id);
            } catch (error) {
                console.error('Error fetching concert:', error);
                return null;
            }
        }
    },
    Mutation: {
        addConcert: async (_: any, args: ConcertArgs) => {
            try {
                const concert = await db.concerts.create(args as any);
                return concert;
            } catch (error) {
                console.error('Error adding concert:', error);
                return null;
            }
        }
    }
};
