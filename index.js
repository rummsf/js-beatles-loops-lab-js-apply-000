function theBeatlesPlay (musicians, instruments) {
  var arr = []
  for (let i = 0; i < 4; i++){
  arr.push (musicians[i] + " plays " + instruments[i]);}
  return arr
}
 function johnLennonFacts (facts){
   var arr = []
   let i = 0
   while (i < facts.length){
   arr.push (facts[i] + "!!!")
   i++
   }
   return arr 
 }
 
 function iLoveTheBeatles(number){
   var arr = []
   do { 
   while (number < 15){
   arr.push ("I love the Beatles!") 
 }
 }