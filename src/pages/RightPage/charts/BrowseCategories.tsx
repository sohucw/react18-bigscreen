import { BrowseCategoriesOptions } from './offlinePortalOptions';
import EChartsCommon from '@/components/EChartsCommon'
import useConfigStore from '@/store/index'


// 关联数据类别
export const BrowseCategories = (props) => {
  const renderer = useConfigStore((state) => state.renderer)

  return (
    <div
      style={{
        width: '430px',
        height: '200px',
      }}>
      {props.browseCategories ? (
        <EChartsCommon
          renderer={renderer}
          option={BrowseCategoriesOptions(props.browseCategories)}
        />
      ) : (
        ''
      )}
    </div>
  );
}

export default BrowseCategories;
