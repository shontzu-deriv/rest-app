import React from "react";
import "./App.css";

function App() {
  const [posts, setPosts] = React.useState([]);
  const [comments, setComments] = React.useState([]);
  const [resource, setresource] = React.useState();

  //connect to resource
  //GET POSTS (METHOD #1: PROMISE)
  async function getPosts() {
    await fetch("https://jsonplaceholder.typicode.com/posts", { method: "GET" })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
        return setPosts(json);
      });

    setresource("posts");
  }

  //GET COMMENTS (METHOD #2: ASYNC-AWAIT)
  async function getComments() {
    let response = await fetch(
      "https://jsonplaceholder.typicode.com/comments",
      { method: "GET" }
    );
    console.log(response);

    let json = await response.json();
    console.log(json);

    if (getComments) {
      setComments(json);
      setresource("comments");
    }
  }


  // DELETE (METHOD #1: PROMISE)
  async function deleteContent(resource, index) {
    await fetch(`https://jsonplaceholder.typicode.com/${resource}/${index}`, {
      method: "DELETE",
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
      });
    console.log(`deleted ${resource}/${index}`);
  }

  return (
    <div className="App">
      <button onClick={getPosts}>GET POSTS</button>
      <button onClick={getComments}>GET COMMENTS</button>
      {/* <input type="text" placeholder="new post" name="body" value={body} onChange={changeBody}/> */}
      {/* <button type="submit" onCLick={()=>newPost()}>newPost</button> */}
      <h1>{resource}</h1>
      {resource === "posts" ? (
        <div>
          {posts.map(function (key, index) {
            return (
              <div key={index}>
                <b>title: </b>
                {key.title}
                <br />
                <b>body: </b>
                {key.body}
                <br />
                <button onClick={() => deleteContent(resource, key.id)}>
                  delete
                </button>
                <hr />
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          {comments.map(function (key, index) {
            return (
              <div key={index}>
                <b>name: </b>
                {key.name} ({key.email})
                <br />
                <b>body: </b>
                {key.body}
                <br />
                <button onClick={() => deleteContent(resource, key.id)}>
                  delete
                </button>
                <hr />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default App;
