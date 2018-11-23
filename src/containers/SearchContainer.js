import React from 'react';
import Search from './../components/Search.js';
import { connect } from 'react-redux';
import handleSearchChange from '../actions/search.js';


//Josh's Notes:
//Connect does NOT modify the component class passed to it
//instead, it returns a new, connected component class for you to use.
const mapStateToProps = (state) => {
  return {
    videos: state.videoList,
    video: state.currentVideo,
    // handleSearchInputChange: (query) => {
    //          props.dispatch(handleSearchChange(query))
    //        }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSearchInputChange: (query) => {
      dispatch(handleSearchChange(query))
    }
  }  
}
//Deleted (query) from end of line below and mapDispatchProps functi
var SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.




export default SearchContainer;
