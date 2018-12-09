import Vue from 'vue'
import {mount} from '@vue/test-utils'
import MineMap from '../src/component/MineMap'
// import MMMarker from '../src/component/MMMarker'
import MMPopup from '../src/component/MMPopup'
import Syn from 'syn'

function nextTick () {
  return new Promise((resolve, reject) => Vue.nextTick(resolve))
}

describe('MMPopup.vue', () => {
  let wrapper;
  let vm;

  beforeEach(function () {
    const vMap = {
      template: `
        <MineMap v-bind="mapProps">
          <MMPopup v-bind="popupProps" ref="popup">
            <h1 slot="content">我是popup</h1>
          </MMPopup>
        </MineMap>
      `,
      components:{
        MineMap,
        // MMMarker,
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
          popupProps: {
            lnglat: [116.1866179, 39.992559],
            offset: [15,15],
            closeButton: true,
            closeOnClick: true,
            anchor:'top-left',
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
      expect(document.querySelector('.minemap-popup')).to.have.class('minemap-popup');
      expect(document.querySelector('.minemap-popup')).to.contain.html('popup</h1>');
      done();
    })
  });

  it('init lnglat correctly',function (done) {
    const map = vm.$children[0].getMap();
    map.on('load',function () {
      const popup = vm.$refs.popup.popup;
      expect(popup.getLngLat().toArray()).to.eql([116.1866179, 39.992559]);
      done()
    })
  });

  it('can set closeButton',function (done) {
    const map = vm.$children[0].getMap();
    map.on('load',function () {
      // console.log(document.querySelector('.minemap-popup-close-button'));
      expect(document.querySelector('.minemap-popup-close-button')).to.be.ok
      done()
    })
  });

  it('can CloseOnClick',function (done) {
    const map = vm.$children[0].getMap();
    map.on('load',function () {
      const canvas = document.querySelector('.minemap-canvas')
      // const canvas = document.querySelector('#map'); //点击map是不行的
      // console.log(document.querySelector('.minemap-popup'))
      expect(document.querySelector('.minemap-popup')).to.exist
      Syn.click(canvas,function () {
        expect(document.querySelector('.minemap-popup')).to.not.be.exist
      });
      done()
    })
  });

  it('init anchor correctly', function (done) {
    const map = vm.$children[0].getMap();
    map.on('load',function () {
      expect(document.querySelector('.minemap-popup')).to.have.class('minemap-popup-anchor-top-left');
      done();
    })
  });

  // 测试完成后卸载组件
  afterEach(function () {
    vm.$destroy();
    const mapCon = document.getElementById('map')
    mapCon.parentNode.removeChild(mapCon);
  });

});
