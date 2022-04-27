let but1 = document.getElementById("upper-case");
let areaText = document.querySelector("textarea");
let but2 = document.getElementById("lower-case");
let but3 = document.getElementById("proper-case");
let but4 = document.getElementById("sentence-case");

but1.addEventListener("click", function() {
    areaText.value = areaText.value.toUpperCase();
});

but2.addEventListener("click", function (){
    areaText.value = areaText.value.toLowerCase();
});

but4.addEventListener("click",
    function () {
        areaText.value  = areaText.value.toLowerCase().split('. ')
            .map(sentence => sentence.charAt(0).toUpperCase() + sentence.slice(1))
            .join('. ');
    });

but3.addEventListener("click", function (){
    areaText.value = areaText.value.toLowerCase().split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
});

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
document.getElementById("save-text-file").addEventListener("click", function() {
    let text = document.getElementById("text").value;
    let filename = "text.txt"
    download(filename ,text);
}, false);