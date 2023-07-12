<script setup>
import {ref} from "vue"

const chartOptions = ref({
        chart:{
          height: "350",
          type:"line",
          zoom:{
            enabled:false,
          },      
        },
    dataLabels:{

        enabled: false,
    },
    stroke:{

        curve: "straight",
    },
    title: {
      text: "Cardiomyopathy diagnoses compared to age",
      align: "left",
    },
    grid: {
        row: {
            colors: ["red,black"],
            opacity: 0.5,
        },
    },
    xaxis: {
        categories:["0-18","18-20","21-25","26-30","31-35","36-40","41-45","46-50","51-55","56-59","60+"],
        title:{
            text:"Age",
        },
    },
    yaxis: {
        title:{
        text:"Number of Diagnoses'",
        },
    },
    legend:{
        position: "top",
        horizontalAlign: "right",
        floating: true,
        offsetY:-25,
        offsetX: -5,
    },
    });

    const series = ref([
        {
            name: "Number of diagnoses'(K)",
            data:[10,15,30,55,105,112,135,160,200,250,350],
        },
    ]);

</script>
<template>
    <div id="cardiomyopathy-info">
        <h3>
            <i>Cardiomyopathy </i>is a term used to describe diseases that affect the heart muscle's
                ability to pump blood to all body parts. Diseases are caused when the walls of the heart chambers
                thicken, stretch or become stiff. The majority of cardiomyopathy types are genetic in nature and 
                tend to manifest in children and younger individuals.<br><br>
                Most common types of cardiomyopathy diseases include:
            <ul><br>
                <li><i>Dilated cardiomyopathy: </i>the heart walls become stretched and thin, reducing its ability to pump blood properly. if the heart is unable 
                    to pump blood at an appropriate pressure, it could lead to heart failure.
                </li><br>
                <li><i>Hypertrophic cardiomyopathy: </i>The heart walls becomes thickened, this makes it harder for blood to flow out of the heart.
                    eventhoght it may not have an impact on the individuals daily life, it is the leading cause of unexpected sudden death in childhood and among young athletes.
                </li><br> 
                <li><i>Arrhythmogenic right ventricular cardiomyopathy: </i>the heart muscle walls become thin, stretched and 
                    cannot pump blood around the body effectively. The proteins responsible for holding the heart muscle
                    cells together are abnormal, It is rare but it can cause abnormal heart rhythms and even sudden 
                    cardiac death.
                </li> 
            </ul>
        </h3>   
    </div>
    <div>
        <apexchart
        postion = "center"
        type="line"
        height="350"
        width="500"
        :options = "chartOptions"
        :series="series"
        ></apexchart>
    </div>
    
    <div>
        <apexchart
        type="bar"
        height="350"
        width="500"
        :options = "chartOptions"
        :series="series"
        ></apexchart>
    </div>
</template>
<style>
    #cardiomyopathy-info{
        display: inline;
        float: right;
        font-size: ;
        width: 52%;
        margin-right: 3%;
        margin-top: 4%;
    }
    i{
        background-color:   rgba(255, 0, 0, 0.4);
        border-radius: 4px;
        padding: 0 2px 2px 2px;
    }
</style>