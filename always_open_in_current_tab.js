function removeTarketBlankFromAllLinks(){
    console.log("removeTarketBlankFromAllLinks");
    document.querySelectorAll('a[target="_blank"]').forEach(a => a.target="");
}

setTimeout(function () {
    removeTarketBlankFromAllLinks();
}, 300);

document.addEventListener("DOMContentLoaded", function(event){
    removeTarketBlankFromAllLinks();
});