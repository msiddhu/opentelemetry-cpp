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
       libbenchmark-dev
