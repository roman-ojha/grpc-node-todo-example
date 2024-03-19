#!/bin/bash

find proto -name "*.proto" -exec yarn proto-loader-gen-types --grpcLib=@grpc/grpc-js --outDir=proto/ {} +
# https://youtu.be/0cxEVcALoxc?t=1109
