// Original file: proto/services/todo/v1/todo_service.proto

import type { Long } from '@grpc/proto-loader';

export interface TodoItemResponse {
  'id'?: (number | string | Long);
  'text'?: (string);
  'userId'?: (number | string | Long);
  'isCompleted'?: (boolean);
}

export interface TodoItemResponse__Output {
  'id'?: (Long);
  'text'?: (string);
  'userId'?: (Long);
  'isCompleted'?: (boolean);
}
