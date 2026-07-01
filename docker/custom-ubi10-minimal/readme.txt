podman build --arch amd64 -t ubi10-minimal -f ./docker/custom-ubi10-minimal/ubi10-minimal-with-git.Dockerfile .
podman tag ubi10-minimal quay.io/rnikitenko/ubi10-minimal:git
podman push quay.io/rnikitenko/ubi10-minimal:git