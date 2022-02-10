// See all ramen images in the div with the id of ramen-menu. 
// When the page loads, request the data from the server to get all the ramen objects. 
// Then, display the image for each of the ramen using an img tag 
// inside the #ramen-menu div.



document.addEventListener('DOMContentLoaded', () => {
    init()
    
})

function init(){
    // When the page loads, 
    // request the data from the server to get all the ramen objects.

    fetch('http://localhost:3000/ramens')
    .then(response => response.json())
    .then(data => {
        console.log('Data Here:', data)

        data.forEach(data => {
             console.log(ramenImages(data))
        })
    })
}



function ramenImages() {
    //Create/Modify 
    let ramenDiv = document.getElementById('ramen-menu')
    let ramenPic = document.createElement('img')

    //style
    let imageRamen 
    
    //Append

    ramenDiv.appendChild(ramenPic)
}



// Click on an image from the #ramen-menu div and see all the info 
// about that ramen displayed inside the #ramen-detail 
// div and where it says insert comment here and insert rating here.


function clickImage() {
    
    ramenPic.addEventListener('click', () => {
        
        //create/modify
        let menuDiv = document.getElementById('ramen-detail')
    
        //style
    
        //append
    })

}




// // Create a new ramen after submitting the new-ramen form. 
// // The new ramen should be added to the#ramen-menu div. 
// // The new ramen does not need to persist; in other words, 
// // if you refresh the page, it's okay that the new ramen is no longer on the page.

function newRamenForm() {
    let newFormID = getElementById('new-menu')
    let createForm = createElement('h4')


}