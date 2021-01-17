import React from "react";
import BlogCard from "components/BlogsCard";
import { useBlogsQuery } from "generated/graphql";
import Swal from "sweetalert2";
import { removeToken } from "helper/accessToken";
import ReactLoading from "react-loading";

const HomePage = () => {
  // fetches blogs data
  const { loading, error, data } = useBlogsQuery();
  // if something went wrong or not authenticated, notify and reload page
  if (error) {
    Swal.fire(
      error.message,
      "It seems your session is not valid, Login again?",
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
        {loading ? (
          <div className="d-flex flex-column align-items-center">
            <small>Loading</small>
            <ReactLoading
              type="bubbles"
              color="#3D2485"
              className="few-loader"
              height="100%"
              width="64px"
            />
          </div>
        ) : (
          <>
            <h5>Blogs</h5>
            <hr />
            <div className="row">
              {data &&
                data.blogs.map((blog) => {
                  return (
                    <BlogCard colSize="col-md-6" key={blog.id} blog={blog} />
                  );
                })}
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default HomePage;
