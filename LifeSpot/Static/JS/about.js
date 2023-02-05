function getReview() {
    let name = prompt("Как вас зовут?");
    if (name == null) {
        return;
    }

    let comment = prompt("Напишите отзыв здесь:");
    if (comment == null) {
        return;
    }

    let date = new Date().toLocaleString();

    let review = {
        Name: name,
        Comment: comment,
        Date: date
    };

    writeReview(review);
}

let writeReview = (review) => {
    document.getElementsByClassName('reviews')[0].innerHTML += '    <div class="review-text">\n' +
        `<p> <i> <b>${review.Name}</b> - ${review.Date}</i></p>` +
        `<p>${review.Comment}</p>` +
        '</div>';
}