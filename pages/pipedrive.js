const Pipedrive = require("pipedrive");
let apiClient = new Pipedrive.ApiClient();
let api_key = apiClient.authentications["api_key"];
api_key.apiKey = "ab25f4e2ede0eaabf21d857f5da63e868edf8c51";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = apiClient.authentications["oauth2"];
oauth2.accessToken = "ab25f4e2ede0eaabf21d857f5da63e868edf8c51";
let apiInstance = new Pipedrive.LeadsApi(apiClient);
// console.log("13---", apiInstance);
// let opts = Pipedrive.AddLeadRequest.constructFromObject({
//     // Properties that you want to add
//     title: "Tushar Lead",
//     organizationId: 1,
//     //   personid: 2,
// });
// apiInstance.addLead(opts).then(
//     (data) => {
//         console.log("API called successfully. Returned data: ", data);
//     },
//     (error) => {
//         console.error(error);
//     }
// );


export default apiInstance;