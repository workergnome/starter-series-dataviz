$.getJSON('../sample_data/subway_lines.json', function(data) {
    $('#container').highcharts({

        // Define chart type
        chart: {
            type: 'column'
        },
        // Define chart title
        title: {
            text: 'Cars Per Line'
        },

        // Set up the axis
        xAxis: {
            categories: data.lines
        },

        // Set up the data series
        series: [{
          data: data.cars_per_line
        }],
    });
});