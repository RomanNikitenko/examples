FROM registry.access.redhat.com/ubi9:9.3-1476
USER root
RUN yum install -y brotli-devel