import React, { useEffect } from 'react';

var zipcode = 94538;
function apiCall() {
    useEffect(() => {
        const fetchHardiness = () => {
            fetch("https://phzmapi.org/" + zipcode + ".json",
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            ).then(response =>
                response.json().then(data => {
                    console.log(data);
                })
            );
        };
        fetchHardiness();
    }, []);
}

apiCall();
export default apiCall;
