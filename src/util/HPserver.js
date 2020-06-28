import axios from "axios";
const baseUrl = `https://cors-anywhere.herokuapp.com/https://hpeopleserver.herokuapp.com/`;
const urlLogin = `${baseUrl}login`;
const urlSignUp = `${baseUrl}users`;
const urlCreateBusiness = `${baseUrl}business`;
const urlProfileInfo = `${baseUrl}user`;
// const urlFoodItems = `${baseUrl}business/`;
const urlFoodItems = `https://jsonplaceholder.typicode.com/albums`;
const urlFoodItems2 = `http://hpeopleserver.herokuapp.com/business/7/foodItems`;

export const postLogin = async (userName, password) => {
    return axios
        .post(urlLogin, {
            username: userName,
            password: password,
        })
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
    const data = JSON.stringify({});

    const config = {
        method: "post",
        url: urlCreateBusiness,
        headers: {
            // "Content-Type": "application/json",
            Authorization: token,
            "Content-Type": "application/json",
        },
        data: {},
    };

    return axios(config)
        .then((data) => {
            console.log(data);
            if (data.status === 200) {
                let business = data.data;
                console.log(business);
                const businessData = {
                    id: business.id,
                    fullName: business.bFullName,
                    email: business.bEmail,
                    address: business.bAddress,
                    phone: business.bPhone,
                    profilePicture: business.bCoverPictureUrl,
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

// export async function getMenu() {
//     const config = {
//         method: "get",
//         url: urlFoodItems,
//         headers: {
//             Authorization:
//                 "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJxIiwiZXhwIjoxNTkzODM1MjUzfQ.KJVCoFTCENP4qvDpaePAiOu4-us6McN0k9sh-NvHa_XAFKbqGlaZ1XS4d_1pTVRyAZZHOcai5tCSA--7s8hgcQ",
//         },
//     };
//     return axios(config)
//         .then((data) => {
//             let menu = [];
//             data.content.map((element) => {
//                 let foodItem = {
//                     category: element.category,
//                     id: element.id,
//                     description: element.description,
//                     name: element.name,
//                     price: element.price,
//                 };
//                 menu.push(foodItem);
//             });
//             return menu;
//         })
//         .catch((error) => {
//             console.log(error);
//         });
// }
export async function getMenu(token) {
    console.log(token);
    const data = "";
    const config = {
        method: "get",
        url: urlFoodItems2,
        header: {
            Authorization: token,
        },
        data: data,
    };

    return axios(config)
        .then((data) => {
            let menu = [];
            data.content.map((element) => {
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

export async function postMenuItem(token, menuItem) {
    var config = {
        method: "post",
        url:
            "https://cors-anywhere.herokuapp.com/http://hpeopleserver.herokuapp.com/business/7/foodItems",
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
