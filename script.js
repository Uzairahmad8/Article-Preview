"use strict";

const date = document.querySelector(".date");

const nowDate = new Date();

const day = nowDate.getDate();
const month = nowDate.toLocaleString("default", { month: "long" });
const year = nowDate.getFullYear();

date.textContent = `${day} ${month} ${year}`;
