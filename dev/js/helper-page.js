// DOM READY
define(['jquery'], function($){

	$(function () {
		var customer;
 		$('form').submit(function(e){
			e.preventDefault();
			var form = $(this);
			var submit = {};
			switch(form.attr('id')){
				case 'guest':
					submit.name = form.find('input[name="name"]').val();
				default:
					customer = new Customer(submit.name);
			}
			console.log(customer.greeter('Привет'));
		});

	}());

});
