# [jQuery Deferred Image Plugin](http://github.com/tkem/jquery-image/)

**jQuery 1.5** introduced the [Deferred Object][1] to register
callbacks for asynchronous events.  Although the jQuery documentation
contains examples on how to use Deferred objects for [image
loading][2], jQuery does not provide a simple interface for this
common task.

This plugin provides a single function, `jQuery.image()`, which acts
as a wrapper for the native [image element constructor][3], and
creates a Deferred object that will be resolved when an image has
loaded.


## API Documentation

### jQuery.image( src [, width [, height ] ] )

Create a new Image element with optional parameters `width` and
`height`, and a corresponding Deferred object that will be resolved
when the image has finished loading from `src`, or rejected if an
error occurs.  The function returns the Promise from the Deferred
object.  The image will be passed to the doneCallbacks and
failCallbacks as their sole argument.


## Examples

Insert an image into the DOM after it has finished loading:

    $.image( "images/example.jpg" ).done(function( img ) {
        $( "#images" ).append( img );
    });

Insert a scaled image into the DOM after it has finished loading, or
alert the user if an error occurs:

    $.image( "images/example.jpg", 80, 80 ).then(
        function( img ) {
            $( "#images" ).append( img );
        },
        function( img ) {
            alert( "Cannot load image " + img.src );
        }
    );

Preload multiple images:

    var img1 = $.image( "images/example1.jpg" );
    var img2 = $.image( "images/example2.jpg" );
    var img3 = $.image( "images/example3.jpg" );

    $.when( img1, img2, img3 ).done(function( img1, img2, img3 ) {
        $( "#images" ).append( img1 ).append( img2 ).append( img3 );
    });


## License

Copyright 2014 Thomas Kemmer.

Licensed under the [MIT License][4].


[1]: http://api.jquery.com/category/deferred-object/
[2]: http://learn.jquery.com/code-organization/deferreds/examples/#image-loading
[3]: http://developer.mozilla.org/en/docs/Web/API/HTMLImageElement.Image
[4]: http://raw.github.com/tkem/jquery-image/master/LICENSE
