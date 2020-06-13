export function signUp(username, password, email) {
    // const userProfile = {
    //     "id": "1",
    //     "username": "crobinson",
    //     "email": "crobinson@gmail.com",
    //     "address": "Staten Island, NY",
    //     "phone": "4272762",
    //     "firstName": "Colin",
    //     "lastName": "Robinson",
    //     "profilePicture": "https://assets.fxnetworks.com/cms/prod/2020/03/17/web_cast_markproksch_what-we-do-in-the-shadows_570x698.jpg?resize=570:*"
    // }
    //
    // return userProfile;


    return fetch(
        `https://cors-anywhere.herokuapp.com/https://hpeopleserver.herokuapp.com/users`,
        {
            headers: {}
        }
    );
}

export const postLogin = async() => {
    // axios.post(url, {
    //     "username": userName,
    //     "password": password
    // }).then(result => {
    //     if (result.status === 200) {
    //         let data = {
    //             id: result.id,
    //             username: result.username
    //         }
    //         setUser(data);
    //         setLoggedIn(true);
    //         console.log(data);
    //     } else {
    //         setIsError(true);
    //     }
    // }).catch(e => {
    //     setIsError(true);
    // });
    let profileInfo;
    profileInfo = {
        "id": "1",
        "username": "crobinson",
        "email": "crobinson@gmail.com",
        "address": "Staten Island, NY",
        "phone": "4272762",
        "firstName": "Colin",
        "lastName": "Robinson",
        "profilePicture": "https://assets.fxnetworks.com/cms/prod/2020/03/17/web_cast_markproksch_what-we-do-in-the-shadows_570x698.jpg?resize=570:*"
    };
    return profileInfo;
}