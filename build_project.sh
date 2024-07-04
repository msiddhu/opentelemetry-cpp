#!/bin/bash

# Define the build directory
BUILD_DIR="build"

# Delete the build directory if it exists
if [ -d "$BUILD_DIR" ]; then
  echo "Deleting existing build directory..."
  rm -rf "$BUILD_DIR"
fi

# Create the build directory
echo "Creating build directory..."
mkdir "$BUILD_DIR"

# Change to the build directory
cd "$BUILD_DIR"

# Run cmake with the specified options and enable export of compile commands
echo "Running cmake..."
cmake .. \
  -DWITH_OTLP_HTTP=ON \
  -DWITH_OTLP_FILE=ON \
  -DWITH_OTLP_GRPC=ON \
  -DWITH_PROMETHEUS=ON \
  -DWITH_ZIPKIN=ON \
  -DWITH_ABSEIL=ON \
  -DWITH_ELASTICSEARCH=ON \
  -DWITH_OTLP_HTTP_COMPRESSION=ON \
  -DWITH_EXAMPLES=ON \
  -DWITH_EXAMPLES_HTTP=ON \
  -DBUILD_W3CTRACECONTEXT_TEST=ON \
  -DWITH_METRICS_EXEMPLAR_PREVIEW=ON \
  -DWITH_ASYNC_EXPORT_PREVIEW=ON \
  -DWITH_OTLP_GRPC_SSL_MTLS_PREVIEW=ON \
  -DCMAKE_EXPORT_COMPILE_COMMANDS=ON

# Check if cmake was successful
if [ $? -eq 0 ]; then
  echo "CMake configuration successful."
else
  echo "CMake configuration failed."
  exit 1
fi

# Introduce a time delay before building
DELAY_SECONDS=5
echo "Waiting for $DELAY_SECONDS seconds before starting the build..."
sleep $DELAY_SECONDS

# Get the number of available processors
NUM_PROCESSORS=$(nproc)

# Build the project using all available processors
echo "Building the project with $NUM_PROCESSORS processors..."
cmake --build . --target all -- -j$NUM_PROCESSORS

cd ..

if [ $? -eq 0 ]; then
  echo "Build successful."
else
  echo "Build failed."
  exit 1
fi



echo "Done."
