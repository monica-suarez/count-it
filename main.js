const letterCounter = (wordInput) =>{
    //grabs input from HTML
    wordInput = document.getElementById("strInput").value;
    //takes input and makes it lowercase, finds only letters and puts //it into an array with RegEx. sorts my alphabetical order
    wordInput = wordInput.toLowerCase().match(/[a-z]/g).sort()
    //create empty object for letter count
    let letterCounts = {};
    //loops through the array and creates counter to add letter count as key/value pairs
    for(let i=0; i<wordInput.length; i++){
      let letters = wordInput[i];
      if(letterCounts[letters]){
        letterCounts[letters]++;
      }
      else{
        letterCounts[letters] = 1;
      }
    }
      console.log(letterCounts);
      for(letter in letterCounts){
        let counts = "Letter " + [letter] + " occurs " + letterCounts[letter] + " time(s).";
        document.getElementById("showCount").innerHTML = counts;
        return counts;
      }
    };
