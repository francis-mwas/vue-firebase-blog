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
        <div v-show="error" class="error">{{ this.errorMsg }}</div>
      </div>
      <button @click.prevent="register">Sign Up</button>
      <div class="angle" />
    </form>
    <div class="background"></div>
  </div>
</template>
<script>
import email from '../assets/Icons/envelope-regular.svg';
import password from '../assets/Icons/lock-alt-solid.svg';
import user from '../assets/Icons/user-alt-light.svg';
import firebase from 'firebase/app';
import 'firebase/auth';
import db from '../firebase/firebaseInit';

export default {
  name: 'register',
  components: {
    email,
    password,
    user,
  },
  data() {
    return {
      firstname: '',
      lastname: '',
      username: '',
      email: '',
      password: '',
      error: '',
      errorMsg: '',
    };
  },
  methods: {
    async register() {
      if (
        this.email !== '' &&
        this.password !== '' &&
        this.username !== '' &&
        this.firstname !== '' &&
        this.lastname !== ''
      ) {
        this.error = false;
        this.errorMsg = '';
        const firebaseAuth = await firebase.auth();
        const createUser = await firebaseAuth.createUserWithEmailAndPassword(
          this.email,
          this.password
        );
        const result = await createUser;

        // reference a collection or create one if its not there
        const dataBase = db.collection('users').doc(result.user.uid);
        await dataBase.set({
          firstName: this.firstname,
          lastName: this.lastname,
          userName: this.username,
          email: this.email,
        });
        this.$router.push({ name: 'Home' });
        return;
      }
      this.error = true;
      this.errorMsg = 'Please fill out all the fields';
    },
  },
};
</script>
<style lang="scss" scoped>
.register {
  h2 {
    max-width: 350px;
  }
}
</style>
