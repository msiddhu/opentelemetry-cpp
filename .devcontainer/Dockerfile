FROM mcr.microsoft.com/devcontainers/cpp:ubuntu-24.04

# REFRESH!
RUN apt-get update && apt-get upgrade -y && apt-get autoremove -y

# Install additional packages

RUN pwd && ls -la

RUN sudo apt install -y --no-install-recommends --no-install-suggests \
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
          libbenchmark-dev

# Install grpc from source code (https://grpc.io/docs/languages/cpp/quickstart/) also linking the protobuf library which is installed above. \
# This is a workaround for the grpc package in the apt repository which is not compatible with the protobuf package in the apt repository.


#Install abseil-cpp from ci/install-abseil.sh



# Clone the grpc repository from github
WORKDIR /tmp
# Clone the grpc repository from github
RUN git clone -b v1.65.0 https://github.com/grpc/grpc \
    && cd grpc \
    && git submodule update --init \

RUN mkdir -p cmake/build && cd cmake/build && cmake -GNinja -DgRPC_INSTALL=ON -DgRPC_BUILD_TESTS=OFF -DgRPC_PROTOBUF_PROVIDER=package -DgRPC_PROTOBUF_PACKAGE_TYPE=CONFIG -DgRPC_ZLIB_PROVIDER=package -DgRPC_CARES_PROVIDER=package -DgRPC_SSL_PROVIDER=package ../.. && ninja install
