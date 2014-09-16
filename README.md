# [jQuery Deferred Image Plugin](http://github.com/tkem/jquery-image/)

**jQuery 1.5** introduced the [Deferred Object][1] to register
callbacks for asynchronous events.  Although the jQuery documentation
contains examples on how to use Deferred objects for [image
loading][2], jQuery does not provide a simple interface for this
common task.

This plugin provides a single function `jQuery.image()`, which acts as
a simple Deferred wrapper for the native [image element
constructor][3].  The returned promise will be resolved after the
image has loaded, or rejected if an error occurs.


## API Documentation

### jQuery.image( src [, width [, height ] ] )


## Examples

Insert an image after it has finished loading:

    $.image( "images/example.jpg" ).done(function( img ) {
        $( "#images" ).append( img );
    });


## License

Copyright 2014 Thomas Kemmer.

Licensed under the [MIT License][4].


[1]: http://api.jquery.com/category/deferred-object/
[2]: http://learn.jquery.com/code-organization/deferreds/examples/#image-loading
[3]: http://developer.mozilla.org/en/docs/Web/API/HTMLImageElement.Image
[4]: http://raw.github.com/tkem/jquery-image/master/LICENSE
