$(document).ready(function(){
  $.getJSON('http://json-data.herokuapp.com/forms', function(formData){
    // ALL CODE GOES IN HERE
    // the formData variable includes all of the form information you need
    console.log(formData)

    var formHTML=``

    $("body").prepend(`<h1>Sign Up For My Web App</h1>`)
    $("body").append(`<div id="footer"><button type="submit">Submit Form</button></div`)

    formData.forEach(function(field){
    	if (field.type == 'text') {
    		formHTML += `<div class="formItem"> <i class="fa ${field.icon}" /><input type = "${field.type}" placeholder = "${field.label}" id=${field.id}" /> </div>`	
    	}
    	if (field.type == 'select') {
    		formHTML += `<select>`
					field.options.forEach(function(option){
						formHTML += `<option value=${option.value}>${option.label}</option>`
					})
    		formHTML += `</select>`
    	}
    	if (field.type == 'tel') {
    		formHTML += `<div class="formItem"> <i class="fa ${field.icon}" /><input type = "${field.type}" placeholder = "${field.label}" id=${field.id}" /> </div>`	
    	}
    	if (field.type == 'textarea') {
    		formHTML += `<div class="formItem"> <i class="fa ${field.icon}" /><textarea placeholder = "${field.label}" id=${field.id}" /> </div>`	
    	}
    	if (field.type == 'email') {
    		formHTML += `<div class="formItem"> <i class="fa ${field.icon}" /><input type = "${field.type}" placeholder = "${field.label}" id=${field.id}" /> </div>`	
    	}
    })

		$("#app").html(formHTML)
  	



  })
})