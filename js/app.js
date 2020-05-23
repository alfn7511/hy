$(document).ready(function(){	
    uiCheckCtrl();
});

function uiCheckCtrl()
{
	$(document).on("click",
		"input.radio, input.check", function ()
		{
			var a = $(this);
			if (a.is(".check"))
			{
				a.prev().toggleClass("active")
			}
			else
			{
				if (a.is(".radio"))
				{
					$('input[name="' + a.attr("name") +
						'"]').each(function ()
					{
						if (this == a[0])
						{
							$(this).parent().addClass("active")
						}
						else
						{
							$(this).parent().removeClass("active")
						}
					})
				}
			}
		}).on("focus",
		"input.radio, input.check", function ()
		{
			$(this).parent().addClass("focus")
		}).on("blur",
		"input.radio, input.check", function ()
		{
			$(this).parent().removeClass("focus")
		});
	$that = null
}