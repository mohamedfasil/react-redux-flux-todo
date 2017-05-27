# React, Redux/Flux todo app

Howto: 
```sh
npm install
```
to start the redux todo app
```sh
npm run start-redux
```
to start the flux todo app
```sh
npm run start-flux
```
Differences between Flux and Redux

 - In flux the store contains the state and the logic for changing the state, in redux store and logic change are seperate.
 - Flux you can have multiple stores, redux has reducers so you have only one store
 - In flux each store are seperate and disconnected, redux has only single store with heirachial reducers
 - In flux state is mutated, redux state is immutable
