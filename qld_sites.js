javascript: (function() {
  var w = ['caboolturenews.com.au', 'centraltelegraph.com.au', 'coolum-news.com.au', 'cqnews.com.au', 'dailymercury.com.au', 'frasercoastchronicle.com.au', 'gattonstar.com.au', 'gladstoneobserver.com.au', 'gympietimes.com.au', 'ipswichadvertiser.com.au', 'mydailynews.com.au', 'news-mail.com.au', 'noosanews.com.au', 'qt.com.au', 'rangenews.com.au', 'southburnetttimes.com.au', 'sunshinecoastdaily.com.au', 'suratbasin.com.au', 'thechronicle.com.au', 'themorningbulletin.com.au', 'thereporter.com.au', 'thesatellite.com.au', 'warwickdailynews.com.au', 'whitsundaytimes.com.au','stanthorpeborderpost.com.au'];
  django.jQuery('select#id_sites > option,select#id_sites_from > option').each(function() {
    if (django.jQuery.inArray(django.jQuery(this).text().replace('www', ''), w) >= 0) {
      django.jQuery(this).attr('selected', 'selected');
    }
  });
})();

