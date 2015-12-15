#!/usr/bin/env bash
git stash save -q --keep-index

npm test

git stash pop -q
