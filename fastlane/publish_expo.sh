#!/bin/bash

cd ..

[ ! -d "build" ] && mkdir build

# Publish `beta` release
expo publish --release-channel beta --non-interactive

# Start building standalone ios build using `beta` release channel
expo build:ios --release-channel beta --non-interactive --no-publish

# Download the artifact to current directory as `app.ipa`
curl -o build/app.ipa "$(expo url:ipa --non-interactive)"

cd fastlane || exit

exit
