




document.getElementById('banner_left').addEventListener("mouseover", function () {
    document.getElementById('bg_img').style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url(img/img_left.png)"
});

document.getElementById('banner_middle').addEventListener("mouseover", function () {
    document.getElementById('bg_img').style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url(img/img_middle.png)"
});

document.getElementById('banner_right').addEventListener("mouseover", function () {
    document.getElementById('bg_img').style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url(img/img_right.png)"
});
    










const carousel = document.querySelector('.product_item');
firstCard = carousel.querySelectorAll('.product_card')[0];
arrowIcons = document.querySelectorAll('.products_slider i ');

let isDragStart = false, prevPageX, prevScrollLeft;
let firstCardWith = firstCard.clientWidth + 14;

arrowIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        if (icon.id == "btn_prev") {
            carousel.scrollLeft -= firstCardWith;
        } else {
            carousel.scrollLeft += firstCardWith;
        }
    });
});


const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX
    prevScrollLeft = carousel.scrollLeft
};
const dragging = (e) => {
    if (!isDragStart) return;
    e.preventDefault();
    let positionDiff = e.pageX - prevPageX
    carousel.scrollLeft = prevScrollLeft - positionDiff;
};

const dragStop = () => {
    isDragStart = false;
};
carousel.addEventListener('mousedown', dragStart);
carousel.addEventListener('mousemove', dragging);
carousel.addEventListener('mouseup', dragStop);


// '''''''''''''''''''''''section3'''''''''''''''''''

const s3_carousel = document.querySelector('.s3_slider');
s3_firstCard = s3_carousel.querySelectorAll('.s3_product_card')[0];
s3_arrowIcons = document.querySelectorAll('.s3_slider i ');

let s3_isDragStart = false, s3_prevPageX, s3_prevScrollLeft;
let s3_firstCardWith = s3_firstCard.clientWidth + 14;

s3_arrowIcons.forEach(s3_icon => {
    s3_icon.addEventListener('click', () => {
        if (s3_icon.id == "s3_btn_prev") {
            s3_carousel.scrollLeft -= s3_firstCardWith;
        } else {
            s3_carousel.scrollLeft += s3_firstCardWith;
        }
    });
});

const s3_dragStart = (a) => {
    s3_isDragStart = true;
    s3_prevPageX = a.pageX
    s3_prevScrollLeft = carousel.scrollLeft
}
const s3_dragging = (a) => {
    if (!s3_isDragStart) return;
    a.preventDefault();
    let s3_positionDiff = a.pageX - s3_prevPageX
    s3_carousel.scrollLeft = s3_prevScrollLeft - s3_positionDiff;
}

const s3_dragStop = () => {
    s3_isDragStart = false;
}
s3_carousel.addEventListener('mousedown', s3_dragStart);
s3_carousel.addEventListener('mousemove', s3_dragging);
s3_carousel.addEventListener('mouseup', s3_dragStop);



document.getElementById('sanpham').addEventListener('mouseover', function (){
    document.getElementById('anh1').style.display ="block"
});
document.getElementById('sanpham').addEventListener('click', function (){
    document.getElementById('anh1').style.display ="none"
});
