import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faAngleDown, faPlus, faTrash, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import { getAllBranch, getFoodAll, getListMaterial } from "../../../axios/meThodPost";
import { handleCreateFood, handleGetEmployee, handleGetListFood, handleUpdateFood, hanleDeleteFood } from "../../../handleEvent/handleEvent";
import HeaderSystem from "../HeaderSystem/HeaderSystem";
import styles from './FoodSystem.module.scss'
const cx = classNames.bind(styles)
function FoodSystem() {
    const [allFood, setAllFood] = useState('')
    const [allBranch, setAllBranch] = useState('')
    const [allMaterial, setAllMaterial] = useState('')
    const [currentBranch, setCurrentBranch] = useState('')
    const [currentFood, setCurrentFood] = useState('')
    const [requestCreateFood, setRequestCreateFood] = useState({
        restaurantId: process.env.REACT_APP_RESTAURANTID,
        branchId: '',
        foodId: '',
        name: '',
        price: '',
        type: '',
        material: [],
        status: 1
    }
    )
    const [employeeKichen, setEmployKichen] = useState('')
    const [requestUpdate, setRequestUpdate] = useState({
        restaurantId: process.env.REACT_APP_RESTAURANTID,
        branchId: '',
        foodId: '',
        name: '',
        price: '',
        type: '',
        material: [],
        status: 1

    })
    const [isCheckBox, setIsCheckBox] = useState(false)
    const [isCreate, setIsCreate] = useState(false)
    const [isUpdate, setIsUpdate] = useState(false)
    const [isDelete, setIsDelete] = useState(false)
    const navigate = useNavigate()
    useEffect(() => {
        getAllBranch(setAllBranch)
    }, [])
    console.log(allFood)
    return <div className={cx("wrapperFoodSystem")}>
        <HeaderSystem />
        <div className={cx("FoodSystemHeading")}>
            <span>Qu???n L?? M??n ??n</span>
        </div>
        <div className={cx("createUser")}
            onClick={() => {
                let r = Math.floor(Math.random() * (36 - 2 + 1) + 2)
                setRequestCreateFood({
                    ...requestCreateFood,
                    foodId: r
                })
                setIsCreate(true)
            }
            }
        >
            <FontAwesomeIcon icon={faPlus} />
            <span>Th??m M??n</span>
        </div>
        <Tippy
            render={attrs => (
                <div className="box" tabIndex="-1" {...attrs}>
                    {
                        allBranch ?
                            allBranch.data.map((data, index) => {
                                return (
                                    <div className={cx("box__Item")}
                                        onClick={() => {
                                            setCurrentBranch(data)
                                            handleGetListFood(data.branchId, setAllFood)
                                            setRequestUpdate({
                                                restaurantId: process.env.REACT_APP_RESTAURANTID,
                                                branchId: '',
                                                foodId: '',
                                                name: '',
                                                price: '',
                                                type: '',
                                                material: [],
                                                status: 1

                                            })
                                        }}
                                        key={index}
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
                    // handleCreateUser(setIsCreateUser)
                    // navigate('/AddFood')
                }
                }
                style={{ backgroundColor: 'var(--table)' }}
            >
                {/* <FontAwesomeIcon icon={faPlus} /> */}
                <span>{currentBranch ? currentBranch.name : 'Chi Nh??nh'}</span>
            </div>
        </Tippy>
        <div className={cx("systemTable")}>
            <table style={{
                width: "100%"
            }}>
                < tbody >

                    <tr>
                        <th scope="col">T??n M??n</th>
                        <th scope="col">Ph??n Lo???i</th>
                        <th scope="col">Gi?? B??n</th>
                        <th scope="col">Chi Ti???t</th>
                        <th scope="col">action</th>
                    </tr>
                    {
                        allFood ?
                            allFood.data.map((resource, index) => {
                                return (
                                    <tr key={index}>

                                        <td>{resource.name}</td>
                                        <td>{resource.type}</td>
                                        <td>{resource.price}</td>
                                        <td></td>
                                        <td><div className={cx("tableUser__Icon")} key={index}>
                                            <FontAwesomeIcon icon={faPenToSquare} onClick={() => {
                                                setIsUpdate(true)
                                                handleGetEmployee(currentBranch.branchId, employeeKichen, setEmployKichen)
                                                setCurrentFood(resource)
                                                setRequestUpdate({
                                                    restaurantId: process.env.REACT_APP_RESTAURANTID,
                                                    branchId: resource.branchId,
                                                    name: resource.name,
                                                    type: resource.type,
                                                    foodId: resource.foodId,
                                                    price: resource.price,
                                                    material: [],
                                                    status: resource.status
                                                })
                                            }} />
                                            <FontAwesomeIcon icon={faTrash}
                                                onClick={() => {
                                                    setCurrentFood(resource)
                                                    setIsDelete(true)
                                                }}
                                            />
                                        </div></td>
                                    </tr>
                                )
                            })
                            : ''
                    }


                </tbody>

            </table>
        </div >
        {
            isCreate ?
                <div className={cx("Containerupdate")}
                >
                    < div className={cx("Containerupdate__Blur")}
                        onClick={() => {
                            setIsCreate(false)
                        }
                        }
                    >
                    </div >
                    <div className={cx("Containerupdate__Xmark")}
                        onClick={() => {
                            setIsCreate(false)
                        }}
                    >
                        <FontAwesomeIcon icon={faXmark} />
                    </div>
                    <div className={cx("Containerupdate")}>
                        <div className={cx("Containerupdate__Blur")}
                            onClick={() => {
                                setIsCreate(false)
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
                                <span>Th??m M??n</span>
                            </div>
                            <Form className={cx("boxupdate__Item")}>
                                <Form.Group className="mb-3" controlId="formBasicPassword">

                                    <Form.Label>Chi Nh??nh</Form.Label>
                                    <Form.Select aria-label="Default select example"
                                        onChange={async (event) => {
                                            setIsCheckBox(false)
                                            setRequestCreateFood({
                                                ...requestCreateFood,
                                                branchId: event.target.value
                                            })
                                        }}
                                    >
                                        <option >Ch???n Chi Nh??nh</option>
                                        {
                                            allBranch ?
                                                allBranch.data.map((data, index) => {
                                                    return (
                                                        <option value={data.branchId} key={index}>{data.name}</option>
                                                    )
                                                })
                                                : ''
                                        }

                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Ph??n Lo???i</Form.Label>
                                    <Form.Control className="mb-3__Input" type="LastName"
                                        onChange={(event) => {
                                            setRequestCreateFood({
                                                ...requestCreateFood,
                                                type: event.target.value
                                            })
                                        }}
                                    />

                                </Form.Group>
                            </Form>
                            <Form className={cx("boxupdate__Item")}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>T??n M??n</Form.Label>
                                    <Form.Control className="mb-3__Input" type="FirstName"
                                        onChange={(event) => {
                                            setRequestCreateFood({
                                                ...requestCreateFood,
                                                name: event.target.value
                                            })
                                        }}
                                    />


                                </Form.Group>
                                {
                                    requestCreateFood.branchId ?
                                        <div className={cx("box_material")}
                                        >
                                            <div className={cx("box_material__Item")}
                                                onClick={() => {
                                                    if (isCheckBox === true) {
                                                        setIsCheckBox(false)
                                                    } else {
                                                        setIsCheckBox(true)
                                                        getListMaterial(setAllMaterial, requestCreateFood.branchId)
                                                    }
                                                }}
                                            >
                                                <span>Nguy??n Li???u</span>
                                                <FontAwesomeIcon icon={faAngleDown} />
                                            </div>
                                            {
                                                isCheckBox ?
                                                    <div className={cx("box_material__CheckBox")}>
                                                        {
                                                            allMaterial ?
                                                                allMaterial.data.map((data, index) => {
                                                                    return (
                                                                        <Form.Check
                                                                            type={"checkbox"}
                                                                            label={data.name}
                                                                            value={data.code}
                                                                            key={index}
                                                                            onClick={(event) => {
                                                                                const code = requestCreateFood.material
                                                                                    .some((data) => {
                                                                                        return data.material === event.target.value
                                                                                    })

                                                                                if (!code) {
                                                                                    setRequestCreateFood({
                                                                                        ...requestCreateFood,
                                                                                        material: [
                                                                                            ...requestCreateFood.material,
                                                                                            {
                                                                                                material: event.target.value,
                                                                                                quantity: 0.5
                                                                                            }
                                                                                        ]
                                                                                    })
                                                                                } else {
                                                                                    const index = requestCreateFood.material.findIndex((data) => {
                                                                                        return data.material == event.target.value
                                                                                    })
                                                                                    requestCreateFood.material.splice(index, 1)
                                                                                }


                                                                            }}
                                                                        />
                                                                    )
                                                                })
                                                                : ''
                                                        }

                                                    </div>
                                                    : ''
                                            }
                                        </div>
                                        : ''
                                }

                            </Form>
                            <Form className={cx("boxupdate__Item")}>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Gi??</Form.Label>
                                    <Form.Control className="mb-3__Input" type="LastName"
                                        onChange={(event) => {
                                            setRequestCreateFood({
                                                ...requestCreateFood,
                                                price: event.target.value
                                            })
                                        }}
                                    />

                                </Form.Group>
                            </Form>
                            <Form className={cx("boxupdate__Item")}>
                            </Form>

                            <Button variant="primary"
                                onClick={(event) => {
                                    if (!requestCreateFood.branchId || !requestCreateFood.material || !requestCreateFood.name || !requestCreateFood.price || !requestCreateFood.type || !requestCreateFood.foodId || !requestCreateFood.type) {
                                        toast.error('Vui L??ng ??i???n ?????y ????? th??ng tin', {
                                            position: toast.POSITION.TOP_RIGHT
                                        });
                                    }
                                    else {
                                        handleCreateFood(requestCreateFood, setIsCreate)
                                    }
                                }}

                            >
                                Th??m m??n
                            </Button>
                        </div>
                    </div>
                </div >
                : ''
        }
        {
            isUpdate ?
                <div className={cx("Containerupdate")}
                >
                    <div className={cx("Containerupdate__Blur")}
                        onClick={() => {
                            setIsUpdate(false)
                            setIsCheckBox(false)
                        }}
                    >
                    </div>
                    <div className={cx("Containerupdate__Xmark")}
                        onClick={() => {
                            setIsUpdate(false)
                            setIsCheckBox(false)
                        }}
                    >
                        <FontAwesomeIcon icon={faXmark} />
                    </div>
                    <div className={cx("boxupdate")}>
                        <div className={cx("boxupdate__title")}>
                            <span>C???p Nh???t Th??ng Tin</span>
                        </div>
                        <Form className={cx("boxupdate__Item")}>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>T??n</Form.Label>
                                <Form.Control className="mb-3__Input" type="LastName" placeholder={currentFood.name}
                                    onChange={(event) => {
                                        if (!event.target.value) {
                                            setRequestUpdate({
                                                ...requestUpdate,
                                                name: currentFood.name
                                            })
                                        } else {
                                            setRequestUpdate({
                                                ...requestUpdate,
                                                name: event.target.value
                                            })
                                        }
                                    }}
                                />

                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Ph??n Lo???i</Form.Label>
                                <Form.Control className="mb-3__Input" type="LastName" placeholder={currentFood.type}
                                    onChange={(event) => {
                                        if (!event.target.value) {
                                            setRequestUpdate({
                                                ...requestUpdate,
                                                type: currentFood.type
                                            })
                                        }
                                        else {
                                            setRequestUpdate({
                                                ...requestUpdate,
                                                type: event.target.value
                                            })
                                        }
                                    }}
                                />

                            </Form.Group>
                        </Form>

                        <Form className={cx("boxupdate__Item")}>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Gi??</Form.Label>
                                <Form.Control className="mb-3__Input" type="LastName" placeholder={currentFood.price}
                                    onChange={(event) => {
                                        if (!event.target.value) {
                                            setRequestUpdate({
                                                ...requestUpdate,
                                                price: currentFood.price
                                            })
                                        }
                                        else {
                                            setRequestUpdate({
                                                ...requestUpdate,
                                                price: event.target.value
                                            })
                                        }
                                    }}
                                />

                            </Form.Group>
                            <div className={cx("box_material")}
                            >
                                <div className={cx("box_material__Item")}
                                    onClick={() => {
                                        if (isCheckBox === true) {
                                            setIsCheckBox(false)
                                        } else {
                                            setIsCheckBox(true)
                                            getListMaterial(setAllMaterial, currentBranch.branchId)
                                        }
                                    }}
                                >
                                    <span>Nguy??n Li???u</span>
                                    <FontAwesomeIcon icon={faAngleDown} />
                                </div>
                                {
                                    isCheckBox ?
                                        <div className={cx("box_material__CheckBox")}>
                                            {
                                                allMaterial ?
                                                    allMaterial.data.map((data, index) => {
                                                        return (
                                                            <Form.Check
                                                                type={"checkbox"}
                                                                label={data.name}
                                                                value={data.code}
                                                                key={index}
                                                                onClick={(event) => {
                                                                    const code = requestUpdate.material
                                                                        .some((data) => {
                                                                            return data.material === event.target.value
                                                                        })

                                                                    if (!code) {
                                                                        setRequestUpdate({
                                                                            ...requestUpdate,
                                                                            material: [
                                                                                ...requestUpdate.material,
                                                                                {
                                                                                    material: event.target.value,
                                                                                    quantity: 0.5
                                                                                }
                                                                            ]
                                                                        })
                                                                    } else {
                                                                        const index = requestUpdate.material.findIndex((data) => {
                                                                            return data.material == event.target.value
                                                                        })
                                                                        requestUpdate.material.splice(index, 1)
                                                                    }


                                                                }}
                                                            />
                                                        )
                                                    })
                                                    : ''
                                            }

                                        </div>
                                        : ''
                                }
                            </div>
                        </Form>
                        <Form className={cx("boxupdate__Item")}>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Tr???ng Th??i</Form.Label>
                                <Form.Control className="mb-3__Input" type="LastName" placeholder={currentFood.status}
                                    onChange={(event) => {
                                        if (!event.target.value) {
                                            setRequestUpdate({
                                                ...requestUpdate,
                                                status: currentFood.status
                                            })
                                        }
                                        else {
                                            setRequestUpdate({
                                                ...requestUpdate,
                                                status: event.target.value
                                            })
                                        }
                                    }}
                                />

                            </Form.Group>
                        </Form>

                        <Button variant="primary"
                            onClick={(event) => {
                                handleUpdateFood(requestUpdate)
                            }}
                        >
                            C???p Nh???t
                        </Button>
                    </div>
                </div>
                : ''
        }
        {
            isDelete ?
                <div className={cx('agree')}>
                    <div className={cx('agree__Box')}>
                        <span>B???n c?? mu???n x??a</span>
                        <div className={cx('agree__Box__btn')}>
                            <button
                                onClick={(event) => {
                                    event.preventDefault()
                                    hanleDeleteFood(currentFood.foodId, setIsDelete)
                                }}
                            >X??a</button>
                            <button
                                onClick={() => {
                                    setIsDelete(false)
                                }}
                            >H???y</button>
                        </div>
                    </div>
                </div>
                : ''
        }
        <ToastContainer></ToastContainer>
    </div >
}
export default FoodSystem