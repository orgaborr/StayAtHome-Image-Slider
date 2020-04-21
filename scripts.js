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
let gyomber = createPhotoData('Photos/gyomber', 'Gyömbér-csúcs', 'A Gyömbér, az Alacsony-Tátra legmagasabb csúcsa kibukkan a felhők közül. A kép a Chopokról készült.');
let jegkristaly = createPhotoData('Photos/jegkristalyok', 'Jégkristályok', 'A még zöld füvön keletkezett nagy jégkristályok a Mátrában.');
let zsalya = createPhotoData('Photos/zsalya', 'Zsálya a naplementében', 'A kép az Alpokban készült, a Wolfgang See mellett eső utáni sétán.')

$('#view-img').attr('src', viraglada.photo);
$('#photo-title').text(viraglada.title);
$('#photo-description').text(viraglada.description);

