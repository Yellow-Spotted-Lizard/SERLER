# SERLER

Software Engineering Research Lab Evidence Repository (SERLER)

# Deployment on Heroku

link: <https://yellow-spotted-lizard-serler.herokuapp.com/>

# Quick Start

Back-end project: `api`
Front-end project: `client`

## Run full-stack

    npm start

## Run back-end only

    cd api
    npm install
    npm start

Replace `npm start` with `DEBUG=api:* npm start` to see more logs.
If you want to debug with remote MongoDB, use (replace `<password>` with real password)

    MONGODB_URI='mongodb+srv://lizard:<password>@serler-nlyux.mongodb.net/test?retryWrites=true&w=majority' DEBUG=api:* npm start

## Run front-end only

    cd client
    npm install
    npm start

## Run deployment locally (for test purpose only)

either

    MONGODB_URI='mongodb+srv://lizard:<password>@serler-nlyux.mongodb.net/test?retryWrites=true&w=majority' DEBUG=api:* npm run deploy:local

or (with Heroku's local deployment feature)

    MONGODB_URI='mongodb+srv://lizard:<password>@serler-nlyux.mongodb.net/test?retryWrites=true&w=majority' DEBUG=api:* heroku local web

if you want to test on production environment(not recommended but sometimes necessary though), add `NODE_ENV=production`, i.e.

    MONGODB_URI='mongodb+srv://lizard:<password>@serler-nlyux.mongodb.net/test?retryWrites=true&w=majority' NODE_ENV=production DEBUG=api:* npm run deploy:local
    MONGODB_URI='mongodb+srv://lizard:<password>@serler-nlyux.mongodb.net/test?retryWrites=true&w=majority' NODE_ENV=production DEBUG=api:* heroku local web

# Deploying to Heroku

Document: <https://devcenter.heroku.com/articles/git>

- set up the Heroku app with local repo (I have set up the permissions for our team. If you can't access, please contact @Stone)

      heroku git:remote -a yellow-spotted-lizard-serler

- then push to heroku

      git push heroku master

  if you are pushing from branch other than "master":

      git push heroku <your-branch-name>:master