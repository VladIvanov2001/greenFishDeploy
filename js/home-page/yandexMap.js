ymaps.ready(init);

function init() {
    const coords = [
        [53.90, 27.59],
        [54.90, 27.56],
        [52.90, 27.56]
    ];

    const clusterIcons = [{
        href: './images/home-page/label.svg',
        size: [53, 52],
        offset: [0, 0]
    }];
    const myGeoObjects = [];

    myMap = new ymaps.Map('map', {
        center: [53.90, 27.56],
        zoom: 10,
        controls: []
    }, {
        searchControlProvider: 'yandex#search'
    });

    BalloonContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div class="info-popular-label">' +
        '<div class="info-popular-label__top">' +
        '<p>представлен полный ассортимент товара</p> ' +
        '<img alt="" src="./images/home-page/star.svg"> ' +
        '</div>' +
        '<div class="info-popular-label__bottom">' +
        '<address>г. Минск, Матусевича, 64, магазин «Рыбалка»</address>'+
        '<a href="https://nalim.by/">https://nalim.by/</a>'+
        '</div>'+
        '</div>')

    for (let i = 0; i < coords.length; i++) {
        myGeoObjects[i] = new ymaps.GeoObject({
                geometry: {
                    type: "Point",
                    coordinates: coords[i]
                },
            }, {
                iconLayout: 'default#image',
                iconImageHref: './images/home-page/label.svg',
                iconImageSize: [37, 49],
            balloonContentLayout: BalloonContentLayout,
            closeButton:false
         },
        );
    }

    const myClusterer = new ymaps.Clusterer({
        clusterIcons: clusterIcons,
        gridSize: 128
    });

    myClusterer.add(myGeoObjects);
    myGeoObjects.forEach(element =>{
        element.events
            .add('click', function (e) {
                e.get('target').options.set({
                    iconImageHref: './images/home-page/active-label.svg',
                });
            })
    });
    myMap.geoObjects.add(myClusterer);
}
