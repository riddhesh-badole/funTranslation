let btnTranslate = document.querySelector("#btn-translate");
let txtinput = document.querySelector("#input");
let output = document.querySelector("#output");

let Url = "https://api.funtranslations.com/translate/minion.json";

function UrlTranslated(input)
{
    return Url + "?" + "text=" + input
}
function errorhandlaer(error)
{
    console.log("error occured",error)
    alert("sonthing went wrong")
}
function btnClicked(){
    let input = txtinput.value;

   fetch(UrlTranslated(input))
   .then(res => res.json())
   .then(json => 
    {
        let TranslatedText = json.contents.translated;
        output.innerHTML = TranslatedText;
    })

    .catch(errorhandlaer)

}
btnTranslate.addEventListener("click",btnClicked)