const panels = document.querySelectorAll('.panel');

function toggleOpen(){
    this.classList.toggle('open'); // this will trigger the css prop.
}

function toggleActive(e){
    console.log(e.propertyName);
    this.classList.toggle('open-active');
}

panels.forEach(panel => panel.addEventListener('click',toggleOpen));

panels.forEach(panel => panel.addEventListener('transitionend',toggleActive));