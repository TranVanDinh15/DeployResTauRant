import classNames from "classnames/bind";
import styles from './OrderTable.module.scss'
import Header from '../../defaultlayouts/Header/Header'
import Content from "../../defaultlayouts/Content/Content";
import { useSelector } from "react-redux";
import { useState } from "react";
import DetailTable from "./detailTable/detailTable";
import IsLogin from "../../isLogin/isLogin";
const cx = classNames.bind(styles)
const row = []
for (let i = 1; i <= 12; i++) {
    row.push(0 + i)
}
function OrderTable() {
    const [isDetail, setIsDetail] = useState(false)
    const currentUser = useSelector(state => state.rootLoginReducer.user)
    const hanleDisplayDeTail = () => {
        if (isDetail == true) {
            setIsDetail(false)
        }
        setIsDetail(true)
    }
    return <>
        {
            currentUser ?
                <div>
                    <Header />
                    <Content>
                        <div className={cx("wrapperOrderTable")}>
                            <div className={cx("TitleTable")}>
                                <button>PHÒNG BÀN</button>
                            </div>

                            <div className={cx("ListTable")}>
                                {
                                    row.map((data, index) => {
                                        return (

                                            <div className={cx("ListTable__Item", `ListTable__Item__${index}`)} key={index}
                                                onClick={() => {
                                                    hanleDisplayDeTail()
                                                }}
                                            >
                                                <span
                                                    style={{
                                                        fontSize: "16px",
                                                        fontWeight: "700"
                                                    }}
                                                >Bàn {data}</span>
                                                <div className={cx("box__Item")}
                                                    style={{
                                                        fontSize: "10px !important"
                                                    }}
                                                >
                                                    <span>Tổng Cộng: 240000</span>
                                                    <span>Ngày vào: 31/31/31313</span>
                                                    <span>Giờ vào: 00:00</span>
                                                </div>
                                                <div className={cx("box__detail")}>
                                                    <span>Chi Tiết</span>
                                                </div>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                        </div>
                        <div className={cx("bottom_btn")}>
                            <div className={cx("bottom__btn__Item")}>
                                <button>Chuyển Bàn</button>
                            </div>
                            <div className={cx("bottom__btn__Item")}

                            >
                                <button

                                >Thu Tiền</button>
                            </div>

                        </div>
                        {
                            isDetail == true ?
                                <DetailTable setIsDetail={setIsDetail} />
                                : ''
                        }
                    </ Content>
                </div>
                : <IsLogin />
        }
    </>
}
export default OrderTable