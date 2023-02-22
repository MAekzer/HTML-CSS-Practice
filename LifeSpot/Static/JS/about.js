class Review {
    constructor(name, comment) {
        this.Name = name;
        this.Comment = comment;
        this.Date = new Date().toLocaleString();
    }

    WriteReview() {
        document.getElementsByClassName('reviews')[0].innerHTML += '    <div class="review-text">\n' +
            `<p> <i> <b>${this.Name}</b> - ${this.Date}</i></p>` +
            `<p>${this.Comment}</p>` +
            '</div>';
    }
}

class RatedReview extends Review {
    constructor(name, comment) {
        super(name, comment);
        this.Rating = 0;
        this.id = Math.random();
    }

    WriteReview() {
        document.getElementsByClassName('reviews')[0].innerHTML += '    <div class="review-text">\n' +
            `<p> <i> <b>${this.Name}</b> - ${this.Date}</i>` +
            `  <button class="like" id="${this.id}"><b>${this.Rating}</b> ❤️</button></p>` +
            `<p>${this.Comment}</p>` +
            '</div>';

        let likebutton = document.getElementById(this.id);
        likebutton.addEventListener("click", () => {
            this.Rating++;
            likebutton.innerHTML = `<b>${this.Rating}</b> ❤️`;
        });
    }
}

function getReview() {
    let name = prompt("Как вас зовут?");
    if (name == null) {
        return;
    }

    let comment = prompt("Напишите отзыв здесь:");
    if (comment == null) {
        return;
    }

    let isRated = confirm("Хотите ли, чтобы ваш отзыв могли оценить другие пользователи?");

    let review;
    if (isRated) {
        review = new RatedReview(name, comment);
    } else {
        review = new Review(name, comment);
    }

    review.WriteReview();
}

document.addEventListener('DOMContentLoaded', () => {
    const slider = ItcSlider.getOrCreateInstance('.itc-slider', {
        loop: false,
        refresh: false
    });
});