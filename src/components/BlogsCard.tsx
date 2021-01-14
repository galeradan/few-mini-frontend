import React from "react";

interface BlogCardProps {
  id: number;
  title: string;
  status: string;
  views: number;
  content: string;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}

interface Props {
  blog: BlogCardProps;
}

const BlogCard: React.FC<Props> = ({ blog }) => {
  return (
    <>
      <div className="card mt-2">
        <div className="card-body">
          <h5 className="mb-0">{blog.title}</h5>
          <span className="d-flex justify-content-between">
            <small>{blog.status}</small>
            <small>{blog.createdAt}</small>
          </span>
          <p className="mt-3">{blog.content}</p>
          <span>Views: {blog.views}</span>
        </div>
      </div>
    </>
  );
};
export default BlogCard;
