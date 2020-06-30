import axios from "axios";
const baseUrl = `https://cors-anywhere.herokuapp.com/http://hpeopleserver.herokuapp.com/`;
//const baseUrl = `http://127.0.0.1:5000/`;
const urlLogin = `${baseUrl}login`;
const urlSignUp = `${baseUrl}users`;
const urlCreateBusiness = `${baseUrl}business`;
const urlGetBusinessInfo = `${baseUrl}user/business`;
const urlProfileInfo = `${baseUrl}user`;
const urlGetBusinessById = `${baseUrl}business/`;
const urlFoodItems = `http://hpeopleserver.herokuapp.com/business/`;

export const postLogin = async (userName, password) => {
    const config = {
        method: "post",
        url: urlLogin,
        headers: {
            "Content-Type": "application/json",
        },
        data: { username: userName, password: password },
    };
    return axios(config)
        .then((data) => {
            if (data.status === 200) {
                let token = data.headers.authorization;
                return token;
            }
            return null;
        })
        .catch((e) => {
            return null;
        });
};

export const getUserInfo = async (token) => {
    let data = "";
    const config = {
        method: "get",
        url: urlProfileInfo,
        headers: {
            Authorization: token,
        },
        data: data,
    };

    return axios(config)
        .then((data) => {
            if (data.status === 200) {
                let user = data.data;
                const userData = {
                    id: user.id,
                    username: user.username,
                    email: user.email,
                    address: user.address,
                    phone: user.phone,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    profilePicture: user.profilePictureUrl,
                };
                return userData;
            }
            alert("something went wrong");
        })
        .catch((error) => {
            console.log(error);
            console.log("can u see dis");
        });
};

export const getBusinessInfo = async (token) => {
    const config = {
        method: "get",
        url: urlGetBusinessInfo,
        headers: {
            Authorization: token,
            "Content-Type": "application/json",
        },
        data: {},
    };

    return axios(config)
        .then((data) => {
            if (data.status === 200) {
                let business = data.data;
                const businessData = {
                    id: business.id,
                    bFullName: business.bFullName,
                    bEmail: business.bEmail,
                    bAddress: business.bAddress,
                    bPhone: business.bPhone,
                    bCoverPictureUrl: business.bCoverPictureUrl,
                };
                return businessData;
            }
            alert("something went wrong");
        })
        .catch((error) => {
            console.log(error);
            console.log("can u see dis");
        });
};

export function postSignup(userInfo) {
    return axios
        .post(urlSignUp, {
            username: userInfo.username,
            password: userInfo.password,
            phone: userInfo.phone,
            firstName: userInfo.firstName,
            lastName: userInfo.lastName,
            profilePictureUrl: userInfo.profilePictureUrl,
            address: userInfo.address,
        })
        .then((result) => {
            if (result.status === 200) {
                return "success";
            }
            return false;
        })
        .catch((e) => {
            console.log(e);
            return "username_taken";
        });
}

export async function createBusiness(businessInfo, token) {
    const config = {
        method: "post",
        url: urlCreateBusiness,
        headers: {
            Authorization: token,
        },
        data: businessInfo,
    };

    axios(config)
        .then((res) => {
            // Some result here
            console.log(res);
        })
        .catch((err) => {
            console.log(":(");
        });

    return true;
}

export async function getBusinessById(businessId) {
    const config = {
        method: "get",
        url: `${urlGetBusinessById}${businessId}`,
    };
    return axios(config)
        .then((data) => {
            return data.data;
        })
        .catch((error) => {
            console.log(error);
        });
}

export async function getMenu(businessId) {
    const data = "";
    const config = {
        method: "get",
        url: `${urlFoodItems}${businessId}/menu`,
        header: {},
        data: data,
    };

    return axios(config)
        .then((data) => {
            let menu = [];
            data.data.content.map((element) => {
                let foodItem = {
                    category: element.category,
                    id: element.id,
                    description: element.description,
                    name: element.name,
                    price: element.price,
                };
                menu.push(foodItem);
            });
            return menu;
        })
        .catch((error) => {
            console.log(error);
        });
}

export async function postMenuItem(token, id, menuItem) {
    var config = {
        method: "post",
        url: `https://cors-anywhere.herokuapp.com/http://hpeopleserver.herokuapp.com/business/${id}/foodItems`,
        headers: {
            Authorization: token,
        },
        data: menuItem,
    };

    return axios(config)
        .then((response) => {
            console.log(response);
            return response;
        })
        .catch((e) => {
            console.log(e);
        });
}

export async function updateBusiness(token, business) {
    var config = {
        method: "put",
        url: urlGetBusinessInfo,
        headers: {
            Authorization: token,
            "Content-Type": "application/json",
        },
        data: business,
    };
    return axios(config)
        .then((result) => {
            if (result.status === 200) {
                return "success";
            }
            return false;
        })
        .catch((e) => {
            console.log(e);
            return "request unsuccessful";
        })
        .catch((e) => {
            console.log(e);
        });
}
