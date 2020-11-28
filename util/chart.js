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
                    backgroundColor: [options[i].colors[1]],
                    borderColor: [options[i].colors[0]],
                    borderWidth: 1
                }]
            },
            responsive: true,
            maintainAspectRatio: false,
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
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

function msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
        seconds = Math.floor((duration / 1000) % 60),
        minutes = Math.floor((duration / (1000 * 60)) % 60),
        hours = Math.floor((duration / (1000 * 60 * 60)) % 24) - 3; //BR hour -3

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    return `${hours}:${minutes}:${seconds}`
}


function lastOneMinute(chart) {
    if (chart.config.data.labels.length == 0) {
        return;
    }

    if (chart.config.data.labels.length > 60) {
        chart.config.data.labels.shift();
        chart.config.data.datasets[0].data.shift();
    }
}

export default {
    initCharts,
    msToTime,
    lastOneMinute,
}
