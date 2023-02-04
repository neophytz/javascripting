// // getElementById, getElementsByClassName, getElementByClassName

// var h1Ref = document.getElementById('header');
// // var btnRef = document.getElementsByTagName('button')[0];
// // var changeTextBtn = document.getElementById('changeText');


// // function changeToRed () {
// //     h1Ref.style.color='red';
// // }

// function changeColor(){
//     // red -> black
//     // if(h1Ref.style.color==='red'){
//     //     h1Ref.style.color='black';
//     // }
//     // else h1Ref.style.color='red';
//     // ternary statements
//     // condition ? (code 1) : (code2)
//     // h1Ref.style.color==='red' ? h1Ref.style.color='black' : h1Ref.style.color='red';
//     h1Ref.style.color = h1Ref.style.color==='red' ? 'black' : 'red';
// }

// // h1Ref.innerText='goodbye';


// function changeText (){
//     h1Ref.innerText='goodBye';
// }
// // changeText();
// // btnRef.onclick='changeToRed()';

// // console.log(btnRef);
// // ref.style.color='red';
// // console.log(ref);


var couponDivRef = document.getElementById('couponDiv');
var couponBtnRef = document.getElementById('couponBtn');

function revealCoupon(){
    console.log(couponDivRef.innerHTML);
    couponBtnRef.innerText = !couponDivRef.innerHTML ? 'Click me to hide coupons.' : 'Click me to reveal coupons.';
    couponDivRef.innerHTML = couponDivRef.innerHTML==='' ? '<p>Hello, you receive new coupon.</p> <p>your coupon code is yts50.</p>' : '';
    // falsy values
    // if(couponDivRef.innerHTML===""){
    //     couponDivRef.innerHTML = '<p>Hello, you receive new coupon.</p> <p>your coupon code is yts50.</p>';
    //     couponBtnRef.innerText = 'Click me to hide coupons.'
    // }else{
    //     couponDivRef.innerHTML = '';
    //     couponBtnRef.innerText = 'Click me to reveal coupons.'
    // }
}





