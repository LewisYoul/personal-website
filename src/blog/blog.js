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
        <div key={post.index}>
          <a href={post.link}><h2>{post.title}</h2></a>
          <h5>{String(new Date(post.created)).split("G")[0]}</h5>
        </div>
      )
    });

    return(
      <div className="component text-center">
        <h1><strong><span>[</span> Blog <span>]</span></strong></h1>
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
