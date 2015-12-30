var CommentBox = React.createClass({
	getInitialState: function() {
    	return {comments: []};
  	},
	componentDidMount: function() {
		$.get(this.props.url,function(data){
			this.setState({comments:data});
		}.bind(this));
	},
    render: function() {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.state.comments} />
                <CommentForm />
            </div>
        )
    }
});

var Comment = React.createClass({
    render: function() {
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.Author}
                </h2>
				{this.props.Text}
            </div>
        );
    }
});

var CommentList = React.createClass({
  render: function() {
	  var commentNodes = [];
	  if(this.props.data) {
		  var commentNodes = this.props.data.map(function(comment) {
			return (
				<Comment author={comment.Author} key={comment._id}>
					{comment.Text}
				</Comment>
			);
      	  });
	  }
	return (
		<div className="commentList">
			{commentNodes}
		</div>
	);
  }
});


var CommentForm = React.createClass({
  render: function() {
    return (
      <form className="commentForm">
        <input type="text" placeholder="Your name" /><br/>
        <input type="text" placeholder="Say something..." /><br/>
        <input type="submit" value="Post" />
      </form>
    );
  }
});

ReactDOM.render(
  <CommentBox url="http://localhost:3000/comments" />,
  document.getElementById('content')  
);
