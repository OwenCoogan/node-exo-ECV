export const orderWordArray = (array)=> {
  const sortedArray = array.sort();
  console.log(sortedArray)
  return sortedArray
}

export const randomReturn = (array) => {
  const word = array[Math.floor(Math.random()*array.length)];
  console.log(word);
   return word;
}
