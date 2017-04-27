<template>
  <div class="datepicker">
    <vue-button
    :text="'Add new date'"
    :label="'Great, let’s add some meeting times!'"
    @click.native="pickDate"
    ref="triggerdatepicker">
  </vue-button>
  <el-date-picker
  v-model="date"
  type="date"
  placeholder="Pick a day"
  align="left"
  @change="addDate"
  :picker-options="pickerOptions"
  ref="eldatepicker">
</el-date-picker>
</div>
</template>

<script>
import VueButton from '~components/VueButton'

export default {
  components: {
    VueButton
  },

  data () {
    return {
      date: null,
      pickerOptions: {
        shortcuts: [
          {
            text: 'Today',
            onClick (picker) {
              picker.$emit('pick', new Date())
            }
          }, {
            text: 'Tomorrow',
            onClick (picker) {
              const date = new Date()
              date.setTime(date.getTime() + 3600 * 1000 * 24)
              picker.$emit('pick', date)
            }
          }, {
            text: 'Next week',
            onClick (picker) {
              const date = new Date()
              date.setTime(date.getTime() + 3600 * 1000 * 24 * 7)
              picker.$emit('pick', date)
            }
          }
        ]
      }
    }
  },

  methods: {
    addDate (date) {
      this.$emit('addDate', date)
    },

    pickDate () {
      this.$refs.eldatepicker.pickerVisible = true
    }
  }
}
</script>

<style scoped lang="scss">
.datepicker {
  max-width: 18rem;
  margin: 2rem auto;

  .datepicker-input {
    display: none;
  }

  .el-input {
    visibility: hidden;
    height: 0;
  }

  .el-date-editor {
    padding: 0;
    margin: auto;
    width: 100%;
  }
}
</style>
