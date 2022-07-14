import React from "react";
import "./App.css";

function App() {
  const [posts, setPosts] = React.useState();
  const [comments, setComments] = React.useState();

  //connect to endpoint
  //GET POSTS (METHOD #1: PROMISE)
  async function getPosts() {
    let getPosts = await fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => {console.log(response);return response.json()})
      .then(json => {console.log(json); return setPosts(json)})

    if (getPosts) {
      console.log(posts);
    } 
  }

  //GET COMMENTS (METHOD #2: ASYNC-AWAIT)
  async function getComments() {
    let getComments = await fetch("https://jsonplaceholder.typicode.com/comments");
    console.log(getComments);

    let json = await getComments.json();
    console.log(json);

    if (getComments) {
      setComments(json);
      console.log(comments);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={getPosts}>GET POSTS</button>
        <button onClick={getComments}>GET COMMENTS</button>
        {/* <div>
          {post.map(function (key, index) {
            return (
              <div key={index}>
                <p>Name: {key.name}</p>
                <p>email: {key.email}</p>
                <p>body: {key.body}</p>
                <hr />
              </div>
            );
          })}
        </div> */}
      </header>
    </div>
  );
}

export default App;
