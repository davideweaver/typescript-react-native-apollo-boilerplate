import gql from 'graphql-tag';
import React from 'react';
import { Query, QueryProps } from 'react-apollo';

import { BlogServer } from '../__generated__/blogServer';
import { Omit } from '../typings';

export interface IData extends Pick<BlogServer.Query, 'posts'> { }
export interface IVariables extends BlogServer.PostsQueryArgs { }
export interface IProps extends Omit<QueryProps<IData, IVariables>, 'query'> { }

const postsQuery = gql`
    query postsQuery($count: Int) {
        posts(count: $count) {
            id, title, createdAt, author {
                id
            }
        }
    }
`;

const PostsQuery = (props: IProps) => (
    <Query {...props} query={postsQuery} />
);

export default PostsQuery;
