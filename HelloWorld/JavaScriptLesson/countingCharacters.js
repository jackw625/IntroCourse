function countingCharacters(stringToCount){
    // The length property has been mentioned in 
    // the Logging Letter Exercise in Lesson 4
    console.log (stringToCount + " has " + 
              stringToCount.length + " characters.");
}

function countingCharacters2(stringToCount, characterToFind){
    var characterCount = 0;
    for (var characterPosition = 0; 
           characterPosition < stringToCount.length; 
           characterPosition++){
        if (stringToCount[characterPosition] == characterToFind){
            characterCount++;
        }
    }
    console.log("String to search in: " + stringToCount);
    console.log("Character to find: " + characterToFind);
    console.log("Number of times the character appears: " + 
                  characterCount);
}

function countingCharacters3(str, search){    
    var count = 0;
    var numChars = search.length;
    
    var lastIndex = str.length - numChars;
    for (var index = 0; index <= lastIndex; index++){
       var current = str.substring(index, index + numChars);
        if (current == search){            
            count++;
        }
    }
    return count;
}

var friends = ["Aneki", "Quell", "Clarity", 
"Sleepy", "Roghar", "DM Crimson"];

friends.length;



function findMax(numbers){
    var max = numbers[0];
  
    for (i = 0; i < numbers.length; i++) {
       if (numbers[i] > max) {
            max = numbers[i];
                 }
      
                }  
   return(max);
   console.log(max)
}


function sumOfRange(numbers){
    var sum = 0;
  
    for (i = 0; i < numbers.length; i++) {
       sum+= numbers[i]; 
    }
   return(sum);

}

