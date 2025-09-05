import React from 'react';
import PostsList from '../components/PostsList';

const PostsPage = () => {
    
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
     
      <main className="container mx-auto py-8">
      <PostsList />
        
      </main>
    </div>
  );
};

export default PostsPage; 