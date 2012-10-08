(function($) {
	$.fn.dropdownFilters = function(action, json) {
		if (!action || action == 'start') {
			start(this);
		} else if (action == 'update') {
			update(this, json);
		}
	};

	function start(elements) {
		return elements.each(function(elementIndex, element){
			if (!($(element).data('convert') == 'no')) {
				var elementId = $(element).attr('id');
				$(element).hide().wrap('<div class="btn-group" id="select-group-' + elementId + '" />');
				var select = $('#select-group-' + elementId);
				var current = ($(element).val()) ? $(element).val(): '&nbsp;';
				var textValue = '';

				var $label = $("[for='"+elementId+"']");
				var label = $label.text();
				$label.hide();

				$(element).find('option').each(function(o,q) {
					if(current == $(q).attr('value')){
						textValue = $(q).text();
					}
				});

				select.html('\
					<a class="btn" data-toggle="dropdown" href="javascript:;">\
						<span class="filter-title"></span><span class="filter-value">' + textValue + '</span>\
					</a>\
					<a class="btn dropdown-toggle" data-toggle="dropdown" href="javascript:;">\
						<i class="caret"></i>\
					</a>\
					<ul class="dropdown-menu"></ul>\
				');

				select.after('<input type="hidden" onchange="' + $(element).attr('onchange') + '" value="' + $(element).val() + '" name="' + $(element).attr('name') + '" id="' + $(element).attr('id') + '" class="' + $(element).attr('class') + '"/>');

				$(element).find('option').each(function(optionIndex, option) {
					var text = $(option).text();
					select.find('.dropdown-menu').append('<li><a href="javascript:;" data-value="' + $(option).attr('value') + '">' + text + '</a></li>');
					if ($(option).attr('selected')) select.find('.dropdown-menu li:eq(' + optionIndex + ')').click();
				});

				select.find('.filter-title').text(label + ' ');

				select.find('.dropdown-menu a').click(function() {
					select.next('input[type=hidden]').val($(this).data('value')).change();
					select.find('.btn:eq(0) .filter-value').text($(this).text());
				});

				if (select.children('a:first').children('span.filter-value').html() == '') { select.find('.btn:eq(0) .filter-value').text(select.children('ul').children('li:first').children('a').text()); }
			}
		});
	};

	function update(elements, json) {
		return elements.each(function () {
			var $this = $(this);
			$this.children('a:first').children('span.filter-value').html(json.selected.title);
			$this.children('input').val(json.selected.value);

			var dropdownMenu = '';
			$(json.options).each(function() {
				dropdownMenu += '\
				<li>\
					<a href="javascript:;" data-value="' + this.value + '">' + this.title + '</a>\
				</li>';
			});
			$this.children('ul').html(dropdownMenu);

			$this.find('.dropdown-menu a').click(function() {
				$this.next('input[type=hidden]').val($(this).data('value')).change();
				$this.find('.btn:eq(0) .filter-value').text($(this).text());
			});
		});
	};
})( jQuery );