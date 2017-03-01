const mood = (happinessLevel = 50, sadnessLevel = 50) => {
  constMoodLevel = happinessLevel - sadnessLevel;
  if (constMoodLevel > 50) {
    return 'Extatic';
  } else if (constMoodLevel > 0 && constMoodLevel <= 50)  {
    return 'Happy';
  }
  return 'Miserable';
};

console.log(mood(75, 100));

const coolWords = (...words) => {
  words.forEach(function(element, index){
    console.log(`Cool word# ${index + 1}: ${element}`)
  });
}

coolWords('Hello', 'You', 'Everyone');