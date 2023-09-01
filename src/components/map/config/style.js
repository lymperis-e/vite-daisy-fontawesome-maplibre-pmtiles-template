import {layers} from './layers.js'

const mapStyle = {
    version: 8,
    glyphs: 'https://cdn.protomaps.com/fonts/pbf/{fontstack}/{range}.pbf',
    sources: {
      "protomaps": {
        type: "vector",
        url: "pmtiles://https://r2-public.protomaps.com/protomaps-sample-datasets/protomaps-basemap-opensource-20230408.pmtiles", 
        attribution: '<a href="https://protomaps.com">Protomaps</a> © <a href="https://openstreetmap.org">OpenStreetMap</a>'
      },
    },
    layers: layers 
}

export {mapStyle}