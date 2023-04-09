/*
This are options to set the way the front-end works.
*/
// Use of this file is not yet implemented, will soon be.

export const settings = {
  usingRedux: true, // uses a global redux store to store data
  // of a session.
  usingLocalStorage: true, //uses window.localStorage to store data
  // of a session.
};

/*
Note: In the way the code was implemented, if you read the file index.js, 
you will notice that if settings.usingLocalStorage is set to True,
React.StrictMode will be disabled. This is because React.Strictmode will
not allow some objects that have been marked as non-extensible be extended.
Redux marks the objects related to components state as non-extensible so
we are forced to only modify them through redux.
*/
