#!/bin/bash

cd ..

[ ! -d "build" ] && mkdir build

# Publish `staging` release
expo publish --release-channel staging --non-interactive

# Start building standalone ios build using `staging` release channel
expo build:ios --release-channel staging --non-interactive --no-publish

# Download the artifact to current directory as `app.ipa`
curl -o build/app.ipa "$(expo url:ipa --non-interactive)"

cd fastlane || exit

exit
