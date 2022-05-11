<template>
  <div class="map">
    <div class="container">
      <div id="map" class="map__map"></div>
    </div>
  </div>
</template>

<script>
import sourceVector from "ol/source/Vector";
import styleStyle from "ol/style/Style";
import styleIcon from "ol/style/Icon";
import geomPoint from "ol/geom/Point";
import Feature from "ol/Feature";
import Map from "ol/Map";
import View from "ol/View";
import OSM from "ol/source/OSM";
import TileLayer from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";
import {fromLonLat} from 'ol/proj';

const LatLon = [52.4741639636859, -1.9047931723368499];
const LonLat = LatLon.reverse();
const WebMercator = fromLonLat(LonLat);
const iconFeature = new Feature({
  geometry: new geomPoint(fromLonLat(LonLat)),
  name: 'Somewhere',
});

export default {
  mounted() {
    new Map({
      layers: [new TileLayer({ 
        source: new OSM() 
      }),
      new VectorLayer({
        source: new sourceVector({
          features: [iconFeature]
        }),
        style: new styleStyle({
          image: new styleIcon({
            anchor: [0.5, 50],
            anchorXUnits: 'fraction',
            anchorYUnits: 'pixels',
            src: require('@/assets/icons/marker.png'),
          })
        })
      })
      ],
      view: new View({
        center: WebMercator,
        zoom: 15,
      }),
      target: "map",
      controls: []
    });
  },
};
</script>

<style lang="scss" scoped>
.map {
  padding-bottom: 154px;
  &__map {
    height: 394px;
    width: 100%;
    overflow: hidden;
  }
  @media (max-width: 48em) {
    padding-bottom: 100px;
    &__map {
      height: 240px;
    }
  }
}
</style>