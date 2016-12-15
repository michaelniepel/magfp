var curry = require('lodash').curry

var match = curry(function(what, str){
  return str.match(what)
})

var replace = curry(function(what, replacement, str){
  return str.replace(what, replacement)
})

var filter = curry(function(f, arr){
  return arr.filter(f)
})

var map = curry(function(f, arr){
  return arr.map(f)
})


var hasSpaces = match(/\s+/g)
hasSpaces('hello wordl')

hasSpaces('spaceless')

filter(hasSpaces, ['Michael Niepel', 'michaelniepel'])

var findSpaces = filter(hasSpaces)

findSpaces(['Michael Niepel', 'michaelniepel'])

var noVowels = replace(/[aeiouy]/ig)
var censored = noVowels("*")

console.log(censored("Michael Niepel"))