import axios from "axios";

const urlLogin = `https://cors-anywhere.herokuapp.com/https://hpeopleserver.herokuapp.com/user`;

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

const urlSignUp = `https://cors-anywhere.herokuapp.com/https://hpeopleserver.herokuapp.com/users`;

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

const urlCreateBusiness = `https://cors-anywhere.herokuapp.com/https://hpeopleserver.herokuapp.com/business`;
export function createBusiness(businessInfo) {
  var data = JSON.stringify({
    fullName: "Chichi pasal",
    email: "email@email.com",
  });

  var config = {
    method: "post",
    url: urlCreateBusiness,
    headers: {
      "Content-Type": "application/json",
      Cookie: "SESSION=N2UzNzcyZGItOGZiNi00M2Y4LTgyMGItMWJhNTkyM2UyN2Fl",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
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
