let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

let allMatches = (arr, regex) => arr.filter((arr) => regex.test(arr));


console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']
