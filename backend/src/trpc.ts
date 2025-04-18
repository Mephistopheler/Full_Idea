import { initTRPC } from '@trpc/server';

const ideas = [
  { nick: 'cool-idea-nick111', name: 'Idea 1', description: 'Description od idea 1...' },
  { nick: 'cool-idea-nick222', name: 'Idea 2', description: 'Description od idea 2...' },
  { nick: 'cool-idea-nick333', name: 'Idea 3', description: 'Description od idea 3...' },
  { nick: 'cool-idea-nick4444', name: 'Idea 4', description: 'Description od idea 4...' },
  { nick: 'cool-idea-nick555', name: 'Idea 5', description: 'Description od idea 5...' },
];

const trpc = initTRPC.create();

export const trpcRouter = trpc.router({
  getIdeas: trpc.procedure.query(() => {
    return { ideas };
  }),
});

export type TrpcRouter = typeof trpcRouter;
