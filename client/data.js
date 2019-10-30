var hamster_data = {
    images: ["pumpkin.png"],
    frames: [[2, 2, 90, 120], [92, 2, 90, 120], [182, 2, 90, 120], [272, 2, 90, 120], [362, 2, 90, 120],
                 [2, 122, 90, 120], [92, 122, 90, 120], [182, 122, 90, 120], [272, 122, 90, 120], [362, 122, 90, 120],
                 [2, 242, 90, 120], [92, 242, 90, 120], [182, 242, 90, 120], [272, 242, 90, 120], [362, 242, 90, 120],
                 [2, 362, 90, 120], [92, 362, 90, 120], [182, 362, 90, 120], [272, 362, 90, 120], [362, 362, 90, 120],
                 [2, 482, 90, 120], [92, 482, 90, 120], [182, 482, 90, 120], [272, 482, 90, 120], [362, 482, 90, 120],
                 [2, 602, 90, 120], [92, 602, 90, 120], [182, 602, 90, 120], [272, 602, 90, 120], [362, 602, 90, 120]],
    animations: {
        "stand4": [0],
        "stand5": [5],
        "stand6": [5],
        "stand7": [10],
        "stand0": [15],
        "stand1": [20],
        "stand2": [25],
        "stand3": [25],
        "walk4": [0, 4],
        "walk5": [5, 9],
        "walk6": [5, 9],
        "walk7": [10, 14],
        "walk0": [15, 19],
        "walk1": [20, 24],
        "walk2": [25, 29],
        "walk3": [25, 29]
    },

    scaleX: .90, //90 normal pumpkin | 180 big pumpkin
    scaleY: .90, //90 normal pumpkin | 180 big pumpkin
    regX: 45,
    regY: 100,
    framerate: 24,
    balloonY: 70, //70 normal pumpkin | 90 big pumpkin
    balloonX: 0
};

var settings = {
    character: hamster_data,
    roomPath: 'https://fl1nns.github.io/pumkinparadise/media/characters/'
};
