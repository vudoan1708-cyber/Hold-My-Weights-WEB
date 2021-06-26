import {
  useQuery,
  useMutation,
} from "@apollo/client";

// GraphQL Schema Definition
import { GET_SERVICES, GET_SERVICE } from '@/handlers/GraphQL/Queries/schema';
import { CREATE_SERVICE, DELETE_SERVICE } from '@/handlers/GraphQL/Mutations/schema';

// Queries
export function GetServices() {
  const { loading, error, data } = useQuery(GET_SERVICES)
  return { loading, error, data };
}

export function GetService(serviceID) {
  const { loading, error, data } = useQuery(GET_SERVICE, { variables: { id: serviceID } })
  return { loading, error, data };
}

// Mutations
export function CreateService(serviceInput) {
  const { loading, error, data } = useMutation(CREATE_SERVICE, { variables: { input: serviceInput } })
  return { loading, error, data };
}

export function DeleteService(deleteServiceInput) {
  const { loading, error, data } = useMutation(DELETE_SERVICE, { variables: { input: deleteServiceInput } })
  return { loading, error, data };
}
