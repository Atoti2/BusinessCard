function handleText() {
    const name = document.getElementById("name")
    const job = document.getElementById("job")
    const emoji = document.getElementById("emoji")
    
    const nev = document.getElementById("nev")
    const munka = document.getElementById("munka")
    const emodzsi = document.getElementById("emodzsi")

    nev.innerHTML = name.value
    munka.innerHTML = job.value
    emodzsi.innerHTML = emoji.value
}

function showImage(){
    const file = document.getElementById('kep') 
    const image = document.querySelector('img')

    if(file.files[0]){
        image.src = URL.createObjectURL(file.files[0])
    }  
}

function update(e){
    let value = e.type == "range" ? e.value + 'px' : e.value
    let cssVarName = '--' + e.id
    document.body.style.setProperty(cssVarName, value)
}
handleText()