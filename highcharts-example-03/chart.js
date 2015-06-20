$.get('../sample_data/subway_lines.csv', function(csvData) {
  $('#container').highcharts({
    // Define chart type
    chart: {
        type: 'column'
    },
    // Define chart title
    title: {
        text: 'Cars Per Line'
    },
    // This loads data from the csv string.
    // (note that using this requires the data module to be included).
    data: {
      csv: csvData,  // <- set the data source
    },
  });
});