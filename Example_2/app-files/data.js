var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance",
      "name": "Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.4182492982716042,
          "pitch": -0.13327526043864069,
          "rotation": 0,
          "target": "1-area-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-area-1",
      "name": "Area-1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.29684149411583505,
        "pitch": 0.32282347232301234,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6678962266337116,
          "pitch": -0.03001954489998937,
          "rotation": 0,
          "target": "0-entrance"
        },
        {
          "yaw": 1.5117329742101564,
          "pitch": -0.001009607990722472,
          "rotation": 0,
          "target": "2-area-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-area-2",
      "name": "Area-2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.5499307521875645,
          "pitch": -0.02281469131442293,
          "rotation": 0,
          "target": "1-area-1"
        },
        {
          "yaw": -2.1838526152962157,
          "pitch": -0.04562518314063446,
          "rotation": 0,
          "target": "3-area-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-area-3",
      "name": "Area-3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.041033949939715,
          "pitch": -0.09464947736554308,
          "rotation": 0,
          "target": "4-area-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-area-4",
      "name": "Area-4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.116403721891894,
          "pitch": -0.06702015095841318,
          "rotation": 0,
          "target": "3-area-3"
        },
        {
          "yaw": -0.28292807575186707,
          "pitch": -0.024852548523192297,
          "rotation": 0,
          "target": "5-hut"
        },
        {
          "yaw": 1.677643241987954,
          "pitch": -0.03753547464758711,
          "rotation": 0,
          "target": "6-area-5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-hut",
      "name": "Hut",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.11153430903726402,
          "pitch": 0.04179061786038751,
          "rotation": 0,
          "target": "4-area-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-area-5",
      "name": "Area-5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.983000455982509,
          "pitch": -0.035161022557673505,
          "rotation": 0,
          "target": "4-area-4"
        },
        {
          "yaw": -1.9971138647534374,
          "pitch": -0.09952837657279368,
          "rotation": 0,
          "target": "7-area-6"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-area-6",
      "name": "Area-6",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.0350941916684455,
          "pitch": 0.18452205354858897,
          "rotation": 0,
          "target": "6-area-5"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
