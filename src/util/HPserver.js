import axios from "axios";
export const baseUrl = `https://cors-anywhere.herokuapp.com/http://hpeopleserver.herokuapp.com/`;
//const baseUrl = `http://127.0.0.1:5000/`;
export const urlLogin = `${baseUrl}login`;
export const urlSignUp = `${baseUrl}users`;
export const urlCreateBusiness = `${baseUrl}business`;
export const urlGetBusinessInfo = `${baseUrl}user/business`;
export const urlProfileInfo = `${baseUrl}user`;
export const urlGetBusinessById = `${baseUrl}business/`;
export const urlFoodItems = `${baseUrl}/business/`;
export const urlGetCartItems = `${baseUrl}cartItems`;
export const urlPostCartItems = `${baseUrl}cartItem/`;
export const urlPostOrder = `${baseUrl}postOrders/`;
export const urlPutCartItem = `${baseUrl}cartItem/`;

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
                return data.data;
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
                return data.data;
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
        .post(urlSignUp, userInfo)
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
            console.log(err);
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

export async function updateInfo(token, dto, url) {
    var config = {
        method: "put",
        url: url,
        headers: {
            Authorization: token,
            "Content-Type": "application/json",
        },
        data: dto,
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
        });
}

export async function getCart(token) {
    let data = "";
    const config = {
        method: "get",
        url: urlGetCartItems,
        headers: {
            Authorization: token,
        },
        data: data,
    };

    async function getRawCart() {
        return await axios(config)
            .then((data) => {
                if (data.status === 200) {
                    return data.data;
                }
                alert("something went wrong in cart");
            })
            .catch((error) => {
                alert("something went wrong in cart");
                console.log(error);
                console.log("can u see dis");
            });
    }

    const cart = await getRawCart();
    console.log(cart);

    if (cart.length > 0) {
        for (let cartItem of cart) {
            console.log(cartItem);
            if (
                cartItem.price == null ||
                cartItem.price == "string" ||
                cartItem.price == NaN ||
                cartItem.quantity == null ||
                cartItem.quantity == NaN ||
                cartItem.quantity == "string"
            ) {
                console.log("ISTHISWORKING?");
                // const data = JSON.stringify();
                const config2 = {
                    method: "put",
                    url: `${urlPutCartItem}${cartItem.id}`,
                    headers: {
                        Authorization: token,
                    },
                    data: {
                        businessName: cartItem.businessName,
                        category: cartItem.category,
                        createdAt: cartItem.createdAt,
                        description: cartItem.description,
                        id: cartItem.id,
                        name: cartItem.name,
                        price:
                            cartItem.price == null ||
                            cartItem.price == "string" ||
                            cartItem.price == NaN
                                ? 1
                                : parseInt(cartItem.price),
                        quantity:
                            cartItem.quantity == null ||
                            cartItem.quantity == NaN ||
                            cartItem.quantity == "string"
                                ? 1
                                : parseInt(cartItem.quantity),
                        updatedAt: cartItem.updatedAt,
                    },
                };
                cartItem = await axios(config2);
                console.log(cartItem);
            }
        }
    }

    return getRawCart();
}

export async function postItemToCart(token, businessId, item) {
    var config = {
        method: "post",
        url: `${urlPostCartItems}${businessId}`,
        headers: {
            Authorization: token,
        },
        data: item,
    };

    return axios(config)
        .then((response) => {
            if (response.status === 200) {
                return true;
            }
            return false;
        })
        .catch((e) => {
            console.log(e);
        });
}

export async function postOrder(token) {
    const config = {
        method: "POST",
        url: urlPostOrder,
        headers: {
            Authorization: token,
        },
        data: "",
    };

    return axios(config)
        .then((response) => {
            if (response.status === 200) {
                return true;
            }
            return false;
        })
        .catch((e) => {
            console.log(e);
        });
}
