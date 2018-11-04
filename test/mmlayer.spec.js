import {mount} from '@vue/test-utils'
import MineMap from '../src/component/MineMap'
import MMSource from '../src/component/MMSource'
import MMLayer from '../src/component/MMLayer'

describe('MMLayer',function () {
  let wrapper;
  let vm;

  beforeEach(function () {
    const vMap = {
      template: `
        <MineMap v-bind="mapProps">
          <MMSource v-bind="sourceProps">
            <MMLayer v-bind="layerProps"></MMLayer>
          </MMSource>
        </MineMap>
      `,
      components:{
        MineMap,
        MMSource,
        MMLayer,
      },
      data(){
        return {
          mapProps: {
            accessToken: 'e919a6f32ce242f5aec22652d9dc1fdb',
            solution: '7185',
            options: {
              container: 'map',
              //提高地图的加载速度
              style: {version:8,layers:[],sources:{}},
              center: [116.1866179, 39.992559],
              zoom: 9,
              minZoom: 3,
              maxZoom: 17,
            },
          },
          sourceProps: {
            id: 'source-test',
            options: {
              type: 'geojson',
              data: {type: 'FeatureCollection',features:[]}
            }
          },
          layerProps: {
            id: 'layer-test',
            type: 'circle',
            paint: {'circle-radius': 10, 'circle-color': '#ccc'},
            layout: {'visibility': 'none'}
          }
        }
      }
    };
    wrapper = mount(vMap,{
      attachToDocument: true,
    });
    vm = wrapper.vm
  });
  //

  it('should render correctly',function (done) {
    const map = vm.$children[0].getMap();
    const source = vm.$children[0].$children[0];
    source.$on('source-load',function () {
      setTimeout(function () {
        expect(map.getLayer('layer-test')).to.be.ok
        done()
      },0);
    });
  });

  it('should render paint props',function (done) {
    const map = vm.$children[0].getMap();
    const source = vm.$children[0].$children[0];
    source.$on('source-load',function () {
      setTimeout(function () {
        expect(map.getPaintProperty('layer-test','circle-radius')).to.equal(10);
        expect(map.getPaintProperty('layer-test','circle-color')).to.equal('#ccc');
        done()
      },0);
    });
  });

  it('should render layout props',function (done) {
    const map = vm.$children[0].getMap();
    const source = vm.$children[0].$children[0];
    source.$on('source-load',function () {
      setTimeout(function () {
        expect(map.getLayoutProperty('layer-test','visibility')).to.equal('none');
        done()
      },0);
    });
  });

  it('can change paint props',function (done) {
    const map = vm.$children[0].getMap();
    const source = vm.$children[0].$children[0];

    source.$on('source-load',function () {
      setTimeout(function () {
        vm.$children[0].$children[0].$children[0].paint = {
          'circle-radius': 20,
          'circle-color': '#ccc',
        };

        // console.log(map.getPaintProperty('layer-test','circle-radius'));
        expect(map.getPaintProperty('layer-test','circle-radius')).to.equal(20);
        done()
      },0);
    });

  });

  it('can change layout props',function (done) {
    const map = vm.$children[0].getMap();
    const source = vm.$children[0].$children[0];

    vm.$children[0].$children[0].$children[0].layout = {
      visibility: 'visible',
    };

    source.$on('source-load',function () {
      setTimeout(function () {
        // console.log(map.getLayoutProperty('layer-test','visibility'));
        expect(map.getLayoutProperty('layer-test','visibility')).to.equal('visible');
        done()
      },0);
    });

  });

  afterEach(function () {
    vm.$destroy();
    const mapCon = document.getElementById('map')
    mapCon.parentNode.removeChild(mapCon);
  });

});

