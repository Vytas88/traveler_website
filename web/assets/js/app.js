// //like heart
// $(function(){
//   $('#like-heart').on('click', function(){
//     $('#like-heart').toggleClass('like-heart--active');
//   })
// })


//open mobile menu
const openMobile = document.querySelector('[data-openMobile]');
const closeMobile = document.querySelector('[data-closeMobile]');


openMobile.addEventListener('click', () => {
    document.querySelector('#mobile-nav').style.height = '100%';
});

closeMobile.addEventListener('click', () => {
    document.querySelector('#mobile-nav').style.height = '0%';
});


//likes count & heart

const likesCount = document.querySelector('.likes-count');
const likeHeart = document.querySelector('.like-heart');


//local storage
const saveLocalStorage = (state) => {
    localStorage.setItem('state', JSON.stringify(state))
}

const getFromLocalStorage = (state) => {
    const storageState = localStorage.getItem('state');

    return {
        ...state,
        ...(JSON.parse(storageState))
    }
}


let initialState = {
    liked: false,
    likes: 0,
    msgArr: [],
}

const state = getFromLocalStorage(initialState)

likeHeart.addEventListener('click', () => {
    likeHeart.classList.toggle('like-heart--active');
    if (!state.liked) {
        state.liked = true;
        state.likes++
    } else {
        state.liked = false;
        state.likes--
    }
    likesCount.textContent = state.likes;
    saveLocalStorage(state)

})





// const renderLikes = (state) => {
//     if (state.liked) {
//         likeHeart.classList.toggle('like-heart--active');
//     }
//     likesCount.textContent = state.likes;
