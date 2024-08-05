import { MockMethod } from 'vite-plugin-mock'
import { RequestHttpEnum, ResultEnum } from '@/enums/httpEnum'
import leftPageData from './leftPageData'
import centerPageData from './centerPageData'
import rightPageData from './rightPageData'

// export const leftPageDataAccessFrequencyApi =
//   '/api/leftPageData/accessFrequency'
// export const leftPageDataPeakFlowApi = '/api/leftPageData/peakFlow'
// export const leftPageDataTrafficStatusApi = '/api/leftPageData/trafficStatus'
// export const leftPageDataUserStatusApi = '/api/leftPageData/userStatus'

// export const centerPageDataDetailsListApi = '/api/centerPageData/detailsList'
// export const centerPageDataMapDataApi = '/api/centerPageData/mapData'

// export const rightPageDataBrowseCategoriesApi =
//   '/api/rightPageData/browseCategories'
// export const rightPageDataUserIdentityCategoryApi =
//   '/api/rightPageData/userIdentityCategory'
// export const rightPageDataOfflineApi = '/api/rightPageData/offline'

export const leftPageDataApi = '/api/leftPageData'
export const centerPageDataApi = '/api/centerPageData'
export const rightPageDataApi = '/api/rightPageData'

const successObject = (data: unknown) => {
  return {
    code: ResultEnum.SUCCESS,
    msg: '请求成功',
    data
  }
}

const mockMethod: MockMethod[] = [
  {
    url: leftPageDataApi,
    method: RequestHttpEnum.GET,
    response: () => successObject(leftPageData)
  },
  {
    url: centerPageDataApi,
    method: RequestHttpEnum.GET,
    response: () => successObject(centerPageData)
  },
  {
    url: rightPageDataApi,
    method: RequestHttpEnum.GET,
    response: () => successObject(rightPageData)
  },
  // ----------------------------
  // {
  //   url: leftPageDataAccessFrequencyApi,
  //   method: RequestHttpEnum.GET,
  //   response: () => successObject(leftPageData.accessFrequency)
  // },
  // {
  //   url: leftPageDataPeakFlowApi,
  //   method: RequestHttpEnum.GET,
  //   response: () => successObject(leftPageData.peakFlow)
  // },
  // {
  //   url: leftPageDataTrafficStatusApi,
  //   method: RequestHttpEnum.GET,
  //   response: () => successObject(leftPageData.trafficStatus)
  // },
  // {
  //   url: leftPageDataUserStatusApi,
  //   method: RequestHttpEnum.GET,
  //   response: () => successObject(leftPageData.userStatus)
  // },
  // // 中间
  // {
  //   url: centerPageDataDetailsListApi,
  //   method: RequestHttpEnum.GET,
  //   response: () => successObject(centerPageData.detailsList)
  // },
  // {
  //   url: centerPageDataMapDataApi,
  //   method: RequestHttpEnum.GET,
  //   response: () => successObject(centerPageData.mapData)
  // },
  // // 右侧
  // {
  //   url: rightPageDataBrowseCategoriesApi,
  //   method: RequestHttpEnum.GET,
  //   response: () => successObject(rightPageData.browseCategories)
  // },
  // {
  //   url: rightPageDataUserIdentityCategoryApi,
  //   method: RequestHttpEnum.GET,
  //   response: () => successObject(rightPageData.userIdentityCategory)
  // },
  // {
  //   url: rightPageDataOfflineApi,
  //   method: RequestHttpEnum.GET,
  //   response: () => successObject(rightPageData.offline)
  // }
]

export default mockMethod
