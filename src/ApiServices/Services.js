export const BASE_API_URL = 'http://bargainpk.com/api/';


let endPoints = {
    signup: "signup",
    signin: "signin",
    activate: "activate",
    cars: "car_adds",
    bikes: "bike_adds",
    properties: "property_adds",
    carDetails: "car_add_detail",
    bikeDetails: "bike_add_detail",
    propertyDetails: "property_add_detail",
};

class Services {
    getAbsoluteUrl = (endPoint) => {
        console.log("End Pint=> " + endPoint + "\nUrl=> ", BASE_API_URL);
        console.log(BASE_API_URL + endPoint);
        return BASE_API_URL + endPoint;
    };

    requestHeaders = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };

//-------------SignUp-------------------
    signup(data) {
        console.log("post data : ", data);

        let options = {
            headers: this.requestHeaders,
            method: 'POST'
        };

        options.body = new FormData();
        for (let key in data) {
            options.body.append(key, data[key]);
        }

        return fetch(this.getAbsoluteUrl(endPoints.signup), {
            method: "POST",
            headers: this.requestHeaders,
            body: data
        })
    }

    //-------------SignIn-------------------
    signIn(data) {
        console.log("post data : ", data);

        let options = {
            headers: this.requestHeaders,
            method: 'POST'
        };

        options.body = new FormData();
        for (let key in data) {
            options.body.append(key, data[key]);
        }

        return fetch(this.getAbsoluteUrl(endPoints.signin), {
            method: "POST",
            headers: this.requestHeaders,
            body: data
        })
    }

    //-------------getCarAds-------------------
    getCarAds() {
        return fetch(this.getAbsoluteUrl(endPoints.cars), {
            method: "GET",
            headers: this.requestHeaders
        })
    }

    //-------------getCarAdDetails-------------------
    getCarAdDetails(token, id) {
        return fetch(this.getAbsoluteUrl(`${endPoints.carDetails}/add_id/${id}`), {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                Authorization: "Bearer" + " " + token
            }
        })
    }

    //-------------getBikeAds-------------------
    getBikeAds() {
        return fetch(this.getAbsoluteUrl(endPoints.bikes), {
            method: "GET",
            headers: this.requestHeaders
        })
    }

    //-------------getBikeAdDetails-------------------
    getBikeAdDetails(token, id) {
        return fetch(this.getAbsoluteUrl(`${endPoints.bikeDetails}/add_id/${id}`), {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                Authorization: "Bearer" + " " + token
            }
        })
    }

    //-------------getPropertiesAds-------------------
    getPropertiesAds() {
        return fetch(this.getAbsoluteUrl(endPoints.properties), {
            method: "GET",
            headers: this.requestHeaders
        })
    }

    //-------------getBikeAdDetails-------------------
    getPropertiesAdDetails(token, id) {
        return fetch(this.getAbsoluteUrl(`${endPoints.propertyDetails}/add_id/${id}`), {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                Authorization: "Bearer" + " " + token
            }
        })
    }


}

const ApiServices = new Services();
export default ApiServices;
