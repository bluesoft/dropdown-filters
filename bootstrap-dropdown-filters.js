(function($){
	$.fn.dropdownFilters = function() {
		return this.each(function(i, e){
			if (!($(e).data('convert') == 'no')) {
				$(e).hide().wrap('<div class="btn-group" id="select-group-' + i + '" />');
				var select = $('#select-group-' + i);
				var current = ($(e).val()) ? $(e).val(): '&nbsp;';
				var textValue = '';
	
				var elementId = $(e).attr('id');
				var $label = $("[for='"+elementId+"']");
				var label = $label.text();
				$label.hide();
				
				$(e).find('option').each(function(o,q) {
					if(current == $(q).attr('value')){
						textValue = $(q).text();
					}
				});
				
				select.html('<input type="hidden" onchange="' + $(e).attr('onchange') + '" value="' + $(e).val() + '" name="' + $(e).attr('name') + '" id="' + $(e).attr('id') + '" class="' + $(e).attr('class') + '" /><a class="btn" data-toggle="dropdown" href="javascript:;"><span class="filter-title"></span><span class="filter-value">' + textValue + '</span></a><a class="btn dropdown-toggle" data-toggle="dropdown" href="javascript:;"><i class="caret"></i></a><ul class="dropdown-menu"></ul>');
				$(e).find('option').each(function(o,q) {
					var text = $(q).text();
					select.find('.dropdown-menu').append('<li><a href="javascript:;" data-value="' + $(q).attr('value') + '">' + text + '</a></li>');
					if ($(q).attr('selected')) select.find('.dropdown-menu li:eq(' + o + ')').click();
				});
				
				select.find('.filter-title').text(label + ' ');
				
				select.find('.dropdown-menu a').click(function() {
					select.find('input[type=hidden]').val($(this).data('value')).change();
					select.find('.btn:eq(0) .filter-value').text($(this).text());
				});
			}
		});
	};
})( jQuery );