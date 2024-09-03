const currency = {
    USD : 1,
    EUR : 0.90,
    INR : 83.89,
    PKR : 278.57,
    YEN : 146.21
}

document.getElementById('convertor-form').addEventListener('submit', function(e){
    e.preventDefault()

    let fromCurrency = document.getElementById('from').value
    let toCurrency = document.getElementById('to').value
    let amount = document.getElementById('amount').value


    let fromAmount = currency[fromCurrency];
    let toAmount = currency[toCurrency];
    let baseAmount = amount / fromAmount ;
    let convertedAmount = baseAmount * toAmount;
   
    document.getElementById('result').textContent = `Converted Amount : ${Math.round(convertedAmount)}`
})