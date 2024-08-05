import { IndexPage } from '../pages/IndexPage'

const routes = [
  {
    path: '/',
    element: IndexPage()
  },
  {
    path: '*',
    element: <div>页面丢失了</div>
  }
]

export default routes
