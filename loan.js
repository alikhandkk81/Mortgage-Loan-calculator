function computerLoan() {
    var amount = document.getElementById('amount').value;
    var intrest_rate = document.getElementById('intrest_rate').value;
    var months = document.getElementById('months').value;
    var intrest = (amount * (intrest_rate * .01) / months);
    var payment = ((amount / months) + intrest).toFixed(2);
    payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById('payment').innerHTML = "Monthly Payment = $" + payment;

}