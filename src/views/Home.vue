<template>
  <div class="home">
    <BlogPost :post="welcomeScreen" />
    <BlogPost
      :post="post"
      v-for="(post, index) in sampleBlogPost"
      :key="index"
    />
    <div class="blog-card-wrap">
      <div class="container">
        <h3>New more recent blogs</h3>
        <div class="blog-cards">
          <BlogCard
            :post="post"
            v-for="(post, index) in smapleBlogCards"
            :key="index"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPost from '../components/BlogPost.vue';
import BlogCard from '../components/BlogCard';

export default {
  name: 'Home',
  components: {
    BlogPost,
    BlogCard,
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
          blogCoverPhoto: 'stock-1',
          blogDate: 'May 1, 2021',
        },
        {
          blogTitle: 'Blog card #2',
          blogCoverPhoto: 'stock-2',
          blogDate: 'May 1, 2021',
        },
        {
          blogTitle: 'Blog card #3',
          blogCoverPhoto: 'stock-3',
          blogDate: 'May 1, 2021',
        },
        {
          blogTitle: 'Blog card #4',
          blogCoverPhoto: 'stock-4',
          blogDate: 'May 1, 2021',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.blog-card-wrap {
  h3 {
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;
  }
}
</style>
