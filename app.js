var text = document.getElementById("text")
var btn = document.getElementById("btn")
var a = document.getElementById("authr")
var url = "https://api.quotable.io/random"


var generateQoute = async () => {
    var random = await fetch(url)
    console.log(random)
    var data = await random.json()
    console.log(data)

    var content = "content"
    var author = "author"
    var type = "type"
    console.log(data[content])
    console.log(data[author])

    var d = text.innerText = data[content] + ":the author of this qoute is =" + data[author]
    return d
}
generateQoute()


var update = async () => {

    var qoute = await generateQoute()
    text.innerText = qoute
    // a.innerText = qoute
}

btn.addEventListener("click", update)