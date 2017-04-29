import Vue from 'vue'
import { DatePicker, TimeSelect } from 'element-ui'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'

locale.use(lang)

Vue.component(DatePicker.name, DatePicker)
Vue.component(TimeSelect.name, TimeSelect)
