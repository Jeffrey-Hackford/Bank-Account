//Business Logic
$(document).ready(function() {
  var nameInput;
  var initialInput;
  var depositInput;
  var withdrawInput;

  function Account(name, balance, deposit, withdraw) {
  this.name = name;
  this.balance = parseInt(balance);
  this.depositVal = parseInt(deposit);
  this.withdrawVal = parseInt(withdraw);
}

//User Interface Logic
  $("form#create-bank-account").submit(function(event) {
    event.preventDefault();
    var nameInput = $('input#login-name').val();
    var initialInput = parseInt($('input#initial-deposit').val());

    console.log(initialInput);
    console.log(nameInput);

    newAccount = new Account(nameInput, parseInt(initialInput), parseInt(withdrawInput), parseInt(depositInput));

    console.log(parseInt(withdrawInput), parseInt(depositInput))

    alert('Welcome ' + newAccount.name + '!');
  });

  $("form#withdraw-deposit").submit(function(event) {
    event.preventDefault();
    var depositInput = parseInt($('withdraw-deposit#deposit-amount').val());
    var withdrawInput = parseInt($('withdraw-deposit#withdraw-amount').val());

    Account.prototype.withdraw = function() {
      console.log(newAccount.balance, newAccount.withdrawVal);
      newAccount.balance = parseInt(newAccount.balance) - parseInt(newAccount.withdrawVal);
      return newAccount.balance;
      //append info
    }

    Account.prototype.deposit = function() {
      console.log(newAccount.balance, depositInput);
      newAccount.balance = parseInt(newAccount.balance) + parseInt(depositInput);
      return newAccount.balance;
      //append info
    }

    newAccount.withdraw();
    newAccount.deposit();

    console.log(newAccount.balance);
  });
});
