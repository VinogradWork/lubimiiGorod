
  function modalFos(title, tema){
	$('.form').addClass('open');
	$('.form__content').addClass('open');
	$('#tema').val(tema);
	$('.form__title').text(title);
}

function feedback() {
	err = 0;
t1 = $('#formName').val();
	t2 = $('#formTel').val();
	t3 = $('#formMessage').val();
	tema = $('#tema').val();
	page = $('#page').val();
	console.log('name='+t1);
	console.log('phone='+t2);
	console.log('text='+t3);
	console.log(tema);
	console.log(page);
	if(t1 == ''){
		$('#formName').closest('.form__item').css({'outline':'1px solid red'});
		err = 1;
	} else {
		$('#formName').closest('.form__item').css({'outline':'1px solid green'});
	}
	if(t2 == ''){
		$('#formTel').closest('.form__item').css({'outline':'1px solid red'});
		err = 1;
	} else {
		$('#formTel').closest('.form__item').css({'outline':'1px solid green'});
	}
	if(t3 == ''){
		$('#formMessage').closest('.form__item').css({'outline':'1px solid red'});
		err = 1;
	} else {
		$('#formMessage').closest('.form__item').css({'outline':'1px solid green'});
	}
	if(!$('#formAgreement').prop('checked')){
		$('.checkbox__label').css({'color':'red'});
		err = 1;
	} else {
		$('.checkbox__label').css({'color':'green'});
	}
	if(err == 0){
		$.ajax({
    	    type: "POST",
    	    url: "/ajax/fos-popup.php",
    	    data: 'name='+t1+'&phone='+t2+'&text='+t3+'&tema='+tema+'&page='+page,
    	    beforeSend: function(){
		        /*$('.d-popup-block').addClass('d-popup-block-preload');*/
		    },
    	    success: function(response){
    	    	if(response == '1'){
    	    		
    	    	}
    	    	/*$('.d-popup-block').removeClass('d-popup-block-preload');*/
    	    	/*$('.i-fot-scvoz-js').addClass('d-fot-scvoz-js-mess');*/
	    	  	$('.order-call__wrapper').html(response);

    	    }
    	});
	}
}




