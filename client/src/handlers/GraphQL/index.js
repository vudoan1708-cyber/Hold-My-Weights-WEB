import {
  useQuery,
  useMutation,
} from "@apollo/client";

// GraphQL Schema Definitions
import { GET_SERVICES, GET_SERVICE } from '@/handlers/GraphQL/Queries/schema';
import { CREATE_SERVICE, DELETE_SERVICE } from '@/handlers/GraphQL/Mutations/schema';

// Queries
export function GetServices() {
  const { loading, error, data } = useQuery(GET_SERVICES);
  return { loading, error, data };
}

export function GetService(serviceID) {
  const { loading, error, data } = useQuery(GET_SERVICE, { variables: { id: serviceID } });
  return { loading, error, data };
}

// Mutations
// Invocation of The Mutations 
export function InvokeCreateService() {
  const [createService] = useMutation(CREATE_SERVICE);
  return createService;
}
export function InvokeDeleteService() {
  const [deleteService] = useMutation(DELETE_SERVICE);
  return deleteService;
}

// Execution of The Invoked Mutations
export function ExecuteCreateService(createService, input) {
  createService({ variables: { input: input } });
}

export function ExecuteDeleteService(deleteService, input) {
  deleteService({ variables: { input: input } });
}
