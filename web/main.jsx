var CommentBox = require('./src/jsx/commentBox.jsx');

ReactDOM.render(
  <CommentBox url="http://localhost:3000/comments" />,
  document.getElementById('content')  
);