# Blowfish React Example App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It contains a working Blowfish API client implementation that is also compatible with React-native.

## Commands

In the project directory, you can run:

### `yarn install`

To install all dependencies. The only dependencies added ontop of the [Create React App](https://github.com/facebook/create-react-app) dependencies were `@solana/web3.js` and `@tanstack/react-query`.

### `REACT_APP_BLOWFISH_API_KEY=YOUR_API_KEY yarn start`

Make sure you specify your API key as an environment variable infront of the `yarn start` command.

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Project structure

### useFetchBlowfishEvaluation.tsx

Contains the Blowfish API client implemented as a memoized function that re-fetches the Blowfish results every 5 seconds (in order to update the simulation results shown to the user).

### BlowfishEvaluation.tsx

The react component that calls `useFetchBlowfishEvaluation` and displays the results to the user.
