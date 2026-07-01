FROM registry.access.redhat.com/ubi10-minimal:1782799082
RUN microdnf install -y git && microdnf clean all
