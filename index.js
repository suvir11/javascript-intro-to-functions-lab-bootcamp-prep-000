function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(shout(string));
  return(shout(string));
}

function logWhisper(string) {
  console.log(whisper(string));
  return(whisper(string));
}

function sayHiToGrandma(string) {
  if(string === "I")
  if(string === string.toUpperCase()) {
    return("YES INDEED!");
  }
  else {
    return("I can\'t hear you!");
  }
}