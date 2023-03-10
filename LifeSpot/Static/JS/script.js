function filterContent() {
    let inputString = document.getElementsByTagName('input')[0].value.toLowerCase();
    let elements = document.getElementsByClassName('video-container');

    for (let i = 0; i < elements.length; i++) {
        let videoText = elements[i].querySelector('.video-title').innerHTML.toLowerCase();
        if (!videoText.includes(inputString)) {
            elements[i].style.display = 'none';
        } else {
            elements[i].style.display = 'inline-block';
        }
    }
}

function handleSession() {
    let session = new Map();
    session.set("userAgent", window.navigator.userAgent);

    session.set("age", prompt("Пожалуйста, укажите ваш возраст"));

    if (session.get("age") >= 18) {
        let startDate = new Date().toLocaleString();
        alert("Приветствуем на LifeSpot! " + '\n' + "Текущее время: " + startDate);
        session.set("startDate", startDate)
    } else {
        alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
        window.location.href = "http://www.google.com";
    }

    return session;
}

function logSession(session) {
    for (let result of session) {
        console.log(result);
    }
}
