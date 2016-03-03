// var CommentBox = require('./src/jsx/commentBox.jsx');

// ReactDOM.render(
//   <CommentBox url="http://localhost:3000/comments" />,
//   document.getElementById('content')  
// );

var MyAppBar = require('./src/jsx/myAppBar.jsx');
var React = require('react');
var ReactDOM = require('react-dom');

ReactDOM.render(
  <MyAppBar />,
  document.getElementById('content')  
);