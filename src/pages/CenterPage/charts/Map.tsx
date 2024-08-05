import EChartsCommon from '@/components/EChartsCommon'
import { mapOptions } from './options'
import useConfigStore from '@/store/index'

const Map = ({ mapData }) => {
  const renderer = useConfigStore((state) => state.renderer)
  return (
    <div
      style={{
        width: '920px',
        height: '650px'
      }}
    >
      {(mapData) ? (
        <EChartsCommon
          renderer={renderer}
          option={mapOptions(mapData)}
        />
      ) : (
        ''
      )}
    </div>
  )
}

export default Map
