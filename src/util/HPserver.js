import axios from "axios";
const baseUrl = `https://cors-anywhere.herokuapp.com/https://hpeopleserver.herokuapp.com/`;
const urlLogin = `${baseUrl}login`;
const urlSignUp = `${baseUrl}users`;
const urlCreateBusiness = `${baseUrl}business`;

export const postLogin = async (userName, password) => {
  let userData = null;
  return axios
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

export function createBusiness(businessInfo) {
  var data = JSON.stringify({
    fullName: businessInfo.businessName,
    email: businessInfo.email,
  });
  const axiosConfig = {
    headers: {
      "content-Type": "application/json",
      Accept: "/",
      "Cache-Control": "no-cache",
      Cookie: document.cookie,
    },
    data: { data },
    credentials: "same-origin",
  };
  axios.defaults.withCredentials = true;

  axios
    .post(urlCreateBusiness, axiosConfig)
    .then((res) => {
      // Some result here
      console.log(res);
    })
    .catch((err) => {
      console.log(":(");
    });

  return true;

  // return axios
  //   .post(
  //     urlCreateBusiness,
  //     (header: {
  //       "Content-Type": "application/json",
  //       Cookie: "SESSION=N2UzNzcyZGItOGZiNi00M2Y4LTgyMGItMWJhNTkyM2UyN2Fl",
  //     }),
  //     {
  //       fullName: businessInfo.businessName,
  //       email: businessInfo.email,
  //     }
  //   )
  //   .then((result) => {
  //     if (result.status === 200) {
  //       return true;
  //     }
  //     return false;
  //   })
  //   .catch((e) => {
  //     return false;
  //   });
}
