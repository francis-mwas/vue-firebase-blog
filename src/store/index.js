import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase/app';
import 'firebase/auth';
import db from '../firebase/firebaseInit';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
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
    blogHTML: 'Write your blog title here...',
    blogTitle: '',
    blogPhotoName: '',
    blogPhotoFileURL: null,
    blogPhotoPreview: null,
    editPost: null,
    user: null,
    profileEmail: '',
    profileFirstName: '',
    profileLastName: '',
    profileUsername: '',
    profileId: null,
    profileIntials: null,
  },
  mutations: {
    newBlogPost(state, payload) {
      state.blogHTML = payload;
      // console.log(state.blogHTML);
    },
    updateBlogTitle(state, payload) {
      state.blogTitle = payload;
    },

    fileNameChange(state, payload) {
      state.blogPhotoName = payload;
    },
    createFileUrl(state, payload) {
      state.blogPhotoUrlFileUrl = payload;
    },
    openPhotoPreview(state) {
      state.blogPhotoPreview = !state.blogPhotoPreview;
    },
    toggleEditPost(state, payload) {
      state.editPost = payload;
    },
    updateUser(state, payload) {
      state.user = payload;
    },
    setProfileInfo(state, doc) {
      state.profileId = doc.id;
      state.profileEmail = doc.data().email;
      state.profileFirstName = doc.data().firstName;
      state.profilelastName = doc.data().lastName;
      state.profileUsername = doc.data().userName;
    },
    setProfileInitials(state) {
      state.profileIntials =
        state.profileFirstName.match(/(\b\$)?/g).join('') +
        state.profileLastName.match(/(\b\$)?/g).join('');
    },
    changeFirstName(state, payload) {
      state.profileFirstName = payload;
    },
    changeLastName(state, payload) {
      state.profileLastName = payload;
    },
    changeUsername(state, payload) {
      state.profileUsername = payload;
    },
  },
  actions: {
    async getCurrentUser({ commit }) {
      const dataBase = await db
        .collection('users')
        .doc(firebase.auth().currentUser.uid);
      const dbResults = await dataBase.get();
      commit('setProfileInfo', dbResults);
      commit('setProfileInitials');
    },
    async updateUserSettings({ commit, state }) {
      const dataBase = await db.collection('users').doc(state.profileId);
      await dataBase.update({
        firstName: state.profileFirstName,
        lastName: state.profileLastName,
        userName: state.profileUsername,
      });
      commit('setProfileInitials');
    },
  },
  modules: {},
});
