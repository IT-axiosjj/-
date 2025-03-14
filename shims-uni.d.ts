/// <reference types='@dcloudio/types' />
import 'vue'

declare module '@vue/runtime-core' {
  type Hooks = App.AppInstance & Page.PageInstance
  // eslint-disable-next-line
  interface ComponentCustomOptions extends Hooks {}
}
