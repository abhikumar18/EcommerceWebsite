const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active')
    })
}

if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}

// Search Bar Logic

const searchProducts = ()=>{
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeitems = document.getElementById("pro-container");
    const product = document.querySelectorAll(".pro");
    const pname = storeitems.getElementsByTagName("h5");

    for(var i=0; i < pname.length;i++){
        let match = product[i].getElementsByTagName('h5')[0];

        if(match){
           let textvalue =  match.textContent || match.innerHTML

           if(textvalue.toUpperCase().indexOf(searchbox) > -1){
            product[i].style.display = "";
           }
           else{
            product[i].style.display = "none";
           }
        }
    }
}
