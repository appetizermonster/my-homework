# Homework :)

## Overview
This application saves data only while you are in the browser.

Internally, it saves data on MongoDB using UserID, but There is no login process, so UserID assigned to you is very temporary(random uuid), it will be gone after you close the browser.

## Directory Structure
```
 + app     - Front-end React Application
 + server  - API Server
 + shared  - Some Shared Data between Server and FE
 + test    - Test scripts for all
```

## Requirements

- Node.js 8.x
- yarn

## Installation
```bash
yarn
```

## Test
Currently, Tests for Server API are only available.
```bash
yarn test
```

## Running Server with WebpackDevServer
```
yarn dev
open http://localhost:8080  # WebpackDevServer
```
This command will run Server and WebpackDevServer stimulately and it will be watching changes for client `app` source code.

Currently, No Auto-reload for server scripts.

## Build and Running Server on Production
```
yarn start
open http://localhost:3000  # Express Production Server
```
This command will build `app` using Webpack, then it will run express Server which provides API & static built files.
