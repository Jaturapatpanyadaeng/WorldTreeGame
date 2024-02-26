let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}

//content
var product = [{
    id: 1,
    href: 'WordShooter.html',
    img: 'src/png/png/menu-box1.png',
    name: 'WordShooter',
    description:'เกมพิมพ์ความเร็ว HTML5',
    type:'typewriter'
},{
    id: 2,
    href:'game/Snakegame/Snake.html',
    img: 'src/png/png/snake.png',
    name: 'Sanke',
    description:'เกมงูไล่กินแอปเปิ้ล HTML5',
    type:'Fun'
},{
    id: 3,
    href:'game/T-Rex/index.html',
    img: 'src/png/png/T-rex.png',
    name: 'T-rex',
    description:'เกมไนโนเสาร์กระโดดได้',
    type:'Fun'
},{
    id: 4,
    href:'game/T-Rex/index.html',
    img: 'src/png/png/T-rex.png',
    name: 'BotMan',
    description:'หุ้นยนต์ผู้มีเกียรติไปไล่ปราบปรามสไลม์',
    type:'Fun'
}];

$(document).ready(() => {
    var html ='';
    for (let i = 0; i < product.length; i++){
        html += `<div class="menu-item ${product[i].type}" onclick="location.href='${product[i].href}'">
                        <img class="menu-img" src="${product[i].img}" alt="">
                        <h1>${product[i].name}</h1>
                        <p>${product[i].description}</p>
                </div>`;
    }
    $("#productlist").html(html);
})

function searchsoething(elem){
    var value = $('#'+elem.id).val()
    console.log(value)
    //console.log('#'+elem.id)

    //หาคำสั่ง
    var html ='';
    for (let i = 0; i < product.length; i++){
        if(product[i].name.includes(value)){

        html += `<div class="menu-item ${product[i].type}" onclick="location.href='${product[i].href}'">
                        <img class="menu-img" src="${product[i].img}" alt="">
                        <h1>${product[i].name}</h1>
                        <p>${product[i].description}</p>
                </div>`;
    }
}
    if (html == '') {
        $("#productlist").html(`<p>Not found product</p>`)
    }
    else{
        $("#productlist").html(html);
    }
    
}


function searchproduct(param){
    $(".menu-item").css('display' , 'none')
        if (param == 'all') {
            $(".menu-item").css('display' , 'block')
        }
        else{
            $("."+param).css('display','block')
        }
    }