# spr_vue

## Steps to install
1) Setup an base server
```
    apt-get update
    apt-get upgrade
    apt-get install nginx libnginx-mod-rtmp vim ffmpeg
```
2) Checkout this repo
```
    git clone https://github.com/jefflbeckman/spr_vue.git /var/spr_vue
```
3) Configure nginx
```
    cp spr_vue/nginx_confs/nginx.conf /etc/nginx/nginx.conf
    cp spr_vue/nginx/sites-available/spr /etc/nginx/sites-available/spr
    cp spr_vue/nginx/sites-available/http_restream /etc/nginx/sites-available/http_restream
    ln -s /etc/nginx/sites-available/spr /etc/nginx/sites-enabled/spr
    ln -s /etc/nginx/sites-available/http_restream /etc/nginx/sites-enabled/http_restream
```

## Steps to modify
Add a component to spr\_vue/spr/src/components

Add that component to spr\_vue/spr/src/App.vue

Test locally using ```npm run serve```

## Steps to deploy
Build using ```npm run build```. 
Update the spr_vue/spr/dist directory in github using:
```
    git add spr/dist/*
    git commit
    git push
```
Deploy on the server by pulling from the github distribution:
```
    cd /var/spr_vue
    git pull
```


On server, "git pull" the latest
