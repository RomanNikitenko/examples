# syntax=docker/dockerfile:1.3-labs

FROM ubuntu:20.04
RUN apt-get update && \
    apt-get install -y curl wget bash tar  && \
    apt-get install -y gnupg

RUN curl -sSLO "https://nodejs.org/download/release/v16.20.0/node-v16.20.0-linux-x64.tar.gz"

RUN tar -xf node-v16.20.0-linux-x64.tar.gz

RUN NODE="node-v16.20.0-linux-x64/bin/node"

ENV VSCODE_NODEJS_RUNTIME_DIR="${NODE}"

# add a custom entrypoint
COPY --chmod=755 entrypoint.sh /

USER 10001
ENTRYPOINT [ "/entrypoint.sh" ]
CMD ["tail", "-f", "/dev/null"]
