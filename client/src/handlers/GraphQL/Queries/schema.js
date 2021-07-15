// Define Query Types based on the GraphQL Schema Defined On The Server

import {
  gql,
} from "@apollo/client";

// Get All Services In Database
export const GET_SERVICES_FROM_DATABASE = gql`
  query getServicesFromDatabase {
    getServicesFromDatabase {
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

// Get All Services During System's Runtime
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

// Get Equipment Lists
export const GET_EQUIPMENT_LISTS = gql`
  query getEquipmentLists {
    getEquipmentLists {
      name
      description
      type
      photo
      dateOfPublish
      barcode
      bookedTime
    }
  }
`;
