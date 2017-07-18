//Business Logic
function BankAccount (name, deposit) {
  this.accountName = name;
  this.accountBalance = deposit;
  this.final = deposit;
}

BankAccount.prototype.accountDebits = function(deposit, withdrawl) {
  return this.final + deposit - withdrawl ;
}

// function AccountChange (deposit, withdrawl, final) {
//   this.credits = deposit;
//   this.debits = withdrawl * -1;
//   this.final = final;
// }

// AccountChange.prototype.findChange = function() {
//   var z = this.final;
//   var x = this.credits;
//   var y = this.debits;
//   //If either input is not a number, ignore it and add the others
//   if (isNaN(x)) {
//     return y+z;
//   }else if (isNaN(y)) {
//     return  x+z;
//   }else {
//     return  x+y+z;
//   }
// }
//User Interface Logic
$(document).ready(function() {
var final = [];

  $('#newAccount').submit(function(event) {
    event.preventDefault();
    //Take input from user
    var accountName = $('#accountName').val();
    var initialDeposit = parseInt( $('#initialDeposit').val() );

    var newUserAccount = new BankAccount(accountName, initialDeposit);
    final.push(newUserAccount);
    //Display account name and initial deposit to user
    $('.specificName').text(newUserAccount.accountName);
    $('.specificBalance').text(newUserAccount.accountBalance);
    $('.hiddenAnswer').show();

    //store initial deposit amount in final variable
    //Clear input forms
    $('.form-control').val('');
  });

  $('#editFunds').submit(function(event) {
    event.preventDefault();
    //Take inputs from user as numbers
    var deposits = parseInt($('#depositAmount').val());
    var withdrawls = parseInt($('#withdrawlAmount').val());


    console.log(final[0]);
    //Create new instance of AccountChange object
    var runningBalance = final[0];
    var newTotal = runningBalance.accountDebits(deposits, withdrawls);
    // (deposits, withdrawls, final);
    // =newUserAccount(final[0])
    // newChange.accountDebits(deposits,withdrawls);
    // alert(newUserAccount.final)
    $('.specificBalance').text(newTotal);
    //Clear input forms
    $('.form-control').val('');
  });
});
