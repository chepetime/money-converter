<template>
  <div class="hello">

    <!-- Header -->
    <div class="c-header">
      <div class="l-wrapper l-wrapper--mobile">
        <p>Currency Converter</p>
      </div>
    </div>

    <div class="c-content">

      <!-- Money Group -->

      <div class="c-money-group">
        <div class="l-wrapper l-wrapper--mobile">

          <p class="c-money-group__legend"><span>💵</span> MXN to JPY Rate</p>

          <div class="c-money-group__fields">
            <fieldset>
              <legend>1 MXN = JPY</legend>
              <input type="number" name="rate" placeholder="" v-model="rate">
            </fieldset>
          </div>

        </div>
      </div>

      <!-- Money Group -->
      <div class="c-money-group">
        <div class="l-wrapper l-wrapper--mobile">
          <p class="c-money-group__legend"><span class="flag">🇲🇽</span> Get MXN</p>
          <div class="c-money-group__fields">
            <fieldset><legend>MXN</legend><input type="number" name="mxn" placeholder="0" v-model="currency.mxn"></fieldset>
            <fieldset><legend>JPY</legend><input type="text" name="jpy" placeholder="JPY" disabled="true" :value="formatPriceJpy(jpy)"></fieldset>
          </div>
        </div>
      </div>

      <!-- Money Group -->
      <div class="c-money-group">
        <div class="l-wrapper l-wrapper--mobile">
          <p class="c-money-group__legend"><span class="flag">🇯🇵</span> Get JPY</p>
          <div class="c-money-group__fields">
            <fieldset><legend>JPY</legend><input type="number" name="jpy" placeholder="0" v-model="currency.jpy"></fieldset>
            <fieldset><legend>MXN</legend><input type="text" name="mxn" placeholder="MXN" disabled="true" :value="formatPrice(mxn, 'MXN')"></fieldset>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import numeral from 'numeral'

export default {
  name: 'TheMoneyExchange',

  mounted () {
    let _rate = localStorage.rate

    if (_rate) {
      this.rate = _rate
    }
  },

  destroyed () {},

  props: [],

  data () {
    return {
      rate: 0.169,
      currency: {
        mxn: 1000,
        jpy: 500
      }
    }
  },

  computed: {
    jpy () {
      return Math.floor((this.currency.mxn / this.rate) * 100) / 100
    },
    mxn () {
      return Math.floor((this.currency.jpy * this.rate) * 100) / 100
    }
  },

  methods: {
    formatPriceJpy (value) {
      return `¥${numeral(value).format('0,0.00')}`
    },
    formatPrice (value) {
      return `${numeral(value).format('$0,0.00')}`
    }
  },

  watch: {
    rate (val) {
      localStorage.setItem('rate', val)
    }
  },

  components: {}

}
</script>
