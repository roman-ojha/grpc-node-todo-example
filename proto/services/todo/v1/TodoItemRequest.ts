// Original file: proto/services/todo/v1/todo_service.proto

import type { Long } from '@grpc/proto-loader';

export interface TodoItemRequest {
  'text'?: (string);
  'userId'?: (number | string | Long);
}

export interface TodoItemRequest__Output {
  'text'?: (string);
  'userId'?: (Long);
}
