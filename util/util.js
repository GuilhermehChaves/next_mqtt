import Chart from 'chart.js';

function initCharts(refs) {
    const riverChart = new Chart(refs[0], {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'Nível',
                data: [],
                backgroundColor: ['rgba(37,150,203,0.2)'],
                borderColor: ['rgb(37,150,203)'],
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

    const tempChart = new Chart(refs[1], {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'Temperatura',
                data: [],
                backgroundColor: ['rgba(199,182,34,0.2)'],
                borderColor: ['rgb(199,182,34)'],
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

    const humidityChart = new Chart(refs[2], {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'Umidade',
                data: [],
                backgroundColor: ['rgba(37,201,136,0.2)'],
                borderColor: ['rgb(37,201,136)'],
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

    console.log("chart started...");
    return [riverChart, tempChart, humidityChart];
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

    if(chart.config.data.labels.length > 60) {
        chart.config.data.labels.shift();
        chart.config.data.datasets[0].data.shift();
    }
}

export default {
    initCharts,
    msToTime,
    lastOneMinute,
}
