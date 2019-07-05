var chart;
var tabledata;
// custData MUST be a PERCENTAGE of the sales of customer per product
var custData;
// tally version of custData (loaded in loadactualList())
var rawlist;
// prod is the name of the products
var prod;
//product per has key id, percent
// percent will be the actual tally of sales per product
var productper;
// monthly sales in different products in tally
var kcmonsales;
var kpmonsales;
var kdmonsales;
// weekly sales in different products in tally
var kcweksales;
var kpweksales;
var kdweksales;
//array of the json file
var jsonarr;

// General Customer Sales               Krusty Combo
// Leatherback Turtle       GSlb        Leatherback Turtle      KClb
// Salmon                   GSsm        Salmon                  KCsm
// Seahorse                 GSsh        Seahorse                KCsh
// Coral                    GScr        Coral                   KCcr
// Giant Clam               GSgc        Giant Clam              KCgc
// Gray Whale               GSgw        Gray Whale              KCgw
// Sealion                  GSsl        Sealion                 KCsl
//
// Krabby Pattie                         Krusty Deluxe
// Leatherback Turtle       KPlb        Leatherback Turtle      KDlb
// Salmon                   KPsm        Salmon                  KDsm
// Seahorse                 KPsh        Seahorse                KDsh
// Coral                    KPcr        Coral                   KDcr
// Giant Clam               KPgc        Giant Clam              KDgc
// Gray Whale               KPgw        Gray Whale              KDgw
// Sealion                  KPsl        Sealion                 KDsl
function getcustData() {
    custData = [{
        id: "GSlb",
        percent: 20,
    }, {
        id: "GSsm",
        percent: 10,
    }, {
        id: "GSsh",
        percent: 5,
    }, {
        id: "GScr",
        percent: 20,
    }, {
        id: "GSgc",
        percent: 10,
    }, {
        id: "GSgw",
        percent: 30,
    }, {
        id: "GSsl",
        percent: 5,
    }, {
        id: "KClb",
        percent: 10,
    }, {
        id: "KCsm",
        percent: 20,
    }, {
        id: "KCsh",
        percent: 20,
    }, {
        id: "KCcr",
        percent: 30,
    }, {
        id: "KCgc",
        percent: 10,
    }, {
        id: "KCgw",
        percent: 5,
    }, {
        id: "KCsl",
        percent: 5,
    }, {
        id: "KPlb",
        percent: 20,
    }, {
        id: "KPsm",
        percent: 10,
    }, {
        id: "KPsh",
        percent: 5,
    }, {
        id: "KPcr",
        percent: 20,
    }, {
        id: "KPgc",
        percent: 10,
    }, {
        id: "KPgw",
        percent: 30,
    }, {
        id: "KPsl",
        percent: 5,
    }, {
        id: "KDlb",
        percent: 5,
    }, {
        id: "KDsm",
        percent: 10,
    }, {
        id: "KDsh",
        percent: 20,
    }, {
        id: "KDcr",
        percent: 10,
    }, {
        id: "KDgc",
        percent: 30,
    }, {
        id: "KDgw",
        percent: 20,
    }, {
        id: "KDsl",
        percent: 5,
    }]

    return custData;

}

function loadactualList() {
    rawlist = [{
        id: "GSlb",
        percent: 20,
    }, {
        id: "GSsm",
        percent: 10,
    }, {
        id: "GSsh",
        percent: 5,
    }, {
        id: "GScr",
        percent: 20,
    }, {
        id: "GSgc",
        percent: 10,
    }, {
        id: "GSgw",
        percent: 30,
    }, {
        id: "GSsl",
        percent: 5,
    }, {
        id: "KClb",
        percent: 10,
    }, {
        id: "KCsm",
        percent: 20,
    }, {
        id: "KCsh",
        percent: 20,
    }, {
        id: "KCcr",
        percent: 30,
    }, {
        id: "KCgc",
        percent: 10,
    }, {
        id: "KCgw",
        percent: 5,
    }, {
        id: "KCsl",
        percent: 5,
    }, {
        id: "KPlb",
        percent: 20,
    }, {
        id: "KPsm",
        percent: 10,
    }, {
        id: "KPsh",
        percent: 5,
    }, {
        id: "KPcr",
        percent: 20,
    }, {
        id: "KPgc",
        percent: 10,
    }, {
        id: "KPgw",
        percent: 30,
    }, {
        id: "KPsl",
        percent: 5,
    }, {
        id: "KDlb",
        percent: 5,
    }, {
        id: "KDsm",
        percent: 10,
    }, {
        id: "KDsh",
        percent: 20,
    }, {
        id: "KDcr",
        percent: 10,
    }, {
        id: "KDgc",
        percent: 30,
    }, {
        id: "KDgw",
        percent: 20,
    }, {
        id: "KDsl",
        percent: 5,
    }]

    return custData;

}

function loadproducts() {
    prod = ["Krusty Combo", "Krabby Pattie", "Krusty Deluxe"]
}

function loadproductpercent() {
    productper = [{
        id: "Krusty Combo",
        percent: 20
    }, {
        id: "Krabby Pattie",
        percent: 30
    }, {
        id: "Krusty Deluxe",
        percent: 50
    }]
}

// function that load the monthly sales of Krusty Combo
function loadKCmonthlysales() {
    kcmonsales = [{
        id: "January",
        val: 95
    }, {
        id: "February",
        val: 21
    }, {
        id: "March",
        val: 45
    }, {
        id: "April",
        val: 72
    }, {
        id: "May",
        val: 25
    }, {
        id: "June",
        val: 45
    }, {
        id: "July",
        val: 28
    }, {
        id: "August",
        val: 78
    }, {
        id: "September",
        val: 10
    }, {
        id: "October",
        val: 5
    }, {
        id: "November",
        val: 17
    }, {
        id: "December",
        val: 22
    }]
}

// function that load the monthly sales of Krabby Pattie
function loadKPmonthlysales() {
    kpmonsales = [{
        id: "January",
        val: 25
    }, {
        id: "February",
        val: 24
    }, {
        id: "March",
        val: 4
    }, {
        id: "April",
        val: 22
    }, {
        id: "May",
        val: 28
    }, {
        id: "June",
        val: 21
    }, {
        id: "July",
        val: 32
    }, {
        id: "August",
        val: 58
    }, {
        id: "September",
        val: 17
    }, {
        id: "October",
        val: 47
    }, {
        id: "November",
        val: 58
    }, {
        id: "December",
        val: 37
    }]
}

// function that load the monthly sales of Krusty Deluxe
function loadKDmonthlysales() {
    kdmonsales = [{
        id: "January",
        val: 17
    }, {
        id: "February",
        val: 25
    }, {
        id: "March",
        val: 45
    }, {
        id: "April",
        val: 82
    }, {
        id: "May",
        val: 35
    }, {
        id: "June",
        val: 56
    }, {
        id: "July",
        val: 68
    }, {
        id: "August",
        val: 2
    }, {
        id: "September",
        val: 38
    }, {
        id: "October",
        val: 78
    }, {
        id: "November",
        val: 52
    }, {
        id: "December",
        val: 45
    }]
}

// function that load the weekly sales of Krusty Combo
function loadKCweeklysales(){
    kcweksales = [{
        id: "Sunday",
        val: 17
    }, {
        id: "Monday",
        val: 25
    }, {
        id: "Tuesday",
        val: 45
    }, {
        id: "Wednesday",
        val: 82
    }, {
        id: "Thursday",
        val: 35
    }, {
        id: "Friday",
        val: 56
    }, {
        id: "Saturday",
        val: 56
    }]
}

// function that load the weekly sales of Krabby Pattie
function loadKPweeklysales(){
    kpweksales = [{
        id: "Sunday",
        val: 24
    }, {
        id: "Monday",
        val: 75
    }, {
        id: "Tuesday",
        val: 58
    }, {
        id: "Wednesday",
        val: 10
    }, {
        id: "Thursday",
        val: 35
    }, {
        id: "Friday",
        val: 85
    }, {
        id: "Saturday",
        val: 21
    }]
}

// function that load the weekly sales of Krusty Deluxe
function loadKDweeklysales(){
    kdweksales = [{
        id: "Sunday",
        val: 47
    }, {
        id: "Monday",
        val: 58
    }, {
        id: "Tuesday",
        val: 69
    }, {
        id: "Wednesday",
        val: 12
    }, {
        id: "Thursday",
        val: 78
    }, {
        id: "Friday",
        val: 28
    }, {
        id: "Saturday",
        val: 72
    }]
}

function loadJSONarray(json){
    jsonarr = json;
}

function loaddoughnut(ctx) {
    
    chart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: [productper[0].id, productper[1].id, productper[2].id],
            datasets: [{
                label: 'Number of Sales per Product',
                data: [productper[0].percent, productper[1].percent, productper[2].percent],
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
            labels: [productper[0].id, productper[1].id, productper[2].id],
            datasets: [{
                label: 'Number of Sales per Product',
                data: [productper[0].percent, productper[1].percent, productper[2].percent],
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
    var kctemp = []
    var kptemp = []
    var kdtemp = []
    for(var i = 0; i < kcmonsales.length; i++){
        kctemp.push(kcmonsales[i].val)
        kptemp.push(kpmonsales[i].val)
        kdtemp.push(kdmonsales[i].val)
    }

    chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [{
                label: 'Krusty Combo',
                data: kctemp,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)'

                ],
                borderWidth: 1
            }, {
                label: 'Krabby Pattie',
                data: kptemp,
                backgroundColor: [
                    'rgba(153, 102, 255, 0.5)'
                ],
                borderColor: [
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }, {
                label: 'Krusty Deluxue',
                data: kdtemp,
                backgroundColor: [
                    'rgba(255, 206, 86, 0.5)'
                ],
                borderColor: [
                    'rgba(255, 206, 86, 1)',
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
    var kctemp = []
    var kptemp = []
    var kdtemp = []
    for(var i = 0; i < kcweksales.length; i++){
        kctemp.push(kcweksales[i].val)
        kptemp.push(kpweksales[i].val)
        kdtemp.push(kdweksales[i].val)
    }

    chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            datasets: [{
                label: 'Krusty Combo',
                data: kctemp,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)'

                ],
                borderWidth: 1
            }, {
                label: 'Krabby Pattie',
                data: kptemp,
                backgroundColor: [
                    'rgba(153, 102, 255, 0.5)'
                ],
                borderColor: [
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }, {
                label: 'Krusty Deluxue',
                data: kdtemp,
                backgroundColor: [
                    'rgba(255, 206, 86, 0.5)'
                ],
                borderColor: [
                    'rgba(255, 206, 86, 1)',
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
            labels: ['Krusty Combo', 'Krabby Pattie', 'Krusty Deluxue'],
            datasets: [{
                label: 'Leatherback Turtle',
                data: [rawlist[rawlist.findIndex(x => x.id == "KClb")].percent,rawlist[rawlist.findIndex(x => x.id == "KPlb")].percent,rawlist[rawlist.findIndex(x => x.id == "KDlb")].percent],
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
                data: [rawlist[rawlist.findIndex(x => x.id == "KCsm")].percent,rawlist[rawlist.findIndex(x => x.id == "KPsm")].percent,rawlist[rawlist.findIndex(x => x.id == "KDsm")].percent],
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
                data: [rawlist[rawlist.findIndex(x => x.id == "KCsh")].percent,rawlist[rawlist.findIndex(x => x.id == "KPsh")].percent,rawlist[rawlist.findIndex(x => x.id == "KDsh")].percent],
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
                data: [rawlist[rawlist.findIndex(x => x.id == "KCcr")].percent,rawlist[rawlist.findIndex(x => x.id == "KPcr")].percent,rawlist[rawlist.findIndex(x => x.id == "KDcr")].percent],
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
                data: [rawlist[rawlist.findIndex(x => x.id == "KCgc")].percent,rawlist[rawlist.findIndex(x => x.id == "KPgc")].percent,rawlist[rawlist.findIndex(x => x.id == "KDgc")].percent],
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
                data: [rawlist[rawlist.findIndex(x => x.id == "KCgw")].percent,rawlist[rawlist.findIndex(x => x.id == "KPgw")].percent,rawlist[rawlist.findIndex(x => x.id == "KDgw")].percent],
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
                data: [rawlist[rawlist.findIndex(x => x.id == "KCsl")].percent,rawlist[rawlist.findIndex(x => x.id == "KPsl")].percent,rawlist[rawlist.findIndex(x => x.id == "KDsl")].percent],
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

    var col = ['No.', 'Datetime', 'Burger', 'Species'];

    var table = document.createElement("table");
    var tr = table.insertRow(-1); // TABLE ROW.

    for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th"); // TABLE HEADER.
        th.innerHTML = col[i];
        tr.appendChild(th);
    }

    var ctr = 0;
    for (var m = 0; m < tabledata.length; m++) {
        tr = table.insertRow(-1);
        var data = tabledata[m];

        for (var i = 0; i < col.length; i++) {
            var tabCell = tr.insertCell(-1);
            if (i == 0) {
                tabCell.innerHTML = ctr + 1;
            } else if (i == 1) {
                tabCell.innerHTML = data.datetime;
            } else if (i == 2) {
                tabCell.innerHTML = data.burger;
            } else if (i == 3) {
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

function timesales(ctx, day) {
    var new_date = new Date(day);

    var filtered = jsonarr.filter(function(item) {
        return item.datetime.substring(0, 10) == day;
    })
    var arr = [
        {
            id: "Krusty Combo",
            count: 0
        },{
            id: "Krabby Pattie",
            count: 0
        },{
            id: "Krusty Deluxe",
            count: 0
        }
    ];
    for(var i = 0; i < filtered.length; i++) {
      if(filtered[i].burger == "Krusty Combo"){
          arr[arr.findIndex(x => x.id == "Krusty Combo")].count = arr[arr.findIndex(x => x.id == "Krusty Combo")].count + 1;
      }else if(filtered[i].burger == "Krabby Pattie"){
        arr[arr.findIndex(x => x.id =="Krabby Pattie")].count = arr[arr.findIndex(x => x.id =="Krabby Pattie")].count + 1;
      }else if(filtered[i].burger == "Krusty Deluxe"){
        arr[arr.findIndex(x => x.id =="Krusty Deluxe")].count = arr[arr.findIndex(x => x.id =="Krusty Deluxe")].count + 1;
      }
    }

    console.log(day)
    chart = new Chart(ctx, {
        type: 'bar',
        
        data: {
            labels: prod,
            datasets: [{
                label: 'Number of Sales on ' + day,
                data: [arr[0].count, arr[1].count, arr[2].count],
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


function loadCustDate(ctx, day) {
    jsonarr = [{
        'datetime': '2019-05-28 08:02:58',
        'burger': 'Krusty Combo',
        'species': 'leatherback turtle'
      }, {
        'datetime': '2019-05-27 08:04:47',
        'burger': 'Krabby Pattie',
        'species': 'salmon'
      }, {
        'datetime': '2019-05-27 08:06:37',
        'burger': 'Krusty Deluxe',
        'species': 'seahorse'
      }, {
        'datetime': '2019-05-27 08:08:35',
        'burger': 'Krabby Pattie',
        'species': 'sea lion'
      }, {
        'datetime': '2019-05-27 08:10:32',
        'burger': 'Krabby Pattie',
        'species': 'sea lion'
      }, {
        'datetime': '2019-05-27 08:12:42',
        'burger': 'Krabby Pattie',
        'species': 'leatherback turtle'
      }, {
        'datetime': '2019-05-27 08:14:48',
        'burger': 'Krabby Pattie',
        'species': 'coral'
      }]
    var filtered = jsonarr.filter(function(item) {
        return item.datetime.substring(0, 10) == day;
    })
    var arr = [
        {
            id: "Leatherback Turtle",
            count: 0
        },{
            id: "Salmon",
            count: 0
        },{
            id: "Seahorse",
            count: 0
        },{
            id: "Coral",
            count: 0
        },{
            id: "Giant Clam",
            count: 0
        },{
            id: "Gray Whale",
            count: 0
        },{
            id: "Sea Lion",
            count: 0
        }
    ];
    for(var i = 0; i < filtered.length; i++) {
        for(var j = 0; j < arr.length; j++){
            if(filtered[i].species == arr[j].id.toLowerCase()){
                arr[j].count = arr[j].count + 1;
            }
        }
    }
    var temp_name = [];
    var temp_count = [];
    for(var j = 0; j < arr.length; j++){
        temp_name.push(arr[j].id);
        temp_count.push(arr[j].count)
    }

    chart = new Chart(ctx, {
        type: 'bar',
        
        data: {
            labels: temp_name,
            datasets: [{
                label: 'Number of Customer on ' + day,
                data: temp_count,
                backgroundColor: [
                    'rgba(33, 33, 33, 0.5)',
                    'rgba(250, 128, 114, 0.5)',
                    'rgba(240, 173, 78, 0.5)',
                    'rgba(255, 127, 80, 0.5)',
                    'rgba(64, 168, 204, 0.5)',
                    'rgba(128, 128, 128, 0.5)',
                    'rgba(255, 165, 0, 0.5)'

                ],
                borderColor: [
                    'rgba(33, 33, 33, 1)',
                    'rgba(250, 128, 114, 1)',
                    'rgba(240, 173, 78, 1)',
                    'rgba(255, 127, 80, 1)',
                    'rgba(64, 168, 204, 1)',
                    'rgba(128, 128, 128, 1)',
                    'rgba(255, 165, 0, 1)'
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