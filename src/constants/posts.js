// Import all post content
import vueContent from '../content/posts/vue-3-composition-api.md?raw';
import aviationContent from '../content/posts/boeing-vs-airbus.md?raw';
import springbootContent from '../content/posts/springboot-microservices.md?raw';
import threejsContent from '../content/posts/getting-started-with-threejs.md?raw';
import react3dContent from '../content/posts/introduction-to-react-three-fiber.md?raw';
import netVsSpringbootContent from '../content/posts/net-vs-springboot.md?raw';

export const posts = [
  {
    id: 'getting-started-with-threejs',
    title: 'Getting Started with Three.js: A Guide to 3D Graphics in Web Development',
    author: 'Zoea',
    date: '2024-03-15',
    readTime: '8 min read',
    tags: ['Three.js', '3D Graphics', 'Web Development', 'JavaScript'],
    content: threejsContent
  },
  {
    id: 'introduction-to-react-three-fiber',
    title: 'Introduction to React Three Fiber: Building 3D Graphics with React',
    author: 'Zoea',
    date: '2024-03-16',
    readTime: '10 min read',
    tags: ['React', 'Three.js', '3D Graphics', 'Web Development'],
    content: react3dContent
  },
  {
    id: 'vue-3-composition-api',
    title: 'Vue 3 Composition API: A Modern Approach to Component Logic',
    author: 'Zoea',
    date: '2024-03-15',
    readTime: '8 min read',
    tags: ['Vue', 'JavaScript', 'Frontend', 'Composition API'],
    content: vueContent
  },
  {
    id: 'boeing-vs-airbus',
    title: 'Boeing vs Airbus: A Comprehensive Comparison of Aircraft Design Philosophies',
    author: 'Zoea',
    date: '2024-03-16',
    readTime: '10 min read',
    tags: ['Aviation', 'Aircraft', 'Engineering', 'Comparison'],
    content: aviationContent
  },
  {
    id: 'springboot-microservices',
    title: 'Building Microservices with Spring Boot: A Practical Guide',
    author: 'Zoea',
    date: '2024-03-17',
    readTime: '12 min read',
    tags: ['Spring Boot', 'Java', 'Microservices', 'Backend'],
    content: springbootContent
  },
  {
    id: 'net-vs-springboot',
    title: '.NET vs Spring Boot: Choosing the Right Framework for Your Enterprise Application',
    author: 'Zoea',
    date: '2023-03-18',
    readTime: '15 min read',
    tags: ['.NET', 'Spring Boot', 'Backend', 'Comparison'],
    content: netVsSpringbootContent
  }
]; 