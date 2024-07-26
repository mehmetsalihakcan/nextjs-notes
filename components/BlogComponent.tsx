import Link from "next/link";
import React from "react";

interface BlogComponentProps {
  id: string;
  title: string;
  content: string;
}
const BlogComponent = ({ id, title, content }: BlogComponentProps) => {
  return (
    <Link href={`/blog/${id}`}>
    <div className="gap-y-4 p-4 gap-x-4">
      <h2 className="text-3xl">{title}</h2>
      <p>{content}</p>
    </div>
    </Link>
  );
};

export default BlogComponent;
