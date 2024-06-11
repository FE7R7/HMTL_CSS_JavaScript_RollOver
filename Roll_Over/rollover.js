"use strict";

const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {

       // preload images
       const links = document.querySelectorAll("#image_list a");
       for (let link of links) {
              const image = new Image();
              image.src = link.href;
       }

       // attach mouseover and mouseout events for each image
       $("#image1").addEventListener("mouseover", () => {
              $("#image1").src = "images/release.jpg"
       })

       $("#image1").addEventListener("mouseout", () => {
              $("#image1").src = "images/hero.jpg"
       })

       $("#image2").addEventListener("mouseover", () => {
              $("#image2").src = "images/deer.jpg"
       })

       $("#image2").addEventListener("mouseout", () => {
              $("#image2").src = "images/bison.jpg"
       })
});
