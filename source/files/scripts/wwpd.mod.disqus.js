/* jshint -W062, expr:true */

// Load Disqus comments on click.
//
// Markup nesting:
// <#comments><#disqus><#disqus_thread>
WWPD.register(function() {
	
	'use strict';
	
	var $comments = $('#comments'),
	    $disqus,
	    $disqus_thread;
	
	if ($comments.length) {
		
		$disqus = $comments.find('#disqus');
		
		if ($disqus.length) {
			
			$disqus.hide();
			
			$disqus_thread = $disqus.find('#disqus_thread');
			
			if ($disqus_thread.length) {
				
				$('.disqus').one('click.disqus', function(e) {
					
					var data = $disqus_thread.data('disqus'),
					    i;
					
					e.preventDefault();
					
					history.replaceState(null, '', '#comments');
					
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
				
				if (location.hash.indexOf('#comments') === 0) {
					
					$('.disqus').trigger('click.disqus');
					
				}
				
			}
			
		}
		
	}
	
}); // WWPD?
