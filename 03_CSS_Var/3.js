const inputs = document.querySelectorAll('.controls input') 
// This line selects all <input> elements that are inside any element with the class controls
// So here we are garbbing 3 inputs(spacing, blur, base color) into a NODELIST

function handleUpdate(){
    const suffix = this.dataset.sizings || ' '; 
    // console.log(suffix);
    // console.log(this.name);  names like spacing, blur and base(color) will appear in the console log.

    const a = document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)  
    // This sets a CSS variable like --spacing, --blur, or --base, and updates its value based on the input.
    // So if spacing = 20 and suffix = "px", it does: "--spacing: 20px";
}

inputs.forEach(input => input.addEventListener('change',handleUpdate));

inputs.forEach(input => input.addEventListener('mousemove',handleUpdate));