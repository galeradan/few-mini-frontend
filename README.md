## Description
This is the Frontend of FEW: Mini Project. uses React, TypeScript, GraphQL and Apollo

For Backend please visit this [repository](https://github.com/galeradan/few-mini-backend)

Please follow the steps below to run the app on your local

## Clone
Clone the repo then cd to directory
```bash
$ git clone https://github.com/galeradan/few-mini-frontend.git
$ cd few-mini-frontend
```

## Installation
Install dependencies
```bash
$ yarn
```

## Setup env
- Create a `.env` in the root directory
- go to this [link](https://www.evernote.com/shard/s723/sh/ce68be97-4d75-71fe-f7d3-e60bcade2f28/97d79501524206d7bb55a468981b634c) and add the details to the env of the backend 

## Backend
- Make sure the backend is already working and running before starting the app, if not yet follow the readme [here](https://github.com/galeradan/few-mini-backend)
- Make sure the PORT or URI is correctly pointing to the same backend in your local

## Running the app
Once the above steps are okay, let's run the app
```bash
# Fix lint errors first, there might be some prettier warnings/errors after cloning
$ yarn lint:fix
# then run
$ yarn start
