<template>
    <div id="deposits-map" class="deposits-map">
        <el-row type="flex" align="middle" class="row-bg login-container" justify="center">
            <el-col :span="22">
                <div class="grid-content bg-purple">
                    <yandex-map
                        :coords="[62.3530, 32.2507]"
                        zoom="14"
                        style="width: 100%; height: 800px;"
                        :cluster-options="{1: {clusterDisableClickZoom: true, layout} }"
                        :behaviors="['drag']"
                        :controls="['zoomControl', 'searchControl', 'typeSelector',  'fullscreenControl']"
                        map-type="map"
                        @map-was-initialized="initMap"
                    >
                      <ymap-marker
                          v-for="item in sites"
                          :key="item.id + '-site'"
                          :marker-id="item.id + '-site'"
                          marker-type="polygon"
                          :coords="[item.points]"
                          hint-content="Sites"
                          :marker-fill="{color: '#c4f2c5', opacity: 0.4}"
                          :marker-stroke="{color: '#5b6391', width: 5}"
                          :balloon="{header: item.name, body: item.depositName, footer: `Area: ${item.area}`}"
                          :icon="{color: 'green', glyph: 'cinema'}"
                          :callbacks="{click: onDepositClick()}"
                      ></ymap-marker>

                      <ymap-marker
                          v-for="item in sites[0].deposits"
                          :key="item.id + 'deposit'"
                          :marker-id="item.id + 'deposit'"
                          marker-type="polygon"
                          :coords="[item.points]"
                          hint-content="Hint content 1"
                          :marker-fill="{color: '#c4f2c5', opacity: 0.4}"
                          :marker-stroke="{color: '#5b6391', width: 5}"
                          :balloon="{header: item.name, body: item.depositName, footer: `Area: ${item.area}`}"
                          :icon="{color: 'green', glyph: 'cinema'}"
                          :callbacks="{click: onDepositClick()}"
                      ></ymap-marker>
                    </yandex-map>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<style lang="scss" src="./style.scss" scoped></style>

<script>
  import { mapActions, mapGetters } from 'vuex';
  export default {
    name: 'News',
    data () {
      return {
        newArticle: false,
        MapInstance: null,
        form: {
          _id: this.$route.params.id,
          name: null,
          text: null,
          description: null,
          mainImg: null,
          mainImgAlt: null,
          mainImgSrc: null
        },
        layout: '<div>Deposit Map</div><div>Map of exploration of future deposits</div><div>Gabbro-diabase</div>',
        sites: [
          {
            id: 1,
            name: 'Khauki',
            area: '',
            center: [],
            points: [
              [62.3615, 32.2400],
              [62.3420, 32.2640],
              [62.3330, 32.2420],
              [62.3210, 32.2520],
              [62.3120, 32.2400],
              [62.3210, 32.2240],
              [62.3600, 32.2240],
              [62.3615, 32.2400]
            ],
            deposits: [
              {
                id: '1',
                name: 'Khauki-1',
                depositName: 'Block granite (gabbro-diabase)',
                area: '1.2 km2',
                center: [62.3555, 32.2345],
                points: [
                  [62.3620, 32.2351],
                  [62.3540, 32.2440],
                  [62.3540, 32.2253],
                  [62.3600, 32.2253]
                ]
              },
              {
                id: '2',
                name: 'Khauki-2',
                depositName: 'Block granite (gabbro-diabase)',
                area: '0.38 km2',
                center: [62.3450, 32.2540],
                points: [
                  [62.3505, 32.2532],
                  [62.3440, 32.2604],
                  [62.3434, 32.2554],
                  [62.3452, 32.2500]
                ]
              },
              {
                id: '3',
                name: 'Khauki-3',
                depositName: 'Block granite (gabbro-diabase)',
                area: '0.63 km2',
                center: [62.3420, 32.2605],
                points: [
                  [62.3435, 32.2611],
                  [62.3416, 32.2638],
                  [62.3353, 32.2520],
                  [62.3421, 32.2539]
                ]
              },
              {
                id: '4',
                name: 'Khauki-4',
                depositName: 'Block granite (gabbro-diabase)',
                area: '0.62 km2',
                center: [62.3400, 32.2330],
                points: [
                  [62.3415, 32.2253],
                  [62.3420, 32.2220],
                  [62.3345, 32.2410],
                  [62.3340, 32.2330]
                ]
              },
              {
                id: '5',
                name: 'Khauki-5',
                depositName: 'Block granite (gabbro-diabase)',
                area: '',
                center: [],
                points: [
                  [62.3356, 32.2231],
                  [62.3404, 32.2257],
                  [62.3339, 32.2322],
                  [62.3333, 32.2243]
                ]
              },
              {
                id: '6',
                name: 'Khauki-6',
                depositName: 'Block granite (gabbro-diabase)',
                area: '',
                center: [],
                points: [
                  [62.3328, 32.2245],
                  [62.3339, 32.2336],
                  [62.3313, 32.2336],
                  [62.3313, 32.2245]
                ]
              },
              {
                id: '7',
                name: 'Khauki-7',
                depositName: 'Block granite (gabbro-diabase)',
                area: '',
                center: [],
                points: [
                  [62.3250, 32.2240],
                  [62.3250, 32.2320],
                  [62.3210, 32.2320],
                  [62.3230, 32.2240]
                ]
              },
              {
                id: '8',
                name: 'Khauki-8',
                depositName: 'Block granite (gabbro-diabase)',
                area: '0.76 km2',
                center: [62.3238, 32.2350],
                points: [
                  [62.3300, 32.2324],
                  [62.3300, 32.2400],
                  [62.3230, 32.2410],
                  [62.3210, 32.2410],
                  [62.3210, 32.2340]
                ]
              },
              {
                id: '9',
                name: 'Khauki-9',
                depositName: 'Block granite (gabbro-diabase)',
                area: '',
                center: [],
                points: [
                  [62.3310, 32.2409],
                  [62.3310, 32.2442],
                  [62.3330, 32.2452],
                  [62.3220, 32.2420]
                ]
              },
              {
                id: '10',
                name: 'Khauki-10',
                depositName: 'Block granite (gabbro-diabase)',
                area: '',
                center: [],
                points: [
                  [62.3155, 32.2350],
                  [62.3150, 32.2440],
                  [62.3120, 32.2400],
                  [62.3135, 32.2340]
                ]
              }
            ]
          },
          {
            id: 2,
            name: 'Helga',
            depositName: 'Block granite (gabbro-diabase)',
            area: '0.62 km2',
            center: [],
            points: [
              [62.3530, 32.2507],
              [62.3530, 32.2600],
              [62.3500, 32.2620],
              [62.3450, 32.2600]
            ],
            deposits: []
          }
        ]
      };
    },
    components: {
    },
    computed: {
      ...mapGetters({
        user: 'user/user'
      })
    },
    methods: {
      ...mapActions({
      }),
      initMap (map) {
        this.MapInstance = map;
      },
      onDepositClick () {
        console.log('onDepositClick');
      }
    },
    created: function () {
    }
  };
</script>