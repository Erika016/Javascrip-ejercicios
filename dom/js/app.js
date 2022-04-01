// let nav = document.querySelector('nav');
// // console.log(nav);
// // let active = document.querySelcetor('.active');
// // console.log(active);
// let paragraph = document.querySelector('#first');
// // console.log(paragraph);
// let headersAndParagraphs = document.querySelectorAll(`h1,p`);
// // console.log(headersAndParagraphs[1].innerText);
// // console.log(headersAndParagraphs);
// // accesing nodes without text
// // console.log(nav.children[0].children[0].children[0]);
// // console.log(headersAndParagraphs[0].nextElementSibling.nextElementSibling);
// console.log(headersAndParagraphs[0].firstChild);
// console.log(headersAndParagraphs[0].firstChild.nodeValue);
// console.log(nav.nodeName);
let box1 = document.querySelector("section").firstElementChild;
let box2 =box1.nextElementSibling;
let box3 = box2.nextElementSibling;

box1.classList.add("dark");
box1.classList.remove("dark");