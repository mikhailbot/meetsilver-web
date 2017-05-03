<template>
  <div class="date-option">
    <div class="date-title">
      {{ date | dateFilter }}
    </div>
    <div class="available-options">
      <div v-for="time in dateTimes" class="option time">
        <time-slot :time="time"></time-slot>
      </div>
      <div class="option new" @click="pickTime">
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
import TimeSlot from '~components/TimeSlot'

export default {
  props: [ 'date' ],

  components: {
    TimeSlot
  },

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
      this.$store.dispatch('addTimeSlot', { date: this.date, time: time })
    }
  },

  computed: {
    dateTimes () {
      return this.$store.getters.getDateTimes(this.date)
    }
  },

  filters: {
    dateFilter (value) {
      return moment(value).format('dddd, MMMM Do YYYY')
    },

    timeFilter (value) {
      return moment(value).format('h:mm a')
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

  .option {
    width: 8rem;
    height: 2.75rem;
    margin: 0 0.5rem 0.75rem;
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

    &.new {
      cursor: pointer;
    }

    &.time {
      font-weight: 700;
      font-size: 1.25rem;
      color: $primary-color;
    }
  }

  .available-options {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 30rem;
    margin: auto;
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
