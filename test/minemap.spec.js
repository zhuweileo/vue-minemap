import {mount} from '@vue/test-utils'
import MineMap from '../src/component/MineMap'
import Vue from 'vue';
import Syn from 'syn'


describe('MineMap.vue', () => {
  let wrapper;
  let vm;
  const load = sinon.spy();

  //测试前初始化组件
  beforeEach(function () {
    wrapper = mount(MineMap, {
      propsData: {
        accessToken: 'e919a6f32ce242f5aec22652d9dc1fdb',
        solution: '7185',
        options: {
          container: 'map',
          style: `//minedata.cn/service/solu/style/id/7185`,
          center: [116.1866179, 39.992559],
          zoom: 9,
          minZoom: 3,
          maxZoom: 17,
        },
      },
      listeners:{
        'map-load': load,
      },
      attachToDocument: true,
    });
    vm = wrapper.vm;
  });

  //测试完成后卸载组件
  afterEach(function () {
    vm.$destroy();
  });

  it('should render correctly', function () {
    expect(vm.$el).to.be.ok;
    expect(vm.$el.id).to.equal('map');
  });

  it('should init zoom center minZoom maxZoom correctly',function () {
    const map = vm.getMap();
    const zoom = map.getZoom();
    const center = map.getCenter();
    const minZoom = map.getMinZoom();
    const maxZoom = map.getMaxZoom();

    expect(zoom).to.equal(9);
    expect([center.lng,center.lat]).to.eql([116.1866179, 39.992559]);
    expect(minZoom).to.equal(3);
    expect(maxZoom).to.equal(17);
  });

  it('should triger map-load callback',function (done) {
    const map = vm.getMap();
    this.timeout(20000);//设置最长超时为 20s
    setTimeout(function () {
      sinon.assert.calledWith(load,map);
      done()
    },15000)
  });


});

