<script setup>
import { ref, watch} from "vue";
import { useRouter } from "vue-router";
import { doc , setDoc} from "firebase/firestore";
import { firebaseFireStore } from "@/firebase/database";


const ledv = ref("");
const lesv = ref("");
const lsv = ref("");
const lvef = ref("");
const lvmass = ref("");
const rvmass = ref("");
const redv = ref("");
const resv = ref("");
const rsv = ref("");
const rvef = ref("");
const scar = ref("");
const female = ref("");
const age = ref("");
const ApicalHCM = ref("");
const SuddenCardiacDeath = ref("");
const hypertension = ref("");
const diabetes = ref("");
const myectomy = ref("");

//store errors
const ledvError = ref("");
const lesvError = ref("");
const lsvError = ref("");
const lvefError = ref("");
const lvmassError = ref("");
const rvmassError = ref("");
const redvError= ref("");
const resvError = ref("");
const rsvError = ref("");
const rvefError = ref("");
const ageError = ref("");

const gender = [
  {
    value: '0',
    label: 'Male',
  },
  {
    value: '1',
    label: 'Female',
  }]

  const yesOrNo = [
  {
    value: '0',
    label: 'No',
  },
  {
    value: '1',
    label: 'Yes',
  }]

watch(ledv, () => {
  if ( 
        !/^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/.test(ledv.value) || ledv.value == ""||  ledv.value == null || ledv.value < 0 || ledv.value > 220
  ) {
    ledvError.value = "Please only enter numbers and ledv value between 0 and 220!";
  } else {
    ledvError.value = null;
  }
});

watch(lesv, () => {
  if ( 
        !/^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/.test(lesv.value) || lesv.value == ""||  lesv.value == null || lesv.value < 0 || lesv.value > 220
  ) {
    lesvError.value = "Please only enter numbers and lesv value between 0 and 220!";
  } else {
    lesvError.value = null;
  }
});

watch(lsv, () => {
  if ( 
        !/^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/.test(lsv.value) || lsv.value == ""||  lsv.value == null || lsv.value < 0 || lsv.value > 220
  ) {
    lsvError.value = "Please only enter numbers and lsv value between 0 and 220!";
  } else {
    lsvError.value = null;
  }
});

watch(lvef, () => {
  if ( 
        !/^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/.test(lvef.value) || lvef.value == ""||  lvef.value == null || lvef.value < 0 || lvef.value > 220
  ) {
    lvefError.value = "Please only enter numbers and lvef value between 0 and 220!";
  } else {
    lvefError.value = null;
  }
});

watch(lvmass, () => {
  if ( 
        !/^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/.test(lvmass.value) || lvmass.value == ""||  lvmass.value == null || lvmass.value < 0 || lvmass.value > 220
  ) {
    lvmassError.value = "Please only enter numbers and lvmass value between 0 and 220!";
  } else {
    lvmassError.value = null;
  }
});

watch(rvmass, () => {
  if ( 
        !/^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/.test(rvmass.value) || rvmass.value == ""||  rvmass.value == null || rvmass.value < 0 || rvmass.value > 220
  ) {
    rvmassError.value = "Please only enter numbers and rvmass value between 0 and 220!";
  } else {
    rvmassError.value = null;
  }
});

watch(redv, () => {
  if ( 
        !/^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/.test(redv.value) || redv.value == ""||  redv.value == null || redv.value < 0 || redv.value > 220
  ) {
    redvError.value = "Please only enter numbers and redv value between 0 and 220!";
  } else {
    redvError.value = null;
  }
});

watch(resv, () => {
  if ( 
        !/^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/.test(resv.value) || resv.value == ""||  resv.value == null || resv.value < 0 || resv.value > 220
  ) {
    resvError.value = "Please only enter numbers and resv value between 0 and 220!";
  } else {
    resvError.value = null;
  }
});

watch(rsv, () => {
  if ( 
        !/^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/.test(rsv.value) || rsv.value == ""||  rsv.value == null || rsv.value < 0 || rsv.value > 220
  ) {
    rsvError.value = "Please only enter numbers and rsv value between 0 and 220!";
  } else {
    rsvError.value = null;
  }
});

watch(rvef, () => {
  if ( 
        !/^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/.test(rvef.value) || rvef.value == ""||  rvef.value == null || rvef.value < 0 || rvef.value > 220
  ) {
    rvefError.value = "Please only enter numbers and rvef value between 0 and 220!";
  } else {
    rvefError.value = null;
  }
});

watch(age, () => {
  if ( 
    !/^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/.test(age.value) ||  age.value == ""||  age.value == null || age.value >= 100 || age.value < 0
  ) {
    ageError.value = "Please enter a valid age less than a 100!";
  } else {
    ageError.value = null;
  }
});




const router = useRouter();

const addDataToFirestore = async () => {
    if (!ledvError.value && !lesvError.value && !lsvError.value &&  !lvefError.value && !lvmassError.value && !rvmassError.value && !redvError.value && !resvError.value && !rsvError.value && !rvefError.value &&!ageError.value) {
        try {
            const data = {
            ledv: parseFloat(ledv.value),
            lesv: parseFloat(lesv.value),
            lsv: parseFloat(lsv.value),
            lvef: parseFloat(lvef.value),
            lvmass: parseFloat(lvmass.value),
            rvmass: parseFloat(rvmass.value),
            redv: parseFloat(redv.value),
            resv: parseFloat(resv.value),
            rsv: parseFloat(rsv.value),
            rvef: parseFloat(rvef.value),
            scar: parseFloat(scar.value),
            female: parseFloat(female.value),
            AgeatMRI: parseFloat(age.value),
            ApicalHCM: parseFloat(ApicalHCM.value),
            SuddenCardiacDeath: parseFloat(SuddenCardiacDeath.value),
            Hypertension: parseFloat(hypertension.value),
            diabetes: parseFloat(diabetes.value),
            myectomy: parseFloat(myectomy.value)
            };

            const randomId = Math.floor(Math.random() * 1000000);
            const docRef = doc(firebaseFireStore,"MyCardiomyopathy",randomId.toString());
            await setDoc(docRef, data);
            console.log("Data added to Firestore successfully!");
            console.log(data); 
            console.log(randomId);
            router.push("/");
        } catch (error) {
            console.error("Error adding data to Firestore: ", error);
        }
    }
}
</script>


<template>
    <div class="addData-section">
      <el-form label-width="95px" class="demo-ruleForm" @submit.prevent>
        <h2 id="heading">Add Data</h2><br>
        <el-form-item label="ledv">
  <el-input
    type="text"
    placeholder="ledv"
    required
    autocomplete="off"
    v-model="ledv"
  ></el-input>
</el-form-item>

<div v-if="ledvError">     
    <el-button plain type="danger" disabled><el-icon><WarnTriangleFilled /></el-icon>
        {{ ledvError }}
    </el-button><br>
</div>

<el-form-item label="lesv">
  <el-input
    type="text"
    placeholder="lesv"
    required
    autocomplete="off"
    v-model="lesv"
  ></el-input>
</el-form-item>

<div v-if="lesvError">     
    <el-button plain type="danger" disabled><el-icon><WarnTriangleFilled /></el-icon>
        {{ lesvError }}
    </el-button><br>
</div>

<el-form-item label="lsv">
  <el-input
    type="text"
    placeholder="lsv"
    required
    autocomplete="off"
    v-model="lsv"
  ></el-input>
</el-form-item>

<div v-if="lsvError">     
    <el-button plain type="danger" disabled><el-icon><WarnTriangleFilled /></el-icon>
        {{ lsvError }}
    </el-button><br>
</div>

<el-form-item label="lvef">
  <el-input
    type="text"
    placeholder="lvef"
    required
    autocomplete="off"
    v-model="lvef"
  ></el-input>
</el-form-item>

<div v-if="lvefError">     
    <el-button plain type="danger" disabled><el-icon><WarnTriangleFilled /></el-icon>
        {{ lvefError }}
    </el-button><br>
</div>

<el-form-item label="lvmass">
  <el-input
    type="text"
    placeholder="lvmass"
    required
    autocomplete="off"
    v-model="lvmass"
  ></el-input>
</el-form-item>

<div v-if="lvmassError">     
    <el-button plain type="danger" disabled><el-icon><WarnTriangleFilled /></el-icon>
        {{ lvmassError }}
    </el-button><br>
</div>

<el-form-item label="rvmass">
  <el-input
    type="text"
    placeholder="rvmass"
    required
    autocomplete="off"
    v-model="rvmass"
  ></el-input>
</el-form-item>

<div v-if="rvmassError">     
    <el-button plain type="danger" disabled><el-icon><WarnTriangleFilled /></el-icon>
        {{ rvmassError }}
    </el-button><br>
</div>

<el-form-item label="redv">
  <el-input
    type="text"
    placeholder="redv"
    required
    autocomplete="off"
    v-model="redv"
  ></el-input>
</el-form-item>

<div v-if="redvError">     
    <el-button plain type="danger" disabled><el-icon><WarnTriangleFilled /></el-icon>
        {{ redvError }}
    </el-button><br>
</div>

<el-form-item label="resv">
  <el-input
    type="text"
    placeholder="resv"
    required
    autocomplete="off"
    v-model="resv"
  ></el-input>
</el-form-item>

<div v-if="resvError">     
    <el-button plain type="danger" disabled><el-icon><WarnTriangleFilled /></el-icon>
        {{ resvError }}
    </el-button><br>
</div>

<el-form-item label="rsv">
  <el-input
    type="text"
    placeholder="rsv"
    required
    autocomplete="off"
    v-model="rsv"
  ></el-input>
</el-form-item>

<div v-if="rsvError">     
    <el-button plain type="danger" disabled><el-icon><WarnTriangleFilled /></el-icon>
        {{ rsvError }}
    </el-button><br>
</div>

<el-form-item label="rvef">
  <el-input
    type="text"
    placeholder="rvef"
    required
    autocomplete="off"
    v-model="rvef"
  ></el-input>
</el-form-item>

<div v-if="rvefError">     
    <el-button plain type="danger" disabled><el-icon><WarnTriangleFilled /></el-icon>
        {{ rvefError }}
    </el-button><br>
</div>

<el-form-item label="Scar">
  <el-select v-model="scar" placeholder="Scar">
    <el-option
      v-for="item in yesOrNo"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
</el-form-item>

<el-form-item label="Gender">
  <el-select v-model="female" placeholder="Select Gender">
    <el-option
      v-for="item in gender"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
</el-form-item>

<el-form-item label="Age at MRI">
  <el-input
    type="text"
    placeholder="Age at MRI"
    required
    autocomplete="off"
    v-model="age"
  ></el-input>
</el-form-item>

<div v-if="ageError">     
    <el-button plain type="danger" disabled><el-icon><WarnTriangleFilled /></el-icon>
        {{ ageError }}
    </el-button><br>
</div>

<el-form-item label="Apical HCM">
  <el-select v-model="ApicalHCM" placeholder="Apical HCM">
    <el-option
      v-for="item in yesOrNo"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
</el-form-item>

<el-form-item label="SCD">
  <el-select v-model="SuddenCardiacDeath" placeholder="Sudden Cardiac Death">
    <el-option
      v-for="item in yesOrNo"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
</el-form-item>

<el-form-item label="hypertension">
  <el-select v-model="hypertension" placeholder="hypertension">
    <el-option
      v-for="item in yesOrNo"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
</el-form-item>

<el-form-item label="diabetes">
  <el-select v-model="diabetes" placeholder="diabetes">
    <el-option
      v-for="item in yesOrNo"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
</el-form-item>

<el-form-item label="myectomy">
  <el-select v-model="myectomy" placeholder="myectomy">
    <el-option
      v-for="item in yesOrNo"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
</el-form-item>
        
        
  
        <el-form-item>
            <el-button type="danger" @click="addDataToFirestore">Submit</el-button>
            <router-link :to="{ name: 'Home' }">
              <el-button id="cancel-btn">Cancel</el-button>
            </router-link>
          </el-form-item>
      </el-form>
    </div>
  </template>
  

<style>
.addData-section{
  display: inline-block;
  margin-left: 35%;
  margin-top: 2%;
}

#heading{
    margin-left: 40%;
}

#cancel-btn{
    margin-left: 20%;
}
</style>
