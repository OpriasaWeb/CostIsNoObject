// contractNumber firstName lastName identificationNumber day daysOfRent insurancePolicy submit rent

$('#submit').click(function(){
  console.log("Object");
  var contractNumber = $('#contractNumber').val();
  var firstName = $('#firstName').val();
  var lastName = $('#lastName').val();
  var identificationNumber = $('#identificationNumber').val();
  var day = $('#day').val();
  var daysOfRent = parseInt($('#daysOfRent').val());
  var insurancePolicy = $('#insurancePolicy').val();

  if(!(contractNumber >= 10000 || contractNumber <= 99999)){
    alert("Invalid contract number. Please try again.");
    $('#contractNumber').val("");
  } else{

    var inputDate = new Date(day);
    var getDay = parseInt(inputDate.getDate());
    var getMonth = parseInt(inputDate.getMonth() + 1);

    if((getMonth == 1 || getMonth == 3 || getMonth == 5 || getMonth == 7 || getMonth == 8 || getMonth == 10 || getMonth == 12) && !(getDay >= 1 && getDay <= 31)){
      invalidDate("Invalid date. Please try again.");
      $('#day').val("");
    } else if((getMonth == 2) && !(getDay >= 1 && getDay <= 28)){
      invalidDate("Invalid date. Please try again.");
      $('#day').val("");
    } else if((getMonth == 4 || getMonth == 6 || getMonth == 8 || getMonth == 11) && !(getDay >= 1 && getDay <= 30)){
      invalidDate("Invalid date. Please try again.");
      $('#day').val("");
    }
    else{
      // console.log("Hello po");

      // Format date
      const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        weekday: 'long'
      };

      var endOfContractDate = addDaysToDate(inputDate, daysOfRent);

      var formatStartDate = inputDate.toLocaleDateString(undefined, options);
      var formatDateEndOfContract = endOfContractDate.toLocaleDateString(undefined, options);

      

      if(!(daysOfRent >= 1 && daysOfRent <= 30)){
        alert("1 to 30 days of rent only. Please try again.");
        $('#daysOfRent').val("");
      } else{
        // $('#rent').append(`<p>Starting date: ${inputDate}</p>`);

        if(!(insurancePolicy == "Y" || insurancePolicy == "N")){
          alert("Only Y or N");
          $('#insurancePolicy').val("");
        } else{
          // $('#insurancePolicy').val("Y");
          // Price payment
          var pricePayment = 0;
          if(insurancePolicy == "Y"){
            pricePayment = pricePayment + (2.50 * daysOfRent);
          } else{
            if(daysOfRent <= 10){
              pricePayment = pricePayment + (25 * daysOfRent);
            } else if(daysOfRent > 10){
              pricePayment = pricePayment + (18 * daysOfRent);
            }   
          }

          // Result if all input is valid
          $('#rent').append(`<p>Contract number: ${contractNumber}</p>`);
          $('#rent').append(`<p>Customer name: ${firstName} ${lastName}</p>`);
          $('#rent').append(`<p>ID number: ${identificationNumber}</p>`);
          $('#rent').append(`<p>Starting date: ${formatStartDate}</p>`);
          $('#rent').append(`<p>End of date: ${formatDateEndOfContract}</p>`);
          $('#rent').append(`<p>Insurance Policy: ${insurancePolicy}</p>`);
          $('#rent').append(`<p>Total payment: ${pricePayment}</p>`);

        }
      }
    }
  }
    


  // for error message invalid date
  function invalidDate(m){
    alert(m);
    $('#day').val("");
  }

  // for calculation of length agreement
  function addDaysToDate(c, d){
    var chosenDate = new Date(c);

    // var addDays = parseInt(chosenDate.getDate() + d);

    // Add the specified number of days to the chosenDate as length of agreement
    chosenDate.setDate(chosenDate.getDate() + d);


    // console.log(addDays);
    console.log(chosenDate);
    return chosenDate;
  }
  
})