import { gql } from '@apollo/client';

export const ME = gql`
    query me {
    me {
        username
        savedBooks {
        bookId
        title
        link
        image
        description
        authors
        }
    }
    }
`;