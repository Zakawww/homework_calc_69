async function changeButton(id, event) {
    console.log('target: ', event.target);
    let pk = await event.target.dataset['pk'];
    console.log(pk)

    let response = await fetch(`http://localhost:8000/articles/${pk}/like   `)
    let data = await response.json()
    console.log(data)
    let likes = data['likes']
    console.log(likes)
    let likes_p = document.getElementById(`likes_p-${pk}`)
    likes_p.innerText = 'Лайков: ' + likes
    let button = await document.getElementById('like')


    if (button.innerText === 'like') {
        button.innerText = 'dislike'
    } else if (button.innerText === 'dislike') {
        button.innerText = 'like'
    }

}


let button = document.getElementsByClassName('btn_like')
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', () => changeButton(`like${(i + 1)}`, event))
}

async function changeButtonCom(id, event) {
    console.log('target: ', event.target);
    let pk = await event.target.dataset['pk'];
    console.log('pk_com:' + pk)

    let response = await fetch(`http://localhost:8000/comment/${pk}/like`)
    let data = await response.json()
    console.log(data)
    let likes = data['likes']
    console.log(likes)
    let likes_p = document.getElementById(`comment_p-${pk}`)
    likes_p.innerText = 'Лайков: ' + likes
    let button = await document.getElementById(id)
    console.log(button)

    if (button.innerText === 'like') {
        button.innerText = 'dislike'
    } else if (button.innerText === 'dislike') {
        button.innerText = 'like'
    }

}

let button_com = document.getElementsByClassName('btn_like_com')
for (let i = 0; i < button_com.length; i++) {
    button_com[i].addEventListener('click', () => changeButtonCom(`like_com${(i + 1)}`, event))
}