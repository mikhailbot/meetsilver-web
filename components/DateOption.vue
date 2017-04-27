<template>
  <div class="date-option">
    <div class="date-title">
      {{ date | readable }}
    </div>
    <div class="available-options">
      <div v-for="time in sortedOptions">
        {{ time }}
      </div>
      <div class="new-option" @click="pickTime">
        <div class="option-text">
          +
        </div>
        <el-time-select
          v-model="newTime"
          :pickerOptions="pickerOptions"
          @change="addTime"
          placeholder="Select time"
          ref="eltimepicker">
        </el-time-select>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  props: [ 'date' ],

  data () {
    return {
      options: [],
      newTime: null,
      pickerOptions: {
        start: '06:00',
        end: '20:00'
      }
    }
  },

  methods: {
    pickTime () {
      this.$refs.eltimepicker.pickerVisible = true
    },

    addTime (time) {
      this.options.indexOf(time) === -1 ? this.options.push(time) : false
    }
  },

  computed: {
    sortedOptions () {
      return this.options.sort()
    }
  },

  filters: {
    readable (value) {
      return moment(value).format('dddd, MMMM Do YYYY')
    }
  }
}
</script>

<style scoped lang="scss">
@import "~assets/variables";

.date-option {

  margin-bottom: 5rem;

  .date-title {
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 1rem;
  }

  .new-option {
    width: 8rem;
    height: 2.5rem;
    font-size: 1.5rem;
    background: $white;
    color: $grey;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;

    .option-text {
      position: absolute;
    }
  }

  .available-options {
    display: flex;
    justify-content: center;
  }

  .el-date-editor--time-select {
    margin: auto;
    width: 8rem;
    display: block;
  }

  .el-input {
    visibility: hidden;
    margin: auto;
    width: 8rem;
  }
}
</style>
