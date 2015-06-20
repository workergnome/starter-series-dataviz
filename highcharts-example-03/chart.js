$('#container').highcharts({
  // Define chart type
  chart: {
      type: 'column'
  },
  // Define chart title
  title: {
      text: 'Cars Per Line'
  },
  data: {
    googleSpreadsheetKey: '1MplqM1l3YE7nmqjocyQbKruLbLOBN-n90MM1-1H9cSI',  // <- set the data source
  },
});
