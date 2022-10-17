const dvi = document.getElementById("dvi");
const cls = [
    "--img1",
    "--img2",
    "--img3",
    "--img4",
    "--img5",
    "--img6",
    "--img7",
    "--img8",
    "--img9",
]

let i = 1
const k = 5000;
const bg = () => {
    dvi.classList = `--div--img` + " " + cls[i];
    if (i < cls.length) {
        i++;
    } else {
        i = 0;
    }
    setTimeout("bg()", k);
}
dvi.addEventListener("click", () =>{
    const l = 1000;
    setTimeout("bg()", l);
})
window.onload = bg;


