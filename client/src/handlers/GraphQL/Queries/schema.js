// Define Query Types based on the GraphQL Schema Defined On The Server

import {
  gql,
} from "@apollo/client";

// Get All Services
export const GET_SERVICES = gql`
  query getServices {
    getServices {
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
      created_at,
    }
  }
`;

// Get A Service
export const GET_SERVICE = gql`
  query getService($id: ID!) {
    getService(id: $id) {
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
      created_at,
    }
  }
`;
