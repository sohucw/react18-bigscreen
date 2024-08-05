import { useEffect, useState } from 'react'
import { BorderBox13 } from '@jiaminghi/data-view-react'
import { ModuleTitle } from '@/style/globalStyledSet'
import { rightPageDataType } from '@/api/mock/rightPageData'
import { RightPage, RightTopBox, RightCenterBox, RightBottomBox } from './style'
import { get } from '@/api/http'
import { ResultEnum } from '@/enums/httpEnum'
import { rightPageDataApi } from '@/api/mock/index'
import earthRotate from '@/assets/images/earth-rotate.gif'

import BrowseCategories from './charts/BrowseCategories'
import UserIdentityCategory from './charts/UserIdentityCategory'
import OfflinePortal from './charts/OfflinePortal'
import Feedback from './charts/Feedback'

export const RightPageIndex = () => {
  const [rightData, setRightData] = useState<rightPageDataType | undefined>(undefined)

  const fetchData = async () => {
    const res = await get(rightPageDataApi)
    if (res.code === ResultEnum.SUCCESS) {
      setRightData(res.data)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return rightData ? (
      <RightPage>
          <RightTopBox>
              <div className="right-top">
                  <ModuleTitle>
                      <i className="iconfont">&#xe7f7;</i>
                      <span>工种数据分布</span>
                  </ModuleTitle>
                  <div className="right-top-content">
                      <BrowseCategories browseCategories={rightData.browseCategories}></BrowseCategories>
                      <img alt="地球" className="earth-gif" src={earthRotate} />
                  </div>
              </div>
          </RightTopBox>

          <RightCenterBox>
              <ModuleTitle>
                  <i className="iconfont">&#xe7fd;</i>
                  <span>互联网员工排布</span>
              </ModuleTitle>
              <UserIdentityCategory userIdentityCategory={rightData.userIdentityCategory}></UserIdentityCategory>
          </RightCenterBox>

          <RightBottomBox>
              <BorderBox13 className="right-bottom-borderBox13">
                  <div className="right-bottom">
                      <ModuleTitle>
                          <i className="iconfont">&#xe790;</i>
                          <span>网站QPS</span>
                      </ModuleTitle>
                      {/* 反馈 */}
                      <div className="feedback-box">
                          {rightData.offline
                              ? rightData.offline.feedback.map((item, index) => {
                                    return (
                                        <div className="feedback-box-item" key={index}>
                                            <Feedback FeedbackData={item}></Feedback>
                                            <span className="dis-text">{item.title}</span>
                                        </div>
                                    );
                                })
                              : ''}
                      </div>
                      {/* 门店 */}
                      <div className="offline-portal-box">
                          {rightData.offline ? (
                              <OfflinePortal offlinePortalData={rightData.offline.offlinePortalData} />
                          ) : (
                              ''
                          )}
                      </div>
                  </div>
              </BorderBox13>
          </RightBottomBox>
      </RightPage>
  ) : (
      <div>loading...</div>
  );
}