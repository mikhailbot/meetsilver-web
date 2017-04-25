<template>
  <div class="date-option">
    <div class="date-title">
      {{ date | readable }}
    </div>
    <div class="available-options">
      <div class="new-option">
        <div class="option-text">
          +
        </div>
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
      options: []
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
  }

  .available-options {
    display: flex;
    justify-content: center;
  }
}
</style>
