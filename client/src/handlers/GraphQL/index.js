import {
  useQuery,
  useMutation,
  useSubscription,
} from "@apollo/client";

// GraphQL Schema Definitions
import {
  GET_SERVICES_FROM_DATABASE,
  GET_SERVICES,
  GET_SERVICE,
  GET_EQUIPMENT_LISTS,
} from '@/handlers/GraphQL/Queries/schema';
import { CREATE_SERVICE, DELETE_SERVICE } from '@/handlers/GraphQL/Mutations/schema';
import { UPDATE_ADDED_SERVICE } from '@/handlers/GraphQL/Subscriptions/schema';

// Queries
export function GetServicesFromDatabase() {
  const { loading, error, data } = useQuery(GET_SERVICES_FROM_DATABASE);
  return { loading, error, data };
}

export function GetServices() {
  const { loading, error, data } = useQuery(GET_SERVICES);
  return { loading, error, data };
}

export function GetService(serviceID) {
  const { loading, error, data } = useQuery(GET_SERVICE, { variables: { id: serviceID } });
  return { loading, error, data };
}

export function GetEquipmentLists() {
  const { loading, error, data } = useQuery(GET_EQUIPMENT_LISTS);
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

// Subscriptions
export function UpdateService() {
  const { loading, data } = useSubscription(UPDATE_ADDED_SERVICE);
  return { loading, data };
}
