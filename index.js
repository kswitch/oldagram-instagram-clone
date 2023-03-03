import { posts } from './posts.js'

renderPosts();

function renderPosts () {
    const body = document.querySelector('body');

    const header = document.createElement('header');
    body.prepend(header);

    header.innerHTML = `
        <img src="images/logo.png">
        <img class="header-avatar" src="./images/user-avatar.png" />
    `
    
    const main = document.createElement('main');
    body.append(main);

    posts.forEach(({ avatar, location, name, post, username, likes, comment } = post) => {
        main.innerHTML += `
            <section class="head">
                <img src="${avatar}" alt="avatar"/>
                <div class="avatar">
                    <p><strong>${name}</strong></p>
                    <p>${location}</p>
                </div>
            </section>

            <section class="post">
                <img src="${post}" alt="avatar"/>
            </section>

            <section class="info-and-comments">
                <div class="icons">
                    <img src="./images/icon-heart.png" />
                    <img src="./images/icon-comment.png" />
                    <img src="./images/icon-dm.png" />
                </div>

                <p class="likes" id="${username}"><strong>${likes} likes</strong></p>

                <div>
                    <p><strong>${username}</strong> ${comment}</p>
                </div>
            </section>
        `
    })

    const spacer = document.createElement('div')
    spacer.classList.add('bottom-spacer');
    body.append(spacer);
}


const increaseLikes = document.querySelector('main');
increaseLikes.addEventListener('dblclick', (event) => {
    
    if(event.target.parentElement.className.includes('likes')) {
        const uniqueID = event.target.parentElement.id;
        const addLike = document.querySelector(`#${uniqueID}`);

        for (let post of posts ){
            if (post.username == uniqueID) {
                post.likes += 1;
                addLike.innerHTML = `<strong>${post.likes} likes</strong>`;
            }
        }
    }
});