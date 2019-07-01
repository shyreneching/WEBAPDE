var picked;
var vanillaCalendar = {
    month: document.querySelectorAll('[data-calendar-area="month"]')[0],
    next: document.querySelectorAll('[data-calendar-toggle="next"]')[0],
    previous: document.querySelectorAll('[data-calendar-toggle="previous"]')[0],
    label: document.querySelectorAll('[data-calendar-label="month"]')[0],
    activeDates: null,
    date: new Date,
    todaysDate: new Date,
    init: function (t) {
        this.options = t, this.date.setDate(1), this.createMonth(), this.createListeners()
    },
    createListeners: function () {
        var t = this;
        this.next.addEventListener("click", function () {
            t.clearCalendar();
            var e = t.date.getMonth() + 1;
            t.date.setMonth(e), t.createMonth()
        }), this.previous.addEventListener("click", function () {
            t.clearCalendar();
            var e = t.date.getMonth() - 1;
            t.date.setMonth(e), t.createMonth()
        })
    },
    createDay: function (t, e, a) {
        var n = document.createElement("div"),
            s = document.createElement("span");
        s.innerHTML = t, n.className = "vcal-date", n.setAttribute("data-calendar-date", this.date), 1 === t && (n.style.marginLeft = 0 === e ? 6 * 14.28 + "%" : 14.28 * (e - 1) + "%"), this.options.disablePastDays && this.date.getTime() <= this.todaysDate.getTime() - 1 ? n.classList.add("vcal-date--disabled") : (n.classList.add("vcal-date--active"), n.setAttribute("data-calendar-status", "active")), this.date.toString() === this.todaysDate.toString() && n.classList.add("vcal-date--today"), n.appendChild(s), this.month.appendChild(n)
    },
    dateClicked: function () {
        var t = this;
        this.activeDates = document.querySelectorAll('[data-calendar-status="active"]');
        for (var e = 0; e < this.activeDates.length; e++) this.activeDates[e].addEventListener("click", function (e) {
            document.querySelectorAll('[data-calendar-label="picked"]')[0].innerHTML = this.dataset.calendarDate.substring(0, 24)
            picked = this.dataset.calendarDate.substring(0, 24);
            console.log(this.dataset.calendarDate.substring(0, 24))
            console.log(givepicked())
        })
    },
    createMonth: function () {
        for (var t = this.date.getMonth(); this.date.getMonth() === t;) this.createDay(this.date.getDate(), this.date.getDay(), this.date.getFullYear()), this.date.setDate(this.date.getDate() + 1);
        this.date.setDate(1), this.date.setMonth(this.date.getMonth() - 1), this.label.innerHTML = this.monthsAsString(this.date.getMonth()) + " " + this.date.getFullYear(), this.dateClicked()
    },
    monthsAsString: function (t) {
        return ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][t]
    },
    clearCalendar: function () {
        vanillaCalendar.month.innerHTML = ""
    },
    removeActiveClass: function () {
        for (var t = 0; t < this.activeDates.length; t++) this.activeDates[t].classList.remove("vcal-date--selected")
    }
};

function givepicked(){
    var fin;

    if(picked.includes('2019')){
        fin = "2019-"
    }else if(picked.includes('2018')){
        fin = "2018-"
    }else if(picked.includes('2017')){
        fin = "2017-"
    }

    if(picked.includes('Jan')){
        fin = fin + "01-"
    }else if(picked.includes('Feb')){
        fin = fin + "02-"
    }else if(picked.includes('Mar')){
        fin = fin + "03-"
    }else if(picked.includes('Apr')){
        fin = fin + "04-"
    }else if(picked.includes('May')){
        fin = fin + "05-"
    }else if(picked.includes('Jun')){
        fin = fin + "06-"
    }else if(picked.includes('Jul')){
        fin = fin + "07-"
    }else if(picked.includes('Aug')){
        fin = fin + "08-"
    }else if(picked.includes('Sep')){
        fin = fin + "09-"
    }else if(picked.includes('Oct')){
        fin = fin + "10-"
    }else if(picked.includes('Nov')){
        fin = fin + "11-"
    }else if(picked.includes('Dec')){
        fin = fin + "12-"
    }

    fin = fin + picked.substring(8, 10)
    return fin;
}