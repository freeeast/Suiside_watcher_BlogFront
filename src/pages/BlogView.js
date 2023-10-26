import BlogList from "../conponents/Blogs/BlogList";
import { useState, useEffect } from "react";

function BlogView_Page() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedBlogs, setLoadedBlogs] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://suiside-dbs-default-rtdb.firebaseio.com/Blogs.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const blogData = [];
        for (const key in data) {
          const blog = {
            id: key,
            ...data[key]
          };
          blogData.push(blog);
        }
        setIsLoading(false);
        setLoadedBlogs(blogData);
      });
  }, []); // 添加空依赖项以避免多次触发副作用

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Blogs</h1>
      <BlogList blogs={loadedBlogs} />
    </section>
  );
}

export default BlogView_Page;