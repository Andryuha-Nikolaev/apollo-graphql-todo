import { gql } from '@apollo/client';

export const ALL_TODO = gql`
  query AllTodos {
    todos: allTodos {
      id
      title
      completed
    }
  }
`;
