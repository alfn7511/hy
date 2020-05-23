$(document).ready(function(){	
	$(document).on("click", "a", function (e){
		e.preventDefault();
	});
	uiCheckCtrl();
	uiFileCtrl();
});

function uiCheckCtrl(){
	
	$(document).on("click", "input.radio, input.check", function (){
		var a = $(this);
		if (a.is(".check")){
			a.prev().toggleClass("active")
		}else{
			if (a.is(".radio")){
				$('input[name="' + a.attr("name") +'"]').each(function (){
					if (this == a[0]){
						$(this).parent().addClass("active")
					}else{
						$(this).parent().removeClass("active")
					}
				})
			}
		}
	}).on("focus","input.radio, input.check", function (){
		$(this).parent().addClass("focus")
	}).on("blur", "input.radio, input.check", function (){
		$(this).parent().removeClass("focus")
	});

	//clear button
	$(document).on("keydown focus change", "input.form-control, textarea.form-control", function (){
		if ($(this).val().length > 0){
			$(this).siblings('.form-control-clear').removeClass('hidden');
		} else{
			$(this).siblings('.form-control-clear').addClass('hidden');
		}
	}).on("keyup blur", "input.form-control, textarea.form-control", function() {
		if ($(this).val().length <= 0) $(this).siblings('.form-control-clear').addClass('hidden');
	});
	
	$(document).on("click", ".form-control-clear", function (){
		$(this).siblings('input.form-control, textarea.form-control').val('').focus();
		$(this).toggleClass('hidden', true);
	});
	$that = null
}

function uiFileCtrl(){
	$(".custom-file-input").unbind("change").bind("change", function (){
		if ($(this).val()){
			$('label[for="' + $(this).attr("id") +'"]').addClass("on")
		}else{
			$('label[for="' + $(this).attr("id") +'"]').removeClass("on")
		}
		$('label[for="' + $(this).attr("id") +'"]').text($(this).val())
	})
}