// creo un array di oggetti che contengono tutte le informazioni per generare un post
const arrayPosts = [
    {
        author: "Phil Mangione",
        profilepic: 15,
        time: "4 mesi fa",
        text: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        image: 171,
        likecounter: 80
    }
]
// funzione che stampa i post prelevando i dati da arrayPosts
function printObjectsOnHTML(objectArray, positionOnDOM) {
    for (let i = 0; i < objectArray.length; i++) {
        positionOnDOM.innerHTML += `
        <div class="post">
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    <img class="profile-pic" src="https://unsplash.it/300/300?image=${objectArray[i].profilepic}" alt="Phil Mangione">                    
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${objectArray[i].author}</div>
                    <div class="post-meta__time">${objectArray[i].time}</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.</div>
        <div class="post__image">
            <img src="https://unsplash.it/600/300?image=${objectArray[i].image}" alt="">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" href="#" data-postid="1">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-${i + 1}" class="js-likes-counter">${objectArray[i].likecounter}</b> persone
                </div>
            </div> 
        </div>            
    </div>`
        
    }
}
// prelevo la posizione dal DOM
const container = document.getElementById("container");
// lancio la funzione con l'array dei post da inserire nel container preso in precedenza
printObjectsOnHTML(arrayPosts, container);
// aggiungo l'add event listener ai button like stampati in precedenza
for (let i = 0; i < arrayPosts.length; i++) {
    const aLikeButton = document.querySelectorAll(".js-like-button")[i];
    const aLikeCounter = document.querySelectorAll(".js-likes-counter")[i];
    aLikeButton.addEventListener("click",
        function () {
            if(!(aLikeButton.classList.contains("like-button--liked"))) {
                arrayPosts[i].likecounter += 1;
                aLikeButton.classList.add("like-button--liked");
            } else {
                arrayPosts[i].likecounter -= 1;
                aLikeButton.classList.remove("like-button--liked");
            }
            aLikeCounter.innerHTML = arrayPosts[i].likecounter;
        }
    )
}
