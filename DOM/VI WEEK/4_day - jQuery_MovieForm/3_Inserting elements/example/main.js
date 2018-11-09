$(function () {

    var isSpecial = true;
    var $body = $('body')


    var linkOfimg = [
        "https://via.placeholder.com/250/4c6999",
        "https://via.placeholder.com/250/db9dc0",
        "https://via.placeholder.com/150/f2e87d",
        "https://via.placeholder.com/250/bcf2b0",
        "https://via.placeholder.com/150/9099ed",
        "https://via.placeholder.com/50/f2e87d"];



    function createGallery(links, $parent) {
        var $gallery = $('<div>').addClass('clearfix');
        var images = buildImages(links);
        addImagesToGallery($gallery, images);
        $parent.append($gallery);
        return $gallery;
    }

    function buildImages(links) {
        var images = [];

        for (var i = 0; i < links.length; i++) {
            var $image = createImage(links[i]);
            $image = setRandomWidth($image);
            images.push($image);
        }
        return images;
    }

    function createImage(link) {
        var img = $("<img>").attr("src", link);
        return img;
    }

    function setRandomWidth($image) {
        var randomWidth = (Math.random() * (300 - 100) + 100);
        markSpecial($image, randomWidth);
        return $image.css("width", "" + randomWidth + "");
    }

    function addImagesToGallery($gallery, images) {
        for (var i = 0; i < images.length; i++) {
            $gallery.append(images[i]);
        }
    }

    function setGalleryTitle($gallery, string) {
        $galleryTitle = $('<h1>').text(string);
        $gallery.prepend($galleryTitle);
    }

    function markSpecial(img, width) {
        if (width <= 200 && isSpecial) {
            img.addClass('green')
        } else if (width > 200) {
            isSpecial = false;
        }
    }

    var gallery = createGallery(linkOfimg, $body);
    setGalleryTitle(gallery, "Bit Gallery")



})


