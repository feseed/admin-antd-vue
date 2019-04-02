import Vue from 'vue'
import DataStatusList from '@/components/DataStatusList'
import DotColor from '@/components/DotColor'
import HeaderNav from '@/components/HeaderNav'
import InfoCard from '@/components/InfoCard'
import QueryConditions from '@/components/QueryConditions'
import SearchResultPanel from '@/components/SearchResultPanel'
import ShTable from '@/components/ShTable'
import UpdateCard from '@/components/UpdateCard'
import UpdatePanel from '@/components/UpdatePanel'

// 初始化全局组件
Vue.component(DataStatusList.name, DataStatusList)
Vue.component(DotColor.name, DotColor)
Vue.component(HeaderNav.name, HeaderNav)
Vue.component(InfoCard.name, InfoCard)
Vue.component(QueryConditions.name, QueryConditions)
Vue.component(SearchResultPanel.name, SearchResultPanel)
Vue.component(ShTable.name, ShTable)
Vue.component(UpdateCard.name, UpdateCard)
Vue.component(UpdatePanel.name, UpdatePanel)
