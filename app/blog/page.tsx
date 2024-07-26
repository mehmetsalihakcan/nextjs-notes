import BlogComponent from "@/components/BlogComponent";
import React from "react";

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "İlk blog gönderisi",
      content: "Bu blog gönderisinin içeriği",
    },
    {
      id: 2,
      title: "İkinci blog gönderisi",
      content: "Bu blog gönderisinin içeriği",
    },
    {
      id: 3,
      title: "Ücüncü blog gönderisi",
      content: "Bu blog gönderisinin içeriği",
    },
  ];
  return (
    <div>
      <div>BlogPage</div>
      <div>
        <h1>Blog Yazıları</h1>
      </div>

      <div>
        {blogPosts.map((post) => (
            <BlogComponent
              key={post.id}
              title={post.title}
              content={post.content}
              id={post.id.toString()}
            />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
