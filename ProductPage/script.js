let prodctImg = document.getElementById('productImg');
let btns = document.getElementsByClassName('btn');

// btns[0].addEventListener('click', function(){
//     prodctImg.src = 'productImg/image1.png';
// });
// btns[1].addEventListener('click', function(){
//     prodctImg.src = 'productImg/image2.png';
// });
// btns[2].addEventListener('click', function(){
//     prodctImg.src = 'productImg/image3.png';
// });
btns[0].onclick = function(){
    prodctImg.src = "productImg/image1.png";

    for (btn of btns){
        btn.classList.remove('active');
    }
    this.classList.add('active');
}
btns[1].onclick = function(){
    prodctImg.src = 'productImg/image2.png';
    for (btn of btns){
        btn.classList.remove('active');
    }
    this.classList.add('active');
}
btns[2].onclick = function(){
    prodctImg.src = 'productImg/image3.png';
    for (btn of btns){
        btn.classList.remove('active');
    }
    this.classList.add('active');
}