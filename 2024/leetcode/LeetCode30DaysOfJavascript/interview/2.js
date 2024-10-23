function findEscaped(text) {
  let insideHash = false;
  let counter = 0;

  for (let i = 0; i < text.length; i++) {
    if (text[i] === "#") {
      insideHash = !insideHash;
    }
 
      if (insideHash && text[i] === "!" && /[a-z]/.test(text[i + 1])){
        counter++
        i++ //"!b" b is escaped character already
      };
  
  }
  console.log(counter);
}

findEscaped("a!de#dwx!re!e##!##sdc!a!f");
findEscaped("#a!b#c#d!e!f#g!");
