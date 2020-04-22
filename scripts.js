function createPhotoData(photo, title, description) {
    let dataObj = {
        photo: photo,
        title: title,
        description: description
    };
    return dataObj;
}

let viraglada = createPhotoData('Photos/viraglada.jpg', 'Virágláda', 'Fűszernövények egy ládában, melyeket magam ültettem.');
let kokapu = createPhotoData('Photos/kokapu.jpg', 'Kőkapu', 'A Badacsony híres útja. Magam készítettem, szúnyogokkal terrorizálva.');
let gyomber = createPhotoData('Photos/gyomber.jpg', 'Gyömbér-csúcs', 'A Gyömbér, az Alacsony-Tátra legmagasabb csúcsa kibukkan a felhők közül. A kép a Chopokról készült.');
let jegkristaly = createPhotoData('Photos/jegkristalyok.jpg', 'Jégkristályok', 'A még zöld füvön keletkezett nagy jégkristályok a Mátrában.');
let zsalya = createPhotoData('Photos/zsalya.jpg', 'Zsálya a naplementében', 'A kép az Alpokban készült, a Wolfgang See mellett eső utáni sétán.');

let images = [viraglada, kokapu, gyomber, jegkristaly, zsalya];

let photoDisplayed = 0;
function loadPhoto(photoNumber) {
    $('#view-img').attr('src', images[photoNumber].photo);
    $('#photo-title').text(images[photoNumber].title);
    $('#photo-description').text(images[photoNumber].description);
};

loadPhoto(photoDisplayed);

$('#next').click(() => {
    photoDisplayed++;
    if(photoDisplayed >= images.length) {
        photoDisplayed = 0;
    }
    loadPhoto(photoDisplayed);
})

$('#previous').click(() => {
    photoDisplayed--;
    if(photoDisplayed < 0) {
        photoDisplayed = images.length-1;
    }
    loadPhoto(photoDisplayed);
})

images.forEach((image) => {
    $('.thumbnails-container').append('<img class="thumbnail" src="' + image.photo + '" data-number="' + images[image] + '">');
});