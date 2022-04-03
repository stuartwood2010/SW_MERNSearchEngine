import { gql } from '@apollo/client';

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
    token
    user {
      username
    }
  }
}
`;

export const LOGIN = gql`
    mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
    token
    user {
      username
    }
  }
}
`;

export const SAVE_BOOK = gql`
    mutation saveBook($authors: [String], $description: String!, $title: String!, $bookId: String!, $image: String, $link: String) {
    saveBook(authors: $authors, description: $description, title: $title, bookId: $bookId, image: $image, link: $link) {
    username
    savedBooks {
      bookId
    }
  }
}
`;

export const REMOVE_BOOK = gql`
    mutation removeBook($bookId: String!) {
    removeBook(bookId: $bookId) {
    username
    savedBooks {
      bookId
    }
  }
}
`;