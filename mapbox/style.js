
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "OpenStreetMap_0": {
            "type": "raster",
            "tiles": ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
            "tileSize": 256
        },
        "MNE2cmpx_1": {
            "type": "image",
            "url": "./data/MNE2cmpx_1.png",
            "coordinates": [
                [32.599793, 25.727229],
                [32.602096, 25.727229],
                [32.602096, 25.729720],
                [32.599793, 25.729720]
            ]
        },
        "tombes_2": {
            "type": "geojson",
            "data": json_tombes_2
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_OpenStreetMap_0_0",
            "type": "raster",
            "source": "OpenStreetMap_0"
        },
        {
            "id": "lyr_MNE2cmpx_1_1",
            "type": "raster",
            "source": "MNE2cmpx_1",
            "minzoom": 0,
            "maxzoom": 22
        },
        {
            "id": "lyr_tombes_2_0",
            "type": "circle",
            "source": "tombes_2",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#e77148', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_tombes_2_1",
            "type": "symbol",
            "source": "tombes_2",
            "layout": {'text-offset': [0.0, 0.0], 'text-field': '', 'text-size': '12.607142857142854', 'text-font': ['Open Sans Regular']},
            "paint": {'text-color': '#323232'}
        }
],
}