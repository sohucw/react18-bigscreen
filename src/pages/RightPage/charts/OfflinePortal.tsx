import EChartsCommon from '@/components/EChartsCommon'
import { OfflinePortalOptions } from './offlinePortalOptions';
import useConfigStore from '@/store/index'

export const OfflinePortal = (props) => {
  const renderer = useConfigStore((state) => state.renderer)

  return (
    <div
      style={{
        width: '430px',
        height: '230px',
      }}>
      <EChartsCommon
        renderer={renderer}
        option={OfflinePortalOptions(props.offlinePortalData)}
      />
    </div>
  )
}



export default OfflinePortal;
