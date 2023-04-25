[![License](https://img.shields.io/badge/license-MIT-blue)](./LICENSE)
[![node](https://img.shields.io/badge/node-18.x-233056)](https://nodejs.org)
[![typescript](https://img.shields.io/badge/typescript-only-4278c2)](https://www.typescriptlang.org)

# firebase-oskey-example

```
Copyright (c) 2021-2023, OSkey SAS. MIT License.
```

## About

This is an example project to run a cloud app on Firebase (project
oskey-example). This repository provides the backend side (Auth,
Cloud Firestore, Cloud Functions and Cloud Storage) and a fontend web app.

Emulators and unit tests are available, along with CI/CD to deploy releases
online.

It is provided under the MIT License.

## Getting started

### Requirements

- [node](https://nodejs.org): v18.x (latest LTS version supported by Firebase)
- [firebase-tools](https://www.npmjs.com/package/firebase-tools): v11

Using the VS Code dev container will ensure all requirements are met.

Note: `firebase-tools` are not required to be installed globally, using `npx`
command will call the one installed with the program dependencies. The dev
container provides a `firebase-cli` that is a shortcuts to `npx firebase` and
that can detect if a token is set in the `env`.

### Clone and download dependencies

Clone the repository
[oskey-example/firebase-oskey-example](https://github.com/oskey-example/firebase-oskey-example)
then download the dependencies (at root level: `firebase-tools` and for the
Cloud Functions):

```sh
git clone git@github.com:oskey-example/firebase-oskey-example.git
cd firebase-oskey-example
npm ci
```

### Build Cloud Functions

The Cloud Functions must be build prior to running emulator. To do so go into
the `functions` folder and:

```sh
npm ci
npm run lint
npm run build
```

### Create a Firebase project and update configuration

Prior to running the emulator, it is required to login. However you probably
won't have access to the Firebase project set by default, therefor you need to
create a project on Firebase (a Google email account is required for that). On
you Firebase project you need to activate:

- Authentication (email/password)
- Firestore
- Cloud Function (it will ask you to have a `Blaze` plan, but it should not cost
  you anything unless you deploy and start having many request. For your own
  testing you should not exceed the free tier, but be careful)
- Storage
- Hosting
- Dynamic link

Once it is done, you need to add in `.firebaserc` a configuration for your
project. For example (replace `PROJECT_NAME` by you project name):

```json
{
  "projects": {
    "default": "oskey-example",
    "my-project": "PROJECT_NAME"
  },
  "targets": {
    "oskey-example": {
      "hosting": {
        "oskey-example": ["dynlink-oskey-example"]
      }
    },
    "PROJECT_NAME": {
      "hosting": {
        "PROJECT_NAME": ["dynlink-PROJECT_NAME"]
      }
    }
  }
}
```

Finaly you need to update `firebase.json`. For example (replace `PROJECT_NAME`
by you project name):

```json
{
  "firestore": {
    "rules": "firestore/firestore.rules",
    "indexes": "firestore/firestore.indexes.json"
  },
  "functions": {
    "predeploy": ["npm --prefix \"$RESOURCE_DIR\" run lint", "npm --prefix \"$RESOURCE_DIR\" run build"],
    "source": "./functions"
  },
  "hosting": [
    {
      "target": "oskey-example",
      "appAssociation": "AUTO",
      "rewrites": [
        {
          "source": "/app/**",
          "dynamicLinks": true
        },
        {
          "source": "/auth/**",
          "dynamicLinks": true
        }
      ]
    },
    {
      "target": "PROJECT_NAME",
      "appAssociation": "AUTO",
      "rewrites": [
        {
          "source": "/app/**",
          "dynamicLinks": true
        },
        {
          "source": "/auth/**",
          "dynamicLinks": true
        }
      ]
    }
  ],
  "storage": {
    "rules": "storage/storage.rules"
  },
  "emulators": {
    "ui": {
      "enabled": true,
      "host": "0.0.0.0",
      "port": 19000
    },
    "auth": {
      "host": "0.0.0.0",
      "port": 19001
    },
    "firestore": {
      "host": "0.0.0.0",
      "port": 19002,
      "websocketPort": 19097
    },
    "functions": {
      "host": "0.0.0.0",
      "port": 19003
    },
    "storage": {
      "host": "0.0.0.0",
      "port": 19005
    },
    "hub": {
      "host": "0.0.0.0",
      "port": 19006
    },
    "eventarc": {
      "host": "0.0.0.0",
      "port": 18098
    },
    "logging": {
      "host": "0.0.0.0",
      "port": 18099
    }
  }
}
```

### Run the emulator

Prior to running the emulators, the config file `firebase.json` must be created (a `firebase.json.dist` file is available for reference).).

Then each emulator configuration can be adjusted to listen on a given port and
hostname (i.e.: the API has to call this hostname). Unless trying to test the a
mobile app, the hostname could be left to default (`localhost`).

Here's an example:

```json
{
  "firestore": {
    "rules": "firestore/firestore.rules",
    "indexes": "firestore/firestore.indexes.json"
  },
  "functions": {
    "predeploy": ["npm --prefix ./functions run lint", "npm --prefix ./functions run build"],
    "source": "./functions"
  },
  "hosting": {
    "target": "oskey-example",
    "public": "public/dist/public",
    "ignore": ["**/.*"],
    "headers": [
      {
        "source": "*.[0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f].+(css|js)",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "public,max-age=31536000,immutable"
          }
        ]
      }
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ],
    "predeploy": ["npm --prefix ./public run lint", "npm --prefix ./public run build"]
  },
  "storage": {
    "rules": "storage/storage.rules"
  },
  "emulators": {
    "auth": {
      "hostname": "localhost",
      "port": 18001
    },
    "functions": {
      "hostname": "localhost",
      "port": 18003
    },
    "firestore": {
      "hostname": "localhost",
      "port": 18002
    },
    "hosting": {
      "hostname": "localhost",
      "port": 18004
    },
    "storage": {
      "hostname": "localhost",
      "port": 18005
    },
    "ui": {
      "enabled": true,
      "hostname": "localhost",
      "port": 18000
    },
    "hub": {
      "hostname": "localhost",
      "port": 18099
    }
  }
}
```

The emulator can be started using the following command, from the root folder of
the project:

```sh
npm run emul
```

There are additional scripts available:

- `npm run emul:export`: export the data when the emulators stops (to run on the
  same data other tests)
- `npm run emul:import`: import the data exported from a previous run

### Unit testing (Cloud Functions and Firestore/Storage rules)

Prior to running the unit tests, the config file `config.json` must be set in the `test` folder (a `config.json.dist` file is available for reference).

Here's an example:

```json
{
  "projectId": "oskey-example",
  "region": "europe-west",
  "hubHostname": "localhost",
  "hubPort": 18099
}
```

The hub is used to get the detail about the emulators, so it self configures.

Then, the dependencies must be downlaoded. To do so run `npm ci` in the `test` folder.

The unit tests can be run in two ways:

- While the emulators run
- Along with emulators (no emulators should already be running)

To run unit tests while the emulators is started, go to the `test` folder then:

```sh
npm test
```

**Important**: The units deletes all existing data and user prior to running the tests.

To run unit tests along with the emulatores, run the following command from the
root folder of the project:

```sh
npm test
```

It is possible to remove all console output of the emulators by using:

```sh
npm run test:silent
```

It is also possible to request the data generated via the test to be exported:

```sh
npm run test:export
```

## Auth

The following authentication methods are available:

- Email/Password

## Cloud Firestore

Rules and indexes can be found on in the folder `firestore`.

## Cloud Functions

Function code can be found on in the folder `functions`. They are coded in
`Typescript` and uses `eslint` to enforce coding standard.

## Cloud Storage

Rules can be found in the folder `storage`.

## Hosting

An example of hosted app in available in the folder `public`. It uses
[Angular](https://angular.io) with
[@angular/material](https://www.npmjs.com/package/@angular/material) for
the UI and [@angular/fire](https://www.npmjs.com/package/@angular/fire) for
as Firebase SDK.

## Emulators and unit tests (backend)

Unit test code for the backend (Auth, Cloud Firestore, Cloud Functions and Cloud
Storage) can be found in the folder `test`. They are coded in `Typescript` and
uses `eslint` to enforce coding standard. `Mocha` + `chai` is used to
orchestrate the tests.

In addition, the package [gp-firebase-emulator-unit-test](https://www.npmjs.com/package/gp-firebase-emulator-unit-test)
is used to provide a framework to unit test on Firebase emulators.

When running the emulators, it will download the adequate versions.

The emulators will use the following port (if you use the provided configuration):

| Emulator        | Port  |
| --------------- | ----- |
| Auth            | 19001 |
| Cloud Firestore | 19002 |
| Cloud Functions | 19003 |
| Pub/Sub         | 19004 |
| Cloud Storage   | 19005 |

These additional ports will be run for the emulator engine itself.

| Additional server | Port  |
| ----------------- | ----- |
| Emulator UI       | 19000 |
| Emulator Hub      | 19006 |

## Deployment to Firebase

This project contains both script for deployment via Github Actions triggered
when a new release is created on [Github](https://github.com) or a
`npm run deploy` command to trigger the deployment manually.

If you decide to go the manual way, you can deploy individually using:

- `npm run deploy:firestre` to deploy the Cloud Firestore rules and indexes only
- `npm run deploy:functions` to deploy the Cloud Functions only
- `npm run deploy:hosting` to deploy the fronted end app only
- `npm run deploy:storage` to deploy the Cloud Storage rules only

If you decide to go the automated way and want to use the script as-is, you will
need to create an `environment` and set the `FIREBASE_TOKEN` secret. To obtain
the token, run the command `firebase login:ci`.

Additionnaly, the secrets for the frontend app Firebase config must be set:
`FIREBASE_API_KEY`, `FIREBASE_APP_ID` and `FIREBASE_MESSAGING_SENDER_ID`;

**Important:** You will need to setup your own Firebase app for deploying, and
adjust `.firebaserc`, `firebase.json` and
`public/src/environments/environment.prod.ts` accordingly.

## Contributions

Please find [here](./CONTRIBUTING.md) the instructions for contributions.

## Licenses

Please find [here](./LICENSE) the detail on licensing.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
