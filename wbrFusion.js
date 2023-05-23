var pivot = new WebDataRocks({
    container: "#wdr-component",
    toolbar: false,
    "height": 400,
    report: {
        "dataSource": {
            "dataSourceType": "json",
            "data": getJSONData()
        },
        "slice": {
             "rows": [{
                 "uniqueName": "city"
             },
             {
            "uniqueName": "Measures"
            }],
            "columns": [{
                "uniqueName": "month"
            }],
            "measures": [{
                "uniqueName": "price",
                "aggregation": "sum"
            }]
        }
    },
    reportcomplete: function() {
        pivot.off("reportcomplete");
        createAreaChart();
        createBarChart();
        createPieChart();
    }
});

function createAreaChart() {
    var chart = new FusionCharts({
        type: "area2d",
        renderAt: "fusionchartArea",
        width: "100%",
        height: 400
    });
    pivot.fusioncharts.getData({
    type: chart.chartType(), "slice": {
        "rows": [
            {
                "uniqueName": "[Measures]"
            }
        ],
        "columns": [
            {
                "uniqueName": "month"
            }
        ],
        "measures": [
            {
                "uniqueName": "price",
                "aggregation": "sum"
            }
        ]
    }
	}, function(data) {
        chart.setJSONData(data);
        chart.setChartAttribute("theme", "fusion");
        chart.setChartAttribute("caption", "Progress Breakdown");
        chart.render();
    });
}

function createBarChart() {
    var chart = new FusionCharts({
        type: "bar2d",
        renderAt: "fusionchartBar",
        width: "100%",
        height: 400
    });
    pivot.fusioncharts.getData({
    type: chart.chartType(), "slice": {
        "rows": [
            {
                "uniqueName": "[Measures]"
            }
        ],
        "columns": [
            {
                "uniqueName": "model"
            }
        ],
        "measures": [
            {
                "uniqueName": "price",
                "aggregation": "sum"
            }
        ]
    }
	},
	function(data) {
        chart.setJSONData(data);
        chart.setChartAttribute("theme", "fusion");
        chart.setChartAttribute("caption", "Deadline Comparison");
        chart.setChartAttribute("paletteColors", "#bc5cdb, #493999, #8790a8");
        chart.render();
    }

    );
}

function createPieChart() {
    var chart = new FusionCharts({
        type: "pie2d",
        renderAt: "fusionchartPie",
        width: "100%",
        height: 400
    });
    pivot.fusioncharts.getData({
        type: chart.chartType()
        }, function(data) {
        chart.setJSONData(data);
        chart.setChartAttribute("theme", "fusion");
        chart.setChartAttribute("caption", "Pie Chart");
        chart.setChartAttribute("paletteColors", "#9d87f5, #faa27f, #9afa7f, #e37ffa, #7de1fa, #f8fa7f");
        chart.render();
    });
}

function getJSONData() {
    return [
             {
               "month": "January",
               "model": "11 Pro Max",
               "city": "Los Angeles",
               "price": 1000
             },
             {
               "month": "February",
               "model": "XR",
               "city": "Los Angeles",
               "price": 700
             },
             {
               "month": "March",
               "model": "12 Pro Max",
               "city": "Los Angeles",
               "price": 1100
             },
             {
               "month": "April",
               "model": "11",
               "city": "Los Angeles",
               "price": 1000
             },
             {
               "month": "May",
               "model": "13",
               "city": "Los Angeles",
               "price": 700
             },
             {
               "month": "June",
               "model": "12 Pro Max",
               "city": "Los Angeles",
               "price": 800
             },
             {
               "month": "February",
               "model": "12",
               "city": "Los Angeles",
               "price": 600
             },
             {
               "month": "April",
               "model": "11 Pro",
               "city": "Los Angeles",
               "price": 1400
             },
             {
               "month": "May",
               "model": "X",
               "city": "Los Angeles",
               "price": 1000
             },
             {
               "month": "May",
               "model": "13 Pro",
               "city": "Los Angeles",
               "price": 800
             },
             {
               "month": "June",
               "model": "12 Pro Max",
               "city": "Los Angeles",
               "price": 600
             },
             {
               "month": "June",
               "model": "11 Pro",
               "city": "Los Angeles",
               "price": 1400
             },
             {
               "month": "March",
               "model": "X",
               "city": "Los Angeles",
               "price": 1000
             },
             {
               "month": "March",
               "model": "13 Pro",
               "city": "Los Angeles",
               "price": 500
             },
             {
               "month": "June",
               "model": "12 Pro Max",
               "city": "Los Angeles",
               "price": 1400
             },
             {
               "month": "January",
               "model": "8 Plus",
               "city": "Los Angeles",
               "price": 600
             },
             {
               "month": "June",
               "model": "13 Pro",
               "city": "Los Angeles",
               "price": 1000
             },
             {
               "month": "June",
               "model": "13 Pro Max",
               "city": "Los Angeles",
               "price": 700
             },
             {
               "month": "May",
               "model": "13 Pro Max",
               "city": "Los Angeles",
               "price": 1000
             },
             {
               "month": "February",
               "model": "11",
               "city": "Los Angeles",
               "price": 500
             },
             {
               "month": "February",
               "model": "12",
               "city": "Los Angeles",
               "price": 1000
             },
             {
               "month": "February",
               "model": "8",
               "city": "Los Angeles",
               "price": 1400
             },
             {
               "month": "January",
               "model": "X",
               "city": "Los Angeles",
               "price": 1000
             },
             {
               "month": "May",
               "model": "13 Pro",
               "city": "Los Angeles",
               "price": 600
             },
             {
               "month": "April",
               "model": "12 Pro Max",
               "city": "Los Angeles",
               "price": 1000
             },
             {
               "month": "June",
               "model": "8 Plus",
               "city": "Los Angeles",
               "price": 1000
             },
             {
               "month": "February",
               "model": "13 Pro",
               "city": "Los Angeles",
               "price": 700
             },
             {
               "month": "June",
               "model": "12 Pro Max",
               "city": "Los Angeles",
               "price": 700
             },
             {
               "month": "May",
               "model": "11 Pro Max",
               "city": "Los Angeles",
               "price": 600
             },
             {
               "month": "May",
               "model": "13",
               "city": "Los Angeles",
               "price": 1300
             },
             {
               "month": "June",
               "model": "8 Plus",
               "city": "Los Angeles",
               "price": 800
             },
             {
               "month": "May",
               "model": "13 Pro",
               "city": "Los Angeles",
               "price": 1000
             },
             {
               "month": "April",
               "model": "11 Pro",
               "city": "Los Angeles",
               "price": 1400
             },
             {
               "month": "February",
               "model": "12",
               "city": "Los Angeles",
               "price": 1100
             },
             {
               "month": "March",
               "model": "13 Pro",
               "city": "Los Angeles",
               "price": 700
             },
             {
               "month": "February",
               "model": "12 Pro",
               "city": "Los Angeles",
               "price": 700
             },
             {
               "month": "May",
               "model": "11",
               "city": "Los Angeles",
               "price": 600
             },
             {
               "month": "March",
               "model": "11 Pro Max",
               "city": "Los Angeles",
               "price": 600
             },
             {
               "month": "May",
               "model": "13 Pro",
               "city": "Los Angeles",
               "price": 1300
             },
             {
               "month": "June",
               "model": "X",
               "city": "Los Angeles",
               "price": 800
             },
             {
               "month": "June",
               "model": "13",
               "city": "Los Angeles",
               "price": 600
             },
             {
               "month": "January",
               "model": "11 Pro",
               "city": "Los Angeles",
               "price": 600
             },
             {
               "month": "March",
               "model": "13 Pro",
               "city": "Los Angeles",
               "price": 1100
             },
             {
               "month": "February",
               "model": "13 Pro",
               "city": "Los Angeles",
               "price": 600
             },
             {
               "month": "January",
               "model": "12 Pro",
               "city": "Los Angeles",
               "price": 800
             },
             {
               "month": "January",
               "model": "13 Pro",
               "city": "Los Angeles",
               "price": 700
             },
             {
               "month": "March",
               "model": "11 Pro",
               "city": "Los Angeles",
               "price": 1100
             },
             {
               "month": "January",
               "model": "XR",
               "city": "Los Angeles",
               "price": 1000
             },
             {
               "month": "March",
               "model": "12 Pro",
               "city": "Los Angeles",
               "price": 600
             },
             {
               "month": "June",
               "model": "X",
               "city": "Los Angeles",
               "price": 800
             },
             {
               "month": "January",
               "model": "8 Plus",
               "city": "Los Angeles",
               "price": 800
             },
             {
               "month": "January",
               "model": "11 Pro",
               "city": "Los Angeles",
               "price": 1300
             },
             {
               "month": "May",
               "model": "11 Pro",
               "city": "Los Angeles",
               "price": 1300
             },
             {
               "month": "February",
               "model": "13 Pro",
               "city": "Los Angeles",
               "price": 1400
             },
             {
               "month": "February",
               "model": "13 Pro",
               "city": "Los Angeles",
               "price": 700
             },
             {
               "month": "February",
               "model": "13 Pro",
               "city": "Los Angeles",
               "price": 1400
             },
             {
               "month": "January",
               "model": "11",
               "city": "Los Angeles",
               "price": 1300
             },
             {
               "month": "May",
               "model": "13 Pro",
               "city": "Los Angeles",
               "price": 700
             },
             {
               "month": "February",
               "model": "13 Pro",
               "city": "Los Angeles",
               "price": 1400
             },
             {
               "month": "May",
               "model": "11 Pro Max",
               "city": "Los Angeles",
               "price": 1100
             },
             {
               "month": "January",
               "model": "13 Pro",
               "city": "Los Angeles",
               "price": 1000
             },
             {
               "month": "June",
               "model": "12 Pro",
               "city": "Los Angeles",
               "price": 700
             },
             {
               "month": "January",
               "model": "12",
               "city": "Los Angeles",
               "price": 1300
             },
             {
               "month": "April",
               "model": "11",
               "city": "Los Angeles",
               "price": 1000
             },
             {
               "month": "February",
               "model": "13 Pro",
               "city": "Los Angeles",
               "price": 1300
             },
             {
               "month": "February",
               "model": "13 Pro",
               "city": "Los Angeles",
               "price": 1100
             },
             {
               "month": "February",
               "model": "13",
               "city": "Los Angeles",
               "price": 700
             },
             {
               "month": "May",
               "model": "12 Pro",
               "city": "Los Angeles",
               "price": 700
             },
             {
               "month": "March",
               "model": "11",
               "city": "Los Angeles",
               "price": 500
             },
             {
               "month": "February",
               "model": "13",
               "city": "Los Angeles",
               "price": 1000
             },
             {
               "month": "February",
               "model": "8",
               "city": "Los Angeles",
               "price": 700
             },
             {
               "month": "March",
               "model": "13 Pro",
               "city": "Los Angeles",
               "price": 700
             },
             {
               "month": "June",
               "model": "11",
               "city": "Los Angeles",
               "price": 1100
             },
             {
               "month": "February",
               "model": "11",
               "city": "Los Angeles",
               "price": 600
             },
             {
               "month": "March",
               "model": "12 Pro",
               "city": "Los Angeles",
               "price": 1000
             },
             {
               "month": "May",
               "model": "X",
               "city": "Los Angeles",
               "price": 600
             },
             {
               "month": "April",
               "model": "12 Pro Max",
               "city": "Los Angeles",
               "price": 1000
             },
             {
               "month": "June",
               "model": "8 Plus",
               "city": "Los Angeles",
               "price": 700
             },
             {
               "month": "January",
               "model": "XS",
               "city": "Los Angeles",
               "price": 700
             },
             {
               "month": "June",
               "model": "XR",
               "city": "Los Angeles",
               "price": 700
             },
             {
               "month": "April",
               "model": "13",
               "city": "Los Angeles",
               "price": 800
             },
             {
               "month": "March",
               "model": "11 Pro Max",
               "city": "Los Angeles",
               "price": 700
             },
             {
               "month": "May",
               "model": "11 Pro",
               "city": "Los Angeles",
               "price": 600
             },
             {
               "month": "June",
               "model": "11 Pro Max",
               "city": "Los Angeles",
               "price": 1300
             },
             {
               "month": "March",
               "model": "XS",
               "city": "Los Angeles",
               "price": 1000
             },
             {
               "month": "March",
               "model": "13 Pro Max",
               "city": "Los Angeles",
               "price": 800
             },
             {
               "month": "January",
               "model": "12",
               "city": "Los Angeles",
               "price": 600
             },
             {
               "month": "April",
               "model": "11 Pro",
               "city": "Los Angeles",
               "price": 600
             },
             {
               "month": "March",
               "model": "X",
               "city": "Los Angeles",
               "price": 700
             },
             {
               "month": "March",
               "model": "X",
               "city": "Los Angeles",
               "price": 700
             },
             {
               "month": "April",
               "model": "11 Pro Max",
               "city": "Los Angeles",
               "price": 700
             },
             {
               "month": "February",
               "model": "13",
               "city": "Los Angeles",
               "price": 1100
             },
             {
               "month": "April",
               "model": "13",
               "city": "Los Angeles",
               "price": 1000
             },
             {
               "month": "April",
               "model": "12 Pro",
               "city": "Los Angeles",
               "price": 600
             },
             {
               "month": "February",
               "model": "12 Pro Max",
               "city": "Los Angeles",
               "price": 1400
             },
             {
               "month": "May",
               "model": "8 Plus",
               "city": "Los Angeles",
               "price": 1100
             },
             {
               "month": "February",
               "model": "13 Pro",
               "city": "Los Angeles",
               "price": 1000
             },
             {
               "month": "February",
               "model": "13",
               "city": "Los Angeles",
               "price": 600
             },
             {
               "month": "January",
               "model": "12",
               "city": "Los Angeles",
               "price": 600
             },
             {
               "month": "January",
               "model": "XS",
               "city": "Los Angeles",
               "price": 1100
             },
             {
               "month": "June",
               "model": "8 Plus",
               "city": "Los Angeles",
               "price": 1000
             },
             {
               "month": "February",
               "model": "12 Pro",
               "city": "Los Angeles",
               "price": 600
             },
             {
               "month": "February",
               "model": "X",
               "city": "Los Angeles",
               "price": 800
             },
             {
               "month": "February",
               "model": "X",
               "city": "Los Angeles",
               "price": 1000
             },
             {
               "month": "May",
               "model": "11 Pro",
               "city": "Los Angeles",
               "price": 800
             },
             {
               "month": "February",
               "model": "12 Pro Max",
               "city": "Los Angeles",
               "price": 1400
             },
             {
               "month": "February",
               "model": "11 Pro",
               "city": "Los Angeles",
               "price": 700
             },
             {
               "month": "April",
               "model": "13 Pro",
               "city": "Los Angeles",
               "price": 1100
             },
             {
               "month": "April",
               "model": "13",
               "city": "Los Angeles",
               "price": 1100
             },
             {
               "month": "February",
               "model": "12 Pro",
               "city": "Los Angeles",
               "price": 700
             },
             {
               "month": "April",
               "model": "12 Pro",
               "city": "Los Angeles",
               "price": 500
             },
             {
               "month": "February",
               "model": "11",
               "city": "Los Angeles",
               "price": 1100
             },
             {
               "month": "May",
               "model": "8",
               "city": "Los Angeles",
               "price": 1300
             },
             {
               "month": "March",
               "model": "13",
               "city": "Los Angeles",
               "price": 500
             },
             {
               "month": "February",
               "model": "13",
               "city": "Los Angeles",
               "price": 1000
             },
             {
               "month": "June",
               "model": "8",
               "city": "Los Angeles",
               "price": 600
             },
             {
               "month": "February",
               "model": "X",
               "city": "Los Angeles",
               "price": 800
             },
             {
               "month": "April",
               "model": "8 Plus",
               "city": "Los Angeles",
               "price": 1300
             },
             {
               "month": "February",
               "model": "11 Pro",
               "city": "Los Angeles",
               "price": 600
             },
             {
               "month": "April",
               "model": "13 Pro Max",
               "city": "Los Angeles",
               "price": 800
             },
             {
               "month": "April",
               "model": "XS",
               "city": "Los Angeles",
               "price": 1300
             },
             {
               "month": "May",
               "model": "11 Pro",
               "city": "Los Angeles",
               "price": 1100
             },
             {
               "month": "February",
               "model": "13 Pro Max",
               "city": "Los Angeles",
               "price": 700
             },
             {
               "month": "May",
               "model": "12 Pro",
               "city": "Los Angeles",
               "price": 1000
             },
             {
               "month": "January",
               "model": "13",
               "city": "Los Angeles",
               "price": 700
             },
             {
               "month": "May",
               "model": "12 Pro Max",
               "city": "Los Angeles",
               "price": 1100
             },
             {
               "month": "March",
               "model": "13",
               "city": "Los Angeles",
               "price": 600
             },
             {
               "month": "May",
               "model": "13",
               "city": "Los Angeles",
               "price": 1000
             },
             {
               "month": "February",
               "model": "XS",
               "city": "Los Angeles",
               "price": 600
             },
             {
               "month": "April",
               "model": "12 Pro Max",
               "city": "Los Angeles",
               "price": 700
             },
             {
               "month": "February",
               "model": "XS",
               "city": "Los Angeles",
               "price": 700
             },
             {
               "month": "March",
               "model": "11",
               "city": "Los Angeles",
               "price": 700
             },
             {
               "month": "March",
               "model": "11 Pro Max",
               "city": "Los Angeles",
               "price": 1300
             },
             {
               "month": "March",
               "model": "11",
               "city": "Los Angeles",
               "price": 1000
             },
             {
               "month": "May",
               "model": "13",
               "city": "Los Angeles",
               "price": 500
             },
             {
               "month": "March",
               "model": "12 Pro Max",
               "city": "Los Angeles",
               "price": 1300
             },
             {
               "month": "January",
               "model": "8 Plus",
               "city": "Los Angeles",
               "price": 600
             },
             {
               "month": "May",
               "model": "13 Pro Max",
               "city": "Los Angeles",
               "price": 600
             },
             {
               "month": "June",
               "model": "X",
               "city": "Los Angeles",
               "price": 1100
             },
             {
               "month": "May",
               "model": "XS",
               "city": "Los Angeles",
               "price": 1000
             },
             {
               "month": "February",
               "model": "12 Pro",
               "city": "Los Angeles",
               "price": 600
             },
             {
               "month": "June",
               "model": "12",
               "city": "Los Angeles",
               "price": 1000
             },
             {
               "month": "June",
               "model": "XS",
               "city": "Los Angeles",
               "price": 600
             },
             {
               "month": "April",
               "model": "12",
               "city": "Los Angeles",
               "price": 800
             },
             {
               "month": "March",
               "model": "X",
               "city": "Los Angeles",
               "price": 1000
             },
             {
               "month": "January",
               "model": "11 Pro",
               "city": "Los Angeles",
               "price": 600
             },
             {
               "month": "February",
               "model": "X",
               "city": "Los Angeles",
               "price": 1300
             },
             {
               "month": "January",
               "model": "XS",
               "city": "Los Angeles",
               "price": 700
             },
             {
               "month": "March",
               "model": "13",
               "city": "Los Angeles",
               "price": 1300
             },
             {
               "month": "March",
               "model": "13",
               "city": "Los Angeles",
               "price": 1100
             },
             {
               "month": "February",
               "model": "13",
               "city": "Los Angeles",
               "price": 1000
             },
             {
               "month": "January",
               "model": "12 Pro",
               "city": "Los Angeles",
               "price": 1100
             },
             {
               "month": "June",
               "model": "12 Pro Max",
               "city": "Los Angeles",
               "price": 1000
             },
             {
               "month": "February",
               "model": "12 Pro",
               "city": "Los Angeles",
               "price": 1100
             },
             {
               "month": "January",
               "model": "12 Pro Max",
               "city": "Los Angeles",
               "price": 1100
             },
             {
               "month": "June",
               "model": "12 Pro",
               "city": "Los Angeles",
               "price": 1000
             },
             {
               "month": "February",
               "model": "12 Pro",
               "city": "Los Angeles",
               "price": 1000
             },
             {
               "month": "February",
               "model": "12",
               "city": "Los Angeles",
               "price": 1300
             },
             {
               "month": "February",
               "model": "12 Pro Max",
               "city": "Los Angeles",
               "price": 1300
             },
             {
               "month": "February",
               "model": "13 Pro Max",
               "city": "Los Angeles",
               "price": 1300
             },
             {
               "month": "March",
               "model": "13 Pro Max",
               "city": "Los Angeles",
               "price": 1000
             },
             {
               "month": "April",
               "model": "13",
               "city": "Los Angeles",
               "price": 600
             },
             {
               "month": "April",
               "model": "12",
               "city": "Los Angeles",
               "price": 700
             },
             {
               "month": "May",
               "model": "8 Plus",
               "city": "Los Angeles",
               "price": 600
             },
             {
               "month": "June",
               "model": "11",
               "city": "Los Angeles",
               "price": 1300
             },
             {
               "month": "March",
               "model": "X",
               "city": "Los Angeles",
               "price": 1400
             },
             {
               "month": "February",
               "model": "13",
               "city": "Los Angeles",
               "price": 1100
             },
             {
               "month": "January",
               "model": "13 Pro",
               "city": "Los Angeles",
               "price": 1000
             },
             {
               "month": "March",
               "model": "12 Pro",
               "city": "Los Angeles",
               "price": 700
             },
             {
               "month": "January",
               "model": "12 Pro Max",
               "city": "Los Angeles",
               "price": 600
             },
             {
               "month": "April",
               "model": "13",
               "city": "Los Angeles",
               "price": 1000
             },
             {
               "month": "April",
               "model": "XS",
               "city": "Los Angeles",
               "price": 1000
             },
             {
               "month": "April",
               "model": "12",
               "city": "Los Angeles",
               "price": 800
             },
             {
               "month": "February",
               "model": "12",
               "city": "Los Angeles",
               "price": 1300
             },
             {
               "month": "May",
               "model": "11 Pro",
               "city": "Los Angeles",
               "price": 700
             },
             {
               "month": "January",
               "model": "13",
               "city": "Los Angeles",
               "price": 1100
             },
             {
               "month": "June",
               "model": "11 Pro Max",
               "city": "Los Angeles",
               "price": 600
             },
             {
               "month": "April",
               "model": "13",
               "city": "Los Angeles",
               "price": 1000
             },
             {
               "month": "February",
               "model": "XS",
               "city": "Los Angeles",
               "price": 700
             },
             {
               "month": "May",
               "model": "12 Pro Max",
               "city": "Los Angeles",
               "price": 1300
             },
             {
               "month": "May",
               "model": "11",
               "city": "Los Angeles",
               "price": 1400
             },
             {
               "month": "April",
               "model": "13",
               "city": "Los Angeles",
               "price": 600
             },
             {
               "month": "June",
               "model": "13 Pro",
               "city": "Los Angeles",
               "price": 1300
             },
             {
               "month": "January",
               "model": "8 Plus",
               "city": "Los Angeles",
               "price": 600
             },
             {
               "month": "June",
               "model": "13",
               "city": "Los Angeles",
               "price": 700
             },
             {
               "month": "June",
               "model": "X",
               "city": "Los Angeles",
               "price": 1300
             },
             {
               "month": "April",
               "model": "11",
               "city": "Los Angeles",
               "price": 700
             },
             {
               "month": "March",
               "model": "13",
               "city": "Los Angeles",
               "price": 700
             },
             {
               "month": "February",
               "model": "11 Pro Max",
               "city": "Los Angeles",
               "price": 1100
             },
             {
               "month": "May",
               "model": "12 Pro",
               "city": "Los Angeles",
               "price": 1300
             },
             {
               "month": "June",
               "model": "12 Pro",
               "city": "Los Angeles",
               "price": 1300
             },
             {
               "month": "April",
               "model": "13",
               "city": "Los Angeles",
               "price": 600
             },
             {
               "month": "January",
               "model": "13",
               "city": "Los Angeles",
               "price": 700
             },
             {
               "month": "April",
               "model": "X",
               "city": "Los Angeles",
               "price": 1100
             },
             {
               "month": "June",
               "model": "11",
               "city": "Los Angeles",
               "price": 500
             },
             {
               "month": "February",
               "model": "12 Pro",
               "city": "Los Angeles",
               "price": 1400
             },
             {
               "month": "January",
               "model": "12 Pro",
               "city": "Los Angeles",
               "price": 1400
             },
             {
               "month": "April",
               "model": "13 Pro",
               "city": "Los Angeles",
               "price": 600
             },
             {
               "month": "April",
               "model": "13 Pro",
               "city": "Los Angeles",
               "price": 600
             },
             {
               "month": "February",
               "model": "XS",
               "city": "Los Angeles",
               "price": 1100
             },
             {
               "month": "April",
               "model": "XS",
               "city": "Los Angeles",
               "price": 1000
             },
             {
               "month": "June",
               "model": "12 Pro",
               "city": "Los Angeles",
               "price": 600
             },
             {
               "month": "January",
               "model": "X",
               "city": "Los Angeles",
               "price": 1400
             },
             {
               "month": "March",
               "model": "X",
               "city": "Los Angeles",
               "price": 600
             },
             {
               "month": "March",
               "model": "13 Pro",
               "city": "Los Angeles",
               "price": 600
             },
             {
               "month": "January",
               "model": "X",
               "city": "Los Angeles",
               "price": 600
             },
             {
               "month": "June",
               "model": "XS",
               "city": "Los Angeles",
               "price": 700
             },
             {
               "month": "January",
               "model": "XS",
               "city": "Los Angeles",
               "price": 1000
             },
             {
               "month": "January",
               "model": "11",
               "city": "Los Angeles",
               "price": 1000
             },
             {
               "month": "March",
               "model": "12 Pro Max",
               "city": "Los Angeles",
               "price": 600
             },
             {
               "month": "May",
               "model": "12 Pro Max",
               "city": "Los Angeles",
               "price": 700
             },
             {
               "month": "March",
               "model": "XS",
               "city": "Los Angeles",
               "price": 1000
             },
             {
               "month": "February",
               "model": "11 Pro Max",
               "city": "Los Angeles",
               "price": 700
             },
             {
               "month": "May",
               "model": "12 Pro Max",
               "city": "Los Angeles",
               "price": 600
             },
             {
               "month": "February",
               "model": "11",
               "city": "Los Angeles",
               "price": 600
             },
             {
               "month": "June",
               "model": "X",
               "city": "Los Angeles",
               "price": 600
             },
             {
               "month": "April",
               "model": "XS",
               "city": "Los Angeles",
               "price": 700
             },
             {
               "month": "June",
               "model": "XS",
               "city": "Los Angeles",
               "price": 1300
             },
             {
               "month": "May",
               "model": "11 Pro Max",
               "city": "Los Angeles",
               "price": 500
             },
             {
               "month": "June",
               "model": "13 Pro Max",
               "city": "Los Angeles",
               "price": 1000
             },
             {
               "month": "January",
               "model": "8",
               "city": "Los Angeles",
               "price": 800
             },
             {
               "month": "February",
               "model": "12",
               "city": "Los Angeles",
               "price": 1000
             },
             {
               "month": "April",
               "model": "11 Pro",
               "city": "Los Angeles",
               "price": 700
             },
             {
               "month": "June",
               "model": "12 Pro Max",
               "city": "Los Angeles",
               "price": 1100
             },
             {
               "month": "April",
               "model": "11 Pro Max",
               "city": "Los Angeles",
               "price": 1000
             },
             {
               "month": "January",
               "model": "12 Pro",
               "city": "Los Angeles",
               "price": 1100
             },
             {
               "month": "April",
               "model": "12 Pro Max",
               "city": "Los Angeles",
               "price": 1400
             },
             {
               "month": "June",
               "model": "12 Pro",
               "city": "Los Angeles",
               "price": 500
             },
             {
               "month": "May",
               "model": "13 Pro",
               "city": "San Francisco",
               "price": 1000
             },
             {
               "month": "April",
               "model": "8",
               "city": "San Francisco",
               "price": 700
             },
             {
               "month": "March",
               "model": "X",
               "city": "San Francisco",
               "price": 700
             },
             {
               "month": "March",
               "model": "11",
               "city": "San Francisco",
               "price": 1300
             },
             {
               "month": "January",
               "model": "11 Pro Max",
               "city": "San Francisco",
               "price": 700
             },
             {
               "month": "January",
               "model": "13 Pro Max",
               "city": "San Francisco",
               "price": 1300
             },
             {
               "month": "February",
               "model": "11",
               "city": "San Francisco",
               "price": 800
             },
             {
               "month": "February",
               "model": "13",
               "city": "San Francisco",
               "price": 700
             },
             {
               "month": "February",
               "model": "11 Pro",
               "city": "San Francisco",
               "price": 500
             },
             {
               "month": "March",
               "model": "11",
               "city": "San Francisco",
               "price": 1000
             },
             {
               "month": "June",
               "model": "8",
               "city": "San Francisco",
               "price": 600
             },
             {
               "month": "March",
               "model": "12",
               "city": "San Francisco",
               "price": 700
             },
             {
               "month": "February",
               "model": "X",
               "city": "San Francisco",
               "price": 1000
             },
             {
               "month": "June",
               "model": "11",
               "city": "San Francisco",
               "price": 1100
             },
             {
               "month": "January",
               "model": "12 Pro Max",
               "city": "San Francisco",
               "price": 500
             },
             {
               "month": "April",
               "model": "12 Pro",
               "city": "San Francisco",
               "price": 1300
             },
             {
               "month": "March",
               "model": "8",
               "city": "San Francisco",
               "price": 1300
             },
             {
               "month": "June",
               "model": "13",
               "city": "San Francisco",
               "price": 1100
             },
             {
               "month": "February",
               "model": "13 Pro Max",
               "city": "San Francisco",
               "price": 700
             },
             {
               "month": "February",
               "model": "12 Pro",
               "city": "San Francisco",
               "price": 1000
             },
             {
               "month": "June",
               "model": "11",
               "city": "San Francisco",
               "price": 1400
             },
             {
               "month": "April",
               "model": "12 Pro Max",
               "city": "San Francisco",
               "price": 500
             },
             {
               "month": "January",
               "model": "13 Pro",
               "city": "San Francisco",
               "price": 1100
             },
             {
               "month": "June",
               "model": "12 Pro",
               "city": "San Francisco",
               "price": 600
             },
             {
               "month": "April",
               "model": "12 Pro",
               "city": "San Francisco",
               "price": 1100
             },
             {
               "month": "March",
               "model": "X",
               "city": "San Francisco",
               "price": 1100
             },
             {
               "month": "June",
               "model": "12 Pro",
               "city": "San Francisco",
               "price": 700
             },
             {
               "month": "April",
               "model": "12 Pro",
               "city": "San Francisco",
               "price": 1300
             },
             {
               "month": "February",
               "model": "12 Pro",
               "city": "San Francisco",
               "price": 700
             },
             {
               "month": "June",
               "model": "13",
               "city": "San Francisco",
               "price": 1300
             },
             {
               "month": "January",
               "model": "12 Pro",
               "city": "San Francisco",
               "price": 800
             },
             {
               "month": "April",
               "model": "13 Pro Max",
               "city": "San Francisco",
               "price": 600
             },
             {
               "month": "June",
               "model": "11 Pro",
               "city": "San Francisco",
               "price": 600
             },
             {
               "month": "March",
               "model": "XS",
               "city": "San Francisco",
               "price": 1000
             },
             {
               "month": "April",
               "model": "XS",
               "city": "San Francisco",
               "price": 700
             },
             {
               "month": "April",
               "model": "12 Pro Max",
               "city": "San Francisco",
               "price": 1000
             },
             {
               "month": "June",
               "model": "12 Pro",
               "city": "San Francisco",
               "price": 700
             },
             {
               "month": "March",
               "model": "12 Pro Max",
               "city": "San Francisco",
               "price": 800
             },
             {
               "month": "June",
               "model": "11",
               "city": "San Francisco",
               "price": 800
             },
             {
               "month": "February",
               "model": "11 Pro",
               "city": "San Francisco",
               "price": 1000
             },
             {
               "month": "June",
               "model": "11 Pro",
               "city": "San Francisco",
               "price": 500
             },
             {
               "month": "April",
               "model": "12",
               "city": "San Francisco",
               "price": 1000
             },
             {
               "month": "February",
               "model": "8",
               "city": "San Francisco",
               "price": 1300
             },
             {
               "month": "February",
               "model": "12",
               "city": "San Francisco",
               "price": 700
             },
             {
               "month": "March",
               "model": "13",
               "city": "San Francisco",
               "price": 600
             },
             {
               "month": "January",
               "model": "12 Pro",
               "city": "San Francisco",
               "price": 1000
             },
             {
               "month": "March",
               "model": "X",
               "city": "San Francisco",
               "price": 1400
             },
             {
               "month": "April",
               "model": "X",
               "city": "San Francisco",
               "price": 500
             },
             {
               "month": "June",
               "model": "13 Pro",
               "city": "San Francisco",
               "price": 1000
             },
             {
               "month": "March",
               "model": "12 Pro",
               "city": "San Francisco",
               "price": 700
             },
             {
               "month": "February",
               "model": "12",
               "city": "San Francisco",
               "price": 700
             },
             {
               "month": "February",
               "model": "11 Pro Max",
               "city": "San Francisco",
               "price": 1300
             },
             {
               "month": "May",
               "model": "12 Pro",
               "city": "San Francisco",
               "price": 700
             },
             {
               "month": "February",
               "model": "13",
               "city": "San Francisco",
               "price": 1000
             },
             {
               "month": "June",
               "model": "11",
               "city": "San Francisco",
               "price": 1300
             },
             {
               "month": "June",
               "model": "12 Pro Max",
               "city": "San Francisco",
               "price": 1100
             },
             {
               "month": "June",
               "model": "13 Pro Max",
               "city": "San Francisco",
               "price": 700
             },
             {
               "month": "February",
               "model": "12 Pro",
               "city": "San Francisco",
               "price": 1100
             },
             {
               "month": "March",
               "model": "12 Pro",
               "city": "San Francisco",
               "price": 600
             },
             {
               "month": "May",
               "model": "12 Pro",
               "city": "San Francisco",
               "price": 1000
             },
             {
               "month": "January",
               "model": "XS",
               "city": "San Francisco",
               "price": 1300
             },
             {
               "month": "March",
               "model": "12 Pro Max",
               "city": "San Francisco",
               "price": 1400
             },
             {
               "month": "January",
               "model": "13",
               "city": "San Francisco",
               "price": 600
             },
             {
               "month": "January",
               "model": "13 Pro",
               "city": "San Francisco",
               "price": 1300
             },
             {
               "month": "January",
               "model": "X",
               "city": "San Francisco",
               "price": 1300
             },
             {
               "month": "April",
               "model": "13",
               "city": "San Francisco",
               "price": 1300
             },
             {
               "month": "May",
               "model": "13",
               "city": "San Francisco",
               "price": 500
             },
             {
               "month": "June",
               "model": "13",
               "city": "San Francisco",
               "price": 1300
             },
             {
               "month": "June",
               "model": "8",
               "city": "San Francisco",
               "price": 1400
             },
             {
               "month": "April",
               "model": "13 Pro Max",
               "city": "San Francisco",
               "price": 1100
             },
             {
               "month": "June",
               "model": "13 Pro",
               "city": "San Francisco",
               "price": 1400
             },
             {
               "month": "April",
               "model": "12 Pro",
               "city": "San Francisco",
               "price": 800
             },
             {
               "month": "June",
               "model": "13 Pro",
               "city": "San Francisco",
               "price": 1000
             },
             {
               "month": "May",
               "model": "11 Pro",
               "city": "San Francisco",
               "price": 1000
             },
             {
               "month": "January",
               "model": "12 Pro Max",
               "city": "San Francisco",
               "price": 1000
             },
             {
               "month": "June",
               "model": "12",
               "city": "San Francisco",
               "price": 1100
             },
             {
               "month": "April",
               "model": "XS",
               "city": "San Francisco",
               "price": 1000
             },
             {
               "month": "May",
               "model": "12 Pro",
               "city": "San Francisco",
               "price": 700
             },
             {
               "month": "May",
               "model": "12",
               "city": "San Francisco",
               "price": 1300
             },
             {
               "month": "February",
               "model": "12 Pro",
               "city": "San Francisco",
               "price": 500
             },
             {
               "month": "May",
               "model": "13 Pro Max",
               "city": "San Francisco",
               "price": 1400
             },
             {
               "month": "March",
               "model": "12 Pro",
               "city": "San Francisco",
               "price": 1000
             },
             {
               "month": "February",
               "model": "13 Pro",
               "city": "San Francisco",
               "price": 800
             },
             {
               "month": "February",
               "model": "X",
               "city": "San Francisco",
               "price": 700
             },
             {
               "month": "May",
               "model": "11 Pro",
               "city": "San Francisco",
               "price": 1100
             },
             {
               "month": "January",
               "model": "11",
               "city": "San Francisco",
               "price": 700
             },
             {
               "month": "May",
               "model": "12 Pro",
               "city": "San Francisco",
               "price": 1400
             },
             {
               "month": "March",
               "model": "11 Pro Max",
               "city": "San Francisco",
               "price": 700
             },
             {
               "month": "March",
               "model": "13 Pro",
               "city": "San Francisco",
               "price": 1400
             },
             {
               "month": "April",
               "model": "11",
               "city": "San Francisco",
               "price": 1100
             },
             {
               "month": "April",
               "model": "13 Pro",
               "city": "San Francisco",
               "price": 1300
             },
             {
               "month": "June",
               "model": "12 Pro",
               "city": "San Francisco",
               "price": 800
             },
             {
               "month": "February",
               "model": "13 Pro Max",
               "city": "San Francisco",
               "price": 600
             },
             {
               "month": "March",
               "model": "11 Pro",
               "city": "San Francisco",
               "price": 700
             },
             {
               "month": "January",
               "model": "X",
               "city": "San Francisco",
               "price": 1300
             },
             {
               "month": "March",
               "model": "12 Pro",
               "city": "San Francisco",
               "price": 1000
             },
             {
               "month": "February",
               "model": "13",
               "city": "San Francisco",
               "price": 1000
             },
             {
               "month": "June",
               "model": "12",
               "city": "San Francisco",
               "price": 1000
             },
             {
               "month": "May",
               "model": "12 Pro Max",
               "city": "San Francisco",
               "price": 700
             },
             {
               "month": "June",
               "model": "12",
               "city": "San Francisco",
               "price": 1300
             },
             {
               "month": "March",
               "model": "11 Pro Max",
               "city": "San Francisco",
               "price": 500
             },
             {
               "month": "April",
               "model": "13 Pro Max",
               "city": "San Francisco",
               "price": 1300
             },
             {
               "month": "June",
               "model": "8",
               "city": "San Francisco",
               "price": 700
             },
             {
               "month": "January",
               "model": "13 Pro Max",
               "city": "San Francisco",
               "price": 1300
             },
             {
               "month": "February",
               "model": "12 Pro",
               "city": "San Francisco",
               "price": 1000
             },
             {
               "month": "March",
               "model": "13 Pro Max",
               "city": "San Francisco",
               "price": 700
             },
             {
               "month": "June",
               "model": "X",
               "city": "San Francisco",
               "price": 1300
             },
             {
               "month": "May",
               "model": "12 Pro",
               "city": "San Francisco",
               "price": 700
             },
             {
               "month": "June",
               "model": "13",
               "city": "San Francisco",
               "price": 500
             },
             {
               "month": "June",
               "model": "11 Pro Max",
               "city": "San Francisco",
               "price": 1300
             },
             {
               "month": "April",
               "model": "12 Pro",
               "city": "San Francisco",
               "price": 700
             },
             {
               "month": "January",
               "model": "13 Pro Max",
               "city": "San Francisco",
               "price": 1100
             },
             {
               "month": "June",
               "model": "11",
               "city": "San Francisco",
               "price": 1000
             },
             {
               "month": "March",
               "model": "12 Pro",
               "city": "San Francisco",
               "price": 700
             },
             {
               "month": "March",
               "model": "XS",
               "city": "San Francisco",
               "price": 1000
             },
             {
               "month": "May",
               "model": "11",
               "city": "San Francisco",
               "price": 1000
             },
             {
               "month": "May",
               "model": "12",
               "city": "San Francisco",
               "price": 700
             },
             {
               "month": "June",
               "model": "12 Pro Max",
               "city": "San Francisco",
               "price": 1400
             },
             {
               "month": "February",
               "model": "11",
               "city": "San Francisco",
               "price": 800
             },
             {
               "month": "June",
               "model": "13 Pro",
               "city": "San Francisco",
               "price": 1100
             },
             {
               "month": "April",
               "model": "11 Pro",
               "city": "San Francisco",
               "price": 1000
             },
             {
               "month": "April",
               "model": "12 Pro",
               "city": "San Francisco",
               "price": 800
             },
             {
               "month": "February",
               "model": "12",
               "city": "San Francisco",
               "price": 500
             },
             {
               "month": "April",
               "model": "11 Pro",
               "city": "San Francisco",
               "price": 1400
             },
             {
               "month": "April",
               "model": "8",
               "city": "San Francisco",
               "price": 600
             },
             {
               "month": "May",
               "model": "13 Pro",
               "city": "San Francisco",
               "price": 700
             },
             {
               "month": "April",
               "model": "XS",
               "city": "San Francisco",
               "price": 1000
             },
             {
               "month": "April",
               "model": "11 Pro Max",
               "city": "San Francisco",
               "price": 1000
             },
             {
               "month": "June",
               "model": "XS",
               "city": "San Francisco",
               "price": 600
             },
             {
               "month": "May",
               "model": "12 Pro Max",
               "city": "San Francisco",
               "price": 700
             },
             {
               "month": "March",
               "model": "XS",
               "city": "San Francisco",
               "price": 500
             },
             {
               "month": "May",
               "model": "12 Pro",
               "city": "San Francisco",
               "price": 700
             },
             {
               "month": "April",
               "model": "8",
               "city": "San Francisco",
               "price": 800
             },
             {
               "month": "March",
               "model": "11 Pro Max",
               "city": "San Francisco",
               "price": 1000
             },
             {
               "month": "January",
               "model": "11 Pro",
               "city": "San Francisco",
               "price": 1300
             },
             {
               "month": "June",
               "model": "XS",
               "city": "San Francisco",
               "price": 600
             },
             {
               "month": "February",
               "model": "13",
               "city": "San Francisco",
               "price": 700
             },
             {
               "month": "January",
               "model": "12 Pro",
               "city": "San Francisco",
               "price": 1100
             },
             {
               "month": "February",
               "model": "11",
               "city": "San Francisco",
               "price": 800
             },
             {
               "month": "June",
               "model": "12 Pro",
               "city": "San Francisco",
               "price": 1100
             },
             {
               "month": "May",
               "model": "11 Pro",
               "city": "San Francisco",
               "price": 1100
             },
             {
               "month": "June",
               "model": "12 Pro",
               "city": "San Francisco",
               "price": 500
             },
             {
               "month": "February",
               "model": "XR",
               "city": "San Francisco",
               "price": 1400
             },
             {
               "month": "June",
               "model": "8",
               "city": "San Francisco",
               "price": 800
             },
             {
               "month": "June",
               "model": "13 Pro",
               "city": "San Francisco",
               "price": 600
             },
             {
               "month": "February",
               "model": "11 Pro",
               "city": "San Francisco",
               "price": 1000
             },
             {
               "month": "May",
               "model": "XS",
               "city": "San Francisco",
               "price": 1300
             },
             {
               "month": "March",
               "model": "12",
               "city": "San Francisco",
               "price": 800
             },
             {
               "month": "January",
               "model": "13",
               "city": "San Francisco",
               "price": 600
             },
             {
               "month": "February",
               "model": "11 Pro",
               "city": "San Francisco",
               "price": 1000
             },
             {
               "month": "June",
               "model": "X",
               "city": "San Francisco",
               "price": 1000
             },
             {
               "month": "June",
               "model": "X",
               "city": "San Francisco",
               "price": 1400
             },
             {
               "month": "May",
               "model": "13 Pro Max",
               "city": "San Francisco",
               "price": 1000
             },
             {
               "month": "February",
               "model": "13 Pro",
               "city": "San Francisco",
               "price": 1000
             },
             {
               "month": "April",
               "model": "12",
               "city": "San Francisco",
               "price": 700
             },
             {
               "month": "March",
               "model": "13 Pro Max",
               "city": "San Francisco",
               "price": 600
             },
             {
               "month": "February",
               "model": "11",
               "city": "San Francisco",
               "price": 600
             },
             {
               "month": "February",
               "model": "X",
               "city": "San Francisco",
               "price": 1400
             },
             {
               "month": "January",
               "model": "X",
               "city": "San Francisco",
               "price": 500
             },
             {
               "month": "January",
               "model": "13 Pro",
               "city": "San Francisco",
               "price": 1100
             },
             {
               "month": "March",
               "model": "13 Pro",
               "city": "San Francisco",
               "price": 500
             },
             {
               "month": "February",
               "model": "XR",
               "city": "San Francisco",
               "price": 1400
             },
             {
               "month": "February",
               "model": "13 Pro",
               "city": "San Francisco",
               "price": 1000
             },
             {
               "month": "May",
               "model": "13 Pro",
               "city": "San Francisco",
               "price": 1300
             },
             {
               "month": "June",
               "model": "13 Pro Max",
               "city": "San Francisco",
               "price": 1000
             },
             {
               "month": "April",
               "model": "13",
               "city": "San Francisco",
               "price": 1300
             },
             {
               "month": "January",
               "model": "12",
               "city": "San Francisco",
               "price": 800
             },
             {
               "month": "May",
               "model": "13 Pro Max",
               "city": "San Francisco",
               "price": 1100
             },
             {
               "month": "February",
               "model": "11 Pro",
               "city": "San Francisco",
               "price": 600
             },
             {
               "month": "June",
               "model": "13 Pro",
               "city": "San Francisco",
               "price": 700
             },
             {
               "month": "March",
               "model": "X",
               "city": "San Francisco",
               "price": 1100
             },
             {
               "month": "April",
               "model": "11",
               "city": "San Francisco",
               "price": 1100
             },
             {
               "month": "January",
               "model": "13 Pro",
               "city": "San Francisco",
               "price": 1400
             },
             {
               "month": "May",
               "model": "XR",
               "city": "San Francisco",
               "price": 1300
             },
             {
               "month": "January",
               "model": "13 Pro",
               "city": "San Francisco",
               "price": 1000
             },
             {
               "month": "May",
               "model": "13 Pro Max",
               "city": "San Francisco",
               "price": 1000
             },
             {
               "month": "June",
               "model": "12",
               "city": "San Francisco",
               "price": 1400
             },
             {
               "month": "February",
               "model": "13 Pro Max",
               "city": "San Francisco",
               "price": 700
             },
             {
               "month": "May",
               "model": "13 Pro",
               "city": "San Francisco",
               "price": 1000
             },
             {
               "month": "January",
               "model": "11",
               "city": "San Francisco",
               "price": 1000
             },
             {
               "month": "March",
               "model": "12",
               "city": "San Francisco",
               "price": 1000
             },
             {
               "month": "April",
               "model": "12",
               "city": "San Francisco",
               "price": 800
             },
             {
               "month": "February",
               "model": "13 Pro Max",
               "city": "San Francisco",
               "price": 600
             },
             {
               "month": "February",
               "model": "11 Pro",
               "city": "San Francisco",
               "price": 700
             },
             {
               "month": "February",
               "model": "XS",
               "city": "San Francisco",
               "price": 1000
             },
             {
               "month": "January",
               "model": "11",
               "city": "San Francisco",
               "price": 1000
             },
             {
               "month": "February",
               "model": "13 Pro Max",
               "city": "San Francisco",
               "price": 1000
             },
             {
               "month": "March",
               "model": "13 Pro Max",
               "city": "San Francisco",
               "price": 1300
             },
             {
               "month": "April",
               "model": "13 Pro Max",
               "city": "San Francisco",
               "price": 600
             },
             {
               "month": "April",
               "model": "13 Pro Max",
               "city": "San Francisco",
               "price": 1000
             },
             {
               "month": "March",
               "model": "XS",
               "city": "San Francisco",
               "price": 1400
             },
             {
               "month": "January",
               "model": "12",
               "city": "San Francisco",
               "price": 1400
             },
             {
               "month": "February",
               "model": "13 Pro",
               "city": "San Francisco",
               "price": 1300
             },
             {
               "month": "May",
               "model": "13 Pro",
               "city": "San Francisco",
               "price": 1400
             },
             {
               "month": "April",
               "model": "13 Pro Max",
               "city": "San Francisco",
               "price": 1000
             },
             {
               "month": "February",
               "model": "13 Pro",
               "city": "San Francisco",
               "price": 700
             },
             {
               "month": "June",
               "model": "12",
               "city": "San Francisco",
               "price": 600
             },
             {
               "month": "February",
               "model": "11 Pro Max",
               "city": "San Francisco",
               "price": 600
             },
             {
               "month": "March",
               "model": "13 Pro",
               "city": "San Francisco",
               "price": 1400
             },
             {
               "month": "April",
               "model": "X",
               "city": "San Francisco",
               "price": 600
             },
             {
               "month": "January",
               "model": "13 Pro",
               "city": "San Francisco",
               "price": 1300
             },
             {
               "month": "February",
               "model": "XS",
               "city": "San Francisco",
               "price": 1000
             },
             {
               "month": "April",
               "model": "13 Pro Max",
               "city": "San Francisco",
               "price": 1000
             },
             {
               "month": "May",
               "model": "13 Pro Max",
               "city": "San Francisco",
               "price": 1100
             },
             {
               "month": "June",
               "model": "13 Pro Max",
               "city": "San Francisco",
               "price": 1300
             },
             {
               "month": "March",
               "model": "13 Pro",
               "city": "San Francisco",
               "price": 700
             },
             {
               "month": "May",
               "model": "13",
               "city": "San Francisco",
               "price": 700
             },
             {
               "month": "March",
               "model": "11",
               "city": "San Francisco",
               "price": 1400
             },
             {
               "month": "February",
               "model": "XR",
               "city": "San Francisco",
               "price": 700
             },
             {
               "month": "April",
               "model": "13 Pro",
               "city": "San Francisco",
               "price": 700
             },
             {
               "month": "March",
               "model": "11",
               "city": "San Francisco",
               "price": 1000
             },
             {
               "month": "June",
               "model": "XR",
               "city": "San Francisco",
               "price": 700
             },
             {
               "month": "June",
               "model": "13 Pro Max",
               "city": "San Francisco",
               "price": 1000
             },
             {
               "month": "June",
               "model": "11 Pro Max",
               "city": "San Francisco",
               "price": 1300
             },
             {
               "month": "February",
               "model": "13 Pro Max",
               "city": "San Francisco",
               "price": 700
             },
             {
               "month": "March",
               "model": "13",
               "city": "San Francisco",
               "price": 1300
             },
             {
               "month": "February",
               "model": "XR",
               "city": "San Francisco",
               "price": 800
             },
             {
               "month": "June",
               "model": "13 Pro Max",
               "city": "San Francisco",
               "price": 700
             },
             {
               "month": "January",
               "model": "11 Pro",
               "city": "San Francisco",
               "price": 600
             },
             {
               "month": "February",
               "model": "11",
               "city": "San Francisco",
               "price": 700
             },
             {
               "month": "June",
               "model": "XS",
               "city": "San Francisco",
               "price": 800
             },
             {
               "month": "January",
               "model": "XR",
               "city": "San Francisco",
               "price": 1000
             },
             {
               "month": "June",
               "model": "11 Pro",
               "city": "San Francisco",
               "price": 800
             },
             {
               "month": "March",
               "model": "13 Pro Max",
               "city": "San Francisco",
               "price": 1100
             },
             {
               "month": "February",
               "model": "11 Pro",
               "city": "San Francisco",
               "price": 1000
             },
             {
               "month": "May",
               "model": "13 Pro",
               "city": "San Francisco",
               "price": 1300
             },
             {
               "month": "May",
               "model": "XS",
               "city": "San Francisco",
               "price": 600
             },
             {
               "month": "April",
               "model": "13 Pro Max",
               "city": "San Francisco",
               "price": 1000
             },
             {
               "month": "January",
               "model": "13 Pro",
               "city": "San Francisco",
               "price": 600
             },
             {
               "month": "May",
               "model": "XS",
               "city": "San Francisco",
               "price": 1000
             },
             {
               "month": "June",
               "model": "11 Pro Max",
               "city": "San Francisco",
               "price": 700
             },
             {
               "month": "May",
               "model": "13",
               "city": "San Francisco",
               "price": 1000
             },
             {
               "month": "January",
               "model": "11",
               "city": "San Francisco",
               "price": 1000
             },
             {
               "month": "May",
               "model": "12",
               "city": "San Francisco",
               "price": 600
             },
             {
               "month": "April",
               "model": "13",
               "city": "San Francisco",
               "price": 1300
             },
             {
               "month": "May",
               "model": "XS",
               "city": "San Francisco",
               "price": 800
             },
             {
               "month": "April",
               "model": "13",
               "city": "San Francisco",
               "price": 700
             },
             {
               "month": "March",
               "model": "11 Pro",
               "city": "San Francisco",
               "price": 800
             },
             {
               "month": "March",
               "model": "11",
               "city": "San Francisco",
               "price": 600
             },
             {
               "month": "January",
               "model": "11 Pro",
               "city": "San Francisco",
               "price": 1300
             },
             {
               "month": "January",
               "model": "13",
               "city": "San Francisco",
               "price": 1300
             },
             {
               "month": "June",
               "model": "13 Pro Max",
               "city": "San Francisco",
               "price": 700
             },
             {
               "month": "February",
               "model": "13 Pro Max",
               "city": "San Francisco",
               "price": 1300
             },
             {
               "month": "January",
               "model": "11",
               "city": "San Francisco",
               "price": 700
             },
             {
               "month": "March",
               "model": "13",
               "city": "San Francisco",
               "price": 1000
             },
             {
               "month": "May",
               "model": "XR",
               "city": "San Francisco",
               "price": 700
             },
             {
               "month": "February",
               "model": "13",
               "city": "San Francisco",
               "price": 700
             },
             {
               "month": "January",
               "model": "XR",
               "city": "San Francisco",
               "price": 700
             },
             {
               "month": "March",
               "model": "11",
               "city": "San Francisco",
               "price": 1100
             },
             {
               "month": "March",
               "model": "11",
               "city": "San Francisco",
               "price": 1300
             },
             {
               "month": "February",
               "model": "11 Pro Max",
               "city": "San Diego",
               "price": 700
             },
             {
               "month": "February",
               "model": "13 Pro Max",
               "city": "San Diego",
               "price": 1400
             },
             {
               "month": "March",
               "model": "11",
               "city": "San Diego",
               "price": 1400
             },
             {
               "month": "February",
               "model": "13 Pro",
               "city": "San Diego",
               "price": 700
             },
             {
               "month": "June",
               "model": "13 Pro",
               "city": "San Diego",
               "price": 1000
             },
             {
               "month": "March",
               "model": "XR",
               "city": "San Diego",
               "price": 1300
             },
             {
               "month": "February",
               "model": "13",
               "city": "San Diego",
               "price": 1300
             },
             {
               "month": "April",
               "model": "13",
               "city": "San Diego",
               "price": 700
             },
             {
               "month": "January",
               "model": "13",
               "city": "San Diego",
               "price": 600
             },
             {
               "month": "March",
               "model": "XR",
               "city": "San Diego",
               "price": 600
             },
             {
               "month": "January",
               "model": "13",
               "city": "San Diego",
               "price": 700
             },
             {
               "month": "January",
               "model": "11 Pro Max",
               "city": "San Diego",
               "price": 1000
             },
             {
               "month": "June",
               "model": "11 Pro Max",
               "city": "San Diego",
               "price": 1000
             },
             {
               "month": "March",
               "model": "13",
               "city": "San Diego",
               "price": 700
             },
             {
               "month": "February",
               "model": "13",
               "city": "San Diego",
               "price": 600
             },
             {
               "month": "February",
               "model": "11 Pro Max",
               "city": "San Diego",
               "price": 1300
             },
             {
               "month": "June",
               "model": "13",
               "city": "San Diego",
               "price": 1300
             },
             {
               "month": "May",
               "model": "13 Pro Max",
               "city": "San Diego",
               "price": 600
             },
             {
               "month": "April",
               "model": "13 Pro Max",
               "city": "San Diego",
               "price": 600
             },
             {
               "month": "February",
               "model": "13",
               "city": "San Diego",
               "price": 700
             },
             {
               "month": "January",
               "model": "11 Pro Max",
               "city": "San Diego",
               "price": 1000
             },
             {
               "month": "May",
               "model": "11",
               "city": "San Diego",
               "price": 1100
             },
             {
               "month": "June",
               "model": "XS",
               "city": "San Diego",
               "price": 700
             },
             {
               "month": "March",
               "model": "11 Pro Max",
               "city": "San Diego",
               "price": 1400
             },
             {
               "month": "February",
               "model": "XR",
               "city": "San Diego",
               "price": 700
             },
             {
               "month": "January",
               "model": "13 Pro",
               "city": "San Diego",
               "price": 800
             },
             {
               "month": "June",
               "model": "11 Pro Max",
               "city": "San Diego",
               "price": 1100
             },
             {
               "month": "March",
               "model": "11 Pro",
               "city": "San Diego",
               "price": 1300
             },
             {
               "month": "March",
               "model": "11 Pro Max",
               "city": "San Diego",
               "price": 700
             },
             {
               "month": "March",
               "model": "13 Pro Max",
               "city": "San Diego",
               "price": 700
             },
             {
               "month": "May",
               "model": "XR",
               "city": "San Diego",
               "price": 800
             },
             {
               "month": "February",
               "model": "XR",
               "city": "San Diego",
               "price": 600
             },
             {
               "month": "June",
               "model": "11 Pro",
               "city": "San Diego",
               "price": 1300
             },
             {
               "month": "March",
               "model": "8 Plus",
               "city": "San Diego",
               "price": 800
             },
             {
               "month": "January",
               "model": "13",
               "city": "San Diego",
               "price": 1000
             },
             {
               "month": "March",
               "model": "11 Pro",
               "city": "San Diego",
               "price": 700
             },
             {
               "month": "February",
               "model": "13",
               "city": "San Diego",
               "price": 1000
             },
             {
               "month": "March",
               "model": "11 Pro Max",
               "city": "San Diego",
               "price": 700
             },
             {
               "month": "January",
               "model": "XS",
               "city": "San Diego",
               "price": 600
             },
             {
               "month": "June",
               "model": "11",
               "city": "San Diego",
               "price": 1300
             },
             {
               "month": "January",
               "model": "XS",
               "city": "San Diego",
               "price": 1300
             },
             {
               "month": "June",
               "model": "13",
               "city": "San Diego",
               "price": 1100
             },
             {
               "month": "February",
               "model": "13 Pro Max",
               "city": "San Diego",
               "price": 500
             },
             {
               "month": "February",
               "model": "12 Pro",
               "city": "San Diego",
               "price": 600
             },
             {
               "month": "June",
               "model": "12",
               "city": "San Diego",
               "price": 800
             },
             {
               "month": "March",
               "model": "13",
               "city": "San Diego",
               "price": 1300
             },
             {
               "month": "March",
               "model": "11 Pro",
               "city": "San Diego",
               "price": 1000
             },
             {
               "month": "April",
               "model": "13 Pro Max",
               "city": "San Diego",
               "price": 1000
             },
             {
               "month": "March",
               "model": "12",
               "city": "San Diego",
               "price": 700
             },
             {
               "month": "February",
               "model": "12 Pro Max",
               "city": "San Diego",
               "price": 1000
             },
             {
               "month": "May",
               "model": "XR",
               "city": "San Diego",
               "price": 1000
             },
             {
               "month": "January",
               "model": "XS",
               "city": "San Diego",
               "price": 500
             },
             {
               "month": "May",
               "model": "12",
               "city": "San Diego",
               "price": 1100
             },
             {
               "month": "April",
               "model": "12",
               "city": "San Diego",
               "price": 1000
             },
             {
               "month": "April",
               "model": "XR",
               "city": "San Diego",
               "price": 600
             },
             {
               "month": "May",
               "model": "12",
               "city": "San Diego",
               "price": 600
             },
             {
               "month": "March",
               "model": "13",
               "city": "San Diego",
               "price": 1000
             },
             {
               "month": "February",
               "model": "XS",
               "city": "San Diego",
               "price": 600
             },
             {
               "month": "February",
               "model": "12",
               "city": "San Diego",
               "price": 600
             },
             {
               "month": "February",
               "model": "X",
               "city": "San Diego",
               "price": 1300
             },
             {
               "month": "January",
               "model": "12",
               "city": "San Diego",
               "price": 600
             },
             {
               "month": "April",
               "model": "13",
               "city": "San Diego",
               "price": 600
             },
             {
               "month": "March",
               "model": "XS",
               "city": "San Diego",
               "price": 600
             },
             {
               "month": "June",
               "model": "12",
               "city": "San Diego",
               "price": 700
             },
             {
               "month": "June",
               "model": "13",
               "city": "San Diego",
               "price": 600
             },
             {
               "month": "May",
               "model": "11 Pro Max",
               "city": "San Diego",
               "price": 1000
             },
             {
               "month": "June",
               "model": "8 Plus",
               "city": "San Diego",
               "price": 600
             },
             {
               "month": "March",
               "model": "12",
               "city": "San Diego",
               "price": 1000
             },
             {
               "month": "May",
               "model": "12",
               "city": "San Diego",
               "price": 1000
             },
             {
               "month": "January",
               "model": "12",
               "city": "San Diego",
               "price": 600
             },
             {
               "month": "February",
               "model": "12",
               "city": "San Diego",
               "price": 700
             },
             {
               "month": "June",
               "model": "12",
               "city": "San Diego",
               "price": 1300
             },
             {
               "month": "March",
               "model": "XR",
               "city": "San Diego",
               "price": 1400
             },
             {
               "month": "April",
               "model": "13 Pro Max",
               "city": "San Diego",
               "price": 800
             },
             {
               "month": "May",
               "model": "13 Pro",
               "city": "San Diego",
               "price": 1000
             },
             {
               "month": "February",
               "model": "11 Pro",
               "city": "San Diego",
               "price": 600
             },
             {
               "month": "March",
               "model": "12 Pro Max",
               "city": "San Diego",
               "price": 600
             },
             {
               "month": "April",
               "model": "12",
               "city": "San Diego",
               "price": 700
             },
             {
               "month": "May",
               "model": "12",
               "city": "San Diego",
               "price": 600
             },
             {
               "month": "June",
               "model": "XR",
               "city": "San Diego",
               "price": 1000
             },
             {
               "month": "April",
               "model": "XS",
               "city": "San Diego",
               "price": 1100
             },
             {
               "month": "February",
               "model": "12 Pro Max",
               "city": "San Diego",
               "price": 1400
             },
             {
               "month": "February",
               "model": "XR",
               "city": "San Diego",
               "price": 500
             },
             {
               "month": "January",
               "model": "13 Pro",
               "city": "San Diego",
               "price": 1000
             },
             {
               "month": "June",
               "model": "12",
               "city": "San Diego",
               "price": 600
             },
             {
               "month": "January",
               "model": "12 Pro Max",
               "city": "San Diego",
               "price": 700
             },
             {
               "month": "February",
               "model": "XS",
               "city": "San Diego",
               "price": 800
             },
             {
               "month": "March",
               "model": "11 Pro Max",
               "city": "San Diego",
               "price": 1000
             },
             {
               "month": "April",
               "model": "11 Pro",
               "city": "San Diego",
               "price": 700
             },
             {
               "month": "January",
               "model": "XS",
               "city": "San Diego",
               "price": 600
             },
             {
               "month": "March",
               "model": "XR",
               "city": "San Diego",
               "price": 1000
             },
             {
               "month": "March",
               "model": "XS",
               "city": "San Diego",
               "price": 700
             },
             {
               "month": "March",
               "model": "12",
               "city": "San Diego",
               "price": 500
             },
             {
               "month": "May",
               "model": "11 Pro Max",
               "city": "San Diego",
               "price": 700
             },
             {
               "month": "May",
               "model": "8 Plus",
               "city": "San Diego",
               "price": 600
             },
             {
               "month": "April",
               "model": "11",
               "city": "San Diego",
               "price": 1000
             },
             {
               "month": "January",
               "model": "13",
               "city": "San Diego",
               "price": 500
             },
             {
               "month": "February",
               "model": "13",
               "city": "San Diego",
               "price": 1100
             },
             {
               "month": "June",
               "model": "8 Plus",
               "city": "San Diego",
               "price": 600
             },
             {
               "month": "May",
               "model": "XR",
               "city": "San Diego",
               "price": 800
             },
             {
               "month": "January",
               "model": "13",
               "city": "San Diego",
               "price": 600
             },
             {
               "month": "January",
               "model": "11 Pro",
               "city": "San Diego",
               "price": 1400
             },
             {
               "month": "March",
               "model": "13",
               "city": "San Diego",
               "price": 800
             },
             {
               "month": "April",
               "model": "13 Pro",
               "city": "San Diego",
               "price": 600
             },
             {
               "month": "January",
               "model": "11 Pro",
               "city": "San Diego",
               "price": 1000
             },
             {
               "month": "January",
               "model": "8 Plus",
               "city": "San Diego",
               "price": 1100
             },
             {
               "month": "March",
               "model": "12",
               "city": "San Diego",
               "price": 700
             },
             {
               "month": "February",
               "model": "12 Pro",
               "city": "San Diego",
               "price": 1300
             },
             {
               "month": "March",
               "model": "11",
               "city": "San Diego",
               "price": 1100
             },
             {
               "month": "May",
               "model": "12 Pro Max",
               "city": "San Diego",
               "price": 1300
             },
             {
               "month": "February",
               "model": "XR",
               "city": "San Diego",
               "price": 1100
             },
             {
               "month": "May",
               "model": "13",
               "city": "San Diego",
               "price": 700
             },
             {
               "month": "June",
               "model": "12 Pro",
               "city": "San Diego",
               "price": 1000
             },
             {
               "month": "May",
               "model": "11 Pro Max",
               "city": "San Diego",
               "price": 1300
             },
             {
               "month": "April",
               "model": "12",
               "city": "San Diego",
               "price": 1400
             },
             {
               "month": "January",
               "model": "13",
               "city": "San Diego",
               "price": 1000
             },
             {
               "month": "April",
               "model": "13 Pro",
               "city": "San Diego",
               "price": 1300
             },
             {
               "month": "June",
               "model": "12 Pro Max",
               "city": "San Diego",
               "price": 1000
             },
             {
               "month": "May",
               "model": "13",
               "city": "San Diego",
               "price": 700
             },
             {
               "month": "January",
               "model": "12 Pro Max",
               "city": "San Diego",
               "price": 700
             },
             {
               "month": "February",
               "model": "11",
               "city": "San Diego",
               "price": 500
             },
             {
               "month": "May",
               "model": "11",
               "city": "San Diego",
               "price": 700
             },
             {
               "month": "March",
               "model": "8 Plus",
               "city": "San Diego",
               "price": 700
             },
             {
               "month": "January",
               "model": "11 Pro Max",
               "city": "San Diego",
               "price": 1000
             },
             {
               "month": "May",
               "model": "XR",
               "city": "San Diego",
               "price": 1300
             },
             {
               "month": "February",
               "model": "12 Pro Max",
               "city": "San Diego",
               "price": 1300
             },
             {
               "month": "March",
               "model": "12 Pro Max",
               "city": "San Diego",
               "price": 600
             },
             {
               "month": "January",
               "model": "12 Pro Max",
               "city": "San Diego",
               "price": 600
             },
             {
               "month": "May",
               "model": "13",
               "city": "San Diego",
               "price": 600
             },
             {
               "month": "May",
               "model": "XS",
               "city": "San Diego",
               "price": 1000
             },
             {
               "month": "April",
               "model": "13",
               "city": "San Diego",
               "price": 1100
             },
             {
               "month": "April",
               "model": "12 Pro Max",
               "city": "San Diego",
               "price": 800
             },
             {
               "month": "April",
               "model": "XR",
               "city": "San Diego",
               "price": 1000
             },
             {
               "month": "March",
               "model": "11 Pro",
               "city": "Sacramento",
               "price": 500
             },
             {
               "month": "June",
               "model": "12 Pro Max",
               "city": "Sacramento",
               "price": 700
             },
             {
               "month": "May",
               "model": "12",
               "city": "Sacramento",
               "price": 700
             },
             {
               "month": "February",
               "model": "11 Pro Max",
               "city": "Sacramento",
               "price": 800
             },
             {
               "month": "January",
               "model": "11",
               "city": "Sacramento",
               "price": 600
             },
             {
               "month": "March",
               "model": "11 Pro",
               "city": "Sacramento",
               "price": 700
             },
             {
               "month": "January",
               "model": "X",
               "city": "Sacramento",
               "price": 1000
             },
             {
               "month": "April",
               "model": "XR",
               "city": "Sacramento",
               "price": 1100
             },
             {
               "month": "March",
               "model": "X",
               "city": "Sacramento",
               "price": 1300
             },
             {
               "month": "January",
               "model": "12 Pro",
               "city": "Sacramento",
               "price": 1100
             },
             {
               "month": "February",
               "model": "13",
               "city": "Sacramento",
               "price": 1300
             },
             {
               "month": "February",
               "model": "12 Pro",
               "city": "Sacramento",
               "price": 700
             },
             {
               "month": "April",
               "model": "12 Pro Max",
               "city": "Sacramento",
               "price": 500
             },
             {
               "month": "June",
               "model": "XR",
               "city": "Sacramento",
               "price": 700
             },
             {
               "month": "March",
               "model": "8",
               "city": "Sacramento",
               "price": 1300
             },
             {
               "month": "May",
               "model": "XR",
               "city": "Sacramento",
               "price": 700
             },
             {
               "month": "February",
               "model": "12 Pro Max",
               "city": "Sacramento",
               "price": 1300
             },
             {
               "month": "February",
               "model": "11",
               "city": "Sacramento",
               "price": 800
             },
             {
               "month": "February",
               "model": "13",
               "city": "Sacramento",
               "price": 700
             },
             {
               "month": "March",
               "model": "11 Pro",
               "city": "Sacramento",
               "price": 1400
             },
             {
               "month": "January",
               "model": "11 Pro Max",
               "city": "Sacramento",
               "price": 1000
             },
             {
               "month": "February",
               "model": "13 Pro",
               "city": "Sacramento",
               "price": 1100
             },
             {
               "month": "January",
               "model": "12 Pro Max",
               "city": "Sacramento",
               "price": 1400
             },
             {
               "month": "April",
               "model": "XR",
               "city": "Sacramento",
               "price": 600
             },
             {
               "month": "May",
               "model": "13 Pro",
               "city": "Sacramento",
               "price": 700
             },
             {
               "month": "February",
               "model": "X",
               "city": "Sacramento",
               "price": 1400
             },
             {
               "month": "April",
               "model": "XR",
               "city": "Sacramento",
               "price": 600
             },
             {
               "month": "March",
               "model": "13 Pro",
               "city": "Sacramento",
               "price": 600
             },
             {
               "month": "March",
               "model": "12 Pro Max",
               "city": "Sacramento",
               "price": 500
             },
             {
               "month": "February",
               "model": "12 Pro Max",
               "city": "Sacramento",
               "price": 1100
             },
             {
               "month": "April",
               "model": "8",
               "city": "Sacramento",
               "price": 700
             },
             {
               "month": "January",
               "model": "12 Pro",
               "city": "Sacramento",
               "price": 700
             },
             {
               "month": "March",
               "model": "11",
               "city": "Sacramento",
               "price": 1000
             },
             {
               "month": "April",
               "model": "11 Pro Max",
               "city": "Sacramento",
               "price": 700
             },
             {
               "month": "April",
               "model": "12",
               "city": "Sacramento",
               "price": 1000
             },
             {
               "month": "January",
               "model": "11 Pro Max",
               "city": "Sacramento",
               "price": 700
             },
             {
               "month": "June",
               "model": "12 Pro Max",
               "city": "Sacramento",
               "price": 1400
             },
             {
               "month": "May",
               "model": "XR",
               "city": "Sacramento",
               "price": 700
             },
             {
               "month": "May",
               "model": "13 Pro",
               "city": "Sacramento",
               "price": 1300
             },
             {
               "month": "February",
               "model": "11",
               "city": "Sacramento",
               "price": 700
             },
             {
               "month": "May",
               "model": "12 Pro Max",
               "city": "Sacramento",
               "price": 1100
             },
             {
               "month": "May",
               "model": "11",
               "city": "Sacramento",
               "price": 1400
             },
             {
               "month": "April",
               "model": "12 Pro",
               "city": "Sacramento",
               "price": 700
             },
             {
               "month": "February",
               "model": "13 Pro",
               "city": "Sacramento",
               "price": 700
             },
             {
               "month": "February",
               "model": "11 Pro Max",
               "city": "Sacramento",
               "price": 800
             },
             {
               "month": "January",
               "model": "XR",
               "city": "Sacramento",
               "price": 600
             },
             {
               "month": "April",
               "model": "11 Pro",
               "city": "Sacramento",
               "price": 600
             },
             {
               "month": "February",
               "model": "12 Pro Max",
               "city": "Sacramento",
               "price": 700
             },
             {
               "month": "January",
               "model": "X",
               "city": "Sacramento",
               "price": 1000
             },
             {
               "month": "February",
               "model": "11",
               "city": "Sacramento",
               "price": 600
             },
             {
               "month": "April",
               "model": "12",
               "city": "Sacramento",
               "price": 1000
             },
             {
               "month": "March",
               "model": "12 Pro Max",
               "city": "Sacramento",
               "price": 1000
             },
             {
               "month": "January",
               "model": "12",
               "city": "Sacramento",
               "price": 600
             },
             {
               "month": "March",
               "model": "12 Pro Max",
               "city": "Sacramento",
               "price": 1000
             },
             {
               "month": "March",
               "model": "X",
               "city": "Sacramento",
               "price": 500
             },
             {
               "month": "June",
               "model": "12",
               "city": "Sacramento",
               "price": 1300
             },
             {
               "month": "April",
               "model": "8 Plus",
               "city": "Sacramento",
               "price": 700
             },
             {
               "month": "May",
               "model": "13 Pro Max",
               "city": "Sacramento",
               "price": 1300
             },
             {
               "month": "June",
               "model": "11 Pro Max",
               "city": "Sacramento",
               "price": 600
             },
             {
               "month": "February",
               "model": "13",
               "city": "Sacramento",
               "price": 700
             },
             {
               "month": "February",
               "model": "13 Pro Max",
               "city": "Sacramento",
               "price": 800
             },
             {
               "month": "May",
               "model": "11",
               "city": "Sacramento",
               "price": 1100
             },
             {
               "month": "January",
               "model": "11 Pro",
               "city": "Sacramento",
               "price": 600
             },
             {
               "month": "May",
               "model": "12 Pro",
               "city": "Sacramento",
               "price": 700
             },
             {
               "month": "March",
               "model": "X",
               "city": "Sacramento",
               "price": 1000
             },
             {
               "month": "February",
               "model": "XR",
               "city": "Sacramento",
               "price": 1100
             },
             {
               "month": "April",
               "model": "12 Pro Max",
               "city": "Sacramento",
               "price": 1100
             },
             {
               "month": "February",
               "model": "12 Pro",
               "city": "Sacramento",
               "price": 800
             },
             {
               "month": "February",
               "model": "XR",
               "city": "Sacramento",
               "price": 600
             },
             {
               "month": "January",
               "model": "11 Pro",
               "city": "Sacramento",
               "price": 700
             },
             {
               "month": "February",
               "model": "13 Pro Max",
               "city": "Sacramento",
               "price": 1000
             },
             {
               "month": "June",
               "model": "XR",
               "city": "Sacramento",
               "price": 500
             },
             {
               "month": "April",
               "model": "12 Pro Max",
               "city": "Sacramento",
               "price": 1000
             },
             {
               "month": "January",
               "model": "8 Plus",
               "city": "Sacramento",
               "price": 1400
             },
             {
               "month": "March",
               "model": "12",
               "city": "Sacramento",
               "price": 1000
             },
             {
               "month": "March",
               "model": "13 Pro",
               "city": "Sacramento",
               "price": 700
             },
             {
               "month": "February",
               "model": "12 Pro Max",
               "city": "Sacramento",
               "price": 1400
             },
             {
               "month": "June",
               "model": "11",
               "city": "Sacramento",
               "price": 600
             },
             {
               "month": "February",
               "model": "13 Pro",
               "city": "Sacramento",
               "price": 1300
             },
             {
               "month": "June",
               "model": "13 Pro Max",
               "city": "Sacramento",
               "price": 600
             },
             {
               "month": "May",
               "model": "13 Pro Max",
               "city": "Sacramento",
               "price": 1000
             },
             {
               "month": "March",
               "model": "X",
               "city": "Sacramento",
               "price": 700
             },
             {
               "month": "May",
               "model": "12 Pro Max",
               "city": "Sacramento",
               "price": 800
             },
             {
               "month": "June",
               "model": "11",
               "city": "Sacramento",
               "price": 1000
             },
             {
               "month": "May",
               "model": "11 Pro",
               "city": "Sacramento",
               "price": 800
             },
             {
               "month": "May",
               "model": "12",
               "city": "Sacramento",
               "price": 1000
             },
             {
               "month": "May",
               "model": "11 Pro",
               "city": "Sacramento",
               "price": 600
             },
             {
               "month": "January",
               "model": "13 Pro Max",
               "city": "Sacramento",
               "price": 1100
             },
             {
               "month": "May",
               "model": "8 Plus",
               "city": "Sacramento",
               "price": 1000
             },
             {
               "month": "February",
               "model": "12 Pro",
               "city": "Sacramento",
               "price": 700
             },
             {
               "month": "April",
               "model": "13 Pro Max",
               "city": "Sacramento",
               "price": 700
             },
             {
               "month": "April",
               "model": "11 Pro Max",
               "city": "Sacramento",
               "price": 1100
             },
             {
               "month": "April",
               "model": "XR",
               "city": "Sacramento",
               "price": 1100
             },
             {
               "month": "March",
               "model": "12 Pro",
               "city": "Sacramento",
               "price": 500
             },
             {
               "month": "May",
               "model": "12 Pro",
               "city": "Sacramento",
               "price": 1000
             },
             {
               "month": "April",
               "model": "8",
               "city": "Sacramento",
               "price": 1000
             },
             {
               "month": "February",
               "model": "12",
               "city": "Sacramento",
               "price": 1100
             },
             {
               "month": "March",
               "model": "12",
               "city": "Sacramento",
               "price": 1000
             },
             {
               "month": "March",
               "model": "XR",
               "city": "Sacramento",
               "price": 1000
             },
             {
               "month": "May",
               "model": "12",
               "city": "Sacramento",
               "price": 600
             },
             {
               "month": "May",
               "model": "12 Pro Max",
               "city": "Sacramento",
               "price": 1400
             },
             {
               "month": "March",
               "model": "X",
               "city": "Sacramento",
               "price": 700
             },
             {
               "month": "January",
               "model": "13 Pro",
               "city": "Fresno",
               "price": 600
             },
             {
               "month": "January",
               "model": "XR",
               "city": "Fresno",
               "price": 800
             },
             {
               "month": "February",
               "model": "13 Pro Max",
               "city": "Fresno",
               "price": 1100
             },
             {
               "month": "April",
               "model": "11 Pro",
               "city": "Fresno",
               "price": 600
             },
             {
               "month": "June",
               "model": "12 Pro",
               "city": "Fresno",
               "price": 1400
             },
             {
               "month": "May",
               "model": "13 Pro Max",
               "city": "Fresno",
               "price": 800
             },
             {
               "month": "June",
               "model": "13 Pro",
               "city": "Fresno",
               "price": 700
             },
             {
               "month": "June",
               "model": "11 Pro",
               "city": "Fresno",
               "price": 1400
             },
             {
               "month": "May",
               "model": "XR",
               "city": "Fresno",
               "price": 800
             },
             {
               "month": "February",
               "model": "13 Pro",
               "city": "Fresno",
               "price": 700
             },
             {
               "month": "June",
               "model": "11 Pro",
               "city": "Fresno",
               "price": 1000
             },
             {
               "month": "March",
               "model": "11",
               "city": "Fresno",
               "price": 700
             },
             {
               "month": "June",
               "model": "12",
               "city": "Fresno",
               "price": 700
             },
             {
               "month": "April",
               "model": "11",
               "city": "Fresno",
               "price": 1000
             },
             {
               "month": "February",
               "model": "XR",
               "city": "Fresno",
               "price": 500
             },
             {
               "month": "February",
               "model": "12",
               "city": "Fresno",
               "price": 1300
             },
             {
               "month": "February",
               "model": "8 Plus",
               "city": "Fresno",
               "price": 600
             },
             {
               "month": "February",
               "model": "13 Pro Max",
               "city": "Fresno",
               "price": 1000
             },
             {
               "month": "June",
               "model": "X",
               "city": "Fresno",
               "price": 700
             },
             {
               "month": "January",
               "model": "13 Pro Max",
               "city": "Fresno",
               "price": 700
             },
             {
               "month": "March",
               "model": "11",
               "city": "Fresno",
               "price": 700
             },
             {
               "month": "February",
               "model": "11",
               "city": "Fresno",
               "price": 700
             },
             {
               "month": "June",
               "model": "11 Pro Max",
               "city": "Fresno",
               "price": 700
             },
             {
               "month": "June",
               "model": "11",
               "city": "Fresno",
               "price": 1000
             },
             {
               "month": "May",
               "model": "11",
               "city": "Fresno",
               "price": 500
             },
             {
               "month": "May",
               "model": "12 Pro Max",
               "city": "Fresno",
               "price": 1000
             },
             {
               "month": "March",
               "model": "8 Plus",
               "city": "Fresno",
               "price": 600
             },
             {
               "month": "June",
               "model": "13 Pro Max",
               "city": "Fresno",
               "price": 1100
             },
             {
               "month": "June",
               "model": "8 Plus",
               "city": "Fresno",
               "price": 1000
             },
             {
               "month": "March",
               "model": "12 Pro",
               "city": "Fresno",
               "price": 600
             },
             {
               "month": "March",
               "model": "13 Pro Max",
               "city": "Fresno",
               "price": 1400
             },
             {
               "month": "January",
               "model": "8 Plus",
               "city": "Fresno",
               "price": 1100
             },
             {
               "month": "June",
               "model": "13 Pro",
               "city": "Fresno",
               "price": 1400
             },
             {
               "month": "May",
               "model": "XR",
               "city": "Fresno",
               "price": 1000
             },
             {
               "month": "March",
               "model": "13 Pro",
               "city": "Fresno",
               "price": 1300
             },
             {
               "month": "April",
               "model": "12 Pro Max",
               "city": "Fresno",
               "price": 600
             },
             {
               "month": "March",
               "model": "13",
               "city": "Fresno",
               "price": 700
             },
             {
               "month": "April",
               "model": "X",
               "city": "Fresno",
               "price": 1300
             },
             {
               "month": "February",
               "model": "XR",
               "city": "Fresno",
               "price": 1000
             },
             {
               "month": "June",
               "model": "13 Pro Max",
               "city": "Fresno",
               "price": 1000
             },
             {
               "month": "May",
               "model": "12",
               "city": "Fresno",
               "price": 1000
             },
             {
               "month": "June",
               "model": "12",
               "city": "Fresno",
               "price": 700
             },
             {
               "month": "June",
               "model": "12",
               "city": "Fresno",
               "price": 500
             },
             {
               "month": "February",
               "model": "11",
               "city": "Fresno",
               "price": 700
             },
             {
               "month": "January",
               "model": "8",
               "city": "Fresno",
               "price": 700
             },
             {
               "month": "March",
               "model": "XR",
               "city": "Fresno",
               "price": 1000
             },
             {
               "month": "March",
               "model": "11 Pro Max",
               "city": "Fresno",
               "price": 1100
             },
             {
               "month": "May",
               "model": "13 Pro Max",
               "city": "Fresno",
               "price": 1300
             },
             {
               "month": "February",
               "model": "12 Pro",
               "city": "Fresno",
               "price": 500
             },
             {
               "month": "June",
               "model": "13",
               "city": "Fresno",
               "price": 700
             },
             {
               "month": "April",
               "model": "8 Plus",
               "city": "Fresno",
               "price": 700
             },
             {
               "month": "June",
               "model": "11",
               "city": "Fresno",
               "price": 700
             },
             {
               "month": "May",
               "model": "XR",
               "city": "Fresno",
               "price": 1300
             },
             {
               "month": "May",
               "model": "XR",
               "city": "Fresno",
               "price": 1100
             },
             {
               "month": "April",
               "model": "13",
               "city": "Fresno",
               "price": 700
             },
             {
               "month": "February",
               "model": "XR",
               "city": "Fresno",
               "price": 500
             },
             {
               "month": "June",
               "model": "XR",
               "city": "Fresno",
               "price": 700
             },
             {
               "month": "June",
               "model": "8 Plus",
               "city": "Fresno",
               "price": 700
             },
             {
               "month": "June",
               "model": "XR",
               "city": "Fresno",
               "price": 1300
             },
             {
               "month": "June",
               "model": "11 Pro Max",
               "city": "Fresno",
               "price": 1000
             },
             {
               "month": "March",
               "model": "13 Pro Max",
               "city": "Fresno",
               "price": 700
             },
             {
               "month": "March",
               "model": "13 Pro Max",
               "city": "Fresno",
               "price": 600
             },
             {
               "month": "May",
               "model": "XR",
               "city": "Fresno",
               "price": 700
             },
             {
               "month": "April",
               "model": "13 Pro Max",
               "city": "Fresno",
               "price": 600
             },
             {
               "month": "March",
               "model": "11 Pro Max",
               "city": "Long Beach",
               "price": 600
             },
             {
               "month": "March",
               "model": "8 Plus",
               "city": "Long Beach",
               "price": 1100
             },
             {
               "month": "January",
               "model": "13 Pro Max",
               "city": "Long Beach",
               "price": 1000
             },
             {
               "month": "February",
               "model": "12 Pro",
               "city": "Long Beach",
               "price": 1000
             },
             {
               "month": "June",
               "model": "12",
               "city": "Long Beach",
               "price": 600
             },
             {
               "month": "March",
               "model": "X",
               "city": "Long Beach",
               "price": 600
             },
             {
               "month": "March",
               "model": "X",
               "city": "Long Beach",
               "price": 1300
             },
             {
               "month": "June",
               "model": "13 Pro Max",
               "city": "Long Beach",
               "price": 500
             },
             {
               "month": "June",
               "model": "13",
               "city": "Long Beach",
               "price": 1300
             },
             {
               "month": "April",
               "model": "8",
               "city": "Long Beach",
               "price": 1100
             },
             {
               "month": "April",
               "model": "13",
               "city": "Long Beach",
               "price": 1000
             },
             {
               "month": "May",
               "model": "12 Pro",
               "city": "Long Beach",
               "price": 1100
             },
             {
               "month": "February",
               "model": "X",
               "city": "Long Beach",
               "price": 600
             },
             {
               "month": "February",
               "model": "12 Pro",
               "city": "Long Beach",
               "price": 700
             },
             {
               "month": "March",
               "model": "13 Pro Max",
               "city": "Long Beach",
               "price": 500
             },
             {
               "month": "May",
               "model": "11",
               "city": "Long Beach",
               "price": 1000
             },
             {
               "month": "January",
               "model": "8",
               "city": "Long Beach",
               "price": 600
             },
             {
               "month": "June",
               "model": "13 Pro Max",
               "city": "Long Beach",
               "price": 500
             },
             {
               "month": "February",
               "model": "X",
               "city": "Long Beach",
               "price": 1000
             },
             {
               "month": "February",
               "model": "8",
               "city": "Long Beach",
               "price": 1100
             },
             {
               "month": "June",
               "model": "13 Pro Max",
               "city": "Long Beach",
               "price": 700
             },
             {
               "month": "April",
               "model": "12 Pro",
               "city": "Long Beach",
               "price": 1300
             },
             {
               "month": "January",
               "model": "XR",
               "city": "Long Beach",
               "price": 1000
             },
             {
               "month": "June",
               "model": "13 Pro Max",
               "city": "Long Beach",
               "price": 600
             },
             {
               "month": "April",
               "model": "12 Pro Max",
               "city": "Long Beach",
               "price": 1300
             },
             {
               "month": "May",
               "model": "13 Pro Max",
               "city": "Long Beach",
               "price": 700
             },
             {
               "month": "February",
               "model": "13",
               "city": "Long Beach",
               "price": 600
             },
             {
               "month": "January",
               "model": "11",
               "city": "Long Beach",
               "price": 700
             },
             {
               "month": "June",
               "model": "13 Pro Max",
               "city": "Long Beach",
               "price": 700
             },
             {
               "month": "May",
               "model": "XR",
               "city": "Long Beach",
               "price": 1000
             },
             {
               "month": "April",
               "model": "11 Pro Max",
               "city": "Long Beach",
               "price": 1400
             },
             {
               "month": "February",
               "model": "12 Pro Max",
               "city": "Long Beach",
               "price": 1000
             },
             {
               "month": "March",
               "model": "13 Pro",
               "city": "Long Beach",
               "price": 700
             },
             {
               "month": "May",
               "model": "12 Pro Max",
               "city": "Long Beach",
               "price": 1400
             },
             {
               "month": "March",
               "model": "11 Pro Max",
               "city": "Long Beach",
               "price": 1100
             },
             {
               "month": "June",
               "model": "13 Pro",
               "city": "Long Beach",
               "price": 700
             },
             {
               "month": "April",
               "model": "12 Pro",
               "city": "Long Beach",
               "price": 700
             },
             {
               "month": "June",
               "model": "11 Pro Max",
               "city": "Long Beach",
               "price": 1100
             },
             {
               "month": "April",
               "model": "XR",
               "city": "Long Beach",
               "price": 600
             },
             {
               "month": "January",
               "model": "12 Pro",
               "city": "Long Beach",
               "price": 500
             },
             {
               "month": "June",
               "model": "X",
               "city": "Long Beach",
               "price": 1400
             },
             {
               "month": "May",
               "model": "8",
               "city": "Long Beach",
               "price": 1000
             },
             {
               "month": "March",
               "model": "13 Pro",
               "city": "Long Beach",
               "price": 800
             },
             {
               "month": "February",
               "model": "12 Pro Max",
               "city": "Long Beach",
               "price": 1100
             },
             {
               "month": "January",
               "model": "11 Pro",
               "city": "Long Beach",
               "price": 1300
             },
             {
               "month": "February",
               "model": "12 Pro",
               "city": "Long Beach",
               "price": 600
             },
             {
               "month": "May",
               "model": "13 Pro Max",
               "city": "Long Beach",
               "price": 1300
             },
             {
               "month": "April",
               "model": "X",
               "city": "Long Beach",
               "price": 1000
             },
             {
               "month": "January",
               "model": "13 Pro Max",
               "city": "Long Beach",
               "price": 1100
             },
             {
               "month": "April",
               "model": "X",
               "city": "Long Beach",
               "price": 1400
             },
             {
               "month": "May",
               "model": "12 Pro",
               "city": "Long Beach",
               "price": 1100
             },
             {
               "month": "March",
               "model": "13 Pro",
               "city": "Long Beach",
               "price": 500
             },
             {
               "month": "May",
               "model": "12 Pro",
               "city": "Long Beach",
               "price": 1100
             },
             {
               "month": "April",
               "model": "8",
               "city": "Long Beach",
               "price": 1100
             },
             {
               "month": "June",
               "model": "12 Pro",
               "city": "Los Angeles",
               "price": 1000
             },
             {
               "month": "January",
               "model": "12 Pro",
               "city": "Los Angeles",
               "price": 1000
             },
             {
               "month": "March",
               "model": "12",
               "city": "Los Angeles",
               "price": 700
             },
             {
               "month": "February",
               "model": "12",
               "city": "Los Angeles",
               "price": 1000
             },
             {
               "month": "February",
               "model": "XR",
               "city": "Los Angeles",
               "price": 500
             },
             {
               "month": "January",
               "model": "X",
               "city": "Los Angeles",
               "price": 700
             },
             {
               "month": "June",
               "model": "8",
               "city": "Los Angeles",
               "price": 1300
             },
             {
               "month": "March",
               "model": "XR",
               "city": "Los Angeles",
               "price": 1300
             },
             {
               "month": "April",
               "model": "13",
               "city": "Los Angeles",
               "price": 700
             },
             {
               "month": "June",
               "model": "13",
               "city": "Los Angeles",
               "price": 700
             },
             {
               "month": "January",
               "model": "11 Pro Max",
               "city": "Los Angeles",
               "price": 700
             },
             {
               "month": "May",
               "model": "XR",
               "city": "Los Angeles",
               "price": 1300
             },
             {
               "month": "June",
               "model": "11 Pro Max",
               "city": "Los Angeles",
               "price": 1000
             },
             {
               "month": "February",
               "model": "13 Pro Max",
               "city": "Los Angeles",
               "price": 1300
             },
             {
               "month": "February",
               "model": "12",
               "city": "Los Angeles",
               "price": 1300
             },
             {
               "month": "April",
               "model": "13",
               "city": "Los Angeles",
               "price": 1400
             },
             {
               "month": "March",
               "model": "13",
               "city": "Los Angeles",
               "price": 700
             },
             {
               "month": "March",
               "model": "13 Pro",
               "city": "Los Angeles",
               "price": 700
             },
             {
               "month": "June",
               "model": "11 Pro Max",
               "city": "Los Angeles",
               "price": 600
             },
             {
               "month": "April",
               "model": "XR",
               "city": "Los Angeles",
               "price": 700
             },
             {
               "month": "March",
               "model": "X",
               "city": "Los Angeles",
               "price": 1000
             },
             {
               "month": "June",
               "model": "XR",
               "city": "Los Angeles",
               "price": 1300
             },
             {
               "month": "March",
               "model": "12",
               "city": "Los Angeles",
               "price": 1100
             },
             {
               "month": "January",
               "model": "13 Pro Max",
               "city": "Los Angeles",
               "price": 1100
             },
             {
               "month": "June",
               "model": "12 Pro",
               "city": "Los Angeles",
               "price": 1100
             },
             {
               "month": "January",
               "model": "XR",
               "city": "Los Angeles",
               "price": 700
             },
             {
               "month": "April",
               "model": "12 Pro",
               "city": "Los Angeles",
               "price": 1000
             },
             {
               "month": "May",
               "model": "11",
               "city": "Los Angeles",
               "price": 1100
             },
             {
               "month": "March",
               "model": "12",
               "city": "Los Angeles",
               "price": 1300
             },
             {
               "month": "March",
               "model": "12 Pro",
               "city": "Los Angeles",
               "price": 700
             },
             {
               "month": "February",
               "model": "13 Pro Max",
               "city": "Los Angeles",
               "price": 1100
             },
             {
               "month": "May",
               "model": "11",
               "city": "Los Angeles",
               "price": 800
             },
             {
               "month": "June",
               "model": "12 Pro",
               "city": "Los Angeles",
               "price": 700
             },
             {
               "month": "April",
               "model": "11 Pro",
               "city": "Los Angeles",
               "price": 800
             },
             {
               "month": "May",
               "model": "11 Pro Max",
               "city": "Los Angeles",
               "price": 500
             },
             {
               "month": "April",
               "model": "11 Pro",
               "city": "Los Angeles",
               "price": 1400
             },
             {
               "month": "January",
               "model": "8 Plus",
               "city": "Los Angeles",
               "price": 1300
             },
             {
               "month": "June",
               "model": "13 Pro",
               "city": "Los Angeles",
               "price": 700
             },
             {
               "month": "April",
               "model": "13 Pro Max",
               "city": "Los Angeles",
               "price": 1000
             },
             {
               "month": "January",
               "model": "11 Pro Max",
               "city": "Los Angeles",
               "price": 1000
             },
             {
               "month": "January",
               "model": "X",
               "city": "Los Angeles",
               "price": 600
             },
             {
               "month": "May",
               "model": "12 Pro Max",
               "city": "Los Angeles",
               "price": 1300
             },
             {
               "month": "May",
               "model": "8 Plus",
               "city": "Los Angeles",
               "price": 700
             },
             {
               "month": "April",
               "model": "13 Pro Max",
               "city": "Los Angeles",
               "price": 1000
             },
             {
               "month": "April",
               "model": "11 Pro Max",
               "city": "Los Angeles",
               "price": 1000
             },
             {
               "month": "June",
               "model": "13 Pro Max",
               "city": "Los Angeles",
               "price": 600
             },
             {
               "month": "May",
               "model": "12",
               "city": "Los Angeles",
               "price": 1000
             },
             {
               "month": "May",
               "model": "13 Pro Max",
               "city": "Los Angeles",
               "price": 700
             },
             {
               "month": "May",
               "model": "12 Pro Max",
               "city": "Los Angeles",
               "price": 800
             },
             {
               "month": "April",
               "model": "11 Pro Max",
               "city": "Los Angeles",
               "price": 1100
             },
             {
               "month": "February",
               "model": "11 Pro",
               "city": "Los Angeles",
               "price": 1100
             },
             {
               "month": "June",
               "model": "12 Pro",
               "city": "Los Angeles",
               "price": 1100
             },
             {
               "month": "May",
               "model": "12 Pro",
               "city": "Los Angeles",
               "price": 1300
             },
             {
               "month": "February",
               "model": "12 Pro",
               "city": "Los Angeles",
               "price": 1100
             },
             {
               "month": "January",
               "model": "13",
               "city": "Los Angeles",
               "price": 600
             },
             {
               "month": "June",
               "model": "12 Pro",
               "city": "Los Angeles",
               "price": 600
             },
             {
               "month": "May",
               "model": "8 Plus",
               "city": "Los Angeles",
               "price": 1300
             },
             {
               "month": "April",
               "model": "13 Pro Max",
               "city": "Los Angeles",
               "price": 700
             },
             {
               "month": "January",
               "model": "13 Pro Max",
               "city": "Los Angeles",
               "price": 700
             },
             {
               "month": "June",
               "model": "XR",
               "city": "Los Angeles",
               "price": 1000
             },
             {
               "month": "February",
               "model": "11 Pro Max",
               "city": "Los Angeles",
               "price": 600
             },
             {
               "month": "January",
               "model": "12",
               "city": "Los Angeles",
               "price": 1000
             },
             {
               "month": "January",
               "model": "13 Pro Max",
               "city": "Los Angeles",
               "price": 700
             },
             {
               "month": "March",
               "model": "13 Pro Max",
               "city": "Los Angeles",
               "price": 600
             },
             {
               "month": "June",
               "model": "11 Pro Max",
               "city": "Los Angeles",
               "price": 600
             },
             {
               "month": "March",
               "model": "8 Plus",
               "city": "Los Angeles",
               "price": 700
             },
             {
               "month": "January",
               "model": "13 Pro Max",
               "city": "Los Angeles",
               "price": 800
             },
             {
               "month": "January",
               "model": "11 Pro Max",
               "city": "Los Angeles",
               "price": 700
             },
             {
               "month": "May",
               "model": "11 Pro",
               "city": "Los Angeles",
               "price": 1400
             },
             {
               "month": "March",
               "model": "XR",
               "city": "Los Angeles",
               "price": 1300
             },
             {
               "month": "June",
               "model": "13 Pro",
               "city": "Los Angeles",
               "price": 700
             },
             {
               "month": "March",
               "model": "13",
               "city": "Los Angeles",
               "price": 800
             },
             {
               "month": "May",
               "model": "11",
               "city": "Los Angeles",
               "price": 1300
             },
             {
               "month": "June",
               "model": "11 Pro",
               "city": "Los Angeles",
               "price": 700
             },
             {
               "month": "June",
               "model": "13 Pro Max",
               "city": "Los Angeles",
               "price": 600
             },
             {
               "month": "May",
               "model": "11 Pro Max",
               "city": "Los Angeles",
               "price": 1300
             },
             {
               "month": "February",
               "model": "13 Pro Max",
               "city": "Los Angeles",
               "price": 700
             },
             {
               "month": "January",
               "model": "13 Pro Max",
               "city": "Los Angeles",
               "price": 700
             },
             {
               "month": "January",
               "model": "XR",
               "city": "Los Angeles",
               "price": 800
             },
             {
               "month": "January",
               "model": "11",
               "city": "Los Angeles",
               "price": 1300
             },
             {
               "month": "January",
               "model": "11 Pro",
               "city": "Los Angeles",
               "price": 1400
             },
             {
               "month": "February",
               "model": "13 Pro Max",
               "city": "Los Angeles",
               "price": 600
             },
             {
               "month": "January",
               "model": "13 Pro",
               "city": "Los Angeles",
               "price": 1000
             },
             {
               "month": "January",
               "model": "X",
               "city": "Los Angeles",
               "price": 700
             },
             {
               "month": "May",
               "model": "12 Pro Max",
               "city": "Los Angeles",
               "price": 1100
             },
             {
               "month": "February",
               "model": "XR",
               "city": "Los Angeles",
               "price": 600
             },
             {
               "month": "February",
               "model": "12 Pro",
               "city": "Los Angeles",
               "price": 1100
             },
             {
               "month": "April",
               "model": "13 Pro Max",
               "city": "Los Angeles",
               "price": 700
             },
             {
               "month": "June",
               "model": "12 Pro",
               "city": "Los Angeles",
               "price": 1000
             },
             {
               "month": "June",
               "model": "XR",
               "city": "Los Angeles",
               "price": 600
             },
             {
               "month": "June",
               "model": "12",
               "city": "Los Angeles",
               "price": 1300
             },
             {
               "month": "March",
               "model": "13 Pro Max",
               "city": "Los Angeles",
               "price": 700
             },
             {
               "month": "June",
               "model": "13 Pro Max",
               "city": "Los Angeles",
               "price": 700
             },
             {
               "month": "June",
               "model": "11 Pro Max",
               "city": "Los Angeles",
               "price": 800
             },
             {
               "month": "January",
               "model": "11",
               "city": "Los Angeles",
               "price": 1300
             },
             {
               "month": "April",
               "model": "11 Pro",
               "city": "Los Angeles",
               "price": 1300
             },
             {
               "month": "February",
               "model": "13",
               "city": "Los Angeles",
               "price": 1300
             },
             {
               "month": "March",
               "model": "13 Pro Max",
               "city": "Los Angeles",
               "price": 600
             },
             {
               "month": "May",
               "model": "13",
               "city": "Los Angeles",
               "price": 700
             },
             {
               "month": "March",
               "model": "13 Pro",
               "city": "Los Angeles",
               "price": 700
             },
             {
               "month": "April",
               "model": "11",
               "city": "Los Angeles",
               "price": 1100
             },
             {
               "month": "February",
               "model": "11 Pro Max",
               "city": "Los Angeles",
               "price": 700
             },
             {
               "month": "February",
               "model": "12 Pro",
               "city": "Los Angeles",
               "price": 1100
             }
           ]
}