import React from "react";
import BlogCard from "components/BlogsCard";
import { useBlogsQuery } from "generated/graphql";
import Swal from "sweetalert2";
import { removeToken } from "helper/accessToken";

const HomePage = () => {
  const { loading, error, data } = useBlogsQuery();

  if (loading) return <p>Loading...</p>;

  if (error) {
    Swal.fire(
      error.message,
      "It seems you are not yet authorized, Login again?",
      "question"
    ).then((result) => {
      if (result.isConfirmed) {
        removeToken();
      }
    });
  }

  return (
    <>
      <div className="container">
        <h5>Blogs</h5>
        <hr />
        <div className="row">
          {data &&
            data.blogs.map((blog) => {
              return <BlogCard colSize="col-md-6" key={blog.id} blog={blog} />;
            })}
        </div>
      </div>
    </>
  );
};
export default HomePage;
