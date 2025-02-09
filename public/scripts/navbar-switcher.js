window.onload = () => {
    const cartValue = document.getElementById("cartValue");
    cartValue.textContent = "0kč";
};

window.addEventListener("scroll", () => {
    const nav = document.querySelector(".main-nav");
    if(window.scrollY > 200){
        nav.id = "fixed-nav";
    } else{
        nav.id = "";
    }
});