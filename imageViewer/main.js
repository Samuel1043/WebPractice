//only for 1000*1000px
var images=["./images/pizza01.jpg","https://raqueltorresdesign.com/wp-content/uploads/2018/12/Crystallised-Wildlife-Poster-DOG-Cat-Doggie-Square-WEB-1000px.jpg",
"https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg",
"https://cdn1.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg"];

var number=0;

Today=new Date().toLocaleDateString();
//onload method on pageload
window.onload = function() {
    document.getElementById("date").innerHTML = "Date: "+Today;
    modalimg=document.getElementById('modal');
    modaldiv=document.getElementById('myModal')
  };


function changeImage(a) {
    var img=document.getElementById("display");
    img.onload=function () {    
        img.src=a;
    }
    img.src="./images/loading.gif";
}
function changeSource(a){
    document.getElementById('source').innerHTML=a;
}


function previmg(){
    if(number>=images.length-1){
        number=0;
    }
    else{
        number=number+1;
    }
    changeImage(images[number]);
    changeSource(images[number]);
    
    
}
function afterimg(){
    if(number<=0){
        number=images.length-1;
    }
    else{
    number=number-1;
    }
    changeImage(images[number]);
    changeSource(images[number]);
}
/*modal */
function modalimgpop(){
    modaldiv.style.display="block";
    modalimg.src=document.getElementById('display').src;
    
}
function closemodal(){
    modaldiv.style.display="none";
}

//test scratch
/*
page = await browser.newPage();
await page.setRequestInterception(true);
page.on('request', (request) => {
    if (['image', 'stylesheet', 'font', 'script'].indexOf(request.resourceType()) !== -1) {
        request.abort();
    } else {
        request.continue();
    }
});
*/