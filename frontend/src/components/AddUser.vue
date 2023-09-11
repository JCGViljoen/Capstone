<template>
    <div>
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        data-bs-whatever="@mdo"
      >
        Add
      </button>
  
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">New message</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form @submit.prevent="addUser" class="d-flex flex-column gap-5">
                <input type="text" v-model="userdata.firstName" placeholder="name">
                <input type="text" v-model="userdata.lastName" placeholder="surname">
                <input type="text" v-model="userdata.userCell" placeholder="cell number">
                <input type="text" v-model="userdata.email" placeholder="@email.com">
                <input type="text" v-model="userdata.userRole" placeholder="role">
                <input type="text" v-model="userdata.userPass" placeholder="password">
                <input type="text" v-model="userdata.profile_image_url" placeholder="image">
                <button type="submit" class="btn">Add</button>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        userdata: {
          firstName: "",
          lastName: "",
          email: "",
          userPass: "",
          profile_image_url: "",
          cellNum: "",
          userRole: "",
        },
      };
    },
    methods: {
    addUser() {
      this.$store.dispatch('addUser', this.userdata);
      this.userdata = {
        firstName: "",
        lastName: "",
        email: "",
        userPass: "",
        profile_image_url: "",
        cellNum: "",
        userRole: "",
      };
    },
  },
};
  </script>
  
  <style scoped>
  .btn {
    background-color: black;
    color: white;
    border-radius: 1px;
  }
  </style>
  