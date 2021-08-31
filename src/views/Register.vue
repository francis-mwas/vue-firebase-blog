<template>
  <div class="form-wrap">
    <form class="register">
      <p class="login-container">
        Don't have an account?
        <router-link class="router-link" :to="{ name: 'Register' }"
          >Create an account
        </router-link>
      </p>
      <h2>Login to fireBlogs</h2>
      <div class="inputs">
        <div class="input">
          <input type="text" placeholder="Email" v-model="email" />
          <email class="icon" />
        </div>
        <div class="input">
          <input type="password" placeholder="Password" v-model="password" />
          <password class="icon" />
        </div>
      </div>
      <router-link class="forgot-password" :to="{ name: 'ForgotPassword' }"
        >Forgot password?
      </router-link>
      <button>Sign In</button>
      <div class="angle" />
    </form>
    <div class="background"></div>
  </div>
</template>
<script>
export default {
  name: 'register',
};
</script>
<style lang="scss" scoped></style>
