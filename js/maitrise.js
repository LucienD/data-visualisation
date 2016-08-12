$(function () {
    $('#box').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Maîtriser ses données personnelles sur internet'
        },
        xAxis: {
            categories: ['Les traces de navigation sur internet', 'Les informations que vous publiez sur internet']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Pourcentage des interrogés'
            }
			
        },
		 tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
		
		credits: {
            enabled: false
        },
        legend: {
            reversed: true
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        series: [{
            name: 'Sans opinion',
            data: [12, 10]
        }, {
            name: 'Très difficile',
            data: [19,20]
        }, {
            name: 'Assez Difficile',
            data: [21, 23]
        }, {
            name: 'Assez facile',
            data: [36, 39]
        },{
            name: 'Très facile',
            data: [12, 8]
        }]
    });
});