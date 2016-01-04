var CommentBox = React.createClass({
	getInitialState: function() {
    	return {comments: []};
  	},
	componentDidMount: function() {
		$.get(this.props.url,function(data){
			this.setState({comments:data});
		}.bind(this));
	},
	addComment: function(comment) {
		$.post(this.props.url,comment,function(response){
			if(response.success) {
				comment._id = response.id;
				var newComments = this.state.comments.concat([comment]);
				this.setState({comments:newComments});
			}
		}.bind(this));	
	},
    render: function() {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.state.comments} />
                <CommentForm onAddComment={this.addComment} />
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
                <h3 className="commentAuthor">
                    {this.props.author}
                </h3>
				<span dangerouslySetInnerHTML={this.rawMarkup()} />
            </div>
        );
    }
});

var CommentList = React.createClass({
  render: function() {
	var commentNodes = this.props.data.map(function(comment) {
		return (
			<Comment author={comment.Author} key={comment._id}>
				{comment.Text}
			</Comment>
		);
    });
	  
	return (
		<div className="commentList">
			{commentNodes}
		</div>
	);
  }
});


var CommentForm = React.createClass({
  addComment: function(e) {
	  e.preventDefault();
	  var comment = {
		 Author: this.refs.author.value,
		 Text: this.refs.text.value  
	  };
	  this.props.onAddComment(comment);
	  this.refs.author.value = "";
	  this.refs.text.value = "";
	  return;
  },
  render: function() {
    return (
      <form className="commentForm" onSubmit={this.addComment}>
        <input type="text" placeholder="Your name" ref="author"/>
		<br/>
        <input type="text" placeholder="Say something..." ref="text"/>
		<br/>
		<br/>
        <input type="submit" value="Post" />
      </form>
    );
  }
});

module.exports = CommentBox;
