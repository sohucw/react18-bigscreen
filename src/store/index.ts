import { create } from 'zustand'
import { RendererType } from 'echarts/types/src/util/types.js'

interface State {
  renderer: RendererType
}

interface Action {
  setRenderer: (renderer: RendererType) => void
}

const useConfigStore = create<State & Action>(set => ({
  renderer: 'canvas',
  setRenderer: renderer => set({ renderer })
}))

export default useConfigStore
