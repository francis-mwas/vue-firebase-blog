<template>
  <div class="form-wrap">
    <form class="register">
      <p class="login-container">
        Already have an account?
        <router-link class="router-link" :to="{ name: 'Login' }"
          >Sign In
        </router-link>
      </p>
      <h2>Create your fireBlog account</h2>
      <div class="inputs">
        <div class="input">
          <input type="text" placeholder="Firstname" v-model="firstname" />
          <user class="icon" />
        </div>
        <div class="input">
          <input type="text" placeholder="Lastname" v-model="lastname" />
          <user class="icon" />
        </div>
        <div class="input">
          <input type="text" placeholder="Username" v-model="username" />
          <user class="icon" />
        </div>
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
      <button>Sign Up</button>
      <div class="angle" />
    </form>
    <div class="background"></div>
  </div>
</template>
<script>
import email from '../assets/Icons/envelope-regular.svg';
import password from '../assets/Icons/lock-alt-solid.svg';
import user from '../assets/Icons/user-alt-light.svg';

export default {
  name: 'register',
  components: {
    email,
    password,
    user,
  },
  data(){
    return {
      firstname: null,
      lastname: null,
      username: null,
      email: null,
      password: null
    }
  }
};
</script>
<style lang="scss" scoped>
.register {
  h2 {
    max-width: 350px;
  }
}
</style>
