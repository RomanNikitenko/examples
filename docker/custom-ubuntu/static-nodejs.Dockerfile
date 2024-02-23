FROM ubuntu:latest
RUN apt-get update && \
    apt-get install -y wget bash tar python3 g++ make python3-pip

ARG PLATFORM="linux"
ARG NODE_LOCATION="https://nodejs.org"
ARG NODE_VERSION="18.18.2"
ARG NODE_ARCH="x64"

RUN { \
        if [ -n "$NODE_ARCH" ]; then \
            NODE_URL="${NODE_LOCATION}/dist/v${NODE_VERSION}/node-v${NODE_VERSION}.tar.gz"; \
            echo "Downloading Node.js from ${NODE_URL}"; \
            wget -q "${NODE_URL}"; \
            tar -xf node-v${NODE_VERSION}.tar.gz; \
            mv node-v${NODE_VERSION} nodejs; \
        else mkdir -p nodejs/bin && cp /usr/bin/node nodejs/bin/node; \
        fi; \
       } \
    && cd nodejs \
    && ./configure --prefix=/checode-compilation/customNode --fully-static --enable-static \
    && make -j$(nproc) \
    && make install  