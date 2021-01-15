import React from "react";
import BlogCard from "components/BlogsCard";
import { useBlogsQuery } from "generated/graphql";
import Swal from "sweetalert2";

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
        localStorage.removeItem("token");
        window.location.reload(false);
      }
    });
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
