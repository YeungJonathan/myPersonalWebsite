#/bin/bash
ssh root@207.148.84.99 "cd myPersonalWebsite/;git reset --hard;git checkout master;git pull;npm ci;npm run build"

