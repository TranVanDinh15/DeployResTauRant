import classNames from "classnames/bind";
import { useNavigate } from "react-router";
import styles from './System.module.scss'
const cx = classNames.bind(styles)
function System() {
    const navigate = useNavigate()
    const listSystem = [
        {
            name: 'Chi Nhánh',
            to: '/System/Brand-manage'
        },
        {
            name: 'Người Dùng',
            to: '/System/user-manage'
        },
        {
            name: 'Nguyên Liệu',
            to: '/System/Material-manage'
        },
        {
            name: 'Món Ăn',
            to: '/System/Food-manage'
        },
        {
            name: 'Bàn',
            to: '/System/Table-manage'
        },
        {
            name: 'Trở Về',
            to: '/'
        }
    ]

    return <div className={cx('wrapperSystem')}>
        <div className={cx('wrapperSystem__Item')}>
            {
                listSystem ?
                    listSystem.map((data, index) => {
                        return (
                            <div className={cx('wrapperSystem__Item__Box')} key={index}
                                onClick={() => {
                                    navigate(data.to)
                                }}
                            >
                                <span>{data.name}</span>
                            </div>
                        )
                    })
                    : ''
            }

        </div>
    </div>
}
export default System