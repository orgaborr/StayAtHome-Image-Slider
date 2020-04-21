let data = {
    photo: 'Photos/viraglada.jpg',
    title: 'Virágláda',
    description: 'Fűszernövények egy ládában, melyeket magam ültettem.'
};

$('#view-img').attr('src', data.photo);
$('#photo-title').text(data.title);
$('#photo-description').text(data.description);