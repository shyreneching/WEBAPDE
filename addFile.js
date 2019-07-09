var obj;

$(document).ready(function () {
    $("#my-file").change(function(e) {
        $.get(e.target.files[0].name, function(data) {
            if($.parseJSON(data) != undefined) {
                obj = ($.parseJSON(data));
                window.localStorage.setItem("data", JSON.stringify(obj));
                console.log(JSON.parse(window.localStorage.getItem("data")));
            }
        })
        for (var i = 1; i < e.target.files.length; i++) {
            var filename = e.target.files[i].name;
            $.get(filename, function(data) {
                upload($.parseJSON(data))
            })
        }

    });
});

function upload(file) {
    if(file != undefined) {
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

        window.localStorage.setItem("data", JSON.stringify(obj));
        console.log(JSON.parse(window.localStorage.getItem("data")));
    }
}