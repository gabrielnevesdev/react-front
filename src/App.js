import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { PostCard } from './components/PostCard';
import { loadPosts } from './utils/load-posts';

class App extends Component{
  state = {
    posts:[]
  };

  async componentDidMount(){
    await this.loadPosts()
  }

  loadPosts = async()=>{
    const postsAndPhotos = await loadPosts()
    this.setState({posts: postsAndPhotos})
  }
  
  render(){
    const { posts } = this.state

    return(
      <section className='container'>
        <div className="posts">
          {posts.map(post =>(
            <PostCard key={post.id }
              title={post.title}
              body={post.body}
              id={post.id}
              cover={post.cover}
            />
          ))}
        </div>
      </section>
    )
  }
}
/*function App() {
  const arr = ['teste', 'teste2', 'teste3']
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {arr.forEach((e, i)=>{
              <span>i</span>
      })}
      </header>
    </div>
  );
}*/

export default App;
