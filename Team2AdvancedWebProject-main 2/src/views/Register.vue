<script setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import { firebaseAuthentication, createUserWithEmailAndPassword, updateProfile } from "@/firebase/database";

defineEmits(["register-clicked"])

const firstName = ref("");
const surname = ref("");
const displayName = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const errorRegistration = ref("");
const firstNameError = ref("");
const surnameError = ref("");
const displayNameError = ref("");
const emailError = ref("");
const passwordError = ref("");

watch(confirmPassword, () => {
  if (
    password.value !== "" &&
    confirmPassword.value !== "" &&
    password.value !== confirmPassword.value
  ) {
    errorRegistration.value = "Passwords do not match!";
  } else {
    errorRegistration.value = null;
  }
});

watch(firstName, () => {
  if (
    !/^[A-Za-z]+$/.test(firstName.value) || firstName.value == "" || firstName.value.length < 3
  ) {
    firstNameError.value = "Please enter a valid 3 letters long First Name!";
  } else {
    firstNameError.value = null;
  }
});

watch(surname, () => {
  if (
    !/^[A-Za-z]+$/.test(surname.value) || surname.value == "" || surname.value.length < 3
  ) {
    surnameError.value = "Please enter a valid 3 letters long surname!";
  } else {
    surnameError.value = null;
  }
});

watch(displayName, () => {
  if (
    displayName.value == "" || displayName.value.length < 3
  ) {
    displayNameError.value = "Please enter at least a 3 characters long displayName!";
  } else {
    displayNameError.value = null;
  }
});

watch(email, () => {
  if (
   !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value) && email.value !== "" || email.value.length < 3 
  ) {
    emailError.value = "Please enter a valid Email Addess!";
  } else {
    emailError.value = null;
  }
});

watch(password, () => {
  if (
    password.value == "" || password.value.length < 6
  ) {
    passwordError.value = "Your password must be at least 6 characters long!";
  } else {
    passwordError.value = null;
  }
});

const router = useRouter();

function register() {
  const info = {
    email: email.value,
    password: password.value,
    displayName: displayName.value,
  };

  if (!errorRegistration.value && !firstNameError.value && !surnameError.value &&  !displayNameError.value && !emailError.value) {
    createUserWithEmailAndPassword(firebaseAuthentication, info.email, info.password)
    .then(
      (userCredentials) => {
        userCredentials.displayName = info.displayName
        console.log("User Credentials: ", userCredentials)
      })
    .then(() =>
      updateProfile(firebaseAuthentication.currentUser, {
      displayName: info.displayName,
    })
    .then(() => {
      router.replace("/login");
    })
     )
      .catch((error) => {
        errorRegistration.value = error.message;
    });
  }
}
</script>

<template>
  <el-form label-width="95px" class="demo-ruleForm" @submit.prevent>
   <diV class="register-section">   
    <h2 id="register-label">Register</h2><br>

      <el-form-item label="First Name">
        <el-input
          type="text"
          placeholder="First Name"
          required
          autocomplete="off"
          v-model="firstName"
        ></el-input>
      </el-form-item>

      <div v-if="firstNameError">
        <el-button plain type="danger" disabled><el-icon><WarnTriangleFilled /></el-icon>
          {{ firstNameError }}
        </el-button><br>
      </div>

      <el-form-item label="Last Name">
        <el-input
          type="text"
          placeholder="Surname"
          required
          autocomplete="off"
          v-model="surname"
        ></el-input>
      </el-form-item>

      <div v-if="surnameError">
        <el-button plain type="danger" disabled><el-icon><WarnTriangleFilled /></el-icon>
          {{ surnameError }}
        </el-button><br>
      </div>

      <el-form-item label-width="auto" label="Display Name">
        <el-input
          type="text"
          placeholder="Display Name"
          required
          autocomplete="off"
          v-model="displayName"
        ></el-input>
      </el-form-item>

      <div v-if="displayNameError">
        <el-button plain type="danger" disabled><el-icon><WarnTriangleFilled /></el-icon>
          {{ displayNameError }}
        </el-button><br>
      </div>

      <el-form-item label="Email">
        <el-input
          type="email"
          placeholder="email"
          required
          autocomplete="off"
          v-model="email"
        ></el-input>
      </el-form-item>

      <div v-if="emailError">
        <el-button plain type="danger" disabled><el-icon><WarnTriangleFilled /></el-icon>
          {{ emailError }}
        </el-button><br>
      </div>

      <el-form-item label="Password" prop="pass">
        <el-input
          type="password"
          placeholder="password"
          required
          autocomplete="off"
          show-password
          v-model="password"
        ></el-input>
      </el-form-item>

      <div v-if="passwordError">
        <el-button plain type="danger" disabled><el-icon><WarnTriangleFilled /></el-icon>
          {{ passwordError }}
        </el-button><br>
      </div>

      <el-form-item label-width="auto" label="Confirm Password" prop="pass">
        <el-input
          type="password"
          placeholder="password"
          required
          autocomplete="off"
          show-password
          v-model="confirmPassword"
        ></el-input>
      </el-form-item>

      <div v-if="errorRegistration">
        <el-button plain type="danger" disabled><el-icon><WarnTriangleFilled /></el-icon>
          {{ errorRegistration }}
        </el-button>
      </div>

      <el-form-item>
        <el-button type="success" style="margin-left: 25%" @click="register"
          >Register</el-button
        >
      </el-form-item>
    </div>
  </el-form>
</template>

<style>
.register-section{
  display: inline-block;
  margin-left: 36%;
  margin-top: 2%;
}

#register-label{
  margin-left: 40%;
}
</style>
