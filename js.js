const ob = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
});

const hidEle = document.querySelectorAll(".scroll");
hidEle.forEach((el) => ob.observe(el));