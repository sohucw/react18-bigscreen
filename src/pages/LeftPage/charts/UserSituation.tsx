import { userOptions } from './options'
import { ScrollBoard } from '@jiaminghi/data-view-react'

const state = {
  config: {
    // 表头背景色
    headerBGC: '#443dc5',
    // 奇数行背景色
    oddRowBGC: '#09184F',
    // 偶数行背景色
    evenRowBGC: '#070C34',
    // 行号
    index: true,
    // 行号表头
    indexHeader: '序号',
    // 宽度
    columnWidth: [50, 100, 200],
    // 对其方式
    align: ['center'],
    // 表行数
    rowNum: 10
  }
}

const UserSituation = props => {
  const config = {
    ...state.config,
    ...userOptions(props.userStatus)
  }

  return (
    <div>
      {props.userStatus ? (
        <ScrollBoard
          config={config}
          style={{
            width: '438px',
            height: '550px'
          }}
        ></ScrollBoard>
      ) : (
        ''
      )}
    </div>
  )
}

export default UserSituation
