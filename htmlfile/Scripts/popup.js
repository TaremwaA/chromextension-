//the js for showing the pics
// by oscar

function click(e){
    chrome.tabs.executeScript(null,{
        code:"document.body.style.backgroundImage='url("+images[e.target.id]
        +"'"});//altering colour of the picture selected
        window.close();
}

             document.addEventListener('DOMContentLoaded',function(){
                                     var divs = document.querySelectorAll('div')
                  for(var i = 0; i < divs.length;i++){
divs[i].addEventListener('click',click);
    }
});

var images = {
                pic1:'https://scontent.fnbo1-1.fna.fbcdn.net/v/t1.0-9/10262121_699014013488786_7567890092532732448_n.jpg?oh=a264ee4c4e64bae5c634482f1169f472&oe=59AE5DA2',
                pic2:'https://scontent.fnbo1-1.fna.fbcdn.net/v/t1.0-9/996696_1053078864748964_7642555392391835504_n.jpg?oh=bf06598ae05cb3e02fae4580464abc28&oe=59A2037E',
                pic3:'https://scontent.fnbo1-1.fna.fbcdn.net/v/t1.0-9/10653647_754022597987927_3914938164902263489_n.jpg?oh=dc4a46434208c128a9a9bb11bfc1769f&oe=59BE90FE',
    }