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
    rawMarkup: function() {
        var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
        return { __html: rawMarkup };
    },
    render: function() {
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                <span dangerouslySetInnerHTML={this.rawMarkup()}></span>
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
				<Comment author={comment.author} key={comment.id}>
					{comment.text}
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
      <div className="commentForm">
        I am a CommentForm.
      </div>
    );
  }
});

ReactDOM.render(
  <CommentBox url="http://localhost:3000/comments" />,
  document.getElementById('content')  
);
