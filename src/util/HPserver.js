import axios from "axios";
const baseUrl = `https://cors-anywhere.herokuapp.com/https://hpeopleserver.herokuapp.com/`;
const urlLogin = `${baseUrl}login`;
const urlSignUp = `${baseUrl}users`;
const urlCreateBusiness = `${baseUrl}business`;
const urlProfileInfo = `${baseUrl}user`;

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
      return "username_taken";
    });
}

export async function createBusiness(businessInfo, token) {
  var data = {
    fullName: businessInfo.businessName,
    email: businessInfo.email,
  };
  const config = {
    method: "post",
    url: urlCreateBusiness,
    headers: {
      Authorization: token,
    },
    data: data,
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
