<template>
  <header class="navbar">
    <img class="logo" src="./heartbeat.png" alt="Logo"  width="120" height="55" >
    <h2 class="logo">Cardiomyopathy</h2>
    <div class="navbar-items">
      <button class="nav-button"><RouterLink to="/" class="nav-item">Home</RouterLink></button>
      <button class="nav-button"><RouterLink to="/News" class="nav-item">News Feed</RouterLink></button>
      <button class="nav-button"><RouterLink to="/AddData" v-if="user" class="nav-item">Add Data</RouterLink></button>
      <button class="nav-button"><RouterLink to="/help" class="nav-item">Help</RouterLink></button>
      <button class="nav-button"><RouterLink to="/Login" v-if="!user" class="nav-item">Login</RouterLink></button>
      <button  class = "logout" color= "transparent"  @click = "logout" v-if="user">Logout {{user}}</button>
      <div class="search">
      <input
        v-model="input2"
        placeholder="Search"
      />
      </div>
  </div>
  </header>
  <router-view 
  :user="user"
  @logout="logout"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from "vue-router";
import {
  firebaseAuthentication,
  onAuthStateChanged,
  signOut,
} from "./firebase/database";

const user = ref();
const errorLogout = ref(null);
const input2 = ref('');
onAuthStateChanged(firebaseAuthentication, (currentUser) => {
  if (currentUser) {
    user.value = currentUser.displayName;

  }
})
const router = useRouter();

 
function logout() {
  signOut(firebaseAuthentication).then(
    () => {
      user.value = '';
      router.push("login");
    },
    (error) => {
      errorLogout.value = error.message;
    }
  );
}
</script>

<style>

h1{

  color: black;
  font-size: 35px;
}

.search{

  font-size: 30px;
  size: 100px;
  padding-top: 10px;
 
  

}
.logout{
  float: right;
  font-size: 15px;
  margin-top: -60px;
  background-color: white;
  border: 0;
  cursor: pointer;

}

header{
  

  color: black;
}
/* Navbar container */
.navbar {
  overflow: hidden;
  background-color: white;
  font-family: Arial;
  

}

/* Links inside the navbar */
.navbar a {
  float: left;
  font-size: 16px;
  color: black;
  text-align: center;
  margin: 14px 30px;
  text-decoration: none;
}

.nav-item:hover {
  background-color: transparent;
}

.nav-button{
  background-color: transparent;
  border: 0px red solid;
  padding: 0;
}

.search{
  float: right;
  margin-right: 15%;
  padding-top: 0;
}

.logo{
  display: inline-block;
}

.navbar-items{
  margin-left: 30%;
}

</style>