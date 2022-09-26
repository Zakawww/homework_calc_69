function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

const csrftoken = getCookie('csrftoken');

async function getResult(event) {
    event.preventDefault()
    let url = await event.target.href
    let firstinput = document.getElementById('firstinput')
    let secondinput = document.getElementById('secondinput')
    let a = firstinput.value
    let b = secondinput.value
    console.log(a, b)
    let body = {
        "a": a,
        "b": b
    }
    let response = await makeRequest(url, body)

    let p = document.getElementById('result')
    p.style = 'color:green'
    p.innerText = response.answer
}

let btnList = document.getElementsByClassName('btn')
for (let i = 0; i < btnList.length; i++)
    btnList[i].addEventListener('click', () => getResult(event))


async function makeRequest(url, body) {
    let response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'X-CSRFToken': csrftoken
        },
        body: JSON.stringify(body),
        mode: 'same-origin'
    });

    if (response.ok) {
        return await response.json();
    } else {
        let p = document.getElementById('result')
        p.style = 'color:red'
        let error = await response.json()
        p.innerText = error.error
        console.log(await response.json())
    }
}