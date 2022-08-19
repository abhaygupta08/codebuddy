# Code Buddy Backend
This is the backend for Code Buddy, a all-in-one Coding platform, which includes numerous micro-services like Code Runner, Code sharing and Contest Watcher that is intended to assist Competitive Programming enthusiasts.

frontend deployed url [here](https://codebuddyapp.netlify.app/)

## Backend Features
- Login and Signup using JWT
- Encrypted storing of password (used bcrypt)
- Saving and sharing snippets of code which can have dyanmic accesss (public, private)
- Generating and sharing links to code snippets
- Integrating with Code Runner to run code in 40+ languages

## Using env file
edit `.env.example` and rename it to `.env` file and set the following variables

```
PORT=YOUR_PORT_HERE_IF_IN_PRODUCTION
MONGODB_URI=ENTER_MONGODB_URL
ACCESS_TOKEN_SECRET=USE_RANDOM_STRING
REFRESH_TOKEN_SECRET=USE_RANDOM_STRING
BACKEND_URL=ENTER_DEPLOYED_BACKEND_URL_IF_IN_PRODUCTION
```