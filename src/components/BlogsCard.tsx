import React from "react";
import Moment from "react-moment";

interface BlogCardProps {
  id: string;
  title: string;
  status: string;
  views: number;
  content: string;
  publishedAt: string;
  createdAt?: string;
  updatedAt?: string;
}

interface Props {
  blog: BlogCardProps;
  colSize: string;
}

const BlogCard: React.FC<Props> = ({ blog, colSize }) => {
  // This is a simple component for each blog data
  return (
    <>
      <div className={`${colSize} d-flex align-items-stretch`}>
        <div
          className={`card mt-2 ${
            blog.status === "archived" ? "archived" : ""
          }`}
        >
          <div className="card-body">
            <h5 className="mb-0 title">{blog.title}</h5>
            <small>{`${blog.status.replace(/\b\w/g, (l) =>
              l.toUpperCase()
            )}`}</small>
            <p className="mt-3">{blog.content}</p>
            <span className="d-flex flex-row">
              <small>{`${blog.views} views `}</small>
              <small>
                • <Moment fromNow>{blog.publishedAt}</Moment>
              </small>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default BlogCard;
