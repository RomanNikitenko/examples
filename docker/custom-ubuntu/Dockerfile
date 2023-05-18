# syntax=docker/dockerfile:1.3-labs

FROM ubuntu:20.04
RUN apt-get update && \
    apt-get install -y curl && \
    apt-get install -y gnupg

RUN curl -fsSL https://deb.nodesource.com/gpgkey/nodesource.gpg.key | apt-key add -

RUN echo "deb https://deb.nodesource.com/node_16.x focal main" > /etc/apt/sources.list.d/nodesource.list

RUN apt-get update

RUN apt-get install -y nodejs

RUN node -v

ENV VSCODE_NODEJS_RUNTIME_DIR="/usr/bin"

# add a custom entrypoint
COPY --chmod=755 entrypoint.sh /

USER 10001
ENTRYPOINT [ "/entrypoint.sh" ]
CMD ["tail", "-f", "/dev/null"]
