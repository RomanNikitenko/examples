git
podman build --arch amd64 -t ubi8-minimal -f ./docker/custom-ubi8-minimal/ubi8-minimal-with-git.Dockerfile .
podman tag ubi8-minimal quay.io/rnikitenko/ubi8-minimal:git
podman push quay.io/rnikitenko/ubi8-minimal:git

git+tar
podman build --arch amd64 -t ubi8-minimal -f ./docker/custom-ubi8-minimal/ubi8-minimal-with-git-tar.Dockerfile .
podman tag ubi8-minimal quay.io/rnikitenko/ubi8-minimal:git-tar
podman push quay.io/rnikitenko/ubi8-minimal:git-tar