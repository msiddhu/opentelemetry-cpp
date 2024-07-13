FROM mcr.microsoft.com/devcontainers/cpp:ubuntu-24.04

# REFRESH!
RUN apt-get update && apt-get upgrade -y && apt-get autoremove -y

# Install additional packages

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
