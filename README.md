# SERLER
Software Engineering Research Lab Evidence Repository (SERLER)

# Quick Start

Back-end project: `api`
Front-end project: `client`

Run full-stack:

    npm start

Run back-end only:

    cd api
    npm install
    npm start

Replace `npm start` with `DEBUG=api:* npm start` to see more logs

Run front-end only:

    cd client
    npm install
    npm start

# Deploying to Heroku

Document: <https://devcenter.heroku.com/articles/git>

- set up the Heroku app with local repo

      heroku git:remote -a yellow-spotted-lizard-serler

- then push to heroku

      git push heroku master

    if you are pushing from branch other than "master":

      git push heroku <your-branch-name>:master