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


$('#view-img').attr('src', viraglada.photo);
$('#photo-title').text(viraglada.title);
$('#photo-description').text(viraglada.description);

