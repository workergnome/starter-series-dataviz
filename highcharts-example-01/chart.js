// jQuery loader
$(function () { 

  // Set up a basic bar chart
 
  $('#container').highcharts({
      chart: {
        type: 'column'  // <- Chart type
      },
      series: [{
          data: [3, 7, 10, 6, 2]
      }]
  });
});