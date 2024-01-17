document.addEventListener("mousemove", parallax);
        function parallax(event) {
            this.querySelectorAll(".reactive").forEach((shift) => {
                const box = shift.getBoundingClientRect();
                const dims = getTextWidth(shift.textContent, shift.fontFamily);
                const Xdist = event.pageX - box.x + dims.width;
                const Ydist = event.pageY - box.y;
                const dist = Math.sqrt((Xdist) ** 2 + (Ydist) ** 2);
                const rot = (Xdist * Ydist)/ dist ** 2;
                const x =  2 * Xdist ** 2 / (dist ** 2)
                const y =  2 * Ydist ** 2 / (dist ** 2);
                shift.style.transform = `translateX(${x}px) translateY(${y}px) rotate(${rot}deg)`;
        });
}
function getTextWidth(text, font) {
    const canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
    const context = canvas.getContext("2d");
    context.font = font;
    return context.measureText(text);
}

function changeViewMode(mode){
    if(mode == "light"){
        document.body.classList.add("is-dark");
        document.documentElement.style.setProperty('--color', '#ffffff');
        document.documentElement.style.setProperty('--bgcolor', '#000000');
        document.documentElement.style.setProperty('--mode', 1);
        document.documentElement.style.setProperty('--gradient', 'linear-gradient(20deg, #2200ff, #B721FF 50%, #ffffff 50%)');
        document.documentElement.style.setProperty('--gradient-2', 'linear-gradient(20deg, #c85555, #b700ff 50%, #ffffff 50%)');
        document.getElementById(mode).id = "dark";
    } else if(mode == "dark"){
        document.body.classList.remove("is-dark");
        document.documentElement.style.setProperty('--color', '#0');
        document.documentElement.style.setProperty('--bgcolor', '#ffffff');
        document.documentElement.style.setProperty('--mode', 0);
        document.documentElement.style.setProperty('--gradient', 'linear-gradient(20deg, #2200ff, #B721FF 50%, #000000 50%)');
        document.documentElement.style.setProperty('--gradient-2', 'linear-gradient(20deg, #c85555, #b700ff 50%, #000000 50%)');
        document.getElementById(mode).id = "light";
    }
    }

selected = "home";  
function selection(id){
    if (id == selected){
        return;
    } else {
        let select = document.getElementById(selected);
        select.style.pointerEvents = "all";
        select.style.fontWeight = "lighter";

        selected = id;
        select = document.getElementById(selected);

        select.style.pointerEvents = "none";
        select.style.fontWeight = "bold";

        select.style.transform = "scale(1.1) translateX(20px)";
        setTimeout(() => {
            select.style.transform = "scale(1) translateX(0px)";
        },150);

        $(function(){
            document.getElementById("content-div").style.transition = "transform 0.5s";
            document.getElementById("content-div").style.transform = "translateX(2000px)";
            setTimeout(() => {
                let tmp = id +".html";
                $("#content-div").load(tmp, () => {    
                        document.getElementById("content-div").style.transform = "translateX(0px)";
                });
            }, 500);
        });
    }
}

