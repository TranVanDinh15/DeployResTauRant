import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import classNames from "classnames/bind"
import styles from './detailTable.module.scss'
const cx = classNames.bind(styles)
function DetailTable({ setIsDetail }) {
    return (
        <div className={cx("wrapperDetailTable")}
        >
            <div className={cx("wrapperDetailTable__Container")}

            >
                <div className={cx("wrapperDetailTable__xmark")}
                    onClick={(event) => {
                        setIsDetail(false)
                    }}
                >
                    <FontAwesomeIcon icon={faXmark} />
                </div>
                <div className={cx("wrapperDetailTable__Heading")}>
                    <span>Bàn 2</span>
                </div>
                <div className={cx("wrapperDetailTable__Item")}>
                    <table class="w3-table">
                        <tr>
                            <th>Món ăn</th>
                            <th>Giá</th>
                            <th>Sô Lượng</th>
                            <th>Tổng Tiền </th>
                        </tr>
                        <tr>
                            <td>combo1</td>
                            <td>900000K</td>
                            <td>2</td>
                            <td>18000000k</td>
                        </tr>

                    </table>
                    <div className={cx("wrapperDetailTable__Item__Total")}>
                        <span>Tổng Cộng</span>
                        <span>18000000k</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DetailTable