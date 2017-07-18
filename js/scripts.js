//Business Logic
function BankAccount (name, deposit) {
  this.accountName = name;
  this.accountBalance = deposit;
  this.runningBalance = [];
}

this.accountBalance += deposits

this.accountbalance -= withdrawls

function AccountChange (deposit, withdrawl, final) {
  this.credits = deposit;
  this.debits = withdrawl * -1;
  this.final = final;
}

AccountChange.prototype.findChange = function() {
  var z = this.final;
  var x = this.credits;
  var y = this.debits;
  //If either input is not a number, ignore it and add the others
  if (isNaN(x)) {
    return y+z;
  }else if (isNaN(y)) {
    return  x+z;
  }else {
    return  x+y+z;
  }
}
//User Interface Logic
$(document).ready(function() {
var final;

  $('#newAccount').submit(function(event) {
    event.preventDefault();
    //Take input from user
    var accountName = $('#accountName').val();
    var initialDeposit = parseInt( $('#initialDeposit').val() );

    var newUserAccount = new BankAccount(accountName, initialDeposit);

    //Display account name and initial deposit to user
    $('.specificName').text(newUserAccount.accountName);
    $('.specificBalance').text(newUserAccount.accountBalance);
    $('.hiddenAnswer').show();

    //store initial deposit amount in final variable
    final = newUserAccount.accountBalance;
    //Clear input forms
    $('.form-control').val('');
  });

  $('#editFunds').submit(function(event) {
    event.preventDefault();
    //Take inputs from user as numbers
    var deposits = parseInt($('#depositAmount').val());
    var withdrawls = parseInt($('#withdrawlAmount').val());
    //Create new instance of AccountChange object

    var newChange = new AccountChange(deposits, withdrawls, final);
    $('.specificBalance').text(newChange.findChange());
    $('.form-control').val('');
  });
});
