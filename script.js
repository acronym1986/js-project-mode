 
//define search bar
let wordInput = document.getElementById('wordInput');
let submitButton = document.getElementById('submitButton');

//define display section
let wordResult = document.getElementById('wordResult');
let defResult = document.getElementById('defResult');
let pronounceResult = document.getElementById('pronounceResult');

//define click
submitButton.onclick = searchWord;

//search funtion 
 function searchWord () {
     //make display section visible
    document.getElementById('displaySearch').style.visibility = 'visible';

    // deine url address 
    let keyId = "495e32d0-03d4-4fb2-a6fc-90551709776b";
    let wordInput = document.getElementById("wordInput").value; 
     
    const  url = "https://dictionaryapi.com/api/v3/references/collegiate/json/" + 
                  wordInput + 
                 "?key=" + 
                  keyId;  
    
    // dedine fetech method and receive data from API package
      fetch(url)
      .then (function (data){
          return data.json();
      })
      .then (function(data) {
        console.log(JSON.stringify(data,null,2))   // if use JSON.stringify(data,null,2) to see array and object
        //word
        wordResult.innerText = data[0].meta.id;
        //definition
        defResult.innerText = data[0].shortdef;
        //audio
        let audio = document.createElement("AUDIO");
        audio.setAttribute("src",data[0].hwi.prs[0].sound.audio);
        audio.setAttribute("controls", "controls");
        audio.setAttribute("autoplay", "autoplay");
        pronounceResult.appendChild(audio);


      })
      .catch (function(error) {
          console.log("error: " + error)
      }) 
     

   
}

