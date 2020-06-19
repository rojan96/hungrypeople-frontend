import axios from "axios";

export function signUp(username, password, email) {}

const urlLogin = `https://cors-anywhere.herokuapp.com/https://hpeopleserver.herokuapp.com/user`;

export const postLogin = async (userName, password) => {
  let userData = null;
  const data = axios
    .get(urlLogin, {
      auth: {
        username: userName,
        password: password,
      },
    })
    .then((data) => {
      if (data.status === 200) {
        data = data.data;
        userData = {
          id: data.id,
          username: data.username,
          email: data.email,
          address: data.address,
          phone: data.phone,
          firstName: data.firstName,
          lastName: data.lastName,
          profilePicture: data.profilePictureUrl,
        };
        return userData;
      }
      return userData;
    })
    .catch((e) => {
      return userData;
    });
  return data;
};

const urlGetOrders = `https://hpeopleserver.herokuapp.com/users/`;

export const getOrders = async (id) => {
  const url = urlGetOrders + `${id}/orders`;
  let orders = null;
  const orderData = axios
    .get(url)
    .then((data) => {
      console.log(data);
      if (data.status === 200) {
        orders = {};
        console.log(orders);
        return orders;
      } else {
        return orders;
      }
    })
    .catch((e) => {
      return orders;
    });
  return orderData;
};
