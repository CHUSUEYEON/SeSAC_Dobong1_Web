import axios from "axios";
import { useEffect, useState } from "react";
import PostItem from "./PostItem";

export default function PostList() {
  // 'https://jsonplaceholder.typicode.com/posts'
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    console.log(res.data);
    setPosts(res.data.slice(0, 10)); //0~9번 index 데이터 가지고 오도록
  };

  useEffect(() => {
    // axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
    //   console.log(res.data);
    //   setPosts(res.data);
    // });
    getPosts();
  }, []);

  return (
    <div className="post-list">
      {/* <h1>실습문제</h1> */}
      {posts.length > 0
        ? posts.map((post) => {
            return <PostItem post={post} key={post.id} />;
          })
        : "loading..."}
    </div>
  );
}
