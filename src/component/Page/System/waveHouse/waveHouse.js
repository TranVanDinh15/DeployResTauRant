import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { getAllBranch } from "../../../axios/meThodPost";
import { handleGetListMaterial, handleGetListWaveHouse } from "../../../handleEvent/handleEvent";
import HeaderSystem from "../HeaderSystem/HeaderSystem";
import styles from './waveHouse.module.scss'
const cx = classNames.bind(styles)
function WaveHouseSystem() {
    const [allBranch, setAllBranch] = useState('')
    const [AllMaterial, setAllMaterial] = useState('')
    const [isMaterial, setIsMaterial] = useState('')
    const [currentBranch, setCurrentBranch] = useState('')
    const [allwaveHouse, setAllWaveHouse] = useState('')
    const userRedux = useSelector(state => state.rootLoginReducer.user)
    console.log(allwaveHouse)
    useEffect(() => {
        getAllBranch(setAllBranch)
    }, [])
    return <div className={cx("wrapperWaveHouseSystem")}>
        <HeaderSystem />
        <div className={cx("WaveHouseSystemHeading")}>
            <span>Quản Lý Kho</span>
        </div>
        <div className={cx("optionContainer")}>
            <div className={cx("createUser")}
                onClick={() => {
                }
                }
            >
                <FontAwesomeIcon icon={faPlus} />
                <span>Nhập Kho</span>
            </div>

            <Tippy
                render={attrs => (
                    <div className="box" tabIndex="-1" {...attrs}>
                        {
                            allBranch ?
                                allBranch.data.map((data, index) => {
                                    return (
                                        <div className={cx("box__Item")} key={index}
                                            onClick={() => {
                                                if (userRedux) {
                                                    setIsMaterial(true)
                                                    setCurrentBranch(data)
                                                    handleGetListMaterial(setAllMaterial, data.branchId)
                                                }
                                                else {
                                                    setIsMaterial(false)
                                                }
                                            }}
                                        >
                                            <span>{data.name}</span>
                                        </div>
                                    )
                                })
                                : ''
                        }
                    </div>
                )}
                placement={'bottom'}
                interactive={true}
            >
                <div className={cx("createUser")

                }
                    onClick={() => {

                    }
                    }
                    style={{ backgroundColor: 'var(--table)' }}
                >
                    <span>{currentBranch ? currentBranch.name : 'Chọn Chi Nhánh'}</span>
                </div>
            </Tippy>
            {
                isMaterial ?
                    <div className={cx("roidId")}>
                        <select id="BRAND" name="CHI NHÁNH"
                            onChange={(event) => {
                                handleGetListWaveHouse(currentBranch.branchId, event.target.value, setAllWaveHouse)
                            }}
                        >
                            <option >Chọn Nguyên Liệu</option>
                            {
                                AllMaterial ?
                                    AllMaterial.data.map((data, index) => {
                                        return (
                                            <option value={data.code}
                                                key={index}
                                            >{data.name}</option>
                                        )
                                    })
                                    : ''
                            }

                        </select>
                    </div>
                    : ''
            }
            <div className={cx("createUser")}
                onClick={() => {
                }
                }
            >
                <FontAwesomeIcon icon={faCalendar} />
                <span>Theo Thời Gian</span>
            </div>
        </div>
        <div className={cx("TableSytem")}>
            <table style={{ width: "100%" }}>
                <tbody>

                    <tr>
                        <th>Ngày Nhập</th>
                        <th>Mã Nguyên Liệu</th>
                        <th>Thuế</th>
                        <th>Số Lượng</th>
                        <th>Tiền Nhập</th>
                        <th>Trạng Thái</th>
                        <th>Chi Tiết</th>
                    </tr>
                    {
                        allwaveHouse ?
                            allwaveHouse.data.map((resource, index) => {
                                return (
                                    <tr key={index}>

                                        <td>{resource.date
                                        }</td>
                                        <td >{resource.materialCode}</td>
                                        <td>{resource.vatAmount}</td>
                                        <td>{resource.quantity}</td>
                                        <td>{resource.cost}</td>
                                        <td>{resource.status == 1 ? 'Nhập Thành Công' : 'Nhập Không Thành Công'}</td>
                                        <td>{resource.description
                                        }</td>
                                    </tr>
                                )
                            })
                            : ''
                    }


                </tbody>

            </table>
        </div>

        {
            <div className={cx("Containerupdate")}
            >
                <div className={cx("Containerupdate__Blur")}
                    onClick={() => {
                    }}
                >
                </div>
                <div className={cx("Containerupdate__Xmark")}
                    onClick={() => {
                    }}
                >
                    <FontAwesomeIcon icon={faXmark} />
                </div>
                <div className={cx("boxupdate")}>
                    <div className={cx("boxupdate__title")}>
                        <span>Thêm Bàn</span>
                    </div>

                    <Form className={cx("boxupdate__Item")}>
                        <div className={cx("roidId")}>
                            <span>Chi Nhánh</span>
                            <select id="BRAND" name="CHI NHÁNH"
                                onChange={(event) => {

                                }}
                            >
                                <option >Chọn Chi Nhánh</option>
                                {
                                    allBranch ?
                                        allBranch.data.map((data, index) => {
                                            return (
                                                <option value={data.branchId} key={index}>{data.name}</option>
                                            )
                                        })
                                        : ''
                                }
                            </select>
                        </div>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Tên Bàn</Form.Label>
                            <Form.Control className="mb-3__Input" type="FirstName" placeholder="Họ và tên đệm "
                                onChange={(event) => {

                                }}
                            />


                        </Form.Group>

                    </Form>
                    <Form className={cx("boxupdate__Item")}>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Mô Tả</Form.Label>
                            <Form.Control className="mb-3__Input" type="LastName" placeholder="Tên của bạn"
                                onChange={(event) => {

                                }}
                            />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Số Lượng</Form.Label>
                            <Form.Control className="mb-3__Input" type="LastName" placeholder="Tên của bạn"
                                onChange={(event) => {

                                }}
                            />

                        </Form.Group>

                    </Form>

                    <Button variant="primary"
                        onClick={(event) => {

                        }}
                    >
                        Tạo Bàn
                    </Button>
                </div>
            </div>
        }
        <ToastContainer></ToastContainer>
    </div>
}
export default WaveHouseSystem