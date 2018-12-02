import {mount} from '@vue/test-utils'
import MineMap from '../src/component/MineMap'
import MMMarker from '../src/component/MMMarker'


describe('MMMarker.vue', () => {
  let wrapper;
  let vm

  it('can render correctly', function (done) {
    const vMap = {
      template: `
        <MineMap v-bind="mapProps">
          <MMMarker v-bind="markerProps"></MMMarker>
        </MineMap>
      `,
      components:{
        MineMap,
        MMMarker,
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
    }
    wrapper = mount(vMap,{
      attachToDocument: true
    });
    vm = wrapper.vm;
    const map = vm.$children[0].getMap();
    map.on('load',function () {
      expect(map.getSource('source-test')).to.be.ok;
      done();
    })
  })

  it('can add vector source', function (done) {
    const vMap = {
      template: `
        <MineMap v-bind="mapProps">
          <MMSource v-bind="sourceProps"></MMSource>
        </MineMap>
      `,
      components:{
        MineMap,
        MMSource
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
              type: 'vector',
              tiles: ['minemapdata://Ptexit/{z}/{x}/{y}'],
            }
          }
        }
      }
    }
    wrapper = mount(vMap,{
      attachToDocument: true,
    });
    vm = wrapper.vm;
    const map = vm.$children[0].getMap();
    map.on('load',function () {
      expect(map.getSource('source-test')).to.be.ok;
      done();
    })
  })

  //测试完成后卸载组件
  afterEach(function () {
    vm.$destroy();
    const mapCon = document.getElementById('map')
    mapCon.parentNode.removeChild(mapCon);
  });

});
