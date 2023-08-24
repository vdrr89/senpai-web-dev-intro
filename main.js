// div class closedChapter display: none;
// div class openChapter display: block;

console.log("abre el main.js");

var chapter = document.getElementsByClassName("chapter");
var chapterTitle = []

for(let i=0;i<chapter.length;i++){
    chapterTitle.push += chapter[i].firstElementChild
}

/*
function openDiv(chapterTitle) {
    var chapterTitle = document.getElementsByClassName('chapterTitle');
     console.log("chapterTitle: "+chapterTitle);
    chapterTitle.nextElementSibling.classList.toggle("openChapter");
    console.log("chapterTitle.nextElementSibling: "+chapterTitle.nextElementSibling);
}
*/
// onclick="openDiv()"