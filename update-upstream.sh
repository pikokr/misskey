#!/bin/bash

git remote add upstream https://github.com/misskey-dev/misskey.git 2> /dev/null || git remote set-url upstream https://github.com/misskey-dev/misskey.git

git pull upstream develop --squash
