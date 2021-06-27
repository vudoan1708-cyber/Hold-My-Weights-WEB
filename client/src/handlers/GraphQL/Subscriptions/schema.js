// Define Query Types based on the GraphQL Schema Defined On The Server

import {
  gql,
} from "@apollo/client";

export const UPDATE_ADDED_SERVICE = gql`
  subscription updateServiceAdded {
    updateServiceAdded {
      id,
      user {
        user_id,
        name,
        email,
        dateOfBirth,
      },
      equipment {
        booked {
          name,
          description,
          type,
          dateOfPublish,
        },
        time {
          expected_time,
          finishing_time,
        },
      },
    }
  }
`;
