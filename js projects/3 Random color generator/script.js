let hex = '0123456789ABCDEF'
const colorgen=()=>{
    let randomcolor='#'
    for (let i = 0; i < 6; i++)
    randomcolor += hex[Math.floor(Math.random()*16)]
    console.log(randomcolor);
    return randomcolor
    
}
let inter
const startchanging = ()=>{
    inter =setInterval(change,1000)
    function change(){
    document.body.style.backgroundColor=colorgen()
    }
}

const stopchanging = ()=>{
    clearInterval(inter)
}

document.querySelector('#start').addEventListener('click',startchanging,false)
document.querySelector('#stop').addEventListener('click',stopchanging,false)
