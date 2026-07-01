FROM registry.access.redhat.com/ubi9-minimal:9.8-1782797275
RUN microdnf install -y git && microdnf clean all
