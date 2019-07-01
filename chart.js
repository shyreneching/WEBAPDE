var chart;
var tabledata;

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
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(54, 162, 235, 0.6)'

                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(54, 162, 235, 1)'
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
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [{
                label: 'Krusty Combo',
                data: [13, 66, 84, 76, 69, 13, 66, 13, 66, 84, 76, 69],
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

function loadweek(ctx) {
    chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            datasets: [{
                label: 'Krusty Combo',
                data: [13, 66, 84, 76, 69, 13, 66],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)'

                ],
                borderWidth: 1
            }, {
                label: 'Krusty Deluxue',
                data: [10, 95, 84, 24, 95, 45, 26, 45],
                backgroundColor: [
                    'rgba(255, 206, 86, 0.5)'
                ],
                borderColor: [
                    'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 1
            }, {
                label: 'Krabbie Patty',
                data: [75, 14, 25, 75, 26, 0, 0, 0, 0],
                backgroundColor: [
                    'rgba(153, 102, 255, 0.5)'
                ],
                borderColor: [
                    'rgba(153, 102, 255, 1)'
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


function loadSummary(ctx) {
    chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Krusty Combo', 'Krusty Deluxue', 'Krabbie Patty'],
            datasets: [{
                label: 'Leatherblack Turtle',
                data: [13, 66, 84],
                backgroundColor: [
                    'rgba(33, 33, 33, 0.5)',
                    'rgba(33, 33, 33, 0.5)',
                    'rgba(33, 33, 33, 0.5)'
                ],
                borderColor: [
                    'rgba(33, 33, 33, 1)',
                    'rgba(33, 33, 33, 1)',
                    'rgba(33, 33, 33, 1)'

                ],
                borderWidth: 1
            }, {
                label: 'Salmon',
                data: [10, 95, 84],
                backgroundColor: [
                    'rgba(250, 128, 114, 0.5)',
                    'rgba(250, 128, 114, 0.5)',
                    'rgba(250, 128, 114, 0.5)'
                ],
                borderColor: [
                    'rgba(250, 128, 114, 1)',
                    'rgba(250, 128, 114, 1)',
                    'rgba(250, 128, 114, 1)'
                ],
                borderWidth: 1
            }, {
                label: 'Seahorse',
                data: [75, 14, 25],
                backgroundColor: [
                    'rgba(240, 173, 78, 0.5)',
                    'rgba(240, 173, 78, 0.5)',
                    'rgba(240, 173, 78, 0.5)'
                ],
                borderColor: [
                    'rgba(240, 173, 78, 1)',
                    'rgba(240, 173, 78, 1)',
                    'rgba(240, 173, 78, 1)'
                ],
                borderWidth: 1
            }, {
                label: 'Coral',
                data: [75, 84, 35],
                backgroundColor: [
                    'rgba(255, 127, 80, 0.5)',
                    'rgba(255, 127, 80, 0.5)',
                    'rgba(255, 127, 80, 0.5)'
                ],
                borderColor: [
                    'rgba(255, 127, 80, 1)',
                    'rgba(255, 127, 80, 1)',
                    'rgba(255, 127, 80, 1)'
                ],
                borderWidth: 1
            }, {
                label: 'Giant Clam',
                data: [65, 10, 71],
                backgroundColor: [
                    'rgba(64, 168, 204, 0.5)',
                    'rgba(64, 168, 204, 0.5)',
                    'rgba(64, 168, 204, 0.5)'
                ],
                borderColor: [
                    'rgba(64, 168, 204, 1)',
                    'rgba(64, 168, 204, 1)',
                    'rgba(64, 168, 204, 1)'
                ],
                borderWidth: 1
            }, {
                label: 'Gray Whale',
                data: [15, 44, 75],
                backgroundColor: [
                    'rgba(128, 128, 128, 0.5)',
                    'rgba(128, 128, 128, 0.5)',
                    'rgba(128, 128, 128, 0.5)'
                ],
                borderColor: [
                    'rgba(128, 128, 128, 1)',
                    'rgba(128, 128, 128, 1)',
                    'rgba(128, 128, 128, 1)'
                ],
                borderWidth: 1
            }, {
                label: 'Sea Lion',
                data: [65, 49, 95],
                backgroundColor: [
                    'rgba(255, 165, 0, 0.5)',
                    'rgba(255, 165, 0, 0.5)',
                    'rgba(255, 165, 0, 0.5)'
                ],
                borderColor: [
                    'rgba(255, 165, 0, 1)',
                    'rgba(255, 165, 0, 1)',
                    'rgba(255, 165, 0, 1)'
                ],
                borderWidth: 1
            }
        ]
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

function chartDest() {
    if (chart != null) {
        // chart.detach();
        chart.clear();
        chart.destroy();
        chart = null;
    }

}

function CreateTableFromJSON(data) {
    tabledata = data;
    // EXTRACT VALUE FOR HTML HEADER. 
    // var col = [];
    // for (var i = 0; i < tabledata.length; i++) {
    //     for (var key in tabledata[i]) {
    //         if (col.indexOf(key) === -1) {
    //             col.push(key);
    //         }
    //     }
    // }

    // // CREATE DYNAMIC TABLE.
    // var table = document.createElement("table");
    // table.id = "example" 
    // table.className="display"
    // // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

    // var tr = table.insertRow(-1);                   // TABLE ROW.

    // for (var i = 0; i < col.length; i++) {
    //     var th = document.createElement("th");      // TABLE HEADER.
    //     th.innerHTML = col[i];
    //     tr.appendChild(th);
    // }

    // // ADD JSON DATA TO THE TABLE AS ROWS.
    // for (var i = 0; i < tabledata.length; i++) {

    //     tr = table.insertRow(-1);

    //     for (var j = 0; j < col.length; j++) {
    //         var tabCell = tr.insertCell(-1);
    //         tabCell.innerHTML = tabledata[i][col[j]];
    //     }
    // }

    var col = ['No.','Datetime','Burger','Species'];
    
    var table = document.createElement("table");
    var tr = table.insertRow(-1);                   // TABLE ROW.

    for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th");      // TABLE HEADER.
        th.innerHTML = col[i];
        tr.appendChild(th);
    }

    var ctr = 0;
    for(var m = 0; m < tabledata.length; m++) {
        tr = table.insertRow(-1);
        var data = tabledata[m];
      
        for(var i = 0; i < col.length; i++) {
            var tabCell = tr.insertCell(-1);            
            if(i == 0) {
                tabCell.innerHTML = ctr+1;
            } else if(i == 1) {
                tabCell.innerHTML = data.datetime;
            } else if(i == 2) {
                tabCell.innerHTML = data.burger;
            } else if(i == 3) {
                tabCell.innerHTML = data.species;
            }
        }
        ctr++;
    }
    
    return table;
    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    // var divContainer = document.getElementById("table");
    // divContainer.innerHTML = "";
    // divContainer.appendChild(table);
}




function loadchart(ctx) {
    chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
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