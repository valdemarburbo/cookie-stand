// old method, solely with manually created objects

"use strict";

console.log("salmon cookies")

let container = document.getElementById("container");

let hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];

console.log(hours.length);

let shopSeattle = {
    storeName: "shopSeattle",
    minHourlyCustomers: 23,
    maxHourlyCustomers: 65,
    avgCookiesPerCustomer: 6.3,
    customersEachHour: [],
    cookiesEachHour: [],
    totalDailyCookies: 0,
    calcCustomersEachHour: function () {
        for (let i = 0; i < hours.length; i++) {
            this.customersEachHour.push(randomNum(this.minHourlyCustomers, this.maxHourlyCustomers));
        }

        console.log(this.customersEachHour);
    },
    calcCookiesEachHour: function () {
        for (let i = 0; i < hours.length; i++) {
            let oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerCustomer);
            this.cookiesEachHour.push(oneHour);
            this.totalDailyCookies += oneHour;

            console.log(this.oneHour);
        }
        
        console.log(this.cookiesEachHour);
    },
    render: function () {
        let article = document.createElement("article");
        container.appendChild(article);

        let h3 = document.createElement("h3");
        h3.textContent = this.storeName;
        article.appendChild(h3);

        let ul = document.createElement("ul");
        article.appendChild(ul);

        for (let i = 0; i < hours.length; i++) {
            let li = document.createElement("li");

            li.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies`;
            ul.appendChild(li);
        }
    }
};

shopSeattle.calcCustomersEachHour();
shopSeattle.calcCookiesEachHour();
shopSeattle.render();

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

let shopTokyo = {
    storeName: "shopTokyo",
    minHourlyCustomers: 3,
    maxHourlyCustomers: 24,
    avgCookiesPerCustomer: 1.2,
};

let shopDubai = {
    storeName: "shopDubai",
    minHourlyCustomers: 11,
    maxHourlyCustomers: 38,
    avgCookiesPerCustomer: 3.7,
};

let shopParis = {
    storeName: "shopParis",
    minHourlyCustomers: 20,
    maxHourlyCustomers: 38,
    avgCookiesPerCustomer: 2.3,
};

let shopLima = {
    storeName: "shopLima",
    minHourlyCustomers: 2,
    maxHourlyCustomers: 16,
    avgCookiesPerCustomer: 4.6,
};



