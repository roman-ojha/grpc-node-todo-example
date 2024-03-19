import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { TodoServiceClient as _services_todo_v1_TodoServiceClient, TodoServiceDefinition as _services_todo_v1_TodoServiceDefinition } from './services/todo/v1/TodoService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  services: {
    todo: {
      v1: {
        AddTodoItemRequest: MessageTypeDefinition
        AddTodoItemResponse: MessageTypeDefinition
        AddTodoStreamItemsRequest: MessageTypeDefinition
        AddTodoStreamItemsResponse: MessageTypeDefinition
        AddTodoStreamItemsStreamReturnRequest: MessageTypeDefinition
        AddTodoStreamItemsStreamReturnResponse: MessageTypeDefinition
        GetTodoItemsRequest: MessageTypeDefinition
        GetTodoItemsResponse: MessageTypeDefinition
        GetTodoItemsStreamRequest: MessageTypeDefinition
        GetTodoItemsStreamResponse: MessageTypeDefinition
        TodoItem: MessageTypeDefinition
        TodoService: SubtypeConstructor<typeof grpc.Client, _services_todo_v1_TodoServiceClient> & { service: _services_todo_v1_TodoServiceDefinition }
        User: MessageTypeDefinition
      }
    }
  }
}

