fetch('/footer.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#foot_replace");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
})


//For scrolling elements n stuff
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 40;
        if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
        } else {
        reveals[i].classList.remove("active");
        }
    }
    numberAnimate();
}

//animated numbers
function numberAnimate() {
    var numberAnimations = document.querySelectorAll(".number-animate");
    var interval = 300;

    numberAnimations.forEach(( numberAnimation ) => {
        if(!numberAnimation.classList.contains("active"))
        {
            numberAnimation.innerHTML="0";
        }
        if((numberAnimation.classList.contains("active"))
        &&(numberAnimation.innerHTML=="0"))
        {
            var startValue = 0;
            var finalValue = parseInt(numberAnimation.getAttribute("data-val"));
            var duration = finalValue/interval;
            var counter = setInterval( function () {
                startValue += duration;
                numberAnimation.innerHTML = Math.ceil(startValue);
                if(startValue>=finalValue)
                {
                    numberAnimation.innerHTML = finalValue;
                    clearInterval(counter);
                }
            }, 1);
        }
    });
}

window.addEventListener("scroll", reveal);