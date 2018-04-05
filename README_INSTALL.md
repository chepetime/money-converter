# Wizeline

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## ftp Deployment

Install ```git-ftp```. [Source](https://github.com/git-ftp/git-ftp/blob/master/INSTALL.md)

Setup your ftp account with git.

```sh
# Setup
git config git-ftp.url "ftp://ftp.example.net:21/public_html"
git config git-ftp.user "ftp-user"
git config git-ftp.password "secr3t"
git config git-ftp.syncroot dist/

# Upload all files
git ftp init

# Or if the files are already there
git ftp catchup
```

---

Made in Mexico City with <3 by @Chepe
