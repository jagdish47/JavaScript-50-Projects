const panels = document.querySelectorAll('.panel');
// console.log(panels);
// console.log(panels[0]);
// console.log(panels[1]);
// console.log(panels[2]);
// console.log(panels[3]);
// console.log(panels[4]);



// panels.forEach(function(elem){
//     // console.log(elem);
//     elem.addEventListener('click', function(){
//         console.log("123");
//     })
// })

panels.forEach( (panels) => {
   panels.addEventListener('click', () => {
    // console.log("clicked bro");

    // we have to first remove all active class so write function
    removeActiveClasses();

    // after remove one we add one active class whome we have have click
    panels.classList.add('active');
   })
})

// remove classes function
function removeActiveClasses() {
    panels.forEach(panels => {
        panels.classList.remove('active');
    })
}