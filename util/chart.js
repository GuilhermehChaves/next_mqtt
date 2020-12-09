import Chart from 'chart.js';

function initCharts(options) {
    const charts = [];

    for (let i = 0; i < options.length; i++) {
        const chart = new Chart(options[i].ctx, {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: options[i].title,
                    data: [],
                    backgroundColor: options[i].colors[1],
                    borderColor: options[i].colors[0],
                    borderWidth: 1
                }]
            },
            responsive: true,
            maintainAspectRatio: false,
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            suggestedMax: 20,
                            suggestedMin: 0,
                        }
                    }]
                }
            }
        });

        charts.push(chart);
    }

    console.log("chart started...");
    return charts;
}

function time(date) {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return `${hours}:${minutes}:${seconds}`
}


function move(chart) {
    if (chart.config.data.labels.length == 0) {
        return;
    }

    if (chart.config.data.labels.length > 30) {
        chart.config.data.labels.shift();
        chart.config.data.datasets[0].data.shift();
    }
}

export default {
    initCharts,
    time,
    move,
}
