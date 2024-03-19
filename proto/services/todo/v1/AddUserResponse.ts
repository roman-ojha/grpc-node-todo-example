// Original file: proto/services/todo/v1/todo_service.proto

import type { UserResponse as _services_todo_v1_UserResponse, UserResponse__Output as _services_todo_v1_UserResponse__Output } from '../../../services/todo/v1/UserResponse';

export interface AddUserResponse {
  'code'?: (number);
  'message'?: (string);
  'user'?: (_services_todo_v1_UserResponse | null);
}

export interface AddUserResponse__Output {
  'code'?: (number);
  'message'?: (string);
  'user'?: (_services_todo_v1_UserResponse__Output);
}
