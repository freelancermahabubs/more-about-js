const getData = new Promise((resolve, reject) =>{
  const num = Math.random()*10
  console.log(num)
  // resolve(455556);
  if(num < 5){
    resolve(45526541)
  }
  else{
    reject('no data Available')
  }

});
getData
.then(data => console.log(data + 22))
.catch(error => console.log('ERR:', error))