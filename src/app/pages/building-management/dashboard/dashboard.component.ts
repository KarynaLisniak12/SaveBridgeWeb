import { Component, OnInit } from '@angular/core';

import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4geodata_worldLow from '@amcharts/amcharts4-geodata/worldLow';
import am4themes_dataviz from '@amcharts/amcharts4/themes/dataviz';
import am4themes_animated from '@amcharts/amcharts4/themes/dataviz';

import { BuildingService } from 'src/app/shared/services/building.service';
import { BuildingModel } from 'src/app/shared/models/building/building.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  chart: am4maps.MapChart;
  imageSeries: am4maps.MapImageSeries;

  private buildings: Array<BuildingModel>;

  constructor(private service: BuildingService) { }

  ngOnInit() {
    this.getBuildings();
  }

  initAmchartsMap() {

    am4core.useTheme(am4themes_dataviz);
    am4core.useTheme(am4themes_animated);
    
    this.chart = am4core.create("map-container", am4maps.MapChart);
    this.imageSeries = this.chart.series.push(new am4maps.MapImageSeries());
    this.chart.geodata = am4geodata_worldLow;
    this.chart.projection = new am4maps.projections.Miller();

    let polygonSeries = this.chart.series.push(new am4maps.MapPolygonSeries());
    polygonSeries.exclude = ["AQ"];
    polygonSeries.useGeodata = true;

    let polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}";
    polygonTemplate.fill = this.chart.colors.getIndex(0).lighten(0.5);

    let hs = polygonTemplate.states.create("hover");
    hs.properties.fill = this.chart.colors.getIndex(0);

    this.imageSeries.mapImages.template.propertyFields.longitude = "longitude";
    this.imageSeries.mapImages.template.propertyFields.latitude = "latitude";
    this.imageSeries.data = this.buildings;
    this.imageSeries.data = [ {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Brussels",
      "latitude": 50.8371,
      "longitude": 4.3676
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Copenhagen",
      "latitude": 55.6763,
      "longitude": 12.5681
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Paris",
      "latitude": 48.8567,
      "longitude": 2.3510
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Reykjavik",
      "latitude": 64.1353,
      "longitude": -21.8952
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Moscow",
      "latitude": 55.7558,
      "longitude": 37.6176
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Madrid",
      "latitude": 40.4167,
      "longitude": -3.7033
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "London",
      "latitude": 51.5002,
      "longitude": -0.1262,
      "url": "http://www.google.co.uk"
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Peking",
      "latitude": 39.9056,
      "longitude": 116.3958
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "New Delhi",
      "latitude": 28.6353,
      "longitude": 77.2250
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Tokyo",
      "latitude": 35.6785,
      "longitude": 139.6823,
      "url": "http://www.google.co.jp"
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Ankara",
      "latitude": 39.9439,
      "longitude": 32.8560
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Buenos Aires",
      "latitude": -34.6118,
      "longitude": -58.4173
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Brasilia",
      "latitude": -15.7801,
      "longitude": -47.9292
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Ottawa",
      "latitude": 45.4235,
      "longitude": -75.6979
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Washington",
      "latitude": 38.8921,
      "longitude": -77.0241
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Kinshasa",
      "latitude": -4.3369,
      "longitude": 15.3271
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Cairo",
      "latitude": 30.0571,
      "longitude": 31.2272
    }, {
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Pretoria",
      "latitude": -25.7463,
      "longitude": 28.1876
    } ];

    this.chart.events.on( "mappositionchanged", this.updateCustomMarkers, this );
  }

  updateCustomMarkers() {  

    var map = this;

    map.imageSeries.mapImages.each(function(image) {
      if (!image.dummyData || !image.dummyData.externalElement) {
        image.dummyData = {
          externalElement: map.createCustomMarker(image)
        };
      }
  
      let xy = map.chart.geoPointToSVG( { longitude: image.longitude, latitude: image.latitude } );
      image.dummyData.externalElement.style.top = xy.y + 'px';
      image.dummyData.externalElement.style.left = xy.x + 'px';
    });  
  }
  
  createCustomMarker(image) {
    
    let chart = image.dataItem.component.chart;
  
    let holder = document.createElement( 'div' );
    holder.className = 'map-marker';
    holder.title = image.dataItem.dataContext.title;
    holder.style.position = 'absolute';

    let dot = document.createElement('div');
    dot.className = 'dot';
    dot.style.borderColor = '#ff6666';
    holder.appendChild(dot);
  
    let pulse = document.createElement( 'div' );
    pulse.className = 'pulse';
    pulse.style.borderColor = '#ff6666';
    holder.appendChild(pulse);
  
    chart.svgContainer.htmlElement.appendChild(holder);
  
    return holder;
  }

  getBuildings() {

    this.service.getBuildings()
      .subscribe(response => {
        console.log(response);

        this.buildings = response;
        this.initAmchartsMap();
      },
        error => console.log(error)
    );
  }

}
