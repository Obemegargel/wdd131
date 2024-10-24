// const form = document.getElementById("credit_card_form");//chatGPT helped with this line and the one beneath it.
// form.addEventListener('submit',function(submitHandler)){
    
// }

// function submitHandler(event){
//     event.preventDefault();
// }


// provided example code
function isCardNumberValid(number) {
	// normally we would contact a credit card service...but we don't know how to do that yet. So to keep things simple we will only accept one number
	return number === '1234123412341234'
}
function displayError(msg) {
	// display error message
	document.querySelector('.errorMsg').innerHTML = msg
}
function submitHandler(event) {
	event.preventDefault()
	let errorMsg = ''
	console.log(this.cardNumber.value)
	// clear any previous errors
	displayError('')
	// check credit card number
	if (isNaN(this.cardNumber.value)) {
		// it is not a valid number
		errorMsg += 'Card number is not a valid number\n'
	} else if (!isCardNumberValid(this.cardNumber.value)) {
		// it is a number, but is it valid?
		errorMsg += 'Card number is not a valid card number\n'
	}
	if (errorMsg !== '') {
		// there was an error. stop the form and display the errors.
		displayError(errorMsg)
		// return false
	}
	// return true

    // check month and year to ensure in the future
    let month = this.Experation_month_input.value;
    let year = this.Experation_year_input;
    let date = new Date(year, month);
    if(Date.now() > date){
        errorMsg += 'month or year is not in the future\n'
    }
    if (errorMsg !== '') {
		// there was an error. stop the form and display the errors.
		displayError(errorMsg)
		return false
	}
	
	return true

}

document.querySelector('#credit-card').addEventListener('submit', submitHandler)