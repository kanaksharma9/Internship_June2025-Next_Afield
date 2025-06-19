
<script>
// @ts-nocheck

    let gender = $state('male');
    let activity_level = $state('sedentary');
    let height = $state('');
    let weight = $state('');
    let age = $state('');
    let BMR = $state(0);
    let TDEE = $state(0);

    function handleClick() {
		const result = getMatrices(gender, age, weight, height, activity_level);
		BMR = Math.round(result.BMR);
		TDEE = Math.round(result.TDEE);
	}

    function getMatrices(gender,age, weight, height, activity_level){
        let BMR = calculateBMR(gender,weight, height);
        let TDEE = calculateTDEE(BMR, activity_level);
        return { BMR: bmr, TDEE: tdee};
    }

    function calculateBMR(gender,weight, height){
        if (gender === "Male"){
            BMR= ((10*weight) +(6.25*height)-(5*age)+5)
        }
        else{
            BMR= ((10*weight) +(6.25*height)-(5*age)-161)
        }
        return BMR
    }

    function calculateTDEE(BMR, activity_level){
        if(activity_level==='sedentery'){
            TDEE=BMR * 1.2;
        }
        else if(activity_level==='low'){
            TDEE = BMR * 1.375;  
        }
        else if(activity_level==='moderate'){
            TDEE = BMR * 1.55; 
        }        
        else if(activity_level==='active'){
            TDEE = BMR *  1.725;
        }
        else{
            TDEE = BMR * 1.9;
        }
        return TDEE
    } 
 
</script>



<h1>BMR Calculator</h1>
<h2> Enter your data</h2>


     <h4>Gender:</h4>
    <label>
        <input type="radio" bind:group={gender} value={'male'} />
        Male
    </label><br>
    <label>
        <input type="radio" bind:group={gender} value={'female'} />
        Female
    </label><br>

     <h4>Height:</h4>
     <label >
        <input type="number" bind:value={height}>
     </label><br>

     <h4>Weight:</h4>
     <label >
        <input type="number" bind:value={weight}>
     </label><br>

     <h4>Age:</h4>
          <label >
        <input type="number" bind:value={age}>
     </label><br>

     <h4>Activity Level:</h4>
         <label>
        <input type="radio" bind:group={activity_level} value={'sedentery'} />
        Sedentery
    </label><br>
    <label>
        <input type="radio" bind:group={activity_level} value={'low'} />
        Low
    </label><br>
     <label>
        <input type="radio" bind:group={activity_level} value={'moderate'} />
        Moderate
    </label><br>
     <label>
        <input type="radio" bind:group={activity_level} value={'active'} />
        Active
    </label><br>
     <label>
        <input type="radio" bind:group={activity_level} value={'athlete'} />
        Athlete
    </label><br>
   <button onclick= {handleClick}>Calculate</button>
    
    {#if BMR}
	<hr>
	<h3>💡 Your Results</h3>
	<p><strong>BMR:</strong> {BMR} kcal/day</p>
	<p><strong>TDEE:</strong> {TDEE} kcal/day</p>
    {/if}