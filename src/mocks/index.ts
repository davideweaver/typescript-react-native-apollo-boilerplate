import { SchemaLink } from 'apollo-link-schema';
import { addMockFunctionsToSchema, makeExecutableSchema } from 'graphql-tools';
import { buildClientSchema, printSchema } from 'graphql/utilities';

import * as fakerSchema from '../__generated__/blogServer.schema.json';
import config from '../lib/config';

export const isMocked = config.env === 'test' || config.env === 'dev';

const posts = [{
    createdAt: '2018-12-05T19:36:50.294Z',
    id: 1001,
    title: 'This is the first post',
}, {
    createdAt: '2018-12-06T08:22:00.000Z',
    id: 1002,
    title: 'This is the second',
}];

const mocks = {
    DateTime: () => new Date().toISOString(),
    Mutation: () => ({
        addPost: (_root: unknown, { title }: { title: string }) =>
            posts.push({ title, id: Date.now(), createdAt: new Date().toISOString() }),
    }),
    Query: () => ({
        allPosts: () => posts,
    }),
};

// tslint:disable-next-line:no-any
const typeDefs = printSchema(buildClientSchema(fakerSchema as any));
const schema = makeExecutableSchema({ typeDefs });
addMockFunctionsToSchema({ mocks, schema });

export const mockedLink = new SchemaLink({ schema });
