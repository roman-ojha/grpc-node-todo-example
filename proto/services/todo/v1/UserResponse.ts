// Original file: proto/services/todo/v1/todo_service.proto

import type { Long } from '@grpc/proto-loader';

export interface UserResponse {
  'id'?: (number | string | Long);
  'email'?: (string);
  'password'?: (string);
}

export interface UserResponse__Output {
  'id'?: (Long);
  'email'?: (string);
  'password'?: (string);
}
