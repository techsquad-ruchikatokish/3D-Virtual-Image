var APP_DATA = {
  "scenes": [
    {
      "id": "0-outside",
      "name": "Outside",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.21150347929317093,
        "pitch": -0.05083734645065441,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.07197163134749829,
          "pitch": -0.026370318891199673,
          "rotation": 0,
          "target": "1-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-living-room",
      "name": "Living Room",
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
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": -2.4306495909876453,
        "pitch": -0.01705167161904697,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.930602949040604,
          "pitch": -0.05981039114309006,
          "rotation": 0,
          "target": "0-outside"
        },
        {
          "yaw": -1.9238115139467595,
          "pitch": -0.10229314360007358,
          "rotation": 0,
          "target": "2-balcony"
        },
        {
          "yaw": 1.0332187911174042,
          "pitch": -0.2423288396778851,
          "rotation": 0,
          "target": "3-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-balcony",
      "name": "Balcony",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 1.5283148458025249,
        "pitch": 0.11318056189827175,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.4979395738210943,
          "pitch": -0.03502779657115518,
          "rotation": 0,
          "target": "1-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-bedroom",
      "name": "Bedroom",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 2.824776054393155,
        "pitch": 0.40923819480582324,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.4205982887033457,
          "pitch": 0.07585681088447593,
          "rotation": 0,
          "target": "1-living-room"
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
    "viewControlButtons": false
  }
};
