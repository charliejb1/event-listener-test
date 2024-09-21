const space = document.getElementById('my-div')
const space2 = document.getElementById('my-div-2')
const form = document.getElementById('form')
const tree = document.getElementById('tree')
const content = document.getElementById('show-box')
const button = document.getElementById('show-more')


function handleClick(){
    if (space.innerHTML === "Hello there, my name is Charlie") {

        space.innerHTML = "";
    } else {
        space.innerHTML = "Hello there, my name is Charlie";
    }
}

tree.addEventListener("mouseover", function(){
    this.style.boxShadow = "2px 2px 2px grey"
})

tree.addEventListener("mouseout", function(){
    this.style.boxShadow = ""
})


function handleText(){
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const message = document.getElementById('content').value;

        const newParagraph = document.createElement('p');
        newParagraph.textContent = message;

        // Append the new paragraph to the output div
        space2.appendChild(newParagraph);

        form.reset();

    });
}

function showFunction() {
    if(content.className == "open"){

        content.className = ""
        button.innerHTML = "Show More";

     } else{
        content.className = "open";
        button.innerHTML = "Show Less";
    }

}


