const checkboxes = document.querySelectorAll('.inbox [type = "checkbox"]');

let lastCheck ; 

function handleCheck(e){
    
    // Check if they had the shift key down
    // And also check that are they checking the checkbox or not
    let inBetween = false;
    if(e.shiftKey && this.checked){
        // then will go ahead : 
        // now gonna loop on over every single checkbox
        checkboxes.forEach(checkbox =>{
            // console.log(checkbox);
            if(checkbox === this || checkbox === lastCheck){
                inBetween =! inBetween; // toggle the flag variable to track the range
                // console.log('Start to check in bewteen');
            }
            if(inBetween){
                checkbox.checked = true;
            }
        })
    }
    lastCheck = this;
}


checkboxes.forEach(checkboxe => checkboxe.addEventListener('click',handleCheck));