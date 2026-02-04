var APP_DATA = {
  "scenes": [
    {
      "id": "0-hallway",
      "name": "hallway",
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
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.1048653566559814,
          "pitch": -0.38334993265148753,
          "rotation": 0,
          "target": "1-livingroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-livingroom",
      "name": "livingroom",
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
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.2954046678481834,
          "pitch": 0.07321835207316596,
          "rotation": 0,
          "target": "0-hallway"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.06184572455786963,
          "pitch": -0.28015513722556307,
          "title": "下地窗 (Shitaji-mado)",
          "text": "<p data-path-to-node=\"0\"><b data-path-to-node=\"1\" data-index-in-node=\"0\" style=\"font-family: inherit; font-size: inherit; font-style: inherit; font-variant-ligatures: inherit; font-variant-caps: inherit;\">下地窗 (Shitaji-mado)</b></p><p data-path-to-node=\"2\">或者在某些語境下被稱為 <b data-path-to-node=\"2\" data-index-in-node=\"12\">「塗り残し」 (Nurinokoshi)</b>，意思就是「故意不抹完的牆」。</p><hr data-path-to-node=\"3\"><h3 data-path-to-node=\"4\"><b data-path-to-node=\"4\" data-index-in-node=\"0\">它長什麼樣子？</b></h3><p data-path-to-node=\"5\">它看起來像是牆壁的抹灰層（上層的泥土）剝落了，露出了裡面的<b data-path-to-node=\"5\" data-index-in-node=\"29\">竹編骨架（竹小舞）</b>。但在茶室中，這絕對不是因為沒錢修理，而是<b data-path-to-node=\"5\" data-index-in-node=\"59\">工匠刻意為之</b>的設計。</p><h3 data-path-to-node=\"6\"><b data-path-to-node=\"6\" data-index-in-node=\"0\">它的深刻意涵</b></h3><p data-path-to-node=\"7\">這面牆完美體現了日本審美中的核心價值：</p><ul data-path-to-node=\"8\"><li><p data-path-to-node=\"8,0,0\"><b data-path-to-node=\"8,0,0\" data-index-in-node=\"0\">侘寂 (Wabi-sabi)：</b>\n這是最重要的核心。它欣賞「<span style=\"font-family: inherit; font-size: inherit; font-style: inherit; font-variant-ligatures: inherit; font-variant-caps: inherit; font-weight: inherit;\">下身分地位的包袱，回歸到最純粹的人與人的交流。</span></p></li></ul><h3 data-path-to-node=\"10\"><br></h3>"
        }
      ]
    }
  ],
  "name": "Hehe teahouse demo",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
