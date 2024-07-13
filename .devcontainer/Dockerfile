FROM mcr.microsoft.com/devcontainers/cpp:ubuntu-24.04

# Update and install necessary packages
RUN apt-get update && apt-get upgrade -y && apt-get autoremove -y \
    && apt-get install -y --no-install-recommends --no-install-suggests \
       build-essential \
       iwyu \
       cmake \
       ninja-build \
       libssl-dev \
       libcurl4-openssl-dev \
       libprotobuf-dev \
       protobuf-compiler \
       libgmock-dev \
       libgtest-dev \
       libbenchmark-dev \
       git \
       curl

# Clone and install gRPC
WORKDIR /tmp
RUN git clone -b v1.65.0 https://github.com/grpc/grpc.git \
    && cd grpc \
    && git submodule update --init \
    && mkdir -p cmake/build \
    && cd cmake/build \
    && cmake -GNinja -DgRPC_INSTALL=ON \
        -DgRPC_BUILD_TESTS=OFF -DgRPC_PROTOBUF_PROVIDER=package \
        -DgRPC_PROTOBUF_PACKAGE_TYPE=CONFIG \
        -DgRPC_ZLIB_PROVIDER=package \
        -DgRPC_CARES_PROVIDER=package \
        -DgRPC_SSL_PROVIDER=package ../.. \
    && ninja install

# Install Abseil-cpp
WORKDIR /tmp
RUN git clone https://github.com/abseil/abseil-cpp.git \
    && cd abseil-cpp \
    && mkdir build \
    && cd build \
    && cmake -DCMAKE_CXX_STANDARD=11 -DCMAKE_POSITION_INDEPENDENT_CODE=TRUE -DCMAKE_BUILD_TYPE=Release .. \
    && make -j \
    && make install

# Clean up
WORKDIR /
RUN rm -rf /tmp/grpc /tmp/abseil-cpp \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Check the installation
RUN pwd && ls -la
