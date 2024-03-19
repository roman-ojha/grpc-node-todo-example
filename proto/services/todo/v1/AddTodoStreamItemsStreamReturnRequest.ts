// Original file: proto/services/todo/v1/todo_service.proto

import type { TodoItemRequest as _services_todo_v1_TodoItemRequest, TodoItemRequest__Output as _services_todo_v1_TodoItemRequest__Output } from '../../../services/todo/v1/TodoItemRequest';

export interface AddTodoStreamItemsStreamReturnRequest {
  'item'?: (_services_todo_v1_TodoItemRequest | null);
}

export interface AddTodoStreamItemsStreamReturnRequest__Output {
  'item'?: (_services_todo_v1_TodoItemRequest__Output);
}
