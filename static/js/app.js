var map;
(function() {
    $(window).load(function() {
        $(document).ready(function() {
            var mapCenter = [-74.9919444444, -9.18875] // lng, lat
            var mapOptions = {
                element: document.getElementById('map-canvas'),
                responsive: true,
                geographyConfig: {
                    dataUrl: 'data/peru_topo.json',
                    popupTemplate: function(geography, data) {
                        return [
                            "<div class=\"hoverinfo\">",
                                "<table>",
                                    "<thead>",
                                        "<tr>",
                                            "<th colspan=\"2\">",
                                            geography.properties.name,
                                            "</th>",
                                        "</tr>",
                                    "</thead>",
                                    "<tbody>",
                                        "<tr>",
                                            "<td>",
                                                "<div class=\"femicide\">",
                                                data.femicides,
                                            "</td>",
                                            "<td>",
                                                "<div class=\"attempted\">",
                                                data.attempted,
                                            "</td>",
                                        "</tr>",
                                    "</tbody>",
                                "</table>",
                            "</div>",
                        ].join('');
                    },
                    borderWidth: 1,
                    borderColor: '#FFFFFF',
                    popupOnHover: true,
                    highlightOnHover: true,
                    highlightBorderWidth: 2,
                    highlightBorderColor: '#B21540',
                    highlightFillColor: '#B21540',
                    highlightBorderWidth: 2
                },
                scope: 'peru',
                setProjection: function(element) {
                    var projection = d3.geo.mercator()
                        .center(mapCenter)
                        .scale(3.8 * element.offsetWidth)
                        .translate([element.offsetWidth / 2, element.offsetHeight / 2]);

                    var path = d3.geo.path()
                        .projection(projection);

                    return { path: path, projection: projection };
                }
            }

            var mapData;
            var mapFills = {
                defaultFill: "#e0e0e0",
                level1: "#FBD2DD", //  0 - 15
                level2: "#F8A4BB", // 16 - 30
                level3: "#F47799", // 31 - 45
                level4: "#F14977", // 46 - 60
                level5: "#F0104E", // 60 <
            };

            var statsURL = "data/femicide_stats.json";
            var jqxhr = $.getJSON( statsURL, function(data) {
                    // Getting data period
                    $(".period-begin").text(data.period[0]);
                    $(".period-end").text(data.period[1]);
                    $(".period").removeClass('hiddendiv');

                    // Gettings mapData
                    mapData = data.stats;

                    // Hover on Lima Metropolitana will
                    // show Lima Department stats
                    //mapData["PE.LP"] = mapData["PE.LR"];
                    // Creating Filling Scale
                    keys = Object.keys(mapData);
                    femicides = keys.map(function(key){ return mapData[key]["femicides"]; });
                    attempted = keys.map(function(key){ return mapData[key]["attempted"]; });

                    minF = Math.min(femicides);
                    maxF = Math.max(femicides);

                    minA = Math.min(attempted);
                    maxA = Math.max(attempted);

                    legend = "femicides";
                    // legend = "attempted";

                    keys.forEach(function (key) {
                        if (mapData[key][legend] <= 15) {
                            mapData[key]["fillKey"] = "level1";
                        }
                        else if (15 < mapData[key][legend] && mapData[key][legend] <= 30) {
                            mapData[key]["fillKey"] = "level2";
                        }
                        else if (30 < mapData[key][legend] && mapData[key][legend] <= 45) {
                            mapData[key]["fillKey"] = "level3";
                        }
                        else if (45 < mapData[key][legend] && mapData[key][legend] <= 60) {
                            mapData[key]["fillKey"] = "level4";
                        }
                        else if (60 < mapData[key][legend]) {
                            mapData[key]["fillKey"] = "level5";
                        }
                    });

                    console.log(mapData);
                    console.log(attempted);

                    mapOptions.data = mapData;
                    mapOptions.fills = mapFills
                });

            map = new Datamap(mapOptions);

            window.addEventListener('resize', function() { map.resize(); });
            Morris.Line({
                element: 'morris-area-chart',
                behaveLikeLine: true,
                data: [{
                    period: '2009',
                    t:9,
                    f:22
                }, {
                    period: '2010',
                    t:6,
                    f:8
                }, {
                    period: '2011',
                    t:8,
                    f:7
                }, {
                    period: '2012',
                    t:13,
                    f:7
                }, {
                    period: '2013',
                    t:16,
                    f:11
                }, {
                    period: '2014',
                    t:16,
                    f:8
                }, {
                    period: '2015',
                    t:17,
                    f:8
                }, {
                    period: '2016',
                    t:20,
                    f:9
                }],
                xkey: 'period',
                ykeys: ['t', 'f'],
                labels: ['Tentativa', 'Feminicidio'],
                pointSize: 6,
                hideHover: 'auto',
                resize: true,
                lineColors: ['#F47799', '#ED1C55'],
                gridTextSize: '14',
            });
        });
    });
})();

