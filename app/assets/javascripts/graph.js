// source: http://jsfiddle.net/gh/get/jquery/1.9.1/highslide-software/highcharts.com/tree/master/samples/highcharts/demo/line-basic/
/*
 <script src="http://code.highcharts.com/highcharts.js"></script>
 <script src="http://code.highcharts.com/modules/exporting.js"></script>

 <div id="container" style="min-width: 310px; height: 400px; margin: 0 auto"></div>

 */
//  кстати эта библиотека называется highcharts.js, а graph.js я только один тип графиков отрисовываю.

$(function () {
    $('#container1').highcharts({
        title: {
            text: 'Среднемесячная температура',
            x: -20 //center
        },
        subtitle: {
            text: 'Источник: WorldClimate.com',
            x: -20
        },
        xAxis: {
            categories: $arg2    //['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек']
        },
        yAxis: {
            title: {
                text: $arg1     //'Температура (°C)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '°C'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'Москва',
            data: $serMos //[7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        }, {
            name: 'Ньюорк',
            data: $serNY  //[-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
        }, {
            name: 'Иркутск',
            data: $serIR  //[-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
        }, {
            name: 'Казань',
            data: $serKZ  //[3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        }]
    });
});