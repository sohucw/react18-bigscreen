import { CapsuleChart } from '@jiaminghi/data-view-react';

const state = {
  config: {
    // 单位
    unit: '（人）',
    showValue: false,
    data: [],
  },
}

const UserSituation = (props) => {
  const config = {
    ...state.config,
    ...props.userIdentityCategory,
  };
  return (
    <div>
      {props.userIdentityCategory ? (
        <CapsuleChart
          config={config}
          style={{
            width: '468px',
            height: '210px',
          }}
        />
      ) : (
        ''
      )}
    </div>
  )
}

export default UserSituation;
