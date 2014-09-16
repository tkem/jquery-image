;(function($, window, undefined) {
    function makeImage(width, height) {
        if (width === undefined) {
            return new Image();
        } else if (height === undefined) {
            return new Image(width);
        } else {
            return new Image(width, height);
        }
    }

    $.extend({
        image: function(src, width, height) {
            var image = makeImage(width, height),
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
