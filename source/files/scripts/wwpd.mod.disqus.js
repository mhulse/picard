/*jshint -W062, expr:true */


// Load Disqus comments on click.
// HTML: 
WWPD.register(function() {
	
	'use strict';
	
	var $disqus = $('#disqus'),
	    $disqus_thread;
	
	if ($disqus.length) {
		
		$disqus.hide();
		
		$disqus_thread = $disqus.find('#disqus_thread');
		
		if ($disqus_thread.length) {
			
			$('.disqus').one('click.disqus', function(e) {
				
				var data = $disqus_thread.data('disqus'),
				    i;
				
				e.preventDefault();
				
				for (i in data) {
					
					if (data.hasOwnProperty(i)) {
						
						window['disqus_' + i.toLowerCase()] = data[i];
						
					}
					
				}
				
				//$this.fadeOut(500, function() {
				
				$disqus.fadeIn(1000, function() {
					
					$.ajax({
						type: 'GET',
						url: 'http://' + window.disqus_shortname + '.disqus.com/embed.js',
						dataType: 'script',
						cache: true
					});
					
				});
				
				//});
				
			});
			
		}
		
	}
	
}); // WWPD?
