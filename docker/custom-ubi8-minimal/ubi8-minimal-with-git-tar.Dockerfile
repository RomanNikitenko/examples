FROM registry.access.redhat.com/ubi8-minimal:8.10-1782840767
RUN microdnf install -y git tar && microdnf clean all
