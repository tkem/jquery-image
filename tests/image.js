;(function($) {
    /* global QUnit: false */

    QUnit.module("jQuery.image");

    QUnit.asyncTest("load image with default size", 2, function(assert) {
        $.image("test-1x1.png").done(function(img) {
            assert.equal(img.width, 1);
            assert.equal(img.height, 1);
            QUnit.start();
        });
    });

    QUnit.asyncTest("load image with given width", 2, function(assert) {
        $.image("test-1x1.png", 80).done(function(img) {
            assert.equal(img.width, 80);
            assert.equal(img.height, 1);
            QUnit.start();
        });
    });

    QUnit.asyncTest("load image with given width and height", 2, function(assert) {
        $.image("test-1x1.png", 80, 80).done(function(img) {
            assert.equal(img.width, 80);
            assert.equal(img.height, 80);
            QUnit.start();
        });
    });

    QUnit.asyncTest("load non-existent image", 1, function(assert) {
        $.image("notfound.png").then(
            function() {
                assert.ok(false);
                QUnit.start();
            },
            function() {
                assert.ok(true);
                QUnit.start();
            }
        );
    });

    QUnit.asyncTest("load multiple images", 6, function(assert) {
        var img1 = $.image("test-1x1.png", 1, 1),
            img2 = $.image("test-1x1.png", 2, 2),
            img3 = $.image("test-1x1.png", 3, 3);
        $.when(img1, img2, img3).done(function(img1, img2, img3) {
            assert.equal(img1.width, 1);
            assert.equal(img1.height, 1);
            assert.equal(img2.width, 2);
            assert.equal(img2.height, 2);
            assert.equal(img3.width, 3);
            assert.equal(img3.height, 3);
            QUnit.start();
        });
    });

    QUnit.asyncTest("fail to load multiple images", 2, function(assert) {
        var img1 = $.image("test-1x1.png", 1, 1),
            img2 = $.image("notfound.jpg", 2, 2),
            img3 = $.image("test-1x1.png", 3, 3);
        $.when(img1, img2, img3).fail(function(img) {
            assert.equal(img.width, 2);
            assert.equal(img.height, 2);
            QUnit.start();
        });
    });

})(jQuery);
