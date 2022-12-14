import classNames from "classnames/bind";
import styles from './Home.module.scss'
import Header from '../../defaultlayouts/Header/Header'
import Content from "../../defaultlayouts/Content/Content";
import './Home.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartSimple, faSackDollar, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faClipboard } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { useSelector } from "react-redux";
import IsLogin from "../../isLogin/isLogin";
const cx = classNames.bind(styles)
function Home() {
    const date = new Date()
    const userRedux = useSelector(state => state.rootLoginReducer.user)
    const [chartState, setCharState] = useState(
        {
            series: [60, 55, 13, 43, 22, 40],
            options: {
                chart: {
                    width: 380,
                    type: 'pie',
                },
                labels: ['Combo 1', 'Combo 2', 'Lẩu Kim Chi', 'Bò Mỹ', 'Combo 3', 'Combo 4'],
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            },


        }

    )
    return <>
        {
            userRedux ?
                <div>
                    <Header />
                    <Content>
                        <div className={cx('wrapperHome')}>
                            <div className={cx('Heading')}>
                                <span>Tổng quan</span>
                            </div>
                            <div className={cx('Container')}>
                                <div className={cx('Container__Day')}>
                                    <span>Hoạt động trong ngày ({date.getDate() + '-' + (date.getMonth() + 1) + '-' + (date.getFullYear() + 1) + '/' + date.getHours() + ':' + date.getMinutes()})</span>
                                </div>
                            </div>
                            <div className={cx('turnoverOrder')}>
                                <div className={cx('turnoverOrder__Item')}>
                                    <div className={cx('turnoverOrder__Item__child')}>
                                        <div className={cx('turnoverOrder__title')}>
                                            <span><i><FontAwesomeIcon icon={faSackDollar} /></i>Tiền Thu</span>
                                            <span>16.525,789</span>
                                        </div>
                                        <div className={cx('turnoverOrder__Infor')}>
                                            <div className={cx('turnoverOrder__Infor__Item')}>
                                                <span>Bán Hàng</span>
                                                <span>14,672,826</span>
                                            </div>
                                            <div className={cx('turnoverOrder__Infor__Item')}>
                                                <span>Khách đặt cọc</span>
                                                <span>400</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={cx('turnoverOrder__Item__child')}>
                                        <div className={cx('turnoverOrder__title')}>
                                            <span><i><FontAwesomeIcon icon={faClipboard} /></i>Order</span>
                                        </div>
                                        <div className={cx('turnoverOrder__Infor')}>
                                            <div className={cx('turnoverOrder__Infor__Item')}>
                                                <span>Đã Thanh Toán</span>
                                                <span>10</span>
                                                <span>14,672,826</span>
                                            </div>
                                            <div className={cx('turnoverOrder__Infor__Item')}>
                                                <span>Hủy</span>
                                                <span>4</span>
                                                <span>2000,000</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('turnoverOrder__Item')}>
                                    <div className={cx('turnoverOrder__Item__child')}>
                                        <div className={cx('turnoverOrder__title')}>
                                            <span><i><FontAwesomeIcon icon={faChartSimple} /></i>Số lượng Order</span>
                                        </div>
                                        <ReactApexChart
                                            options={chartState.options}
                                            series={chartState.series}
                                            type="pie"
                                            width="400"
                                            height="200"
                                        />
                                    </div>

                                    <div className={cx('turnoverOrder__Item__col')}>
                                        <div className={cx('turnoverOrder__Item__child')}>
                                            <div className={cx('turnoverOrder__title')}>
                                                <span><i><FontAwesomeIcon icon={faUserGroup} /></i>Khách Hàng</span>
                                                <span>58</span>
                                            </div>
                                            <div className={cx('turnoverOrder__Infor')}>
                                                <div className={cx('turnoverOrder__Infor__Item')}>
                                                    <span>Đã phục vụ xong</span>
                                                    <span>34</span>
                                                </div>
                                                <div className={cx('turnoverOrder__Infor__Item')}>
                                                    <span>Đang phục vụ</span>
                                                    <span>24</span>
                                                </div>

                                            </div>
                                        </div>
                                        <div className={cx('turnoverOrder__Item__child')}>
                                            <div className={cx('turnoverOrder__title')}>
                                                <span><i><FontAwesomeIcon icon={faChartSimple} /></i>Doanh thu ước tính</span>
                                                <span>16.525,789</span>
                                            </div>
                                            <div className={cx('turnoverOrder__Infor')}>
                                                <div className={cx('turnoverOrder__Infor__Item')}>
                                                    <span>Đã Thanh Toán</span>
                                                    <span>14,672,826</span>
                                                </div>
                                                <div className={cx('turnoverOrder__Infor__Item')}>
                                                    <span>Đang phục vụ</span>
                                                    <span>2000,000</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </ Content>
                </div>
                : <IsLogin />
        }
    </>
}
export default Home
