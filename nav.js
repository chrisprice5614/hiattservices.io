fetch('/nav.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#nav_replace");
    let newelem = document.createElement("div");
    newelem.className = "noMarge";
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
})

