;(function($) {
    /* global QUnit: false */

    QUnit.module("jQuery.image");

    QUnit.asyncTest("load non-existent image", 1, function(assert) {
        var image = $.image("notfound.jpg");
        image.fail(function() {
            assert.ok(true);
            QUnit.start();
        });
    });

})(jQuery);
