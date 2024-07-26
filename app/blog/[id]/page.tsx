'use client'
import { useParams } from 'next/navigation';
import React from 'react'

const BlogDetail = () => {
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
      const queryParams = useParams();
      const {id} = queryParams;
    
      const post = blogPosts.find(blog=>blog.id.toString() === id);

      if(!post){
        return <div>Blog Bulunamadı!</div>
      }
  return (
    <div>
        {post.title}
        {post.content}
    </div>
  )
}

export default BlogDetail