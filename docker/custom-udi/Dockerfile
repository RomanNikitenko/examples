# syntax=docker/dockerfile:1.3-labs

FROM quay.io/devfile/universal-developer-image:ubi8-latest

# add a custom entrypoint
COPY --chmod=755 entrypoint.sh /

USER 10001
ENTRYPOINT [ "/entrypoint.sh" ]
CMD ["tail", "-f", "/dev/null"]