const stringLengthIdentifier = (string) => {
  return new Promise((success,fail)=>{
    console.log(string.length)
    if(string < 20){
      successCallback("success")
    }
    else{
      FailureCallback("fail")
    }
  })
}
function successCallback(result){
  console.log("l'opération a le statut="+ result)
}
function FailureCallback(error){
  console.log("l'opération a le statut=" +error)
}



const intDiffChecker= (int1,int2)=>{
  return new Promise((goodInt,badInt)=>{
    console.log(int1,int2)
      if(int1>int2){
        goodInt(int1-int2)
      }
      else{
        badInt()
      }
  })
}

function goodInt(result){
  console.log("la différence entre les deux int est de " + result)
}
function badInt(error){
  console.log("l'opération a échoué")
}


const dateChecker = (userDate)=>{
  return new Promise((minorDate,adultDate)=>{
    let checkedDate = new Date(new Date().toDateString())
    const check =() =>{
      const diff = new Date(userDate.toDateString()) > checkedDate
      console.log(diff)
    }
  })
}

function minorDate(){
  console.log("mineur")
}
function adultDate(){
  console.log("majeur")
}

const promise = stringLengthIdentifier('azeazeazeazeazeazeazeaze')
promise.then(successCallback,FailureCallback)

const promise2 = intDiffChecker(3,2)

promise2.then(goodInt,badInt)

const promise3 = dateChecker("12/12/2012")
promise3.then(goodInt,badInt)
