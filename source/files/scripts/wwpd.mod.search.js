WWPD.register(function() {
	
	'use strict';
	
	$.fn.bigglesworth.format = function(data, obj) {
		
		data.results.append(
			'<li>' +
				obj.date.month + ' ' + obj.date.day + ', ' + obj.date.year + ' | ' +
				'<a href="' + obj.uri + '">' +
					obj.title +
				'</a>' +
			'</li>'
		);
		
	};
	
	$.fn.bigglesworth.zilch = function(data) {
		
		data.resultsNo.append(
			'<p>' +
				'Nothing recent found.' +
				'<br>' +
				'<a id="submit" href="#">Search google instead?</a>' +
			'</p>'
		);
		
		$('#submit').on('click', function($e) {
			
			$e.preventDefault();
			
			data.form[0].submit();
			
		});
		
	};
	
	var $ul = $('<ul>', { id : 'bigglesworth_results', 'class' : 'x5' }),
	    $div = $('<div>', { id : 'bigglesworth_results-no', 'class' : 'x5' }),
	    $search = $('#bigglesworth');
	
	$search
		.closest('label')
		.after($div, $ul);
	
	$search.bigglesworth({
		feed: 'feeds/search.json'
	});
	
}); // WWPD?
