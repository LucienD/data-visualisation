$(function () {
    $('#column').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Activités principales lors de la navigation sur internet'
        },
        subtitle: {
            text: 'Source: Data Publica'
        },
		
		credits: {
            enabled: false
        },
		
		
        xAxis: {
            categories: [
                'Mails',
                'Recherches',
                'Banque',
                'Apprendre',
                'Vacances',
                'Informations santé',
                'Conversations/forums',
                'Enchères',
                'Journaux',
                'Téléchargement de logiciels',
                'Emploi'
            ]
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Pourcentage'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: '15-29 ans',
            data: [93.9, 84.4, 59.3, 68.8, 51, 47.6, 77.4, 32.4,28.7, 40.1, 32.5],
      },
	  
	  {
            name: '30-44 ans',
            data: [90.8, 85.4, 72.7, 60.3, 60.1, 46.2, 34.1, 35,27, 23.1, 23],
      },
	  
	  {
            name: '45-59 ans',
            data: [90.3, 81.9, 67.5, 58.7, 50.6, 42.9, 25.6, 25,24.5, 17.7, 14.1],
      },
	  
	  {
            name: '60-74 ans',
            data: [89.8, 76.5, 62.4, 58.2, 40.2, 48.3, 15.4, 20.2,29.7, 15.2, 0.5],
      },
	  {
            name: 'Plus de 75 ans',
            data: [73.3, 54.9, 34, 65.4, 18.5, 42.8, 4.7, 3.2,22.1, 7.6, 1.2],
      }]
    });
});