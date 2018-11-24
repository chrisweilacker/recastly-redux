import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from './../data/exampleVideoData.js'
// TODO:  Create your redux store, apply thunk as a middleware, and export it!

console.log("Here is the data we got from example Data", exampleVideoData[0], exampleVideoData);

var initialState = {currentVideo: exampleVideoData[0],
  videoList: exampleVideoData
};

console.log("This is the initialState we passed in", initialState);

var store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
  );

console.log("this is the Stores state", store.getState());
export default store;


// const store = createStore(rootReducer, {
//   currentVideo: null,
//   videoList: []
// }, applyMiddleware(thunk));
