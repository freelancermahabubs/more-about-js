function checkAge(){
 const ageField = document.getElementById('age');
 const ageText = ageField.value;

 const errorTag = document.getElementById('error');

 try{
  const age = parseInt(ageText)
  if(isNaN(age)){
    throw "Please Enter a Number";
  }
  else if(age < 18){
    throw "Bacha Kaccha Not Alow"
  }
  else if(age > 30){
    throw "Murobbira asbenna"
  }
  errorTag.innerHTML = '';
 }
 catch(error){
  console.log("Error", error);
  errorTag.innerHTML = 'ERROR', error;
 }
 finally{
  console.log('All Done Inside tyr Catch')
 }
 console.log(21111);
};


