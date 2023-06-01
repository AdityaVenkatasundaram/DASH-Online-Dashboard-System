const submitForm = () => {
    let formData = {};
    formData.month = $('#title').val();
    formData.model = $('#image').val();
    formData.city = $('#link').val();
    formData.price = $('#desciption').val();

    console.log('form data: ', formData);
    adddata(formData);
}

const getJSONData = () => {
    $.get('/api/getData', (res) => {
        if (res.statusCode === 200) {
            jsonData(res.data);
        }
    });
}
const jsonData = (items) => {
    console.log(items);
    var pivot = new WebDataRocks({
    container: "#wdr-component",
    toolbar: false,
    "height": 400,
    report: {
        "dataSource": {
            "dataSourceType": "json",
            "data": items
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
}


 

const deleteForm = () => {
    let formData = {};
    formData.month = $('#titleDelete').val();
    
    console.log('form data: ', formData);
    deletedata(formData);
}



const adddata = (data) => {
    $.ajax({
        url: 'api/insertData',
        data: data,
        type: 'POST',
        success: (result) => {
            alert(result.message);
            location.reload();
        }
    });
}

const deletedata = (data) => {
    $.ajax({
        url: 'api/deleteData',
        data: data,
        type: 'DELETE',
        success: (result) => {
            alert(result.message);
            location.reload();
        }
    });
}

let socket = io();
socket.on('number', (msg) => {
    console.log('Random number: ' + msg);
});

$(document).ready(function(){
    $('.materialboxed').materialbox();
    $('.modal').modal();

    getJSONData();

    $('#formSubmit').click(()=>{
        submitForm();
    })

    $('#formDeleteSubmit').click(()=>{
        deleteForm();
    })
});