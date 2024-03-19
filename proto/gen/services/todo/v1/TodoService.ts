// Original file: proto/services/todo/v1/todo_service.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { AddTodoItemRequest as _services_todo_v1_AddTodoItemRequest, AddTodoItemRequest__Output as _services_todo_v1_AddTodoItemRequest__Output } from '../../../services/todo/v1/AddTodoItemRequest';
import type { AddTodoItemResponse as _services_todo_v1_AddTodoItemResponse, AddTodoItemResponse__Output as _services_todo_v1_AddTodoItemResponse__Output } from '../../../services/todo/v1/AddTodoItemResponse';
import type { AddTodoStreamItemsRequest as _services_todo_v1_AddTodoStreamItemsRequest, AddTodoStreamItemsRequest__Output as _services_todo_v1_AddTodoStreamItemsRequest__Output } from '../../../services/todo/v1/AddTodoStreamItemsRequest';
import type { AddTodoStreamItemsResponse as _services_todo_v1_AddTodoStreamItemsResponse, AddTodoStreamItemsResponse__Output as _services_todo_v1_AddTodoStreamItemsResponse__Output } from '../../../services/todo/v1/AddTodoStreamItemsResponse';
import type { AddTodoStreamItemsStreamReturnRequest as _services_todo_v1_AddTodoStreamItemsStreamReturnRequest, AddTodoStreamItemsStreamReturnRequest__Output as _services_todo_v1_AddTodoStreamItemsStreamReturnRequest__Output } from '../../../services/todo/v1/AddTodoStreamItemsStreamReturnRequest';
import type { AddTodoStreamItemsStreamReturnResponse as _services_todo_v1_AddTodoStreamItemsStreamReturnResponse, AddTodoStreamItemsStreamReturnResponse__Output as _services_todo_v1_AddTodoStreamItemsStreamReturnResponse__Output } from '../../../services/todo/v1/AddTodoStreamItemsStreamReturnResponse';
import type { GetTodoItemsRequest as _services_todo_v1_GetTodoItemsRequest, GetTodoItemsRequest__Output as _services_todo_v1_GetTodoItemsRequest__Output } from '../../../services/todo/v1/GetTodoItemsRequest';
import type { GetTodoItemsResponse as _services_todo_v1_GetTodoItemsResponse, GetTodoItemsResponse__Output as _services_todo_v1_GetTodoItemsResponse__Output } from '../../../services/todo/v1/GetTodoItemsResponse';
import type { GetTodoItemsStreamRequest as _services_todo_v1_GetTodoItemsStreamRequest, GetTodoItemsStreamRequest__Output as _services_todo_v1_GetTodoItemsStreamRequest__Output } from '../../../services/todo/v1/GetTodoItemsStreamRequest';
import type { GetTodoItemsStreamResponse as _services_todo_v1_GetTodoItemsStreamResponse, GetTodoItemsStreamResponse__Output as _services_todo_v1_GetTodoItemsStreamResponse__Output } from '../../../services/todo/v1/GetTodoItemsStreamResponse';

export interface TodoServiceClient extends grpc.Client {
  AddTodoItem(argument: _services_todo_v1_AddTodoItemRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_services_todo_v1_AddTodoItemResponse__Output>): grpc.ClientUnaryCall;
  AddTodoItem(argument: _services_todo_v1_AddTodoItemRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_services_todo_v1_AddTodoItemResponse__Output>): grpc.ClientUnaryCall;
  AddTodoItem(argument: _services_todo_v1_AddTodoItemRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_services_todo_v1_AddTodoItemResponse__Output>): grpc.ClientUnaryCall;
  AddTodoItem(argument: _services_todo_v1_AddTodoItemRequest, callback: grpc.requestCallback<_services_todo_v1_AddTodoItemResponse__Output>): grpc.ClientUnaryCall;
  addTodoItem(argument: _services_todo_v1_AddTodoItemRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_services_todo_v1_AddTodoItemResponse__Output>): grpc.ClientUnaryCall;
  addTodoItem(argument: _services_todo_v1_AddTodoItemRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_services_todo_v1_AddTodoItemResponse__Output>): grpc.ClientUnaryCall;
  addTodoItem(argument: _services_todo_v1_AddTodoItemRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_services_todo_v1_AddTodoItemResponse__Output>): grpc.ClientUnaryCall;
  addTodoItem(argument: _services_todo_v1_AddTodoItemRequest, callback: grpc.requestCallback<_services_todo_v1_AddTodoItemResponse__Output>): grpc.ClientUnaryCall;
  
  AddTodoStreamItems(metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_services_todo_v1_AddTodoStreamItemsResponse__Output>): grpc.ClientWritableStream<_services_todo_v1_AddTodoStreamItemsRequest>;
  AddTodoStreamItems(metadata: grpc.Metadata, callback: grpc.requestCallback<_services_todo_v1_AddTodoStreamItemsResponse__Output>): grpc.ClientWritableStream<_services_todo_v1_AddTodoStreamItemsRequest>;
  AddTodoStreamItems(options: grpc.CallOptions, callback: grpc.requestCallback<_services_todo_v1_AddTodoStreamItemsResponse__Output>): grpc.ClientWritableStream<_services_todo_v1_AddTodoStreamItemsRequest>;
  AddTodoStreamItems(callback: grpc.requestCallback<_services_todo_v1_AddTodoStreamItemsResponse__Output>): grpc.ClientWritableStream<_services_todo_v1_AddTodoStreamItemsRequest>;
  addTodoStreamItems(metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_services_todo_v1_AddTodoStreamItemsResponse__Output>): grpc.ClientWritableStream<_services_todo_v1_AddTodoStreamItemsRequest>;
  addTodoStreamItems(metadata: grpc.Metadata, callback: grpc.requestCallback<_services_todo_v1_AddTodoStreamItemsResponse__Output>): grpc.ClientWritableStream<_services_todo_v1_AddTodoStreamItemsRequest>;
  addTodoStreamItems(options: grpc.CallOptions, callback: grpc.requestCallback<_services_todo_v1_AddTodoStreamItemsResponse__Output>): grpc.ClientWritableStream<_services_todo_v1_AddTodoStreamItemsRequest>;
  addTodoStreamItems(callback: grpc.requestCallback<_services_todo_v1_AddTodoStreamItemsResponse__Output>): grpc.ClientWritableStream<_services_todo_v1_AddTodoStreamItemsRequest>;
  
  AddTodoStreamItemsStreamReturn(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_services_todo_v1_AddTodoStreamItemsStreamReturnRequest, _services_todo_v1_AddTodoStreamItemsStreamReturnResponse__Output>;
  AddTodoStreamItemsStreamReturn(options?: grpc.CallOptions): grpc.ClientDuplexStream<_services_todo_v1_AddTodoStreamItemsStreamReturnRequest, _services_todo_v1_AddTodoStreamItemsStreamReturnResponse__Output>;
  addTodoStreamItemsStreamReturn(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_services_todo_v1_AddTodoStreamItemsStreamReturnRequest, _services_todo_v1_AddTodoStreamItemsStreamReturnResponse__Output>;
  addTodoStreamItemsStreamReturn(options?: grpc.CallOptions): grpc.ClientDuplexStream<_services_todo_v1_AddTodoStreamItemsStreamReturnRequest, _services_todo_v1_AddTodoStreamItemsStreamReturnResponse__Output>;
  
  GetTodoItems(argument: _services_todo_v1_GetTodoItemsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_services_todo_v1_GetTodoItemsResponse__Output>): grpc.ClientUnaryCall;
  GetTodoItems(argument: _services_todo_v1_GetTodoItemsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_services_todo_v1_GetTodoItemsResponse__Output>): grpc.ClientUnaryCall;
  GetTodoItems(argument: _services_todo_v1_GetTodoItemsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_services_todo_v1_GetTodoItemsResponse__Output>): grpc.ClientUnaryCall;
  GetTodoItems(argument: _services_todo_v1_GetTodoItemsRequest, callback: grpc.requestCallback<_services_todo_v1_GetTodoItemsResponse__Output>): grpc.ClientUnaryCall;
  getTodoItems(argument: _services_todo_v1_GetTodoItemsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_services_todo_v1_GetTodoItemsResponse__Output>): grpc.ClientUnaryCall;
  getTodoItems(argument: _services_todo_v1_GetTodoItemsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_services_todo_v1_GetTodoItemsResponse__Output>): grpc.ClientUnaryCall;
  getTodoItems(argument: _services_todo_v1_GetTodoItemsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_services_todo_v1_GetTodoItemsResponse__Output>): grpc.ClientUnaryCall;
  getTodoItems(argument: _services_todo_v1_GetTodoItemsRequest, callback: grpc.requestCallback<_services_todo_v1_GetTodoItemsResponse__Output>): grpc.ClientUnaryCall;
  
  GetTodoItemsStream(argument: _services_todo_v1_GetTodoItemsStreamRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_services_todo_v1_GetTodoItemsStreamResponse__Output>;
  GetTodoItemsStream(argument: _services_todo_v1_GetTodoItemsStreamRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_services_todo_v1_GetTodoItemsStreamResponse__Output>;
  getTodoItemsStream(argument: _services_todo_v1_GetTodoItemsStreamRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_services_todo_v1_GetTodoItemsStreamResponse__Output>;
  getTodoItemsStream(argument: _services_todo_v1_GetTodoItemsStreamRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_services_todo_v1_GetTodoItemsStreamResponse__Output>;
  
}

export interface TodoServiceHandlers extends grpc.UntypedServiceImplementation {
  AddTodoItem: grpc.handleUnaryCall<_services_todo_v1_AddTodoItemRequest__Output, _services_todo_v1_AddTodoItemResponse>;
  
  AddTodoStreamItems: grpc.handleClientStreamingCall<_services_todo_v1_AddTodoStreamItemsRequest__Output, _services_todo_v1_AddTodoStreamItemsResponse>;
  
  AddTodoStreamItemsStreamReturn: grpc.handleBidiStreamingCall<_services_todo_v1_AddTodoStreamItemsStreamReturnRequest__Output, _services_todo_v1_AddTodoStreamItemsStreamReturnResponse>;
  
  GetTodoItems: grpc.handleUnaryCall<_services_todo_v1_GetTodoItemsRequest__Output, _services_todo_v1_GetTodoItemsResponse>;
  
  GetTodoItemsStream: grpc.handleServerStreamingCall<_services_todo_v1_GetTodoItemsStreamRequest__Output, _services_todo_v1_GetTodoItemsStreamResponse>;
  
}

export interface TodoServiceDefinition extends grpc.ServiceDefinition {
  AddTodoItem: MethodDefinition<_services_todo_v1_AddTodoItemRequest, _services_todo_v1_AddTodoItemResponse, _services_todo_v1_AddTodoItemRequest__Output, _services_todo_v1_AddTodoItemResponse__Output>
  AddTodoStreamItems: MethodDefinition<_services_todo_v1_AddTodoStreamItemsRequest, _services_todo_v1_AddTodoStreamItemsResponse, _services_todo_v1_AddTodoStreamItemsRequest__Output, _services_todo_v1_AddTodoStreamItemsResponse__Output>
  AddTodoStreamItemsStreamReturn: MethodDefinition<_services_todo_v1_AddTodoStreamItemsStreamReturnRequest, _services_todo_v1_AddTodoStreamItemsStreamReturnResponse, _services_todo_v1_AddTodoStreamItemsStreamReturnRequest__Output, _services_todo_v1_AddTodoStreamItemsStreamReturnResponse__Output>
  GetTodoItems: MethodDefinition<_services_todo_v1_GetTodoItemsRequest, _services_todo_v1_GetTodoItemsResponse, _services_todo_v1_GetTodoItemsRequest__Output, _services_todo_v1_GetTodoItemsResponse__Output>
  GetTodoItemsStream: MethodDefinition<_services_todo_v1_GetTodoItemsStreamRequest, _services_todo_v1_GetTodoItemsStreamResponse, _services_todo_v1_GetTodoItemsStreamRequest__Output, _services_todo_v1_GetTodoItemsStreamResponse__Output>
}
