import EChartsCommon from '@/components/EChartsCommon'
import { FeedbackOptions } from './offlinePortalOptions'
import useConfigStore from '@/store/index'


export const Feedback = (props) => {
  const renderer = useConfigStore((state) => state.renderer)

  return (
    <div
      style={{
        width: '100px',
        height: '100px'
      }}
    >
      <EChartsCommon
        renderer={renderer}
        option={FeedbackOptions(props.FeedbackData)}
      />
    </div>
  )
}

export default Feedback
