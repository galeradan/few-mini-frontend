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
      <div>
        <h5>{blog.title}</h5>
        <p>{blog.content}</p>
        <p>{blog.status}</p>
        <span>Views: {blog.views}</span>
      </div>
    </>
  );
};
export default BlogCard;
