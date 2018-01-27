import React, {Component} from 'react'
import Feed from 'rss-to-json'

class Blog extends Component {
  constructor(props){
    super(props)
    this.state = {
      posts: []
    }
  }

  componentWillMount(){
    let self = this
    Feed.load('https://cors-anywhere.herokuapp.com/https://medium.com/feed/@lewisyoul', function(err, rss) {
      console.log(rss.items)
      self.setState({
        posts: rss.items
      });
      console.log(self.state)
    });
  }


  render(){
    const allPosts = this.state.posts.map((post, index) => {
      return(
        <h1>{post.title}</h1>
      )
    });

    return(
      <div className="component text-center">
        <h1><strong><span>[</span> Contact <span>]</span></strong></h1>
        <hr></hr>
        <div className="row">
          <div className="col-md-10 col-sm-offset-1 text-left">
            {allPosts}
            <hr></hr>
            <p></p>
          </div>
        </div>
      </div>
    )
  }
}

export default Blog;
