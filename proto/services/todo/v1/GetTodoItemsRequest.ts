// Original file: proto/services/todo/v1/todo_service.proto

import type { Long } from '@grpc/proto-loader';

export interface GetTodoItemsRequest {
  'userId'?: (number | string | Long);
}

export interface GetTodoItemsRequest__Output {
  'userId'?: (Long);
}
