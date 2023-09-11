<template>
    <div class="main">
      <h2>Edit user</h2>
      <center>
        <form @submit.prevent="editConfirm">
          <input v-model="editUser.user_id" type="text" placeholder="UserID" class="form-control" /><br />
          <input v-model="edituser.firstName" type="text" placeholder="firstName" class="form-control" /><br />
          <input v-model="editUser.lastName" type="text" placeholder="lastName" class="form-control" /><br />
          <input v-model="editUser.email" type="text" placeholder="email" class="form-control" /><br />
          <input v-model="editUser.profile_image_url" type="text" placeholder="Profile image" class="form-control" /><br />
          <input v-model="editUser.userPass" type="text" placeholder="userPass" class="form-control" /><br />
          <input v-model="editUser.userRole" type="text" placeholder="userRole" class="form-control" /><br />
          <input v-model="editUser.cellNum" type="text" placeholder="cell number" class="form-control" /><br />
          <div>
            <button type="submit" class="btn btn-success">Save</button>
            <router-link to="/admin" class="btn btn-info">Back</router-link>
          </div>
        </form>
      </center>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        editUser: {
          user_id: this.id,
          firstName: "",
          lastName: "",
          email: "",
          cellNum: "",
          userPass: "",
          userRole: "",
        },
      };
    },
    props: ["id"],
    methods: {
      editConfirm() {
        this.$store.dispatch("ConfirmEditUser", this.editUser)
          .then(() => {
            alert("User updated");
          })
          .catch((error) => {
            alert("An error occurred: " + error.message);
          });
      },
    },
  };
  </script>
  
  <style scoped>
  .main {
    background-color: rgba(0, 0, 0, 0.893);
  }
  input {
    width: 40%;
  }
  h2 {
    color: whitesmoke;
  }
  form div {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
  </style>
  