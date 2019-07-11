var obj;
var temp;

$(document).ready(function () {
    // $("#ow").hide();
    // $("#add").hide();
    $(".warn").hide();
    if (window.File && window.FileReader && window.FileList && window.Blob) {
        // Great success! All the File APIs are supported.
        $("#my-file").change(function(e) {
            if(e.target.files[0]) {
                // $("#ow").show();
                // $("#add").show();
                $(".warn").show();
                var file = e.target.files[0];
                var reader = new FileReader();
                reader.onload = (function() {
                    var data = reader.result;
                    if($.parseJSON(data) != undefined) {
                        // $("conf").show();
                        obj = ($.parseJSON(data));
                        temp = obj;
                        console.log("1");
                        console.log(temp);
                        for (var i = 1; i < e.target.files.length; i++) {
                            var filename = e.target.files[i];
                            var reader1 = new FileReader();
                            reader1.onload = (function() {
                                var data = reader1.result;
                                upload($.parseJSON(data))
                            })
                            reader1.readAsText(filename);
                            // $.get(filename, function(data) {
                            //     upload($.parseJSON(data))
                            // })
                        }
                    }
                    // else {
                    //     $("#conf").hide();
                    // }
                })
                reader.readAsText(file);
                // $.get(e.target.files[0].name, function(data) {
                    
                // })
            }
            else {
                // $("#add").hide();
                // $("#ow").hide();
                $(".warn").hide();
            }
        });

        $("#add").click(function () { 
            var idata = JSON.parse(window.localStorage.getItem("data"));
            var alldata = idata.sales.concat(temp.sales);
            idata.sales = alldata;

            idata.burger_sales["Krusty Combo"] = idata.burger_sales["Krusty Combo"] + temp.burger_sales["Krusty Combo"];
            idata.burger_sales["Krabby Pattie"] = idata.burger_sales["Krabby Pattie"] + temp.burger_sales["Krabby Pattie"];
            idata.burger_sales["Krusty Deluxe"] = idata.burger_sales["Krusty Deluxe"] + temp.burger_sales["Krusty Deluxe"];

            idata.species_sales["leatherback turtle"] = idata.species_sales["leatherback turtle"] + temp.species_sales["leatherback turtle"];
            idata.species_sales["salmon"] = idata.species_sales["salmon"] + temp.species_sales["salmon"];
            idata.species_sales["seahorse"] = idata.species_sales["seahorse"] + temp.species_sales["seahorse"];
            idata.species_sales["coral"] = idata.species_sales["coral"] + temp.species_sales["coral"];
            idata.species_sales["giant clam"] = idata.species_sales["giant clam"] + temp.species_sales["giant clam"];
            idata.species_sales["gray whale"] = idata.species_sales["gray whale"] + temp.species_sales["gray whale"];
            idata.species_sales["sea lion"] = idata.species_sales["sea lion"] + temp.species_sales["sea lion"];

            idata.burger_by_species["Krusty Combo"]["leatherback turtle"] = idata.burger_by_species["Krusty Combo"]["leatherback turtle"] + temp.burger_by_species["Krusty Combo"]["leatherback turtle"];
            idata.burger_by_species["Krusty Combo"]["salmon"] = idata.burger_by_species["Krusty Combo"]["salmon"] + temp.burger_by_species["Krusty Combo"]["salmon"];
            idata.burger_by_species["Krusty Combo"]["seahorse"] = idata.burger_by_species["Krusty Combo"]["seahorse"] + temp.burger_by_species["Krusty Combo"]["seahorse"];
            idata.burger_by_species["Krusty Combo"]["coral"] = idata.burger_by_species["Krusty Combo"]["coral"] + temp.burger_by_species["Krusty Combo"]["coral"];
            idata.burger_by_species["Krusty Combo"]["giant clam"] = idata.burger_by_species["Krusty Combo"]["giant clam"] + temp.burger_by_species["Krusty Combo"]["giant clam"];
            idata.burger_by_species["Krusty Combo"]["gray whale"] = idata.burger_by_species["Krusty Combo"]["gray whale"] + temp.burger_by_species["Krusty Combo"]["gray whale"];
            idata.burger_by_species["Krusty Combo"]["sea lion"] = idata.burger_by_species["Krusty Combo"]["sea lion"] + temp.burger_by_species["Krusty Combo"]["sea lion"];
            
            idata.burger_by_species["Krabby Pattie"]["leatherback turtle"] = idata.burger_by_species["Krabby Pattie"]["leatherback turtle"] + temp.burger_by_species["Krabby Pattie"]["leatherback turtle"];
            idata.burger_by_species["Krabby Pattie"]["salmon"] = idata.burger_by_species["Krabby Pattie"]["salmon"] + temp.burger_by_species["Krabby Pattie"]["salmon"];
            idata.burger_by_species["Krabby Pattie"]["seahorse"] = idata.burger_by_species["Krabby Pattie"]["seahorse"] + temp.burger_by_species["Krabby Pattie"]["seahorse"];
            idata.burger_by_species["Krabby Pattie"]["coral"] = idata.burger_by_species["Krabby Pattie"]["coral"] + temp.burger_by_species["Krabby Pattie"]["coral"];
            idata.burger_by_species["Krabby Pattie"]["giant clam"] = idata.burger_by_species["Krabby Pattie"]["giant clam"] + temp.burger_by_species["Krabby Pattie"]["giant clam"];
            idata.burger_by_species["Krabby Pattie"]["gray whale"] = idata.burger_by_species["Krabby Pattie"]["gray whale"] + temp.burger_by_species["Krabby Pattie"]["gray whale"];
            idata.burger_by_species["Krabby Pattie"]["sea lion"] = idata.burger_by_species["Krabby Pattie"]["sea lion"] + temp.burger_by_species["Krabby Pattie"]["sea lion"];
            
            idata.burger_by_species["Krusty Deluxe"]["leatherback turtle"] = idata.burger_by_species["Krusty Deluxe"]["leatherback turtle"] + temp.burger_by_species["Krusty Deluxe"]["leatherback turtle"];
            idata.burger_by_species["Krusty Deluxe"]["salmon"] = idata.burger_by_species["Krusty Deluxe"]["salmon"] + temp.burger_by_species["Krusty Deluxe"]["salmon"];
            idata.burger_by_species["Krusty Deluxe"]["seahorse"] = idata.burger_by_species["Krusty Deluxe"]["seahorse"] + temp.burger_by_species["Krusty Deluxe"]["seahorse"];
            idata.burger_by_species["Krusty Deluxe"]["coral"] = idata.burger_by_species["Krusty Deluxe"]["coral"] + temp.burger_by_species["Krusty Deluxe"]["coral"];
            idata.burger_by_species["Krusty Deluxe"]["giant clam"] = idata.burger_by_species["Krusty Deluxe"]["giant clam"] + temp.burger_by_species["Krusty Deluxe"]["giant clam"];
            idata.burger_by_species["Krusty Deluxe"]["gray whale"] = idata.burger_by_species["Krusty Deluxe"]["gray whale"] + temp.burger_by_species["Krusty Deluxe"]["gray whale"];
            idata.burger_by_species["Krusty Deluxe"]["sea lion"] = idata.burger_by_species["Krusty Deluxe"]["sea lion"] + temp.burger_by_species["Krusty Deluxe"]["sea lion"];

            window.localStorage.setItem("data", JSON.stringify(idata));
        });

        $("#ow").click(function () { 
            window.localStorage.setItem("data", JSON.stringify(temp));
        });

    } else {
        alert('The File APIs are not fully supported in this browser. Please use a different browser.');
        window.location.href= 'Home.html';
    }
});

function upload(file) {
    if(file != undefined) {
        console.log("here");
        var alldata = obj.sales.concat(file.sales);
        obj.sales = alldata;

        obj.burger_sales["Krusty Combo"] = obj.burger_sales["Krusty Combo"] + file.burger_sales["Krusty Combo"];
        obj.burger_sales["Krabby Pattie"] = obj.burger_sales["Krabby Pattie"] + file.burger_sales["Krabby Pattie"];
        obj.burger_sales["Krusty Deluxe"] = obj.burger_sales["Krusty Deluxe"] + file.burger_sales["Krusty Deluxe"];

        obj.species_sales["leatherback turtle"] = obj.species_sales["leatherback turtle"] + file.species_sales["leatherback turtle"];
        obj.species_sales["salmon"] = obj.species_sales["salmon"] + file.species_sales["salmon"];
        obj.species_sales["seahorse"] = obj.species_sales["seahorse"] + file.species_sales["seahorse"];
        obj.species_sales["coral"] = obj.species_sales["coral"] + file.species_sales["coral"];
        obj.species_sales["giant clam"] = obj.species_sales["giant clam"] + file.species_sales["giant clam"];
        obj.species_sales["gray whale"] = obj.species_sales["gray whale"] + file.species_sales["gray whale"];
        obj.species_sales["sea lion"] = obj.species_sales["sea lion"] + file.species_sales["sea lion"];

        obj.burger_by_species["Krusty Combo"]["leatherback turtle"] = obj.burger_by_species["Krusty Combo"]["leatherback turtle"] + file.burger_by_species["Krusty Combo"]["leatherback turtle"];
        obj.burger_by_species["Krusty Combo"]["salmon"] = obj.burger_by_species["Krusty Combo"]["salmon"] + file.burger_by_species["Krusty Combo"]["salmon"];
        obj.burger_by_species["Krusty Combo"]["seahorse"] = obj.burger_by_species["Krusty Combo"]["seahorse"] + file.burger_by_species["Krusty Combo"]["seahorse"];
        obj.burger_by_species["Krusty Combo"]["coral"] = obj.burger_by_species["Krusty Combo"]["coral"] + file.burger_by_species["Krusty Combo"]["coral"];
        obj.burger_by_species["Krusty Combo"]["giant clam"] = obj.burger_by_species["Krusty Combo"]["giant clam"] + file.burger_by_species["Krusty Combo"]["giant clam"];
        obj.burger_by_species["Krusty Combo"]["gray whale"] = obj.burger_by_species["Krusty Combo"]["gray whale"] + file.burger_by_species["Krusty Combo"]["gray whale"];
        obj.burger_by_species["Krusty Combo"]["sea lion"] = obj.burger_by_species["Krusty Combo"]["sea lion"] + file.burger_by_species["Krusty Combo"]["sea lion"];
        
        obj.burger_by_species["Krabby Pattie"]["leatherback turtle"] = obj.burger_by_species["Krabby Pattie"]["leatherback turtle"] + file.burger_by_species["Krabby Pattie"]["leatherback turtle"];
        obj.burger_by_species["Krabby Pattie"]["salmon"] = obj.burger_by_species["Krabby Pattie"]["salmon"] + file.burger_by_species["Krabby Pattie"]["salmon"];
        obj.burger_by_species["Krabby Pattie"]["seahorse"] = obj.burger_by_species["Krabby Pattie"]["seahorse"] + file.burger_by_species["Krabby Pattie"]["seahorse"];
        obj.burger_by_species["Krabby Pattie"]["coral"] = obj.burger_by_species["Krabby Pattie"]["coral"] + file.burger_by_species["Krabby Pattie"]["coral"];
        obj.burger_by_species["Krabby Pattie"]["giant clam"] = obj.burger_by_species["Krabby Pattie"]["giant clam"] + file.burger_by_species["Krabby Pattie"]["giant clam"];
        obj.burger_by_species["Krabby Pattie"]["gray whale"] = obj.burger_by_species["Krabby Pattie"]["gray whale"] + file.burger_by_species["Krabby Pattie"]["gray whale"];
        obj.burger_by_species["Krabby Pattie"]["sea lion"] = obj.burger_by_species["Krabby Pattie"]["sea lion"] + file.burger_by_species["Krabby Pattie"]["sea lion"];
        
        obj.burger_by_species["Krusty Deluxe"]["leatherback turtle"] = obj.burger_by_species["Krusty Deluxe"]["leatherback turtle"] + file.burger_by_species["Krusty Deluxe"]["leatherback turtle"];
        obj.burger_by_species["Krusty Deluxe"]["salmon"] = obj.burger_by_species["Krusty Deluxe"]["salmon"] + file.burger_by_species["Krusty Deluxe"]["salmon"];
        obj.burger_by_species["Krusty Deluxe"]["seahorse"] = obj.burger_by_species["Krusty Deluxe"]["seahorse"] + file.burger_by_species["Krusty Deluxe"]["seahorse"];
        obj.burger_by_species["Krusty Deluxe"]["coral"] = obj.burger_by_species["Krusty Deluxe"]["coral"] + file.burger_by_species["Krusty Deluxe"]["coral"];
        obj.burger_by_species["Krusty Deluxe"]["giant clam"] = obj.burger_by_species["Krusty Deluxe"]["giant clam"] + file.burger_by_species["Krusty Deluxe"]["giant clam"];
        obj.burger_by_species["Krusty Deluxe"]["gray whale"] = obj.burger_by_species["Krusty Deluxe"]["gray whale"] + file.burger_by_species["Krusty Deluxe"]["gray whale"];
        obj.burger_by_species["Krusty Deluxe"]["sea lion"] = obj.burger_by_species["Krusty Deluxe"]["sea lion"] + file.burger_by_species["Krusty Deluxe"]["sea lion"];

        // window.localStorage.setItem("data", JSON.stringify(obj));
        temp = obj;
        console.log("2");
        console.log(temp);
    }
}