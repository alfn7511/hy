$(document).on("click", "a", function (e){
	e.preventDefault();
});

$(document).on("click", ".mypage-box .ico-my", function (){
	var my = $(".mypage-box .my-dropdown");
	if(my.hasClass("show")){
		my.removeClass("show");
	}else{
		my.addClass("show");
	}
});
$(document).on("click", ".mypage-box .my-dropdown .btn-close", function (){
	$(".mypage-box .my-dropdown").removeClass("show");
});

$(document).ready(function(){	
	uiFileCtrl();
});

uiCheckCtrl();

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