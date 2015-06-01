/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'draft_logo_lrg',
                            type: 'image',
                            rect: ['0', '0', '960px', '100px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"draft_logo_lrg.png",'0px','0px']
                        },
                        {
                            id: 'roller-coaster-car',
                            type: 'image',
                            rect: ['-7px', '15px', '64px', '34px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"roller-coaster-car.png",'0px','0px'],
                            transform: [[],['8']]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '960px', '100px'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 8500,
                    autoPlay: true,
                    labels: {
                        "loop_start": 0
                    },
                    data: [
                        [
                            "eid4",
                            "rotateZ",
                            1500,
                            500,
                            "easeInOutQuad",
                            "${roller-coaster-car}",
                            '24deg',
                            '18deg'
                        ],
                        [
                            "eid5",
                            "rotateZ",
                            2000,
                            211,
                            "easeInOutQuad",
                            "${roller-coaster-car}",
                            '18deg',
                            '13deg'
                        ],
                        [
                            "eid6",
                            "rotateZ",
                            2211,
                            126,
                            "easeInOutQuad",
                            "${roller-coaster-car}",
                            '13deg',
                            '10deg'
                        ],
                        [
                            "eid7",
                            "rotateZ",
                            2337,
                            109,
                            "easeInOutQuad",
                            "${roller-coaster-car}",
                            '10deg',
                            '3deg'
                        ],
                        [
                            "eid8",
                            "rotateZ",
                            2446,
                            116,
                            "easeInOutQuad",
                            "${roller-coaster-car}",
                            '3deg',
                            '-2deg'
                        ],
                        [
                            "eid9",
                            "rotateZ",
                            2562,
                            144,
                            "easeInOutQuad",
                            "${roller-coaster-car}",
                            '-2deg',
                            '-4deg'
                        ],
                        [
                            "eid10",
                            "rotateZ",
                            2706,
                            44,
                            "easeInOutQuad",
                            "${roller-coaster-car}",
                            '-4deg',
                            '-8deg'
                        ],
                        [
                            "eid11",
                            "rotateZ",
                            2750,
                            64,
                            "easeInOutQuad",
                            "${roller-coaster-car}",
                            '-8deg',
                            '-13deg'
                        ],
                        [
                            "eid12",
                            "rotateZ",
                            2814,
                            58,
                            "easeInOutQuad",
                            "${roller-coaster-car}",
                            '-13deg',
                            '-17deg'
                        ],
                        [
                            "eid13",
                            "rotateZ",
                            2872,
                            1446,
                            "easeInOutQuad",
                            "${roller-coaster-car}",
                            '-17deg',
                            '-14deg'
                        ],
                        [
                            "eid14",
                            "rotateZ",
                            4318,
                            261,
                            "easeInOutQuad",
                            "${roller-coaster-car}",
                            '-14deg',
                            '-12deg'
                        ],
                        [
                            "eid15",
                            "rotateZ",
                            4579,
                            54,
                            "easeInOutQuad",
                            "${roller-coaster-car}",
                            '-12deg',
                            '-8deg'
                        ],
                        [
                            "eid16",
                            "rotateZ",
                            4633,
                            117,
                            "easeInOutQuad",
                            "${roller-coaster-car}",
                            '-8deg',
                            '-2deg'
                        ],
                        [
                            "eid17",
                            "rotateZ",
                            4750,
                            90,
                            "easeInOutQuad",
                            "${roller-coaster-car}",
                            '-2deg',
                            '2deg'
                        ],
                        [
                            "eid18",
                            "rotateZ",
                            4840,
                            84,
                            "easeInOutQuad",
                            "${roller-coaster-car}",
                            '2deg',
                            '5deg'
                        ],
                        [
                            "eid19",
                            "rotateZ",
                            4924,
                            234,
                            "easeInOutQuad",
                            "${roller-coaster-car}",
                            '5deg',
                            '7deg'
                        ],
                        [
                            "eid20",
                            "rotateZ",
                            5158,
                            272,
                            "easeInOutQuad",
                            "${roller-coaster-car}",
                            '7deg',
                            '9deg'
                        ],
                        [
                            "eid21",
                            "rotateZ",
                            5430,
                            135,
                            "easeInOutQuad",
                            "${roller-coaster-car}",
                            '9deg',
                            '8deg'
                        ],
                        [
                            "eid22",
                            "rotateZ",
                            5565,
                            105,
                            "easeInOutQuad",
                            "${roller-coaster-car}",
                            '8deg',
                            '9deg'
                        ],
                        [
                            "eid23",
                            "rotateZ",
                            5670,
                            138,
                            "easeInOutQuad",
                            "${roller-coaster-car}",
                            '9deg',
                            '15deg'
                        ],
                        [
                            "eid1",
                            "location",
                            1500,
                            500,
                            "easeInOutQuad",
                            "${roller-coaster-car}",
                            [[11.32, 27.71, 0, 0, 0, 0,0],[11.86, 28.6, 1.54, 4.05, 1.54, 4.05,1.18]]
                        ],
                        [
                            "eid3",
                            "location",
                            2000,
                            5750,
                            "easeOutQuad",
                            "${roller-coaster-car}",
                            [[11.86, 28.6, 0.98, 2.57, 0.98, 2.57,0],[16.17, 30.93, 12.46, 5, 1.5, 0.6,4.95],[36.85, 37.62, 4.91, 1.53, 25.97, 8.09,26.69],[51.25, 40.06, 10.46, 0.04, 25.17, 0.1,41.37],[64.74, 40.39, 24.89, 1.15, 13, 0.6,54.86],[90.87, 35.67, 30.37, -8.54, 40.75, -11.46,81.55],[125.91, 26.27, 45.53, -11.34, 29.39, -7.32,117.83],[181.93, 14.85, 101.71, -0.42, 47.55, -0.19,175.11],[236.32, 28.38, 0, 0, 0, 0,231.76]]
                        ],
                        [
                            "eid30",
                            "opacity",
                            0,
                            1500,
                            "easeInOutQuad",
                            "${roller-coaster-car}",
                            '0',
                            '1'
                        ],
                        [
                            "eid33",
                            "opacity",
                            7750,
                            750,
                            "easeInOutQuad",
                            "${roller-coaster-car}",
                            '1',
                            '0'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("cc_hdr_animate_edgeActions.js");
})("EDGE-140449275");
