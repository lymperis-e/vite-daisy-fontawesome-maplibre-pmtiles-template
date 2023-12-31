const layers = [
  {
    id: 'background',
    type: 'background',
    paint: {
      'background-color': '#dddddd'
    }
  },
  {
    id: 'earth',
    type: 'fill',
    source: 'protomaps',
    'source-layer': 'earth',
    paint: {
      'fill-color': '#e8e5d8'
    }
  },
  {
    id: 'landuse_park',
    type: 'fill',
    source: 'protomaps',
    'source-layer': 'landuse',
    filter: [
      'any',
      [
        '==',
        'pmap:kind',
        'park'
      ],
      [
        '==',
        'landuse',
        'cemetery'
      ]
    ],
    paint: {
      'fill-color': '#d6dfbb'
    }
  },
  {
    id: 'landuse_hospital',
    type: 'fill',
    source: 'protomaps',
    'source-layer': 'landuse',
    filter: [
      'any',
      [
        '==',
        'pmap:kind',
        'hospital'
      ]
    ],
    paint: {
      'fill-color': '#ffeae8'
    }
  },
  {
    id: 'landuse_industrial',
    type: 'fill',
    source: 'protomaps',
    'source-layer': 'landuse',
    filter: [
      'any',
      [
        '==',
        'pmap:kind',
        'industrial'
      ]
    ],
    paint: {
      'fill-color': '#f8ffed'
    }
  },
  {
    id: 'landuse_school',
    type: 'fill',
    source: 'protomaps',
    'source-layer': 'landuse',
    filter: [
      'any',
      [
        '==',
        'pmap:kind',
        'school'
      ]
    ],
    paint: {
      'fill-color': '#f2fef9'
    }
  },
  {
    id: 'natural_wood',
    type: 'fill',
    source: 'protomaps',
    'source-layer': 'natural',
    filter: [
      'any',
      [
        '==',
        'natural',
        'wood'
      ],
      [
        '==',
        'leisure',
        'nature_reserve'
      ],
      [
        '==',
        'landuse',
        'forest'
      ]
    ],
    paint: {
      'fill-color': '#c1d899'
    }
  },
  {
    id: 'landuse_pedestrian',
    type: 'fill',
    source: 'protomaps',
    'source-layer': 'landuse',
    filter: [
      'any',
      [
        '==',
        'highway',
        'footway'
      ]
    ],
    paint: {
      'fill-color': '#eef0f0'
    }
  },
  {
    id: 'natural_scrub',
    type: 'fill',
    source: 'protomaps',
    'source-layer': 'natural',
    filter: [
      'in',
      'natural',
      'scrub',
      'grassland'
    ],
    paint: {
      'fill-color': '#d6dfbb'
    }
  },
  {
    id: 'natural_glacier',
    type: 'fill',
    source: 'protomaps',
    'source-layer': 'natural',
    filter: [
      '==',
      'natural',
      'glacier'
    ],
    paint: {
      'fill-color': 'white'
    }
  },
  {
    id: 'natural_sand',
    type: 'fill',
    source: 'protomaps',
    'source-layer': 'natural',
    filter: [
      '==',
      'natural',
      'sand'
    ],
    paint: {
      'fill-color': '#eff5e7'
    }
  },
  {
    id: 'landuse_aerodrome',
    type: 'fill',
    source: 'protomaps',
    'source-layer': 'landuse',
    filter: [
      '==',
      'aeroway',
      'aerodrome'
    ],
    paint: {
      'fill-color': '#dbe7e7'
    }
  },
  {
    id: 'transit_runway',
    type: 'line',
    source: 'protomaps',
    'source-layer': 'transit',
    filter: [
      'has',
      'aeroway'
    ],
    paint: {
      'line-color': '#d1d9d9',
      'line-width': 6
    }
  },
  {
    id: 'landuse_runway',
    type: 'fill',
    source: 'protomaps',
    'source-layer': 'landuse',
    filter: [
      'any',
      [
        '==',
        'aeroway',
        'runway'
      ],
      [
        '==',
        'area:aeroway',
        'runway'
      ],
      [
        '==',
        'area:aeroway',
        'taxiway'
      ]
    ],
    paint: {
      'fill-color': '#d1d9d9'
    }
  },
  {
    id: 'water',
    type: 'fill',
    source: 'protomaps',
    'source-layer': 'water',
    paint: {
      'fill-color': '#a4cae1'
    }
  },
  {
    id: 'roads_tunnels_other_casing',
    type: 'line',
    source: 'protomaps',
    'source-layer': 'roads',
    filter: [
      'all',
      [
        '<',
        'pmap:level',
        0
      ],
      [
        '==',
        'pmap:kind',
        'other'
      ]
    ],
    paint: {
      'line-color': '#ffffff',
      'line-gap-width': [
        'interpolate',
        [
          'exponential',
          1.6
        ],
        [
          'zoom'
        ],
        14,
        0,
        14.5,
        0.5,
        20,
        12
      ]
    },
    layout: {
      visibility: 'visible'
    }
  },
  {
    id: 'roads_tunnels_other',
    type: 'line',
    source: 'protomaps',
    'source-layer': 'roads',
    filter: [
      'all',
      [
        '<',
        'pmap:level',
        0
      ],
      [
        '==',
        'pmap:kind',
        'other'
      ]
    ],
    paint: {
      'line-color': '#f7f7f7',
      'line-dasharray': [
        1,
        1
      ],
      'line-width': [
        'interpolate',
        [
          'exponential',
          1.6
        ],
        [
          'zoom'
        ],
        14,
        0,
        14.5,
        0.5,
        20,
        12
      ]
    }
  },
  {
    id: 'roads_tunnels_minor_casing',
    type: 'line',
    source: 'protomaps',
    'source-layer': 'roads',
    filter: [
      'all',
      [
        '<',
        'pmap:level',
        0
      ],
      [
        '==',
        'pmap:kind',
        'minor_road'
      ]
    ],
    paint: {
      'line-color': '#e2e2e2',
      'line-dasharray': [
        3,
        2
      ],
      'line-gap-width': [
        'interpolate',
        [
          'exponential',
          1.6
        ],
        [
          'zoom'
        ],
        12,
        0,
        12.5,
        0.5,
        20,
        32
      ],
      'line-width': [
        'interpolate',
        [
          'exponential',
          1.6
        ],
        [
          'zoom'
        ],
        12,
        0,
        12.5,
        1
      ]
    },
    layout: {
      visibility: 'visible'
    }
  },
  {
    id: 'roads_tunnels_minor',
    type: 'line',
    source: 'protomaps',
    'source-layer': 'roads',
    filter: [
      'all',
      [
        '<',
        'pmap:level',
        0
      ],
      [
        '==',
        'pmap:kind',
        'minor_road'
      ]
    ],
    paint: {
      'line-color': '#ebebeb',
      'line-width': [
        'interpolate',
        [
          'exponential',
          1.6
        ],
        [
          'zoom'
        ],
        12,
        0,
        12.5,
        0.5,
        20,
        32
      ]
    }
  },
  {
    id: 'roads_tunnels_medium_casing',
    type: 'line',
    source: 'protomaps',
    'source-layer': 'roads',
    filter: [
      'all',
      [
        '<',
        'pmap:level',
        0
      ],
      [
        '==',
        'pmap:kind',
        'medium_road'
      ]
    ],
    paint: {
      'line-color': '#e1e1e1',
      'line-dasharray': [
        3,
        2
      ],
      'line-gap-width': [
        'interpolate',
        [
          'exponential',
          1.6
        ],
        [
          'zoom'
        ],
        7,
        0,
        7.5,
        0.5,
        20,
        32
      ],
      'line-width': [
        'interpolate',
        [
          'exponential',
          1.6
        ],
        [
          'zoom'
        ],
        10,
        0,
        10.5,
        1
      ]
    },
    layout: {
      visibility: 'visible'
    }
  },
  {
    id: 'roads_tunnels_medium',
    type: 'line',
    source: 'protomaps',
    'source-layer': 'roads',
    filter: [
      'all',
      [
        '<',
        'pmap:level',
        0
      ],
      [
        '==',
        'pmap:kind',
        'medium_road'
      ]
    ],
    paint: {
      'line-color': '#ebebeb',
      'line-width': [
        'interpolate',
        [
          'exponential',
          1.6
        ],
        [
          'zoom'
        ],
        7,
        0,
        7.5,
        0.5,
        20,
        32
      ]
    }
  },
  {
    id: 'roads_tunnels_major_casing',
    type: 'line',
    source: 'protomaps',
    'source-layer': 'roads',
    filter: [
      'all',
      [
        '<',
        'pmap:level',
        0
      ],
      [
        '==',
        'pmap:kind',
        'major_road'
      ]
    ],
    paint: {
      'line-color': '#e3cfd3',
      'line-dasharray': [
        3,
        2
      ],
      'line-gap-width': [
        'interpolate',
        [
          'exponential',
          1.6
        ],
        [
          'zoom'
        ],
        7,
        0,
        7.5,
        0.5,
        19,
        32
      ],
      'line-width': [
        'interpolate',
        [
          'exponential',
          1.6
        ],
        [
          'zoom'
        ],
        9,
        0,
        9.5,
        1
      ]
    },
    layout: {
      visibility: 'visible'
    }
  },
  {
    id: 'roads_tunnels_major',
    type: 'line',
    source: 'protomaps',
    'source-layer': 'roads',
    filter: [
      'all',
      [
        '<',
        'pmap:level',
        0
      ],
      [
        '==',
        'pmap:kind',
        'major_road'
      ]
    ],
    paint: {
      'line-color': '#ebebeb',
      'line-width': [
        'interpolate',
        [
          'exponential',
          1.6
        ],
        [
          'zoom'
        ],
        7,
        0,
        7.5,
        0.5,
        19,
        32
      ]
    }
  },
  {
    id: 'roads_tunnels_highway_casing',
    type: 'line',
    source: 'protomaps',
    'source-layer': 'roads',
    filter: [
      'all',
      [
        '<',
        'pmap:level',
        0
      ],
      [
        '==',
        'pmap:kind',
        'highway'
      ]
    ],
    paint: {
      'line-color': '#ebcea2',
      'line-dasharray': [
        3,
        2
      ],
      'line-gap-width': [
        'interpolate',
        [
          'exponential',
          1.6
        ],
        [
          'zoom'
        ],
        3,
        0,
        3.5,
        0.5,
        18,
        32
      ],
      'line-width': [
        'interpolate',
        [
          'exponential',
          1.6
        ],
        [
          'zoom'
        ],
        7,
        0,
        7.5,
        1
      ]
    },
    layout: {
      visibility: 'visible'
    }
  },
  {
    id: 'roads_tunnels_highway',
    type: 'line',
    source: 'protomaps',
    'source-layer': 'roads',
    filter: [
      'all',
      [
        '<',
        'pmap:level',
        0
      ],
      [
        '==',
        'pmap:kind',
        'highway'
      ]
    ],
    paint: {
      'line-color': '#ebebeb',
      'line-width': [
        'interpolate',
        [
          'exponential',
          1.6
        ],
        [
          'zoom'
        ],
        3,
        0,
        3.5,
        0.5,
        18,
        32
      ]
    }
  },
  {
    id: 'physical_line_waterway',
    type: 'line',
    source: 'protomaps',
    'source-layer': 'physical_line',
    filter: [
      '==',
      [
        'get',
        'pmap:kind'
      ],
      'waterway'
    ],
    paint: {
      'line-color': '#94c1e1',
      'line-width': 0.8
    }
  },
  {
    id: 'building',
    type: 'fill',
    source: 'protomaps',
    'source-layer': 'building',
    paint: {
      'fill-antialias': true,
      'fill-outline-color': {
        stops: [
          [15, '#321a17'],
          [16, '#321a17']
        ]
      }
    }
  },
  {
    id: 'buildings-extrusion',
    type: 'fill-extrusion',
    source: 'protomaps',
    'source-layer': 'buildings',
    paint: {
      'fill-extrusion-color': '#321a17', // "#144b6f",
      'fill-extrusion-height': [
        'case',
        ['>', ['to-number', ['get', 'height']], 0],
        ['to-number', ['get', 'height']],
        10
      ],
      'fill-extrusion-opacity': 0.2
    }
  },
  {
    id: 'roads_other',
    type: 'line',
    source: 'protomaps',
    'source-layer': 'roads',
    filter: [
      'all',
      [
        '==',
        'pmap:level',
        0
      ],
      [
        '==',
        'pmap:kind',
        'other'
      ]
    ],
    paint: {
      'line-color': '#ffffff',
      'line-dasharray': [
        2,
        1
      ],
      'line-width': [
        'interpolate',
        [
          'exponential',
          1.6
        ],
        [
          'zoom'
        ],
        14,
        0,
        14.5,
        0.5,
        20,
        12
      ]
    }
  },
  {
    id: 'roads_minor_casing',
    type: 'line',
    source: 'protomaps',
    'source-layer': 'roads',
    filter: [
      'all',
      [
        '==',
        'pmap:level',
        0
      ],
      [
        '==',
        'pmap:kind',
        'minor_road'
      ]
    ],
    paint: {
      'line-color': '#e2e2e2',
      'line-gap-width': [
        'interpolate',
        [
          'exponential',
          1.6
        ],
        [
          'zoom'
        ],
        12,
        0,
        12.5,
        0.5,
        20,
        32
      ],
      'line-width': [
        'interpolate',
        [
          'exponential',
          1.6
        ],
        [
          'zoom'
        ],
        12,
        0,
        12.5,
        1
      ]
    },
    layout: {
      visibility: 'visible'
    }
  },
  {
    id: 'roads_minor',
    type: 'line',
    source: 'protomaps',
    'source-layer': 'roads',
    filter: [
      'all',
      [
        '==',
        'pmap:level',
        0
      ],
      [
        '==',
        'pmap:kind',
        'minor_road'
      ]
    ],
    paint: {
      'line-color': 'white',
      'line-width': [
        'interpolate',
        [
          'exponential',
          1.6
        ],
        [
          'zoom'
        ],
        12,
        0,
        12.5,
        0.5,
        20,
        32
      ]
    }
  },
  {
    id: 'roads_medium_casing',
    type: 'line',
    source: 'protomaps',
    'source-layer': 'roads',
    filter: [
      'all',
      [
        '==',
        'pmap:level',
        0
      ],
      [
        '==',
        'pmap:kind',
        'medium_road'
      ]
    ],
    paint: {
      'line-color': '#e1e1e1',
      'line-gap-width': [
        'interpolate',
        [
          'exponential',
          1.6
        ],
        [
          'zoom'
        ],
        7,
        0,
        7.5,
        0.5,
        20,
        32
      ],
      'line-width': [
        'interpolate',
        [
          'exponential',
          1.6
        ],
        [
          'zoom'
        ],
        10,
        0,
        10.5,
        1
      ]
    },
    layout: {
      visibility: 'visible'
    }
  },
  {
    id: 'roads_medium',
    type: 'line',
    source: 'protomaps',
    'source-layer': 'roads',
    filter: [
      'all',
      [
        '==',
        'pmap:level',
        0
      ],
      [
        '==',
        'pmap:kind',
        'medium_road'
      ]
    ],
    paint: {
      'line-color': '#ffffff',
      'line-width': [
        'interpolate',
        [
          'exponential',
          1.6
        ],
        [
          'zoom'
        ],
        7,
        0,
        7.5,
        0.5,
        20,
        32
      ]
    }
  },
  {
    id: 'roads_major_casing',
    type: 'line',
    source: 'protomaps',
    'source-layer': 'roads',
    filter: [
      'all',
      [
        '==',
        'pmap:level',
        0
      ],
      [
        '==',
        'pmap:kind',
        'major_road'
      ]
    ],
    paint: {
      'line-color': '#e3cfd3',
      'line-gap-width': [
        'interpolate',
        [
          'exponential',
          1.6
        ],
        [
          'zoom'
        ],
        7,
        0,
        7.5,
        0.5,
        19,
        32
      ],
      'line-width': [
        'interpolate',
        [
          'exponential',
          1.6
        ],
        [
          'zoom'
        ],
        9,
        0,
        9.5,
        1
      ]
    },
    layout: {
      visibility: 'visible'
    }
  },
  {
    id: 'roads_major',
    type: 'line',
    source: 'protomaps',
    'source-layer': 'roads',
    filter: [
      'all',
      [
        '==',
        'pmap:level',
        0
      ],
      [
        '==',
        'pmap:kind',
        'major_road'
      ]
    ],
    paint: {
      'line-color': '#ffffff',
      'line-width': [
        'interpolate',
        [
          'exponential',
          1.6
        ],
        [
          'zoom'
        ],
        7,
        0,
        7.5,
        0.5,
        19,
        32
      ]
    }
  },
  {
    id: 'roads_highway_casing',
    type: 'line',
    source: 'protomaps',
    'source-layer': 'roads',
    filter: [
      'all',
      [
        '==',
        'pmap:level',
        0
      ],
      [
        '==',
        'pmap:kind',
        'highway'
      ]
    ],
    paint: {
      'line-color': '#ebcea2',
      'line-gap-width': [
        'interpolate',
        [
          'exponential',
          1.6
        ],
        [
          'zoom'
        ],
        3,
        0,
        3.5,
        0.5,
        18,
        32
      ],
      'line-width': [
        'interpolate',
        [
          'exponential',
          1.6
        ],
        [
          'zoom'
        ],
        7,
        0,
        7.5,
        1
      ]
    },
    layout: {
      visibility: 'visible'
    }
  },
  {
    id: 'roads_highway',
    type: 'line',
    source: 'protomaps',
    'source-layer': 'roads',
    filter: [
      'all',
      [
        '==',
        'pmap:level',
        0
      ],
      [
        '==',
        'pmap:kind',
        'highway'
      ]
    ],
    paint: {
      'line-color': '#fefffc',
      'line-width': [
        'interpolate',
        [
          'exponential',
          1.6
        ],
        [
          'zoom'
        ],
        3,
        0,
        3.5,
        0.5,
        18,
        32
      ]
    }
  },
  {
    id: 'transit_railway',
    type: 'line',
    source: 'protomaps',
    'source-layer': 'transit',
    filter: [
      'all',
      [
        '==',
        'pmap:kind',
        'railway'
      ]
    ],
    paint: {
      'line-color': '#b3bcc9',
      'line-width': 2
    }
  },
  {
    id: 'transit_railway_tracks',
    type: 'line',
    source: 'protomaps',
    'source-layer': 'transit',
    filter: [
      'all',
      [
        '==',
        'pmap:kind',
        'railway'
      ]
    ],
    paint: {
      'line-color': '#ffffff',
      'line-width': 0.8,
      'line-dasharray': [
        6,
        10
      ]
    }
  },
  {
    id: 'boundaries',
    type: 'line',
    source: 'protomaps',
    'source-layer': 'boundaries',
    paint: {
      'line-color': '#5c4a6b',
      'line-width': 0.5,
      'line-dasharray': [
        3,
        2
      ]
    }
  },
  {
    id: 'roads_bridges_other_casing',
    type: 'line',
    source: 'protomaps',
    'source-layer': 'roads',
    filter: [
      'all',
      [
        '>',
        'pmap:level',
        0
      ],
      [
        '==',
        'pmap:kind',
        'other'
      ]
    ],
    paint: {
      'line-color': '#ffffff',
      'line-gap-width': [
        'interpolate',
        [
          'exponential',
          1.6
        ],
        [
          'zoom'
        ],
        14,
        0,
        14.5,
        0.5,
        20,
        12
      ]
    },
    layout: {
      visibility: 'visible'
    }
  },
  {
    id: 'roads_bridges_other',
    type: 'line',
    source: 'protomaps',
    'source-layer': 'roads',
    filter: [
      'all',
      [
        '>',
        'pmap:level',
        0
      ],
      [
        '==',
        'pmap:kind',
        'other'
      ]
    ],
    paint: {
      'line-color': '#ffffff',
      'line-dasharray': [
        2,
        1
      ],
      'line-width': [
        'interpolate',
        [
          'exponential',
          1.6
        ],
        [
          'zoom'
        ],
        14,
        0,
        14.5,
        0.5,
        20,
        12
      ]
    }
  },
  {
    id: 'roads_bridges_minor_casing',
    type: 'line',
    source: 'protomaps',
    'source-layer': 'roads',
    filter: [
      'all',
      [
        '>',
        'pmap:level',
        0
      ],
      [
        '==',
        'pmap:kind',
        'minor_road'
      ]
    ],
    paint: {
      'line-color': '#e2e2e2',
      'line-gap-width': [
        'interpolate',
        [
          'exponential',
          1.6
        ],
        [
          'zoom'
        ],
        12,
        0,
        12.5,
        0.5,
        20,
        32
      ],
      'line-width': [
        'interpolate',
        [
          'exponential',
          1.6
        ],
        [
          'zoom'
        ],
        12,
        0,
        12.5,
        1
      ]
    },
    layout: {
      visibility: 'visible'
    }
  },
  {
    id: 'roads_bridges_minor',
    type: 'line',
    source: 'protomaps',
    'source-layer': 'roads',
    filter: [
      'all',
      [
        '>',
        'pmap:level',
        0
      ],
      [
        '==',
        'pmap:kind',
        'minor_road'
      ]
    ],
    paint: {
      'line-color': 'white',
      'line-width': [
        'interpolate',
        [
          'exponential',
          1.6
        ],
        [
          'zoom'
        ],
        12,
        0,
        12.5,
        0.5,
        20,
        32
      ]
    }
  },
  {
    id: 'roads_bridges_medium_casing',
    type: 'line',
    source: 'protomaps',
    'source-layer': 'roads',
    filter: [
      'all',
      [
        '>',
        'pmap:level',
        0
      ],
      [
        '==',
        'pmap:kind',
        'medium_road'
      ]
    ],
    paint: {
      'line-color': '#e1e1e1',
      'line-gap-width': [
        'interpolate',
        [
          'exponential',
          1.6
        ],
        [
          'zoom'
        ],
        7,
        0,
        7.5,
        0.5,
        20,
        32
      ],
      'line-width': [
        'interpolate',
        [
          'exponential',
          1.6
        ],
        [
          'zoom'
        ],
        10,
        0,
        10.5,
        1
      ]
    },
    layout: {
      visibility: 'visible'
    }
  },
  {
    id: 'roads_bridges_medium',
    type: 'line',
    source: 'protomaps',
    'source-layer': 'roads',
    filter: [
      'all',
      [
        '>',
        'pmap:level',
        0
      ],
      [
        '==',
        'pmap:kind',
        'medium_road'
      ]
    ],
    paint: {
      'line-color': '#ffffff',
      'line-width': [
        'interpolate',
        [
          'exponential',
          1.6
        ],
        [
          'zoom'
        ],
        7,
        0,
        7.5,
        0.5,
        20,
        32
      ]
    }
  },
  {
    id: 'roads_bridges_major_casing',
    type: 'line',
    source: 'protomaps',
    'source-layer': 'roads',
    filter: [
      'all',
      [
        '>',
        'pmap:level',
        0
      ],
      [
        '==',
        'pmap:kind',
        'major_road'
      ]
    ],
    paint: {
      'line-color': '#e3cfd3',
      'line-gap-width': [
        'interpolate',
        [
          'exponential',
          1.6
        ],
        [
          'zoom'
        ],
        7,
        0,
        7.5,
        0.5,
        19,
        32
      ],
      'line-width': [
        'interpolate',
        [
          'exponential',
          1.6
        ],
        [
          'zoom'
        ],
        9,
        0,
        9.5,
        1
      ]
    },
    layout: {
      visibility: 'visible'
    }
  },
  {
    id: 'roads_bridges_major',
    type: 'line',
    source: 'protomaps',
    'source-layer': 'roads',
    filter: [
      'all',
      [
        '>',
        'pmap:level',
        0
      ],
      [
        '==',
        'pmap:kind',
        'major_road'
      ]
    ],
    paint: {
      'line-color': '#ffffff',
      'line-width': [
        'interpolate',
        [
          'exponential',
          1.6
        ],
        [
          'zoom'
        ],
        7,
        0,
        7.5,
        0.5,
        19,
        32
      ]
    }
  },
  {
    id: 'roads_bridges_highway_casing',
    type: 'line',
    source: 'protomaps',
    'source-layer': 'roads',
    filter: [
      'all',
      [
        '>',
        'pmap:level',
        0
      ],
      [
        '==',
        'pmap:kind',
        'highway'
      ]
    ],
    paint: {
      'line-color': '#ebcea2',
      'line-gap-width': [
        'interpolate',
        [
          'exponential',
          1.6
        ],
        [
          'zoom'
        ],
        3,
        0,
        3.5,
        0.5,
        18,
        32
      ],
      'line-width': [
        'interpolate',
        [
          'exponential',
          1.6
        ],
        [
          'zoom'
        ],
        7,
        0,
        7.5,
        1
      ]
    },
    layout: {
      visibility: 'visible'
    }
  },
  {
    id: 'roads_bridges_highway',
    type: 'line',
    source: 'protomaps',
    'source-layer': 'roads',
    filter: [
      'all',
      [
        '>',
        'pmap:level',
        0
      ],
      [
        '==',
        'pmap:kind',
        'highway'
      ]
    ],
    paint: {
      'line-color': '#fefffc',
      'line-width': [
        'interpolate',
        [
          'exponential',
          1.6
        ],
        [
          'zoom'
        ],
        3,
        0,
        3.5,
        0.5,
        18,
        32
      ]
    }
  },
  {
    id: 'physical_line_waterway_label',
    type: 'symbol',
    source: 'protomaps',
    'source-layer': 'physical_line',
    minzoom: 14,
    layout: {
      'symbol-placement': 'line',
      'text-font': [
        'NotoSans-Regular'
      ],
      'text-field': [
        'get',
        'name'
      ],
      'text-size': 14,
      'text-letter-spacing': 0.3
    },
    paint: {
      'text-color': '#305496',
      'text-halo-color': 'white',
      'text-halo-width': 1.3
    }
  },
  {
    id: 'roads_labels',
    type: 'symbol',
    source: 'protomaps',
    'source-layer': 'roads',
    layout: {
      'symbol-placement': 'line',
      'text-font': [
        'NotoSans-Regular'
      ],
      'text-field': [
        'get',
        'name'
      ],
      'text-size': 12
    },
    paint: {
      'text-color': '#91888b',
      'text-halo-color': 'white',
      'text-halo-width': 2
    }
  },
  {
    id: 'physical_point_ocean',
    type: 'symbol',
    source: 'protomaps',
    'source-layer': 'physical_point',
    filter: [
      'any',
      [
        '==',
        'place',
        'sea'
      ],
      [
        '==',
        'place',
        'ocean'
      ]
    ],
    layout: {
      'text-font': [
        'NotoSans-Regular'
      ],
      'text-field': [
        'get',
        'name'
      ],
      'text-size': 13,
      'text-letter-spacing': 0.1
    },
    paint: {
      'text-color': 'white',
      'text-halo-color': '#a4cae1',
      'text-halo-width': 1
    }
  },
  {
    id: 'physical_point_peak',
    type: 'symbol',
    source: 'protomaps',
    'source-layer': 'physical_point',
    filter: [
      'any',
      [
        '==',
        'natural',
        'peak'
      ]
    ],
    layout: {
      'text-font': [
        'NotoSans-Regular'
      ],
      'text-field': [
        'get',
        'name'
      ],
      'text-size': 14
    },
    paint: {
      'text-color': '#61bb5b',
      'text-halo-color': '#ffffff',
      'text-halo-width': 1.5
    }
  },
  {
    id: 'poi-marker',
    type: 'circle',
    source: 'protomaps',
    'source-layer': 'pois',
    filter: ['has', 'name'], // ["!=", "name", 'none'],
    minzoom: 17,
    paint: {
      'circle-radius': {
        base: 1,
        stops: [
          [10, 2.2],
          [14, 3]
        ]
      },
      'circle-color': '#000', // "#FF6E40",
      'circle-opacity': 0.6
    }
  },
  {
    id: 'poi-label',
    type: 'symbol',
    source: 'protomaps',
    'source-layer': 'pois',
    filter: ['!=', 'name', ''],
    minzoom: 14,
    layout: {
      'text-field': '{name}',
      'text-font': ['NotoSans-Regular'],
      'text-anchor': 'top',
      'text-offset': {
        stops: [
          [14, [0, 0]],
          [17, [0, 0]],
          [18, [0, -1.6]]
        ]
      },
      'text-size': {
        stops: [
          [10, 7],
          [14, 11]
        ]
      }
    },
    paint: {
      'text-color': '#9c807b',
      'text-halo-color': '#fff',
      'text-halo-width': 2
    }
  },
  {
    id: 'places_subplace',
    type: 'symbol',
    source: 'protomaps',
    'source-layer': 'places',
    filter: [
      '==',
      'pmap:kind',
      'neighbourhood'
    ],
    layout: {
      'text-field': '{name}',
      'text-font': [
        'NotoSans-Bold'
      ],
      'text-size': {
        base: 1.2,
        stops: [
          [
            11,
            10
          ],
          [
            14,
            12
          ]
        ]
      },
      'text-transform': 'none'
    },
    paint: {
      'text-color': '#000',
      'text-halo-color': '#fff',
      'text-halo-width': 1
    }
  },
  {
    id: 'places_city_circle',
    type: 'circle',
    source: 'protomaps',
    'source-layer': 'places',
    filter: [
      '==',
      'pmap:kind',
      'city'
    ],
    paint: {
      'circle-radius': 2,
      'circle-stroke-width': 2,
      'circle-stroke-color': 'white',
      'circle-color': '#666666'
    },
    maxzoom: 8
  },
  {
    id: 'places_city',
    type: 'symbol',
    source: 'protomaps',
    'source-layer': 'places',
    filter: [
      '==',
      'pmap:kind',
      'city'
    ],
    layout: {
      'text-field': '{name}',
      'text-font': [
        'NotoSans-Bold'
      ],
      'text-size': [
        'step',
        [
          'get',
          'pmap:rank'
        ],
        0,
        1,
        12,
        2,
        10
      ],
      'text-variable-anchor': [
        'bottom-left'
      ],
      'text-radial-offset': 0.2
    },
    paint: {
      'text-color': '#787878',
      'text-halo-color': 'white',
      'text-halo-width': 1
    }
  }

]

export { layers }
