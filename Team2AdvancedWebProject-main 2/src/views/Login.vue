<script setup>
import { ref } from "vue";
import { firebaseAuthentication, signInWithEmailAndPassword } from "@/firebase/database";
import { useRouter } from "vue-router";

defineEmits(["login-clicked"])

const email = ref("");
const password = ref("");
const errorFirebase = ref(null);

const router = useRouter();

function login() {
  const info = {
    email: email.value,
    password: password.value,
  };

  signInWithEmailAndPassword( firebaseAuthentication, info.email, info.password)
    .then(
      (userCredential) => {
        // const user = userCredential.user;
        router.push("/");
        // console.log("user = ", user)
        // router.push({ name: 'PostList', params: { user: user} });
      },
      (error) => {
        errorFirebase.value = error.message;
      }
    );
}
</script>

<template>
  <el-form label-width="50px" @submit.prevent>
    <div class="login-section">
      <h2 id="login-label">Login</h2><br>

      <el-form-item label="Email">
        <el-input
          type="email"
          placeholder="email"
          required
          autocomplete="off"
          v-model="email"
        ></el-input>
      </el-form-item>

      <el-form-item label="Password">
        <el-input
          type="password"
          placeholder="password"
          required
          autocomplete="off"
          show-password
          v-model="password"
        ></el-input>
      </el-form-item>

      <div v-if="errorFirebase">
        <el-button plain type="danger" disabled icon="el-icon-error">
          {{ errorFirebase }}
        </el-button>
      </div>
      <div class="center-div">
      <el-form-item>
        <el-button type="success" style="display: flex; margin-left: -54px;" @click="login">
          Login
        </el-button>
      
      </el-form-item>
    </div>
      <div class="center-div">
        <RouterLink to="/Register"><el-button color="black" style="">Register</el-button></RouterLink>
      </div>
      <div class="center-div">
        <RouterLink to="/ForgottenPassword" style="margin-top: 7px;">Forgotten Password</RouterLink>
      </div>
    </div>
  </el-form>
</template>

<style>
.register{
color: black;
}

.center-div{
  display: flex;
  justify-content: center;
}

.login-section{
  display: inline-block;
  margin-left: 40%;
  margin-top: 2%;
}

#login-label{
  margin-left: 40%;
}
</style>