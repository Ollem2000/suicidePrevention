document.addEventListener('DOMContentLoaded', function () {
        const chart = Highcharts.chart('chart1', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Fruit Evolução das taxas de mortalidade por suicídio, ajustadas por idade, segundo região. Brasil, 2010 a 2019'
            },
            xAxis: {
                categories: ['2010', '2011', '2012', '2013', '2014', '2015']
            },
            yAxis: {
                title: {
                    text: 'Taxa de mortalidade (por 100 mil hab.)'
                }
            },
            series: [
			{
                name: 'Brasil',
                data: [5.24, 5.37, 5.53, 5.54, 5.56, 5.72, 5.77, 6.24, 6.28, 6.65]
            }, 
			{
                name: 'Centro-Oeste',
                data: [6.18, 6.02, 6.79, 6.83, 6.64, 6.49, 6.97, 7.43, 7.76, 8.30]
            }, 
			{
                name: 'Nordeste',
                data: [4.39, 4.68, 4.70, 4.95, 4.68, 4.90, 5.17, 5.60, 5.55, 5.67]
            }, 
			{
                name: 'Norte',
                data: [4.45, 4.79, 4.74, 5.02, 4.60, 5.64, 5.26, 5.57, 5.98, 6.28]
            }, 
			{
                name: 'Sudeste',
                data: [4.73, 4.88, 4.92, 4.80, 5.12, 5.11, 4.96, 5.37, 5.36, 5.70]
            }, 
			{
                name: 'Sul',
                data: [7.99, 7.81, 8.42, 8.30, 8.09, 8.47, 8.71, 9.53, 9.50, 10.41]
            }
			]
        });
    });