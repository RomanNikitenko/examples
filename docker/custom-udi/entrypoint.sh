#!/bin/bash

# Ensure $HOME exists when starting
if [ ! -d "${HOME}" ]; then
  mkdir -p "${HOME}"
fi

# env variables live only within current process
export TEST_ENV="some test value"
echo "env variables live only within current process, the value is: $TEST_ENV"

# create a test folder to check that the entrypoint is executed
mkdir -p "${HOME}/testFolder"

exec "$@"
