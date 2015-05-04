javascript: (function() {
  w = ['coffscoastadvocate.com.au', 'dailymercury.com.au', 'frasercoastchronicle.com.au',  'gladstoneobserver.com.au', 'gympietimes.com.au', 'news-mail.com.au', 'qt.com.au', 'sunshinecoastdaily.com.au', 'thechronicle.com.au', 'themorningbulletin.com.au', 'warwickdailynews.com.au', 'dailyexaminer.com.au', 'northernstar.com.au'];
  django.jQuery('select#id_sites > option,select#id_sites_from > option,select#id_extension-0-sites > option').each(function() {
		if (django.jQuery.inArray(django.jQuery(this).text().replace('www.', ''), w) >= 0) {
      django.jQuery(this).attr('selected', 'selected');
    }
  });
})();