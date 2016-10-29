window.onload = function () {

    var dps = [[], [], [], [], [], []]; // dataPoints
    var num = [[0], [0], [0], [0], [0], [0]];
    var mag = [];

    var chart = new CanvasJS.Chart("chartContainer",{
        data: [{
            type: "line",
            dataPoints: dps[0]
        },
        {
            type: "line",
            dataPoints: dps[1]
        },
        {
            type: "line",
            dataPoints: dps[2]
        },
        {
            type: "line",
            dataPoints: dps[3]
        },
        {
            type: "line",
            dataPoints: dps[4]
        },
        {
            type: "line",
            dataPoints: dps[5]
        },
        {
            type: "line",
            color: "black",
            dataPoints: mag
        }
    ]
    });

    var tot = 0;
    var xVal = 0;
    var updateInterval = 10;// graph velocity.
    var dataLength = 200;

    var updateChart = function (count) {
            count = count || 1;
            // count is number of times loop runs to generate random dataPoints.
            for (var j = 0; j < count; j++) {
                    var roll = Math.floor(Math.random()*6);
                    tot++;
                    num[roll]++;
                    for(var i = 0; i < 6; i++) {
                            dps[i].push({
                                    x: xVal,
                                    y: num[i]/tot
                            });
                    }
                    mag.push({
                            x: xVal,
                            y: 1.0/6
                    });
                    xVal++;
            };
            chart.render();
    };

    // generates first set of dataPoints
    updateChart(dataLength);

    // update chart after specified time.
    setInterval(function(){updateChart();}, updateInterval);

};