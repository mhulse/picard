// Note: This won't work locally due to the relative image paths.
WWPD.register(function() {
	
	'use strict';
	
	var $figure,
	    $figcaption,
	    $figcaption_last,
	    $img,
	    $a,
	    $i,
	    url,
	    description,
	    media;
	
	$figure = $('figure');
	
	$figure.each(function() {
		
		var $this = $(this);
		
		$img = $this.find('img');
		$figcaption = $this.find('figcaption > div');
		
		if ($img.length && $figcaption.length) {
			
			media = $img.attr('src');
			
			if (media.indexOf('http') === 0) {
				
				url = document.URL;
				
				if (url.length) {
					
					$figcaption_last = $figcaption.find('>*:last');
					
					if ( ! $figcaption_last.length) {
						
						$figcaption_last = $figcaption;
						
					}
					
					if ($figcaption_last.length) {
						
						// https://github.com/mhulse/picard/issues/187
						$figcaption_last.append(' ');
						
						description = $.trim($figcaption.text().replace(/(\r\n|\n|\r)/g,'').replace(/\t/g, ' ').replace(/\s{2,}/g, ' '));
						
						$a = $('<a>', {
							text : 'Pin it!',
							'class' : 'social social-pinterest',
							target : '_blank',
							href : ('http://pinterest.com/pin/create/button/?url=' + encodeURIComponent(url) + '&amp;description=' + encodeURIComponent(description) + '&amp;media=' + encodeURIComponent(media))
						});
						
						$i = $('<i>', {
							'class' : 'fa fa-lg fa-pinterest',
							'aria-hidden' : 'true'
						});
						
						//console.log($figcaption_last);
						
						$a
							.prepend($i)
							.appendTo($figcaption_last);
						
					}
					
				}
				
			}
			
		}
		
		
		
	});
	
}); // WWPD?
