<script setup>

function openWebsite1(){
    window.open("https://www.google.com")
   }

</script>
<template>
    <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>Support Group Times</span>
       <a href="https://www.cardiomyopathy.org/news-blogs/latest-news/support-groups-this-month">Cardiomyopathy.org</a>
      </div>
    </template>
    <div class="times"><p>Here you can find all the support group meetings we are holding through the month of March, we are holding 12 groups this month.
<br>
Our Groups This Month:<br>
Saturday 4th at 10am - West London, Surrey & Middlesex (in-person)<br>
Tuesday 7th at 7pm - Coffee & Catch Up: Evening Edition (online)<br>
Friday 10th at 12pm - Advanced Heart Failure (online)<br>
Saturday 11th at 11am - Sheffield & South Yorkshire (in-person)<br>
Saturday 11th at 2pm - Bridgend & North Wales (online)<br>
Saturday 11th at 3pm - North London (online)<br>
Monday 13th at 7pm - ACM including ARVC (online)<br>
Thursday 16th at 7pm - Cheshire & Merseyside (in-person)<br>
Friday 24th at 12pm - Advanced Heart Failure (online)<br>
Saturday 25th at 11am - Leeds & York (in-person)<br>
Saturday 25th at 11am - Sussex (in-person)<br>
Monday 27th at 7pm - Loved Ones (online) 
</p>
</div>
  </el-card>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
</template>



<style>

.box-card{

    background-color: transparent;
    margin: auto;
    width: 50%;
   
   

}

p{
    color: black;
    font-size: larger;
    font-weight:bold;
    

}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  
}

.text {
  font-size: 14px;
  
}

.item {
  margin-bottom: 18px;
  width: 50%;
}
.times{

    text-align: center;
    

}




</style>