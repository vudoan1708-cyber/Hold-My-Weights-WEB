// Define Mutation Types based on the GraphQL Schema Defined On The Server

import {
  gql,
} from "@apollo/client";

// Add / Create A Service
export const CREATE_SERVICE = gql`
  mutation createService($input: CreateServiceInput!) {
  createService(input: $input) {
    id,
    user {
      user_id,
      name,
      email,
      dateOfBirth
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

export const DELETE_SERVICE = gql`
  mutation deleteService($input: DeleteServiceInput!) {
    deleteService(input: $input) {
      id,
      user {
        user_id,
        name,
        email,
        dateOfBirth
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

// Edit Individual Fields of A User
export const EDIT_USERNAME = gql`
  mutation editUserName($id: ID!, $value: String!) {
    editUserName(id: $id, value: $value) {
      id,
      user {
        user_id,
        name,
      },
    }
  }
`;
export const EDIT_USER_EMAIL = gql`
  mutation editUserEmail($id: ID!, $value: String!) {
    editUserEmail(id: $id, value: $value) {
      id,
      user {
        user_id,
        email,
      },
    }
  }
`;
export const EDIT_USER_DOB = gql`
  mutation editUserDateOfBirth($id: ID!, $value: DateTime!) {
    editUserDateOfBirth(id: $id, value: $value) {
      id,
      user {
        user_id,
        dateOfBirth,
      },
    }
  }
`;

// Edit The Whole User Field
export const EDIT_USER_DETAIL = gql`
  mutation editUserDetail($id: ID!, $input: UserInput!) {
    editUserDetail(id: $id, input: $input) {
      id,
      user {
        user_id,
        name,
        email,
        dateOfBirth,
      },
    }
  }
`;

// Edit The Equipment Field
export const EDIT_BOOKED_EQUIPMENT = gql`
  mutation editEquipment($id: ID!, $input: BookingSystemInput!) {
    editEquipment(id: $id, input: $input) {
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

// Edit Multiple Fields (User + Equipment)
export const EDIT_MULTIPLE_FIELDS = gql`
  mutation editMultipleFields($id: ID!, $options: [String!]!, $input: CreateServiceInput!) {
    editMultipleFields(id: $id, options: $options, input: $input) {
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
