let imgBox = document.querySelector('.image-box');
let imgWrap = document.querySelector('.image-wrap');
let originalImg = document.getElementById('original-image')
let line = document.getElementById('line');

originalImg.style.width = imgBox.offsetWidth + 'px';

let leftSpace = imgBox.offsetLeft;
imgBox.onmousemove = function (e) {
    let boxWidth = (e.pageX - leftSpace) + 'px';
    imgWrap.style.width = boxWidth;
    line.style.left = boxWidth;
}