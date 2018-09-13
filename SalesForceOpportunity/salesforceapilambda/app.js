
const axios = require('axios')
const url = 'http://checkip.amazonaws.com/';
let response;
let baseUrl = "https://na57.lightning.force.com/services/data/v43.0/"
require("dotenv").config();
  //get list of Opportunities
exports.lambda_handler = async (event, context, callback) => {
    try {
        // this.loginWithPromise()
        // .then((accessToken) => {
        //     console.log("Access token is", accessToken);
        //     axios({
        //         method: "GET",
        //         url: baseUrl + "sobjects/Account/describe",
        //         headers: {"Authorization": "Bearer " + accessToken}
        //     })
        //     .then ((result) => {
        //         callback(null, result.data.fields[0])
        //     }).catch((err) => { console.log(err);});
        //     //callback(null, accessToken);
        // });
        var accessToken = await this.loginWithPromise()
        console.log("Access token: ", accessToken);
        await axios({
            method: "GET",
            url: baseUrl + "sobjects/Account/describe",
            headers: {"Authorization": "Bearer " + accessToken}
        })
        .then((result) => {
            console.log("In axios result");
            response = result.data.fields[0];
            //console.log(result.data.fields[0]);
            //callback(null, result.data.fields[0]);
        }).catch((err) => { 
            console.log(err);
            callback (err, null);
        });
        //callback(null, accessToken);
        callback(null, response);
    }
    catch (err) {
        console.log(err);
        callback(err, null);
    }
    //callback(null, response);
};

exports.loginSalesForce = function() {
    var client = "3MVG9dZJodJWITSv1gBbAQXgYTizgtLYyp_gVQp2zs7LyEn7UjZqwyWEAqiG8XnTaVQmoUNYNAygHtKj9Gl0X"; //Consumer Key
    var secret = "8772927550362158"; //Consumer Secret
 
    var username = "patvin80@yahoo.com";
    var password = "Dallas80!";
 
    var loginUrl = "https://login.salesforce.com/services/oauth2/token";
    return new Promise((resolve, reject) => {
        axios({
            method: "post",
            url: loginUrl,
            data: "grant_type=password" +
                "&username=" + username +
                "&password=" + password +
                "&client_id=" +  client +
                "&client_secret=" + secret,
            headers: {
                "Accept":"application/json",
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }).then((response) => {
            //console.log(response);
            console.log("Inside Function", response.data.access_token);
            resolve(response.data.access_token);
        }).catch( (err) => {
            console.log(err)
            reject(err);
        });
    });
}

exports.loginWithPromise = () => {
    var client = "3MVG9dZJodJWITSv1gBbAQXgYTizgtLYyp_gVQp2zs7LyEn7UjZqwyWEAqiG8XnTaVQmoUNYNAygHtKj9Gl0X"; //Consumer Key
    var secret = "8772927550362158"; //Consumer Secret
 
    var username = process.env.SFUNAME;
    var password = process.env.SFPASSWORD;
    console.log("Username: ", username)
    var loginUrl = "https://login.salesforce.com/services/oauth2/token";
    return axios({
            method: "post",
            url: loginUrl,
            data: "grant_type=password" +
                "&username=" + username +
                "&password=" + password +
                "&client_id=" +  client +
                "&client_secret=" + secret,
            headers: {
                "Accept":"application/json",
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }).then((response) => {
            //console.log(response);
            //console.log("Inside Function", response.data.access_token);
            return Promise.resolve(response.data.access_token);
        }).catch( (err) => {
            console.log(err)
            reject(err);
        });
}

exports.loginData = async () => {
    return await logMeIn();
}

async function logMeIn() {
    return Promise.resolve("Logged in");
}