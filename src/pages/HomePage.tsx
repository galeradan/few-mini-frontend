import React from "react";
import BlogCard from "components/BlogsCard";
import { useBlogsQuery } from "generated/graphql";

const HomePage = () => {
  const { loading, error, data } = useBlogsQuery();

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.log(error);
    return <p>Error</p>;
  }

  return (
    <>
      <div className="container pt-3">
        <div className="row">
          {data &&
            data.blogs.map((blog) => {
              return <BlogCard colSize="col-md-4" key={blog.id} blog={blog} />;
            })}
        </div>
      </div>
    </>
  );
};
export default HomePage;
