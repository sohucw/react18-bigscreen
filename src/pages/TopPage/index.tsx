import { useEffect, useRef, useState } from 'react';
import { formatTime } from '@/utils/index';
import {
  Decoration10,
  Decoration8,
  Decoration6,
} from '@jiaminghi/data-view-react';

import { TopBox, TimeBox } from './style';

const stateInfo = {
    title: '数据可视化平台',
    weekday: ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
};

const TopPageIndex = () => {
    const [timeStr, setTimeStr] = useState('');
    const timing = useRef<number | null>(null);

    // 设置时间
    const setTimingFn = () => {
        timing.current = setInterval(() => {
            const dateYear = formatTime(new Date(), 'yyyy-MM-dd');
            const dateDay = formatTime(new Date(), 'HH: mm: ss');
            const dateWeek = stateInfo.weekday[new Date().getDay()];
            setTimeStr(`${dateYear} | ${dateDay} ${dateWeek}`);
        }, 1000);
    };

    useEffect(() => {
        // 初始化开启定时
        setTimingFn();
        return () => {
            if (timing.current) clearInterval(timing.current);
        };
    }, []);

    return (
        <>
            <TopBox>
                <div className="top_box">
                    <Decoration10 className="top_decoration10" />
                    <div className="title-box">
                        <Decoration8 className="top_decoration8" color={['#568aea', '#000000']} />
                        <div className="title">
                            <span className="title-text">{stateInfo.title}</span>
                            <Decoration6
                                className="title-bototm top_decoration6"
                                reverse={true}
                                color={['#50e3c2', '#67a1e5']}
                            />
                        </div>

                        <Decoration8 reverse={true} className="top_decoration8" color={['#568aea', '#000000']} />
                    </div>
                    <Decoration10 className="top_decoration10 top_decoration10_reverse" />
                    <TimeBox>
                        <h3>{timeStr}</h3>
                    </TimeBox>
                </div>
            </TopBox>
        </>
    );
};

export default TopPageIndex;
