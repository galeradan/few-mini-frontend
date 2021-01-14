import React from "react";
import BlogCard from "components/BlogsCard";

// Just for Testing Data and Props
const blogsData = [
  {
    id: 1,
    title: "React.js Powertools!",
    status: "published",
    views: 200000,
    content: "#lorem ispum #react.js",
    publishedAt: "2021-01-11T14:16:51.850Z",
    createdAt: "2021-01-10T14:16:51.850Z",
    updatedAt: "2021-01-11T14:16:51.850Z",
  },
  {
    id: 2,
    title: "Typescript Powertools!",
    status: "published",
    views: 2000000,
    content: "#lorem ispum. #Typescript",
    publishedAt: "2021-01-11T14:16:51.850Z",
    createdAt: "2021-01-10T14:16:51.850Z",
    updatedAt: "2021-01-11T14:16:51.850Z",
  },
  {
    id: 3,
    title: "Serverless Powertools!",
    status: "published",
    views: 500000,
    content: "#lorem ispum ## serverless",
    publishedAt: "2021-01-11T14:16:51.850Z",
    createdAt: "2021-01-10T14:16:51.850Z",
    updatedAt: "2021-01-11T14:16:51.850Z",
  },
  {
    id: 4,
    title: "Node.js Powertools!",
    status: "published",
    views: 2000000,
    content: "#lorem ispum ## node.js",
    publishedAt: "2021-01-11T14:16:51.850Z",
    createdAt: "2021-01-10T14:16:51.850Z",
    updatedAt: "2021-01-11T14:16:51.850Z",
  },
  {
    id: 5,
    title: "Deno Powertools!",
    status: "published",
    views: 300000,
    content: "#lorem ispum ## Deno",
    publishedAt: "2021-01-11T14:16:51.850Z",
    createdAt: "2021-01-10T14:16:51.850Z",
    updatedAt: "2021-01-11T14:16:51.850Z",
  },
  {
    id: 6,
    title: "Javascript Powertools!",
    status: "archived",
    views: 200000,
    content: "#lorem ispum ## Javascript",
    publishedAt: "2021-01-11T14:16:51.850Z",
    createdAt: "2021-01-10T14:16:51.850Z",
    updatedAt: "2021-01-11T14:16:51.850Z",
  },
];

const HomePage = () => {
  return (
    <>
      <div className="container pt-3">
        <div className="row">
          {blogsData &&
            blogsData.map((blog) => {
              return (
                <div className="col-md-4">
                  <BlogCard blog={blog} />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};
export default HomePage;
