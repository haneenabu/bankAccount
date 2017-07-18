//Business Logic
function BankAccount (name, deposit) {
  this.accountName = name;
  this.accountBalance = deposit;
  this.runningBalance = [];
}

function AccountChange (deposit, withdrawl) {
  this.credits = deposit;
  this.debits = withdrawl * -1;
}

AccountChange.prototype.findChange = function() {
  var x = this.credits;
  var y = this.debits;
  return  x+y;
}

BankAccount.prototype.myBalance = function() {
  return this.accountBalance += this.runningBalance;
}

//User Interface Logic
$(document).ready(function() {
  $('#newAccount').submit(function(event) {
    event.preventDefault();

    var accountName = $('#accountName').val();
    var initialDeposit = $('#initialDeposit').val();

    var newAccount = new BankAccount(accountName, initialDeposit);

    console.log(newAccount);

    $('.specificName').text(newAccount.accountName);
    $('.specificBalance').append(newAccount.accountBalance);
    $('.hiddenAnswer').show();


    $('.form-control').val('');
  });
  $('#editFunds').submit(function(event) {
    event.preventDefault();

    var deposits = parseInt ($('#depositAmount').val() );
    var withdrawls = parseInt ($('#withdrawlAmount').val() );

    var newChange = new AccountChange(deposits, withdrawls);

    console.log(newChange.findChange() );

    $('.form-control').val('');
  });
});
