podman build --arch amd64 -t ubi9-minimal -f ./docker/custom-ubi9-minimal/ubi9-minimal-with-git.Dockerfile .
podman tag ubi9-minimal quay.io/rnikitenko/ubi9-minimal:git
podman push quay.io/rnikitenko/ubi9-minimal:git