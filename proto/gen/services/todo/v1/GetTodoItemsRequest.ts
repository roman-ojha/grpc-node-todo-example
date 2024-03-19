// Original file: proto/services/todo/v1/todo_service.proto

import type { User as _services_todo_v1_User, User__Output as _services_todo_v1_User__Output } from '../../../services/todo/v1/User';

export interface GetTodoItemsRequest {
  'user'?: (_services_todo_v1_User | null);
}

export interface GetTodoItemsRequest__Output {
  'user'?: (_services_todo_v1_User__Output);
}