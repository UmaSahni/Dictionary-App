// const object = {
//   word: "dance",
//   pronunciation: "https://static.sfdict.com/audio/D00/D0028900.mp3",
//   meaning: [
//     {
//       tag: "verb (used without object),",
//       values: [
//         "to move one's feet or body, or both, rhythmically in a pattern of steps, especially to the accompaniment of music.",
//         "to leap, skip, etc., as from excitement or emotion; move nimbly or quickly e.g to dance with joy."
//       ]
//     },
//     {
//       tag: "verb (used with object),",
//       values: [
//         "to perform or take part in (a dance) e.g to dance a waltz.",
//         "to cause to dance e.g He danced her around the ballroom."
//       ]
//     },
//     {
//       tag: "noun",
//       values: [
//         "a successive group of rhythmical steps or bodily motions, or both, usually executed to music.",
//         "an act or round of dancing; set e.g May I have this dance?"
//       ]
//     }
//   ]
// }

let body = document.getElementById("result")

const getAsCard = (word,meaning) => {
    return `
        <h2> Searched Word - ${word}</h2>
       ${
            meaning.map((el)=>{
                return `
                    <h3>${el.tag}</h3>
                    <ol>
                    ${
                        el.values.map((item)=>{
                            return `
                            <li>${item} </li>
                            `
                        })
                    } 
                    </ol>
                `
            }).join(" ")
        }
    
    `
}
// let word = object.word
// console.log(word)
// body.innerHTML = getAsCard(word, object.meaning)

// let inputTag = document.querySelector(".input").value




let button = document.getElementById("submit")

button.addEventListener("click", async()=>{
  let inputTagValue = document.querySelector(".input").value
  const url = `https://dictionary-data-api.p.rapidapi.com/definition/${inputTagValue}`
  const options = {
    method : "GET",
    headers : {
      'X-RapidAPI-Key': '6bfe4d30e6mshe379db413deb1c4p1bcf2fjsnb4deeabe8afc',
		  'X-RapidAPI-Host': 'dictionary-data-api.p.rapidapi.com'
    }
  };

  try {
    const response  = await fetch(url,options)
    const result  = await response.json()
    console.log(result)
    body.innerHTML = getAsCard(result.word, result.meaning)
    inputTagValue = ""
  } catch (error) {
    console.log(error)
  }

})