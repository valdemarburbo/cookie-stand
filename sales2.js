"use strict"

console.log("sales refactoring");

let container = document.getElementById("container");
let storeTable = document.getElementById("sales-table");

let hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function CookieStore(storeName, minHourlyCustomers, maxHourlyCustomers, avgCookiesPerCustomer) {
    this.storeName = storeName;
    this.minHourlyCustomers = minHourlyCustomers;
    this.maxHourlyCustomers = maxHourlyCustomers;
    this.avgCookiesPerCustomer = avgCookiesPerCustomer;
    this.customersEachHour = [];
    this.cookiesEachHour = [];
    this.totalDailyCookies = 0;
    // this.calcCustomersEachHour();
    // this.calcCookiesEachHour();
    this.render();
};

CookieStore.prototype.calcCustomersEachHour = function () {
    for (let i = 0; i < hours.length; i++) {
        this.customersEachHour.push(randomNum(this.minHourlyCustomers, this.maxHourlyCustomers));
    }
};

CookieStore.prototype.calcCookiesEachHour = function () {
    for (let i = 0; i < hours.length; i++) {
        let oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerCustomer);
        this.cookiesEachHour.push(oneHour);
        this.totalDailyCookies += oneHour;  
    }
};

CookieStore.prototype.render = function () {
    this.calcCustomersEachHour();
    this.calcCookiesEachHour();

    let tr = document.createElement("tr");

    let th = document.createElement("th");
    th.textContent = this.storeName;

    tr.appendChild(th);

    for (let i = 0; i < hours.length; i++) {
        let td = document.createElement("td");
        td.textContent = this.cookiesEachHour[i];
        tr.appendChild(td);
    }

    let storeTotal = document.createElement("th");
    storeTotal.textContent = this.totalDailyCookies;
    tr.appendChild(storeTotal);

    storeTable.appendChild(tr);
};


let seattle = new CookieStore("Seattle", 23, 65, 6.3);
let tokyo = new CookieStore("Tokyo", 3, 24, 1.2);
let dubai = new CookieStore("Dubai", 11, 38, 3.7);
let paris = new CookieStore("Paris", 20, 38, 2.3);
let lima = new CookieStore("Lima", 2, 16, 4.6);

console.log(seattle);
