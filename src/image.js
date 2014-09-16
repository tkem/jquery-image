;(function($, window, undefined) {
    $.extend({
        image: function(src, width, height) {
            var image = new Image(width, height),
                deferred = $.Deferred();
            image.onload = function() {
                image.onload = image.onerror = null;
                deferred.resolve(image);
            };
            image.onerror = function() {
                image.onload = image.onerror = null;
                deferred.reject(image);
            };
            image.src = src;
            return deferred.promise();
        }
    });
})(jQuery, window);
