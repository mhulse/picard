WWPD.register(function() {
	
	'use strict';
	
	$.fn.bigglesworth.format = function(data, obj) {
		
		data.results.append(
			'<li>' +
				'<a href="' + obj.uri + '">' +
					'<time>' +
						obj.date.month + ' ' + obj.date.day + ', ' + obj.date.year +
					'</time>' +
					'<div>' +
						obj.title +
					'</div>' +
				'</a>' +
			'</li>'
		);
		
	};
	
	$.fn.bigglesworth.zilch = function(data) {
		
		data.resultsNo.append(
			'<p>' +
				'<span class="callout callout-error">' +
					'<i class="fa fa-times-circle" aria-hidden="true"></i>' +
					' ' +
					'Nothing recent found.' +
				'</span>' +
				'<br>' +
				'<span class="callout callout-info">' +
					'<i class="fa fa-search" aria-hidden="true"></i>' +
					' ' +
					'<a id="submit" href="#">Search via Google instead?</a>' +
				'</span>' +
			'</p>'
		);
		
		$('#submit').on('click', function($e) {
			
			$e.preventDefault();
			
			data.form[0].submit();
			
		});
		
	};
	
	var $ul = $('<ul>', { id : 'bigglesworth_results', 'class' : 'x3' }),
	    $div = $('<div>', { id : 'bigglesworth_results-no', 'class' : 'x2' }),
	    $search = $('#bigglesworth');
	
	$search
		.closest('label')
		.after($div, $ul);
	
	$search.bigglesworth({
		feed: 'feeds/search.json'
	});
	
}); // WWPD?
