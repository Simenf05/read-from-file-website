

const fileInputEl = document.querySelector("#fileInput")

function makeSelect (content) {

    const arr = content.split(/\r?\n/);
    
    const selectEl = document.createElement("select")

    arr.forEach(name => {
        
    });

}

fileInputEl.onchange = () => {

    const file = fileInputEl.files[0]
    const fr = new FileReader()

    fr.onload = () => console.log("ferdig");
    //makeSelect(fr.result)

    fr.onloadstart = () => console.log("start");

    fr.readAsText(file)

}

