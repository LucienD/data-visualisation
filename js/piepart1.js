$(function () {
    $('#combo').highcharts({
        title: {
            text: 'Inscriptions aux réseaux sociaux'
        },
         subtitle: {
            text: 'Basé sur les 208 réponses à notre questionnaire'
        },
        xAxis: {
            categories: ['Facebook', 'Snapchat', 'Instagram', 'Twitter', 'Linkedin', 'Pinterest'],
        },
        
        yAxis: {
            min: 0,
            title: {
                text: 'Pourcentage de personnes interrogées',
                align: 'high'
            },
          
        },
         credits: {
            enabled: false
        },
           plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                },
                showInLegend: false
                },
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: false
                }
            },
            
            
        series: [{
            type: 'bar',
            name: 'Pourcentage de personnes inscrites',
            data: [100, 56, 32, 30, 28]
        }, 
        
        {
             type: 'pie',
             
                name: 'Pourcentage des interrogés',
                tooltip: {
            valueSuffix: '%',
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
         
             },
                data: [
                    ['Inscrits sur 1 réseau',   18.75],
                    
                    {
                        name: 'Inscrits sur 2 réseaux',
                        y: 31.25,
                        sliced: true,
                        selected: true
                    },
                    ['Inscrits sur 3 réseaux',       25],
                    ['Inscrits sur 4 réseaux',    13.46],
                    ['Inscrits sur 5 réseaux',     10.1],
                    ['Inscrits sur 6 réseaux',   1.44]
                ],
                center: [370, 100],
                size: 160,
                
        }, ]
    });
});