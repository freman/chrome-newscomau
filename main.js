(function($) {
	var comments_link = $('.story-comments-link');
	if (comments_link.length > 0) {
		comments_link.remove();
		$('#comments').after($('.story-body + .story-footer + .group-story-footer'));
	}
})(jQuery);