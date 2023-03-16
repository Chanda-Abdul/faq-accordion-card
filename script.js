const accordion = document.querySelector("ul");



for(let i = 0; i < accordion.children.length; i++){
    accordion.children[i].addEventListener('click', function(){
        this.classList.toggle('active');
    })

}