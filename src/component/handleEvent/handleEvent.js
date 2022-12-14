import { createFood, createMaterial, createTable, createUser, createUserBrands, deleteBrand, deleteFood, deleteUser, getAllBranch, getAllFood, getAllUserBrands, getListMaterial, getListTable, getListUser, getListWaveHouse, getReportInDay, getTableAll, responseAllUser, statusBranch, updateBranchPost, updateBrand, updateFood, updateMaterial, updateTable, updateUserPost } from "../axios/meThodPost"
import { toast } from "react-toastify";

export const handleDeleteBrand = async (body, setIsDelete) => {
    const response = await deleteBrand(body)
    if (response.data.errCode == 0) {
        toast.success("Xóa Thành Công:))", {
            position: toast.POSITION.TOP_RIGHT
        });
    }
    setIsDelete(false)
}
// post createUser
export const handleCreateUserPost = async (body, setIsCreateUser) => {
    const response = await createUserBrands(body)
    console.log(response)
    // if (response.data.errCode == 1) {
    //     toast.error(response.data.message, {
    //         position: toast.POSITION.TOP_RIGHT
    //     });
    // }
    if (response.data.status == 1) {
        toast.success(response.data.message, {
            position: toast.POSITION.TOP_RIGHT
        });
        setIsCreateUser(false)
    }
    if (response.data.status == -1) {

        toast.error(response.data.message, {
            position: toast.POSITION.TOP_RIGHT
        });
    }

}
// handle Update User
export const hanleUpdateUser = async (id, body, setUpdate, setAllUser, brandId) => {
    const response = await updateUserPost(id, body)
    if (response.status == 200) {
        toast.success(response.data, {
            position: toast.POSITION.TOP_RIGHT
        });
        const getLitUserAll = await getListUser(setAllUser, brandId)
        setUpdate(false)
        // update user outside UI
    }
}
// hanle Update User
export const handleUpdateBrand = async (id, body, setUpdate, setAllBrand) => {
    const response = await updateBranchPost(id, body)
    if (response.status == 200) {
        toast.success(response.data, {
            position: toast.POSITION.TOP_RIGHT
        });
        await getAllBranch(setAllBrand)
        setUpdate(false)
    }
}
// handle delete User
export const hanleDeleteUser = async (employeeId, setIsDelete) => {
    const response = await deleteUser(employeeId)
    console.log(response)
    if (response.status == 200) {
        toast.success(response.data, {
            position: toast.POSITION.TOP_RIGHT
        });
        setIsDelete(false)
    }
}
// handle getListMaterial
export const handleGetListMaterial = async (setState, branchId) => {
    try {
        const response = getListMaterial(setState, branchId)
    } catch (error) {
        console.log(error)
    }
}
// handle Get  employee kitchen from brandId
export const handleGetEmployee = async (branchId, requestState, setEmployeeId) => {
    try {

        const respone = await responseAllUser(branchId)
        const employeeKichen = respone.data.data.find((data) => {
            return data.role === process.env.REACT_APP_KEY_KITCHEN
        })
        console.log(employeeKichen)
        if (employeeKichen) {
            setEmployeeId({
                ...requestState,
                employeeId: employeeKichen.employeeId
            })
        } else {
            setEmployeeId({
                ...requestState,
                employeeId: ''
            })
        }

    } catch (error) {
        console.log(error)
    }
}
// handle createMaterial 
export const handleCreateMaterial = async (body, setIsMaterial) => {
    const response = await createMaterial(body)
    if (response.status == 200) {
        toast.success(response.data, {
            position: toast.POSITION.TOP_RIGHT
        });
        setIsMaterial(false)
    }
    console.log(response)
}
// hanle update material
export const handleUpdateMaterial = async (body) => {
    const updateResponse = await updateMaterial(body)
    if (updateResponse.status == 200) {
        toast.success(updateResponse.data, {
            position: toast.POSITION.TOP_RIGHT
        });

    }
}
// handle get list food
export const handleGetListFood = async (brandId, setState) => {
    const responeUser = await responseAllUser(brandId)
    const kitchenUser = responeUser.data.data.find((data) => {
        return data.role === process.env.REACT_APP_KEY_KITCHEN
    })
    console.log(kitchenUser)
    if (kitchenUser) {
        getAllFood(kitchenUser.employeeId, setState)
    }

}
// handle create food
export const handleCreateFood = async (body, setIsCreate) => {
    const response = await createFood(body)
    if (response.status == 200) {
        toast.success(response.data, {
            position: toast.POSITION.TOP_RIGHT
        });
        setIsCreate(false)
    }
}
// handle update food
export const handleUpdateFood = async (body) => {
    const response = await updateFood(body)
    console.log(response)
}
// handle delete Food
export const hanleDeleteFood = async (foodId, setIsDelete) => {
    const response = await deleteFood(foodId)
    if (response.status == 200) {
        toast.success(response.data, {
            position: toast.POSITION.TOP_RIGHT
        });
        setIsDelete(false)
    }
}
// handle status Branch
export const handleStatusBrand = async (branchId, setStatusBranch) => {
    const response = await statusBranch(branchId)
    if (response.status == 200) {
        setStatusBranch(response.data)
    }
    console.log(response)
}
// handle get all table
export const handleGetAllTable = async (employeeId, setState) => {
    const response = await getListTable(employeeId, setState)
    console.log(response)
}
// handle find Admin
export const handleFindAdmin = async (branchId, state, setState) => {
    const responeListUser = await responseAllUser(branchId)
    const findAdmin = responeListUser.data.data.find((data) => {
        return data.role == process.env.REACT_APP_KEY_ADMIN
    })
    if (findAdmin) {
        setState({
            ...state,
            employeeId: findAdmin.employeeId
        })
    }
}
// handle create table
export const handleCreateTable = async (body) => {
    const response = await createTable(body)
    console.log(response)
    if (response.status == 200) {
        toast.success(response.data, {
            position: toast.POSITION.TOP_RIGHT
        });
    }
}
// handle update table
export const handleUpdateTable = async (tableId, body, setIsUpdate) => {
    try {
        const response = await updateTable(tableId, body)
        console.log(response)
        if (response.status == 200) {
            toast.success(response.data, {
                position: toast.POSITION.TOP_RIGHT
            });
            setIsUpdate(false)
        }
    } catch (error) {
        console.log(error)
    }

}
// handle get Report In Day
export const handleGetReportInDay = async (employeeId, setState) => {
    const response = await getReportInDay(employeeId)
    if (response.status == 200) {
        setState(response)
    }
}
// handle get list wavehouse
export const handleGetListWaveHouse = async (branchId, codeMaterial, setState) => {
    const response = await responseAllUser(branchId)
    console.log(response)
    if (response) {
        const accountant = response.data.data.find((data, index) => {
            return data.role == process.env.REACT_APP_KEY_ACCOUNTANT
        })
        if (accountant) {
            const listWaveHouse = await getListWaveHouse(accountant.employeeId, codeMaterial)
            setState(listWaveHouse)
        }
        console.log(accountant)
    }

}