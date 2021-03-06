import Vue from 'vue'
import {mount} from '@vue/test-utils'
import MineMap from '../src/component/MineMap'
import MMMarker from '../src/component/MMMarker'
import MMPopup from '../src/component/MMPopup'

function nextTick () {
  return new Promise((resolve, reject) => Vue.nextTick(resolve))
}

describe('MMMarker.vue', () => {
  let wrapper;
  let vm;

  beforeEach(function () {
    const vMap = {
      template: `
        <MineMap v-bind="mapProps">
          <MMMarker ref="marker" v-bind="markerProps">
            <h1 slot="content">hello world</h1>
            <MMPopup ref="popup">
              <h1 slot="content">我是popup</h1>
            </MMPopup>
          </MMMarker>
        </MineMap>
      `,
      components:{
        MineMap,
        MMMarker,
        MMPopup,
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
          markerProps: {
            lnglat: [116.1866179, 39.992559],
            offset: [15,15],
          }
        }
      }
    };
    wrapper = mount(vMap,{
      attachToDocument: true
    });
    vm = wrapper.vm;
  });

  it('can render correctly', function (done) {
    const map = vm.$children[0].getMap();
    map.on('load',function () {
      expect(document.querySelector('.minemap-marker')).to.have.class('minemap-marker');
      expect(document.querySelector('.minemap-marker')).to.contain.html('world</h1>');
      done();
    })
  });

  it('init lnglat correctly',function (done) {
    const map = vm.$children[0].getMap();
    map.on('load',function () {
      const marker = vm.$refs.marker.marker;
      expect(marker.getLngLat().toArray()).to.eql([116.1866179, 39.992559]);
      done()
    })
  });

  it('init offset correctly',function (done) {
    const map = vm.$children[0].getMap();
    map.on('load',function () {
      const marker = vm.$refs.marker.marker;
      expect(marker.getOffset()).to.eql([15,15]);
      done()
    })
  });

  it('can set Popup',function (done) {
    const map = vm.$children[0].getMap();
    map.on('load',function () {
      const marker = vm.$refs.marker.marker;
      const popup = vm.$refs.popup.popup;
      // console.log(marker.getPopup());
      expect(marker.getPopup()).to.equal(popup);
      done()
    })
  });

  // 测试完成后卸载组件
  afterEach(function () {
    vm.$destroy();
    const mapCon = document.getElementById('map')
    mapCon.parentNode.removeChild(mapCon);
  });

});
