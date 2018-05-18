const shout = (string) => {
  return string.toUpperCase()
}

const whisper = (string) => {
  return string.toLowerCase()
}

const logShout = (string) => {
  console.log(string.toUpperCase())
}

const logWhisper = (string) => {
  console.log(string.LowerCase())
}

const sayHiToGrandma = (string) => {
  if (string === string.toLowerCase()) {
    return "I can't hear you!"
  } else if (string === string.toUpperCase()){
    return "YES INDEED!"
  }
}