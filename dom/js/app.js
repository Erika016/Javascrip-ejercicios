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
let box2 = box1.nextElementSibling;
let box3 = box2.nextElementSibling;

// box1.classList.add("dark");
// box1.classList.remove("dark");
// box2.classList.add("dissapear");
// box2.classList.remove("dissapear");

// box2.classList.toggle("light");
// console.log(box3.classList.contains("light"));
// console.log(box2.classList.contains("light"));
// let number =
// document.querySelector("section").lastElementChild.previousElementSibling.dateset.boxNumber;
// console.log(number);
// document.body.innerHTML = "<h1>Waw!</h1>"
// console.log(document.querySelector("section").outerHTML);
// document.querySelector("section").outerHTML= "<h1>Waw!</h1>"
// document.body.insertAdjacentHTML('afterbegin', '<nav>Navigation</nav>')
// document
// .querySelector("nav")
// .insertAdjacentHTML("beforebegin","<h1>Main Header</h1>");
// document
// .querySelector("nav")
// .insertAdjacentHTML("beforeend", ' <a href="http://google.com">Go Google</a>')
// document
// .querySelector("nav")
// .insertAdjacentHTML("afterend", '<p>Lorem ipsum dolor sit amet.</p>')
// console.log(document.querySelector("h1").textContent);
// document.querySelector("nav").textContent= "Stronger together";





let header = document.createElement("h1")
header.append("Hello,Word!")
header.prepend("¡");
document.body.append(header);
document.querySelector("h1").firstChild.before("¡¡");
let paragraph = document.createElement("p");
paragraph.textContent = "Writting a paragraph";
// document.body.append(paragraph);
document.querySelector("h1").after(paragraph);
document.querySelector("h1").replaceWith(paragraph);
// paragraph.remove();PARA ELIMINAR EL PARRAFO