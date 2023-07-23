// contractNumber firstName lastName identificationNumber day daysOfRent insurancePolicy submit rent



$('#submit').click(function(){
  // console.log("Object");
  var contractNumber = $('#contractNumber').val();
  var firstName = $('#firstName').val();
  var lastName = $('#lastName').val();
  var identificationNumber = $('#identificationNumber').val();
  var day = $('#day').val();
  var daysOfRent = $('#daysOfRent').val();
  var insurancePolicy = $('#insurancePolicy').val();

  if(!(contractNumber >= 10000 || contractNumber <= 99999)){
    alert("Invalid contract number. Please try again.");
  }
  

  // $('#rent').append();
})