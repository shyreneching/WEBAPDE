var chart;

function loaddoughnut(ctx) {
    chart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Krusty Combo', 'Krusty Deluxe', 'Krabby Pattie'],
            datasets: [{
                label: 'Number of Sales per Product',
                data: [12, 19, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(255, 159, 64, 0.6)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
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
}


function loadBar(ctx) {
    chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Krusty Combo', 'Krusty Deluxe', 'Krabby Pattie'],
            datasets: [{
                label: 'Number of Sales per Product',
                data: [12, 19, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(255, 159, 64, 0.6)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
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
}

function loadline(ctx) {
    chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May'],
            datasets: [{
                label: 'Krusty Combo',
                data: [13, 66, 84, 76, 69],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)'
                
                ],
                borderWidth: 1
            }, {
                label: 'Krusty Deluxue',
                data: [10, 95, 84, 24, 95],
                backgroundColor: [
                    'rgba(255, 206, 86, 0.5)'
                ],
                borderColor: [
                    'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 1
            }, {
                label: 'Krabbie Patty',
                data: [75, 14, 25, 75, 26],
                backgroundColor: [
                    'rgba(153, 102, 255, 0.5)'
                ],
                borderColor: [
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }
        ]},
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
}



function chartDest() {
    if (chart != null) {
        // chart.detach();
        chart.clear();
        chart.destroy();
        chart = null;
    }

}