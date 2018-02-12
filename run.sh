#!/bin/bash
PATH=$PATH:$(npm bin)
set -x
# Production build
ng build --prod
# merge ngsw-manifest and copy to dist
#./node_modules/.bin/ngu-sw-manifest --module src/app/app.module.ts \
#--out dist/ngsw-manifest.json

# Serve
http-server "./dist" --cors -a "peopleos-4200.develop.umantis.com" -S -p 4200

