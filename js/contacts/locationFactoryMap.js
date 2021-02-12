ymaps.ready(init);

function init() {
    const coords = [
        [53.907222, 27.592967]
    ];

    const clusterIcons = [{
        href: './images/home-page/label.svg',
        size: [53, 52],
        offset: [0, 0]
    }];
    const myGeoObjects = [];

    const myMap = new ymaps.Map('map', {
        center: [53.907222, 27.592967],
        zoom: 17,
        controls: []
    }, {
        searchControlProvider: 'yandex#search'
    });

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
                iconCaption: 'Платонова 10',
                closeButton: false
            },
        );
    }

    const myPlaceMark = new ymaps.Placemark([53.907222, 27.592967], {
        iconCaption: 'Платонова 10'
    }, {
        iconLayout: 'default#image',
        iconImageHref: './images/home-page/label.svg',
        iconImageSize: [37, 49],
    })

    myMap.geoObjects.add(myPlaceMark)

    const myClusterer = new ymaps.Clusterer({
        clusterIcons: clusterIcons,
        gridSize: 128
    });

    myClusterer.add(myGeoObjects);
    // myMap.geoObjects.add(myClusterer);
}
