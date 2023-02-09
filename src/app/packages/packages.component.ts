import { Component } from '@angular/core';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent {
  projects=
  [
    {proName:"Products Admin Page",proImgSrc:"../../assets/projects/products.png",proSrc:"https://romany10203.github.io/products",github:"https://github.com/romany10203/products"},
    {proName:"Weather",proImgSrc:"../../assets/projects/weather.png",proSrc:"https://weather-api-ng.netlify.app",github:"https://github.com/romany10203/weatherAPI"},
    {proName:"TO DO list",proImgSrc:"../../assets/projects/to-do.png",proSrc:"https://romany10203.github.io/to-do-list",github:"https://github.com/romany10203/to-do-list"},  
    {proName:"Slider JS",proImgSrc:"../../assets/projects/slider.png",proSrc:"https://romany10203.github.io/JS-slider",github:"https://github.com/romany10203/JS-slider"},
    {proName:"Furniture",proImgSrc:"../../assets/projects/furniture.png",proSrc:"https://romany10203.github.io/furniture",github:"https://github.com/romany10203/furniture"},
    {proName:"News API",proImgSrc:"../../assets/projects/news.png",proSrc:"https://romany10203.github.io/newsAPI",github:"https://github.com/romany10203/news"},  
    {proName:"Shop Online",proImgSrc:"../../assets/projects/shop.png",proSrc:"https://romany10203.github.io/shop-online",github:"https://github.com/romany10203/shop-online"},
    {proName:"Restaurant",proImgSrc:"../../assets/projects/res.png",proSrc:"https://romany10203.github.io/Restaurant",github:"https://github.com/romany10203/Restairant"},
  ]
}
