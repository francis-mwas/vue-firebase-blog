<template>
  <div class="home">
    <BlogPost :post="welcomeScreen" />
    <BlogPost
      :post="post"
      v-for="(post, index) in sampleBlogPost"
      :key="index"
    />
  </div>
</template>

<script>
import BlogPost from '../components/BlogPost.vue';

export default {
  name: 'Home',
  components: {
    BlogPost,
  },
  data() {
    return {
      welcomeScreen: {
        title: 'Welcome',
        blogPost:
          'Weekly blog articles with all trhings programming including HTML, CSS, JavaScript and more. Register today to never miss a post',
        welcomeScreen: true,
        photo: 'coding',
      },
      sampleBlogPost: [
        {
          title: 'This is a filter Title!',
          blogHTML: 'This is a filter blog post title',
          blogCoverPhoto: 'beautiful-stories',
        },
        {
          title: 'Learning Graphql',
          blogHTML: 'This is a filter blog post title',
          blogCoverPhoto: 'designed-for-everyone',
        },
      ],
      smapleBlogCards: [
        {
          blogTitle: 'Blog card #1',
          blogCoverPhoto: 'Stock-1',
          blogDate: 'May 1, 2021',
        },
        {
          blogTitle: 'Blog card #2',
          blogCoverPhoto: 'Stock-1',
          blogDate: 'May 1, 2021',
        },
        {
          blogTitle: 'Blog card #3',
          blogCoverPhoto: 'Stock-1',
          blogDate: 'May 1, 2021',
        },
        {
          blogTitle: 'Blog card #4',
          blogCoverPhoto: 'Stock-1',
          blogDate: 'May 1, 2021',
        },
      ],
    };
  },
};
</script>
