import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import styles from './HeaderSystem.module.scss'
const cx = classNames.bind(styles)
function HeaderSystem() {
    const userLogin = useSelector(state => state.rootLoginReducer.user)
    console.log(userLogin)
    const listSystem = [
        {
            name: 'Chi Nhánh',
            to: '/System/Brand-manage',
            role: process.env.REACT_APP_KEY_ADMIN,
        },
        {
            name: 'Người Dùng',
            to: '/System/user-manage',
            role: process.env.REACT_APP_KEY_ADMIN,
        },
        {
            name: 'Món Ăn',
            to: '/System/Food-manage',
            role: process.env.REACT_APP_KEY_ACCOUNTANT,
        },
        {
            name: 'Order',
            to: '/System/Order',
            role: process.env.REACT_APP_KEY_ACCOUNTANT,
        },
        {
            name: 'Vật Liệu',
            to: '/System/Material-manage',
            role: process.env.REACT_APP_KEY_ADMIN,
        },
        {
            name: 'Bàn',
            to: '/System/Table-manage',
            role: process.env.REACT_APP_KEY_ADMIN,
        },
        {
            name: 'Kho',
            to: '/System/WareHouse-manage',
            role: process.env.REACT_APP_KEY_ACCOUNTANT,
        },
        {
            name: 'Trở Về Trang Chủ',
            to: '/'
        }
    ]
    const navigate = useNavigate()
    return <div className={cx('wrapperHeaderSystem')}>
        <div className={cx("HeaderSystem")}>
            <div className={cx("HeaderSystem__Item")}>
                <div className={cx("HeaderSystem__Item__List")}>
                    <Tippy
                        render={attrs => (
                            <div className={cx("box")} tabIndex="-1" {...attrs}>
                                {
                                    listSystem ? listSystem.map((data, index) => {
                                        if (userLogin && data.role == userLogin.role && data.role != process.env.REACT_APP_KEY_ADMIN) {
                                            return (
                                                <span
                                                    onClick={() => {
                                                        navigate(data.to)
                                                    }}
                                                >
                                                    {data.name}
                                                </span>
                                            )
                                        }
                                        if (userLogin && userLogin.role == process.env.REACT_APP_KEY_ADMIN) {
                                            return (
                                                <span
                                                    onClick={() => {
                                                        navigate(data.to)
                                                    }}
                                                >
                                                    {data.name}
                                                </span>
                                            )
                                        }


                                    }) : ''
                                }
                            </div>
                        )}
                        interactive={true}
                        placement={"bottom"}
                    >
                        <span>Mục</span>
                    </Tippy>
                </div>
                <div className={cx("HeaderSystem__ItemChild")}>
                    <span>WellCome, Admin :))</span>
                </div>
                <div className={cx("HeaderSystem__ItemChild")}
                // onClick={() => {
                //     navigate('/')
                // }}
                >
                    <FontAwesomeIcon icon={faRightFromBracket} />
                </div>
            </div>
        </div>
    </div>
}
export default HeaderSystem