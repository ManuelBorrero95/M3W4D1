let cntHidden = document.querySelectorAll(".cnt-hidde");

document.addEventListener('scroll', function () {
    cntHidden.forEach(element => {
        element.classList.add('visible');        
    });
})