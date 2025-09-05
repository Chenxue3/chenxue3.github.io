import React from 'react';
import { useParams } from 'react-router-dom';
import { posts } from '../constants/posts';
import MarkdownRenderer from '../components/MarkdownRenderer';
import Navbar from '../components/Navbar';

const PostDetail = () => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
     
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center">article not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 pt-20">
     
      <article className="max-w-4xl mx-auto px-4 py-8">
        <header className="mb-8">
          <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-400">
          
            <span>{post.title}</span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <MarkdownRenderer content={post.content} />
        </div>
      </article>
    </div>
  );
};

export default PostDetail; 