import axios from "axios"
// Login
export const createUserPost = (email, password) => {
    return axios.post(process.env.REACT_APP_API_LOGIN, {
        email,
        password
    })

}
// Logout
export const logoutPost = (email) => {
    return axios.post(process.env.REACT_APP_API_LOGOUT, {
        email
    })
}
// CreateFood Post
export const createFoodPost = (body) => {
    return axios.post(process.env.REACT_APP_POST_CREATEFOOD, body)
}
// getAllFood
export const getFoodAll = (setData) => {
    axios.get(process.env.REACT_APP_GET_ALLFOOD)
        .then((response) => {
            setData(response)
            console.log(response)
        })
}
// createTable Post
export const createTablePost = (body) => {
    return axios.post(process.env.REACT_APP_POST_CREATETABLE, body)
}
// getALLTable
export const getTableAll = () => {
    return axios.get(process.env.REACT_APP_GET_ALLFOOD)
}

// createBrand Post
export const createBrand = (body) => {
    return axios.post(process.env.REACT_APP_POST_BRANDS, body)
}
// updateBrand Post
export const updateBrand = (body) => {
    return axios.post(process.env.REACT_APP_POST_UPDATEBRANDS, body)
}
// deleteBrand Post
export const deleteBrand = (body) => {
    return axios.post(process.env.REACT_APP_POST_DELETEBRANDs, body)
}
// create User
export const createUser = (body) => {
    return axios.post(process.env.REACT_APP_POST_CREATEUSER, body)
}




// API MAIN
export const getAllUserBrands = (seta, brandId) => {
    axios.get(`https://restaurant-manager-1.herokuapp.com/employee/list?branchId=${brandId}&restaurantId=${process.env.REACT_APP_RESTAURANTID}`)
        .then((response) => {
            seta(response)
        })
}
// get restaurant
export const getAllBranch = (setState) => {
    axios.get(`https://restaurant-manager-1.herokuapp.com/branch/list-branch?restaurantId=${process.env.REACT_APP_RESTAURANTID}`)
        .then((response) => {
            setState(response)
        })
}
// get All Brands
export const getRestaurant = (setState) => {
    axios.get(`https://restaurant-manager-1.herokuapp.com/restaurant/detail?id=${process.env.REACT_APP_RESTAURANTID}`)
        .then((response) => {
            setState(response)
        })
}
// create Branch
export const createBranch = (body) => {
    return axios.post(`https://restaurant-manager-1.herokuapp.com/branch/create`, body)
}
// get Status action of Branch
export const statusBranch = (branchId) => {
    return axios.put(`https://restaurant-manager-1.herokuapp.com/branch/change-status?id=${branchId}`)
}
// get list User
export const getListUser = (setState, branchId) => {
    axios.get(`https://restaurant-manager-1.herokuapp.com/employee/list?branchId=${branchId}&restaurantId=${process.env.REACT_APP_RESTAURANTID}`)
        .then((response) => {
            setState(response)
        })
}
// respone USer
export const responseAllUser = (branchId) => {
    return axios.get(`https://restaurant-manager-1.herokuapp.com/employee/list?branchId=${branchId}&restaurantId=${process.env.REACT_APP_RESTAURANTID}`)
}
// login 
export const loginUser = (body) => {
    try {
        return axios.post('https://restaurant-manager-1.herokuapp.com/employee/signin', body)
    } catch (error) {
        console.log(error)
    }
}
// change status user
export const changeStatusUser = (employeeId) => {
    return axios.put(`https://restaurant-manager-1.herokuapp.com/employee/change-status?id=${employeeId}`)
}
// create User
export const createUserBrands = (body) => {
    try {
        return axios.post(`https://restaurant-manager-1.herokuapp.com/employee/create`, body)
    } catch (error) {
        console.log(error)
    }
}
// update user
export const updateUserPost = (id, body) => {
    try {
        return axios.put(`https://restaurant-manager-1.herokuapp.com/employee/update?id=${id}`, body)
    } catch (error) {
        console.log(error)
    }
}
// Delete User
export const deleteUser = (employeeId) => {
    try {
        return axios.delete(`https://restaurant-manager-1.herokuapp.com/employee/delete?id=${employeeId}`)
    } catch (error) {
        console.log(error)
    }
}
// update Branch
export const updateBranchPost = (id, body) => {
    try {
        return axios.put(`https://restaurant-manager-1.herokuapp.com/branch/update?id=${id}`, body)
    } catch (error) {
        console.log(error)
    }
}

// get Material
export const getListMaterial = (setState, branchId) => {
    try {
        axios.get(`https://restaurant-manager-1.herokuapp.com/material/list-material?restaurantId=${process.env.REACT_APP_RESTAURANTID}&branchId=${branchId}`)
            .then((response) => {
                setState(response)
            })
    } catch (error) {
        console.log(error)
    }
}
// create Material
export const createMaterial = (body) => {
    try {
        return axios.post(`https://restaurant-manager-1.herokuapp.com/material/create`, body)
    } catch (error) {
        console.log(error)
    }
}
// update Material
export const updateMaterial = (body) => {
    try {
        return axios.put(`https://restaurant-manager-1.herokuapp.com/material/update`, body)
    } catch (error) {
        console.log(error)
    }
}
// getALlFood
export const getAllFood = (employeeId, setState) => {
    try {
        axios.get(`https://restaurant-manager-1.herokuapp.com/food/list-food?employeeId=${employeeId}`)
            .then((response) => {
                setState(response)
            })
    } catch (error) {
        console.log(error)
    }
}
// create Food
export const createFood = (body) => {
    try {
        return axios.post(`https://restaurant-manager-1.herokuapp.com/food/create`, body)
    } catch (error) {
        console.log(error)
    }
}
// update food
export const updateFood = (body) => {
    try {
        return axios.put(`https://restaurant-manager-1.herokuapp.com/food/update`, body)
    } catch (error) {
        console.log(error)
    }
}
// delete food
export const deleteFood = (foodId) => {
    try {
        return axios.delete(`https://restaurant-manager-1.herokuapp.com/food/delete?id=${foodId}`)
    } catch (error) {
        console.log(error)
    }
}

// get list table
export const getListTable = (employeeId, setState) => {
    try {
        axios.get(`https://restaurant-manager-1.herokuapp.com/table/list?employeeId=${employeeId}`)
            .then((response) => {
                console.log(response)
                setState(response)
            })
    } catch (error) {
        console.log(error)
    }
}
// create table
export const createTable = (body) => {
    try {
        return axios.post(`https://restaurant-manager-1.herokuapp.com/table/create`, body)
    } catch (error) {
        console.log(error)
    }
}
// update table
export const updateTable = (tableId, body) => {
    try {
        return axios.put(`https://restaurant-manager-1.herokuapp.com/table/update?id=${tableId}`, body)
    } catch (error) {
        console.log(error)
    }
}
// get list Report waveHouse
export const getListWaveHouse = (employeeId, codeMaterial) => {
    try {
        return axios.get(`https://restaurant-manager-1.herokuapp.com/warehouse/list-warehouse?employeeId=${employeeId}&material code=${codeMaterial}`)
    } catch (error) {
        console.log(error)
    }
}
// get report in day
export const getReportInDay = (employeeId) => {
    try {
        return axios.get(`https://restaurant-manager-1.herokuapp.com/report/in-day?employeeId=${employeeId}`)
    } catch (error) {
        console.log(error)
    }
}
