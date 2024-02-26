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
    href: 'menu/G0001',
    img: '/png/png/menu-box1.png',
    name: 'WordShooter',
    description:'เกมพิมพ์ความเร็ว HTML5',
    type:'HTML'
},{
    id: 2,
    href:'menu/G0002',
    img: '/png/png/snake.png',
    name: 'Sanke',
    description:'เกมงูไล่กินแอปเปิ้ล HTML5',
    type:'HTML'
},{
    id: 3,
    href:'game/T-Rex/index.html',
    img: '/png/png/T-rex.png',
    name: 'T-rex',
    description:'เกมไนโนเสาร์กระโดดได้',
    type:'HTML' && '2D'
},{
    id: 4,
    href:'game/T-Rex/index.html',
    img: '/png/png/T-rex.png',
    name: 'BotMan',
    description:'หุ่นยนต์ผู้มีเกียรติไปไล่ปราบปรามสไลม์',
    type:'Dowload'
},{
    id: 5,
    href:'game/chess1/index.html',
    img: '/png/png/T-rex.png',
    name: 'Chess ver.bug',
    description:'เกมหมากรุก',
    type:'HTML' || '2D'
},
{
    id: 6,
    href:'game/chess/App.jsx',
    img: '/png/png/T-rex.png',
    name: 'Chess',
    description:'เกมหมากรุก',
    type:'HTML' || '2D'
},
{
    id: 7,
    href:'game/dowload/BoxTower',
    img: '/png/png/T-rex.png',
    name: 'BoxTower',
    description:'เกมเรียงกล่อง สร้างโดยภาษา',
    type:'Dowload'
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

function closeremmend(){
    $(".recommend-content").css('display' , 'none')
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