const { default: axios } = require("axios");
const express = require("express");
const path = require("path");
const app = express();

app.get("/",  (req, res) => {
   return res.sendFile('public/index.html', {root:__dirname});
})
app.get("/searchword", async (req, res) => {

//   res.send("Hellow, world");
  console.log(req.params);

  const options = {
    method: "GET",
    url: "https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary",
    params: { word: "bright" },
    headers: {
      "X-RapidAPI-Key": "6bfe4d30e6mshe379db413deb1c4p1bcf2fjsnb4deeabe8afc",
      "X-RapidAPI-Host": "dictionary-by-api-ninjas.p.rapidapi.com",
    },
  };

  let response = {};
  response.data = {
    definition:
      "See Brite, v. i.\n" +
      // '\n' +
      // "1. Radiating or reflecting light; shedding or having much light; shining; luminous; not dark. The sun was bright o'erhead. Longfellow. The earth was dark, but the heavens were bright. Drake. The public places were as bright as at noonday. Macaulay. 2. Transmitting light; clear; transparent. From the brightest wines He 'd turn abhorrent. Thomson. 3. Having qualities that render conspicuous or attractive, or that affect the mind as light does the eye; resplendent with charms; as, bright beauty. Bright as an angel new-dropped from the sky. Parnell. 4. Having a clear, quick intellect; intelligent. 5. Sparkling with wit; lively; vivacious; shedding cheerfulness and joy around; cheerful; cheery. Be bright and jovial among your guests. Shak. 6. Illustrious; glorious. In the brightest annals of a female reign. Cotton. 7. Manifest to the mind, as light is to the eyes; clear; evident; plain. That he may with more ease, with brighter evi    '\n' +
      "To be or become overripe, as wheat, barley, or hops. [Prov. Eng.]",
    word: "bright",
    valid: true,
  };

//   console.log(response.data);
res.json(response.data);
  // try {
  // 	const response = await axios.request(options);
  // 	console.log(response.data);
  // } catch (error) {
  // 	console.error(error);
  // }
});

app.listen(8080, () => {
  console.log("Server is running at port 8080");
});
