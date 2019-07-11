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
// Sea Lion                 GSsl        Sea Lion                KCsl
//
// Krabby Pattie                         Krusty Deluxe
// Leatherback Turtle       KPlb        Leatherback Turtle      KDlb
// Salmon                   KPsm        Salmon                  KDsm
// Seahorse                 KPsh        Seahorse                KDsh
// Coral                    KPcr        Coral                   KDcr
// Giant Clam               KPgc        Giant Clam              KDgc
// Gray Whale               KPgw        Gray Whale              KDgw
// Sea Lion                 KPsl        Sea Lion                KDsl
function getcustData() {
    
    var data = JSON.parse(window.localStorage.getItem("data"));

    custData = [{
        id: "GSlb",
        percent: (data.species_sales["leatherback turtle"] / data.sales.length * 100).toFixed(2),
    }, {
        id: "GSsm",
        percent: (data.species_sales["salmon"] / data.sales.length * 100).toFixed(2),
    }, {
        id: "GSsh",
        percent: (data.species_sales["seahorse"] / data.sales.length * 100).toFixed(2),
    }, {
        id: "GScr",
        percent: (data.species_sales["coral"] / data.sales.length * 100).toFixed(2),
    }, {
        id: "GSgc",
        percent: (data.species_sales["giant clam"] / data.sales.length * 100).toFixed(2),
    }, {
        id: "GSgw",
        percent: (data.species_sales["gray whale"] / data.sales.length * 100).toFixed(2),
    }, {
        id: "GSsl",
        percent: (data.species_sales["sea lion"] / data.sales.length * 100).toFixed(2),
    }, {
        id: "KClb",
        percent: (data.burger_by_species["Krusty Combo"]["leatherback turtle"] / data.burger_sales["Krusty Combo"] * 100).toFixed(2),
    }, {
        id: "KCsm",
        percent: (data.burger_by_species["Krusty Combo"]["salmon"] / data.burger_sales["Krusty Combo"] * 100).toFixed(2),
    }, {
        id: "KCsh",
        percent: (data.burger_by_species["Krusty Combo"]["seahorse"] / data.burger_sales["Krusty Combo"] * 100).toFixed(2),
    }, {
        id: "KCcr",
        percent: (data.burger_by_species["Krusty Combo"]["coral"] / data.burger_sales["Krusty Combo"] * 100).toFixed(2),
    }, {
        id: "KCgc",
        percent: (data.burger_by_species["Krusty Combo"]["giant clam"] / data.burger_sales["Krusty Combo"] * 100).toFixed(2),
    }, {
        id: "KCgw",
        percent: (data.burger_by_species["Krusty Combo"]["gray whale"] / data.burger_sales["Krusty Combo"] * 100).toFixed(2),
    }, {
        id: "KCsl",
        percent: (data.burger_by_species["Krusty Combo"]["sea lion"] / data.burger_sales["Krusty Combo"] * 100).toFixed(2),
    }, {
        id: "KPlb",
        percent: (data.burger_by_species["Krabby Pattie"]["leatherback turtle"] / data.burger_sales["Krabby Pattie"] * 100).toFixed(2),
    }, {
        id: "KPsm",
        percent: (data.burger_by_species["Krabby Pattie"]["salmon"] / data.burger_sales["Krabby Pattie"] * 100).toFixed(2),
    }, {
        id: "KPsh",
        percent: (data.burger_by_species["Krabby Pattie"]["seahorse"] / data.burger_sales["Krabby Pattie"] * 100).toFixed(2),
    }, {
        id: "KPcr",
        percent: (data.burger_by_species["Krabby Pattie"]["coral"] / data.burger_sales["Krabby Pattie"] * 100).toFixed(2),
    }, {
        id: "KPgc",
        percent: (data.burger_by_species["Krabby Pattie"]["giant clam"] / data.burger_sales["Krabby Pattie"] * 100).toFixed(2),
    }, {
        id: "KPgw",
        percent: (data.burger_by_species["Krabby Pattie"]["gray whale"] / data.burger_sales["Krabby Pattie"] * 100).toFixed(2),
    }, {
        id: "KPsl",
        percent: (data.burger_by_species["Krabby Pattie"]["sea lion"] / data.burger_sales["Krabby Pattie"] * 100).toFixed(2),
    }, {
        id: "KDlb",
        percent: (data.burger_by_species["Krusty Deluxe"]["leatherback turtle"] / data.burger_sales["Krusty Deluxe"] * 100).toFixed(2),
    }, {
        id: "KDsm",
        percent: (data.burger_by_species["Krusty Deluxe"]["salmon"] / data.burger_sales["Krusty Deluxe"] * 100).toFixed(2),
    }, {
        id: "KDsh",
        percent: (data.burger_by_species["Krusty Deluxe"]["seahorse"] / data.burger_sales["Krusty Deluxe"] * 100).toFixed(2),
    }, {
        id: "KDcr",
        percent: (data.burger_by_species["Krusty Deluxe"]["coral"] / data.burger_sales["Krusty Deluxe"] * 100).toFixed(2),
    }, {
        id: "KDgc",
        percent: (data.burger_by_species["Krusty Deluxe"]["giant clam"] / data.burger_sales["Krusty Deluxe"] * 100).toFixed(2),
    }, {
        id: "KDgw",
        percent: (data.burger_by_species["Krusty Deluxe"]["gray whale"] / data.burger_sales["Krusty Deluxe"] * 100).toFixed(2),
    }, {
        id: "KDsl",
        percent: (data.burger_by_species["Krusty Deluxe"]["sea lion"] / data.burger_sales["Krusty Deluxe"] * 100).toFixed(2),
    }]



    return custData;

}

function loadactualList() {

    var data = JSON.parse(window.localStorage.getItem("data"));

    rawlist = [{
        id: "GSlb",
        percent: data.species_sales["leatherback turtle"],
    }, {
        id: "GSsm",
        percent: data.species_sales["salmon"],
    }, {
        id: "GSsh",
        percent: data.species_sales["seahorse"],
    }, {
        id: "GScr",
        percent: data.species_sales["coral"],
    }, {
        id: "GSgc",
        percent: data.species_sales["giant clam"],
    }, {
        id: "GSgw",
        percent: data.species_sales["gray whale"],
    }, {
        id: "GSsl",
        percent: data.species_sales["sea lion"],
    }, {
        id: "KClb",
        percent: data.burger_by_species["Krusty Combo"]["leatherback turtle"],
    }, {
        id: "KCsm",
        percent: data.burger_by_species["Krusty Combo"]["salmon"],
    }, {
        id: "KCsh",
        percent: data.burger_by_species["Krusty Combo"]["seahorse"],
    }, {
        id: "KCcr",
        percent: data.burger_by_species["Krusty Combo"]["coral"],
    }, {
        id: "KCgc",
        percent: data.burger_by_species["Krusty Combo"]["giant clam"],
    }, {
        id: "KCgw",
        percent: data.burger_by_species["Krusty Combo"]["gray whale"],
    }, {
        id: "KCsl",
        percent: data.burger_by_species["Krusty Combo"]["sea lion"],
    }, {
        id: "KPlb",
        percent: data.burger_by_species["Krabby Pattie"]["leatherback turtle"],
    }, {
        id: "KPsm",
        percent: data.burger_by_species["Krabby Pattie"]["salmon"],
    }, {
        id: "KPsh",
        percent: data.burger_by_species["Krabby Pattie"]["seahorse"],
    }, {
        id: "KPcr",
        percent: data.burger_by_species["Krabby Pattie"]["coral"],
    }, {
        id: "KPgc",
        percent: data.burger_by_species["Krabby Pattie"]["giant clam"],
    }, {
        id: "KPgw",
        percent: data.burger_by_species["Krabby Pattie"]["gray whale"],
    }, {
        id: "KPsl",
        percent: data.burger_by_species["Krabby Pattie"]["sea lion"],
    }, {
        id: "KDlb",
        percent: data.burger_by_species["Krusty Deluxe"]["leatherback turtle"],
    }, {
        id: "KDsm",
        percent: data.burger_by_species["Krusty Deluxe"]["salmon"],
    }, {
        id: "KDsh",
        percent: data.burger_by_species["Krusty Deluxe"]["seahorse"],
    }, {
        id: "KDcr",
        percent: data.burger_by_species["Krusty Deluxe"]["coral"],
    }, {
        id: "KDgc",
        percent: data.burger_by_species["Krusty Deluxe"]["giant clam"],
    }, {
        id: "KDgw",
        percent: data.burger_by_species["Krusty Deluxe"]["gray whale"],
    }, {
        id: "KDsl",
        percent: data.burger_by_species["Krusty Deluxe"]["sea lion"],
    }]

    // for(var i = 0; i < data.length; i++){
    //     if (data[i].species == "leatherback turtle") {
    //         custData[0].percent = custData[0].percent + 1;
    //         if(data[i].burger == "Krusty Combo")
    //             custData[7].percent = custData[7].percent + 1;
    //         else if(data[i].burger == "Krabby Pattie")
    //             custData[14].percent = custData[14].percent + 1;
    //         else if(data[i].burger == "Krusty Deluxe")
    //             custData[21].percent = custData[21].percent + 1;
    //     }
    //     if (data[i].species == "salmon") {
    //         custData[1].percent = custData[1].percent + 1;
    //         if(data[i].burger == "Krusty Combo")
    //             custData[8].percent = custData[8].percent + 1;
    //         else if(data[i].burger == "Krabby Pattie")
    //             custData[15].percent = custData[15].percent + 1;
    //         else if(data[i].burger == "Krusty Deluxe")
    //             custData[22].percent = custData[22].percent + 1;
    //     }
    //     if (data[i].species == "seahorse") {
    //         custData[2].percent = custData[2].percent + 1;
    //         if(data[i].burger == "Krusty Combo")
    //             custData[9].percent = custData[9].percent + 1;
    //         else if(data[i].burger == "Krabby Pattie")
    //             custData[16].percent = custData[16].percent + 1;
    //         else if(data[i].burger == "Krusty Deluxe")
    //             custData[23].percent = custData[23].percent + 1;
    //     }
    //     if (data[i].species == "coral") {
    //         custData[3].percent = custData[3].percent + 1;
    //         if(data[i].burger == "Krusty Combo")
    //             custData[10].percent = custData[10].percent + 1;
    //         else if(data[i].burger == "Krabby Pattie")
    //             custData[17].percent = custData[17].percent + 1;
    //         else if(data[i].burger == "Krusty Deluxe")
    //             custData[24].percent = custData[24].percent + 1;
    //     }
    //     if (data[i].species == "giant clam") {
    //         custData[4].percent = custData[4].percent + 1;
    //         if(data[i].burger == "Krusty Combo")
    //             custData[11].percent = custData[11].percent + 1;
    //         else if(data[i].burger == "Krabby Pattie")
    //             custData[18].percent = custData[18].percent + 1;
    //         else if(data[i].burger == "Krusty Deluxe")
    //             custData[25].percent = custData[25].percent + 1;
    //     }
    //     if (data[i].species == "gray whale") {
    //         custData[5].percent = custData[5].percent + 1;
    //         if(data[i].burger == "Krusty Combo")
    //             custData[12].percent = custData[12].percent + 1;
    //         else if(data[i].burger == "Krabby Pattie")
    //             custData[19].percent = custData[19].percent + 1;
    //         else if(data[i].burger == "Krusty Deluxe")
    //             custData[26].percent = custData[26].percent + 1;
    //     }
    //     if (data[i].species == "sea lion") {
    //         custData[6].percent = custData[6].percent + 1;
    //         if(data[i].burger == "Krusty Combo")
    //             custData[13].percent = custData[13].percent + 1;
    //         else if(data[i].burger == "Krabby Pattie")
    //             custData[20].percent = custData[20].percent + 1;
    //         else if(data[i].burger == "Krusty Deluxe")
    //             custData[27].percent = custData[27].percent + 1;
    //     }
    // }

    return custData;

}

function loadproducts() {
    prod = ["Krusty Combo", "Krabby Pattie", "Krusty Deluxe"]
}

function loadproductpercent() {

    var data = JSON.parse(window.localStorage.getItem("data"));
    
    productper = [{
        id: "Krusty Combo",
        percent: data.burger_sales["Krusty Combo"]
    }, {
        id: "Krabby Pattie",
        percent: data.burger_sales["Krabby Pattie"]
    }, {
        id: "Krusty Deluxe",
        percent: data.burger_sales["Krusty Deluxe"]
    }]
}

// function that load the monthly sales of Krusty Combo
function loadKCmonthlysales() {

    var data = JSON.parse(window.localStorage.getItem("data"));

    kcmonsales = [{
        id: "January",
        val: 0
    }, {
        id: "February",
        val: 0
    }, {
        id: "March",
        val: 0
    }, {
        id: "April",
        val: 0
    }, {
        id: "May",
        val: 0
    }, {
        id: "June",
        val: 0
    }, {
        id: "July",
        val: 0
    }, {
        id: "August",
        val: 0
    }, {
        id: "September",
        val: 0
    }, {
        id: "October",
        val: 0
    }, {
        id: "November",
        val: 0
    }, {
        id: "December",
        val: 0
    }]

    for(var i = 0; i < data.sales.length; i++) {
        if(data.sales[i].burger == "Krusty Combo") {
            var x = new Date(data.sales[i].datetime)
            kcmonsales[x.getMonth()].val++;
        }
    }

}

// function that load the monthly sales of Krabby Pattie
function loadKPmonthlysales() {

    var data = JSON.parse(window.localStorage.getItem("data"));

    kpmonsales = [{
        id: "January",
        val: 0
    }, {
        id: "February",
        val: 0
    }, {
        id: "March",
        val: 0
    }, {
        id: "April",
        val: 0
    }, {
        id: "May",
        val: 0
    }, {
        id: "June",
        val: 0
    }, {
        id: "July",
        val: 0
    }, {
        id: "August",
        val: 0
    }, {
        id: "September",
        val: 0
    }, {
        id: "October",
        val: 0
    }, {
        id: "November",
        val: 0
    }, {
        id: "December",
        val: 0
    }]

    for(var i = 0; i < data.sales.length; i++) {
        if(data.sales[i].burger == "Krabby Pattie") {
            var x = new Date(data.sales[i].datetime)
            kpmonsales[x.getMonth()].val++;
        }
    }

}

// function that load the monthly sales of Krusty Deluxe
function loadKDmonthlysales() {

    var data = JSON.parse(window.localStorage.getItem("data"));

    kdmonsales = [{
        id: "January",
        val: 0
    }, {
        id: "February",
        val: 0
    }, {
        id: "March",
        val: 0
    }, {
        id: "April",
        val: 0
    }, {
        id: "May",
        val: 0
    }, {
        id: "June",
        val: 0
    }, {
        id: "July",
        val: 0
    }, {
        id: "August",
        val: 0
    }, {
        id: "September",
        val: 0
    }, {
        id: "October",
        val: 0
    }, {
        id: "November",
        val: 0
    }, {
        id: "December",
        val: 0
    }]

    for(var i = 0; i < data.sales.length; i++) {
        if(data.sales[i].burger == "Krusty Deluxe") {
            var x = new Date(data.sales[i].datetime)
            kdmonsales[x.getMonth()].val++;
        }
    }
}

// function that load the weekly sales of Krusty Combo
function loadKCweeklysales(){

    var data = JSON.parse(window.localStorage.getItem("data"));

    kcweksales = [{
        id: "Sunday",
        val: 0
    }, {
        id: "Monday",
        val: 0
    }, {
        id: "Tuesday",
        val: 0
    }, {
        id: "Wednesday",
        val: 0
    }, {
        id: "Thursday",
        val: 0
    }, {
        id: "Friday",
        val: 0
    }, {
        id: "Saturday",
        val: 0
    }]

    for(var i = 0; i < data.sales.length; i++) {
        if(data.sales[i].burger == "Krusty Combo") {
            var x = new Date(data.sales[i].datetime)
            kcweksales[x.getDay()].val++;
        }
    }
}

// function that load the weekly sales of Krabby Pattie
function loadKPweeklysales(){

    var data = JSON.parse(window.localStorage.getItem("data"));

    kpweksales = [{
        id: "Sunday",
        val: 0
    }, {
        id: "Monday",
        val: 0
    }, {
        id: "Tuesday",
        val: 0
    }, {
        id: "Wednesday",
        val: 0
    }, {
        id: "Thursday",
        val: 0
    }, {
        id: "Friday",
        val: 0
    }, {
        id: "Saturday",
        val: 0
    }]

    for(var i = 0; i < data.sales.length; i++) {
        if(data.sales[i].burger == "Krabby Pattie") {
            var x = new Date(data.sales[i].datetime)
            kpweksales[x.getDay()].val++;
        }
    }
}

// function that load the weekly sales of Krusty Deluxe
function loadKDweeklysales(){

    var data = JSON.parse(window.localStorage.getItem("data"));

    kdweksales = [{
        id: "Sunday",
        val: 0
    }, {
        id: "Monday",
        val: 0
    }, {
        id: "Tuesday",
        val: 0
    }, {
        id: "Wednesday",
        val: 0
    }, {
        id: "Thursday",
        val: 0
    }, {
        id: "Friday",
        val: 0
    }, {
        id: "Saturday",
        val: 0
    }]

    for(var i = 0; i < data.sales.length; i++) {
        if(data.sales[i].burger == "Krusty Deluxe") {
            var x = new Date(data.sales[i].datetime)
            kdweksales[x.getDay()].val++;
        }
    }
}

function loadJSONarray(){

    var data = JSON.parse(window.localStorage.getItem("data"));

    jsonarr = data.sales;
}

function loaddoughnut(ctx) {
    
    var total = productper[0].percent + productper[1].percent + productper[2].percent;
    var kc = ((productper[0].percent/ total) * 100).toFixed(2);
    var kp = ((productper[1].percent/ total) * 100).toFixed(2);
    var kd = ((productper[2].percent/ total) * 100).toFixed(2);
    console.log(kc);
    chart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: [productper[0].id, productper[1].id, productper[2].id],
            datasets: [{
                label: 'Number of Sales per Product',
                data: [kc, kp, kd],
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

function CreateTableFromJSON(x) {
    loadJSONarray();
    tabledata = jsonarr;
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
    loadJSONarray();
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
                        beginAtZero: true,
                        max: 500
                    }
                }]
            }
        }
    });
}


function loadCustDate(ctx, day) {
    loadJSONarray();
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
                        beginAtZero: true,
                        max: 200
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