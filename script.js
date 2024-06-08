const inputs = document.querySelectorAll("input")
const btn = document.querySelector("button")
const row = document.querySelector(".row")
const main = document.querySelector(".main")

btn.addEventListener("click", () => {
  CheckWord()
})

function CheckWord(){
  const validate = "Twenty"
  let test = ""
  inputs.forEach(inp => {
    test += inp.value
  })

  if(test.length != validate.length){
    //alert(row.classList.contains("row"))

    row.classList.add("row-error")
    setTimeout(() => {
      row.classList.remove("row-error")
    }, 100)
  }
  else if(validate.toUpperCase() == test.toUpperCase()){
    inputs.forEach(inp => {
      inp.classList.add("letter-green")
      inp.disabled = "true"
    })

    conseguiu = true
  }else{
    for(let i = 0; i<validate.length; i++){
      if(test[i].toUpperCase() == validate[i].toUpperCase()){
        inputs[i].classList.add("letter-green")
        inputs[i].disabled = "true"
      }
    }
  }
  var certas = 0

  inputs.forEach(i => {
    if(i.classList.contains("letter-green")){
      certas+=1
    }
  })

  if(certas == (validate.length)){
    setTimeout(() => {
      Congrat()
    }, 1000)
  }
}

function Congrat(){

  main.innerHTML = `
    <h1><span>Parabéns Kekis!</span></h1>

    <div class="row">
      <div class="letter-green letter">t</div>
      <div class="letter-green letter">w</div>
      <div class="letter-green letter">e</div>
      <div class="letter-green letter">n</div>
      <div class="letter-green letter">t</div>
      <div class="letter-green letter">y</div>
    </div>
    <div class="row">
      <div class="letter-green letter">o</div>
      <div class="letter-green letter">n</div>
      <div class="letter-green letter">e</div>
    </div>
    <div class="row">
      <div class="letter-green letter">p</div>
      <div class="letter-green letter">i</div>
      <div class="letter-green letter">l</div>
      <div class="letter-green letter">o</div>
      <div class="letter-green letter">t</div>
      <div class="letter-green letter">s</div>
    </div>

    <h2>Melhor musica do ultimo album:</h2>
        <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3sEufjE0ITaW5qhtnW3avv?utm_source=generator&theme=0" width="60%" height="300" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
  `
}
