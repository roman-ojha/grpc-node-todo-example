// Original file: proto/services/todo/v1/todo_service.proto

import type { Long } from '@grpc/proto-loader';

export interface GetTodoItemsStreamRequest {
  'userId'?: (number | string | Long);
}

export interface GetTodoItemsStreamRequest__Output {
  'userId'?: (Long);
}
