import { LayoutPage } from './layout'

// 这一层无法解析成 tsx 的hooks，所以需要单独导出
export const IndexPage = () => {
  return (
    <div style={{
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: ' translate(-50%, -50%)'
    }}>
      <LayoutPage></LayoutPage>
    </div>)
}