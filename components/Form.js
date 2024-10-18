const Pipedrive = require("pipedrive");
import Button from "./Button";
import Link from "next/link";
import React, { useState, useEffect, useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'
// import apiInstance from "../pages/pipedrive";

let apiClient = new Pipedrive.ApiClient();
let api_key = apiClient.authentications["api_key"];
api_key.apiKey = "ab25f4e2ede0eaabf21d857f5da63e868edf8c51";
let oauth2 = apiClient.authentications["oauth2"];
oauth2.accessToken = "ab25f4e2ede0eaabf21d857f5da63e868edf8c51";
let apiInstance = new Pipedrive.LeadsApi(apiClient);

export default function PageWithJSbasedForm() {

  // Handles the submit event on form submit.
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isPrivacyChecked) {
      alert("Please accept the privacy policy");
      return;
    }
    setIsPrivacyChecked(false);
    setFormErrors(validate(formValues));
    setIsSubmit(true);

    if (Object.keys(formErrors).length === 0) {
      // const newRow = {
      //   // First_Name: event.target.first_name.value,
      //   // Last_Name: event.target.last_name.value,

      //   Company_Name: event.target.company_name.value,
      //   Work_Email: event.target.email.value,
      //   Phone_Number: event.target.phone_number.value,
      //   Business_Goals: event.target.business_goals.value,
      //   Platform_Experience: event.target.used_before.value,
      //   Client_Links: event.target.links.value,
      //   Source_Of_Discovery: event.target.how_find_out.value
      // };

      let opts = Pipedrive.AddLeadRequest.constructFromObject({
        // Properties that you want to add
        title: event.target.first_name.value + " " + event.target.last_name.value + " " + "Lead",
        first_name: event.target.first_name.value,
        last_name: event.target.last_name.value,
        organization: event.target.company_name.value,
        email: event.target.email.value,
        phone: event.target.phone_number.value,
        business_goals: event.target.business_goals.value,
        platform_experience: event.target.used_before.value,
        client_links: event.target.links.value,
        source_of_discovery: event.target.how_find_out.value,
        organization_id: 1,
      });
      apiInstance.addLead(opts).then(
        (data) => {
          console.log("API called successfully. Returned data: ", data);
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }

  const [isPrivacyChecked, setIsPrivacyChecked] = useState(false);
  const handlePrivacyChange = () => {
    setIsPrivacyChecked(!isPrivacyChecked);
  };

  //server side validation
  const validate = (values) => {
    const errors = {};
    const phonenumberreg = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    const nameregex = /^[a-zA-Z]{0,15}$/;
    const companynameregex = /^(?![0-9]).{0,100}$/;
    const mailregex = /^[a-zA-Z0-9._%+-]+@(gmail|yahoo|mailinator|outlook)\.(com|in|co|org)$/;

    if (!values.first_name) {
      errors.first_name = "First Name is required!";
    } else if (!nameregex.test(values.first_name)) {
      errors.first_name = "Please enter a valid first name (letters only, max length 15)."
    }
    if (!values.last_name) {
      errors.last_name = "Last Name is required!";
    } else if (!nameregex.test(values.last_name)) {
      errors.last_name = "Please enter a valid last name (letters only, max length 15)."
    }
    if (!values.company_name) {
      errors.company_name = "Company Name is required!";
    } else if (!companynameregex.test(values.company_name)) {
      errors.company_name = "Please enter a valid length (max length 100) and can't start with a digit."
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (mailregex.test(values.email)) {
      errors.email = "Please enter a valid work email address."
    }
    if (!values.phone_number) {
      errors.phone_number = "Phone Number is required!";
    } else if (!phonenumberreg.test(values.phone_number)) {
      errors.phone_number = "This is not a valid phone number format (please enter numbers only, length should be 10!)";
    }
    return errors;
  };

  //client side validation
  const validate2 = (name, value) => {
    let errors = {};
    const nameregex = /^[a-zA-Z]{0,15}$/;
    const companynameregex = /^(?![0-9]).{0,100}$/;
    const phonenumberreg = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    const mailregex = /^[a-zA-Z0-9._%+-]+@(gmail|yahoo|mailinator|outlook)\.(com|in|co|org)$/;


    switch (name) {
      case "first_name":
        if (value === '') {
          errors[name] = "First Name is required!";
        } else if (!nameregex.test(value)) {
          errors[name] = "Please enter a valid first name (letters only, max length 15)."
        }
        break;

      case "last_name":
        if (value === '') {
          errors[name] = "Last Name is required!";
        } else if (!nameregex.test(value)) {
          errors[name] = "Please enter a valid last name (letters only, max length 15)."
        }
        break;

      case "company_name":
        if (value === '') {
          errors[name] = "Company Name is required!";
        } else if (!companynameregex.test(value)) {
          errors[name] = "Please enter a valid length (max length 100) and can't start with a digit."
        }
        break;

      case "email":
        if (value === '') {
          errors[name] = "Email is required!";
        } else if (mailregex.test(value)) {
          errors[name] = "Please enter a valid work email address."
        }
        break;

      case "phone_number":
        if (value === '') {
          errors[name] = "Phone Number is required!";
        }
        else if (!phonenumberreg.test(value)) {
          errors[name] = "This is not a valid phone number format (please enter numbers only, length should be 10!)";
        }
        break;

      default:
        break;
    }
    setFormErrors(errors);
  }


  const initialValues = { first_name: "", last_name: "", company_name: "", email: "", country_code: "", phone_number: "", business_goals: "", used_before: "", links: "", how_find_out: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [formJSON, setFormJson] = useState({});

  const [phone, setPhone] = useState("");

  function handleFirstNameChange(event) {
    const value = event.target.value;
    const alphabetsOnly = value.replace(/[^A-Za-z]/g, "");
    // Restrict input to only alphabets and max length of 15
    if (alphabetsOnly.length <= 15) {
      setFormValues({ ...formValues, first_name: alphabetsOnly });
    }
  }

  function handleLastNameChange(event) {
    const value = event.target.value;
    const alphabetsOnly = value.replace(/[^A-Za-z]/g, "");
    // Restrict input to only alphabets and max length of 15
    if (alphabetsOnly.length <= 15) {
      setFormValues({ ...formValues, last_name: alphabetsOnly });
    }
  }

  function handlePhoneChange(event) {
    const value = event.target.value;
    // Restrict input to only numeric characters and max length of 10
    const numericValue = value.replace(/[^0-9]/g, "");
    if (numericValue.length <= 10) {
      setFormValues({ ...formValues, phone_number: numericValue });
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    validate2(name, value);

  };

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  //get country name data

  const options = useMemo(() => countryList().getData(), [])
  const defaultOption = options.find(option => option.label === 'India');
  const [value, setValue] = useState(defaultOption.value);
  const changeHandler = value => {
    setValue(value)
  }

  return (
    <div>
      {/* We pass the event to the handleSubmit() function on submit. */}
      < form onSubmit={handleSubmit} className="laptop:py-0 py-4">
        <div className="grid laptop:grid-flow-col laptop:gap-x-8">
          <div>
            <div className="pb-2 w-fit">
              <label htmlFor="firstname">First name<span className="pl-1">&#42;</span>
              </label>
            </div>
            <input
              className="w-full py-3 px-4 text-start border-2 rounded-8 border-warm-gray-500 border-solid"
              type="text"
              id="firstname"
              name="first_name"
              placeholder="First name"
              autoComplete="off"
              value={formValues.first_name}
              onChange={handleFirstNameChange}
              onBlur={() => validate2("first_name", formValues.first_name)}
            />
            <span id="error-message">{formErrors.first_name}</span>
          </div>
          <div className="laptop:pt-0 pt-6">
            <div className="pb-2 w-fit">
              <label htmlFor="lastname">Last name<span className="pl-1">&#42;</span></label>
            </div>
            <input
              className="w-full py-3 px-4 text-start border-2 rounded-8 border-warm-gray-500 border-solid"
              type="text"
              id="lastname"
              name="last_name"
              placeholder="Last name"
              autoComplete="off"
              value={formValues.last_name}
              onChange={handleLastNameChange}
              onBlur={() => validate2("last_name", formValues.last_name)}
            />
            <span id="error-message">{formErrors.last_name}</span>
          </div>
        </div>
        <div className="pt-6">
          <div className="pb-2">
            <label htmlFor="companyname">
              Company Name
              <span className="pl-1">&#42;</span>
            </label>
          </div>
          <input
            className="w-full py-3 px-4 text-start border-2 rounded-8 border-warm-gray-500 border-solid"
            type="text"
            id="companyname"
            name="company_name"
            placeholder="Company Name"
            autoComplete="off"
            value={formValues.company_name}
            onChange={handleChange}
            onBlur={() => validate2("company_name", formValues.company_name)}
          />
          <p id="error-message">{formErrors.company_name}</p>
        </div>
        <div className="pt-6">
          <div className="pb-2">
            <label htmlFor="email" className="pt-6 pb-2">
              Work Email
              <span className="pl-1">&#42;</span>
            </label>
          </div>
          <input
            className="w-full py-3 px-4 text-start border-2 rounded-8 border-warm-gray-500 border-solid"
            type="email"
            id="email"
            name="email"
            placeholder="you@company.live"
            autoComplete="off"
            value={formValues.email}
            onChange={handleChange}
            onBlur={() => validate2("email", formValues.email)}
          />
          <p id="error-message">{formErrors.email}</p>
        </div>
        <div className="pt-6">
          <div className="pb-2">
            <label htmlFor="phone-number" className="pt-6 pb-2">
              Phone number
              <span className="pl-1">&#42;</span>
            </label>
          </div>
          <fieldset className="border-2 rounded-8 border-warm-gray-500 border-solid">
            <div className="flex">
              <Select id="country-code" name="country_code" className="w-1/3 pl-4 self-center" placeholder="India" options={options} value={value || defaultOption} onChange={changeHandler} />
              <input
                className="w-full py-3 px-4 text-start rounded-r-8"
                type="text"
                id="phone-number"
                name="phone_number"
                placeholder="7500055555"
                autoComplete="off"
                value={formValues.phone_number}
                onChange={handlePhoneChange}
                maxLength={10}
                onBlur={() => validate2("phone_number", formValues.phone_number)}
              />
            </div>
          </fieldset>
          <p id="error-message">{formErrors.phone_number}</p>
        </div>
        <div className="pt-6">
          <div className="pb-2">
            <label htmlFor="companyname">
              What are your business goals this year?
            </label>
          </div>
          <input
            className="w-full py-6 px-4 text-start border-2 rounded-8 border-warm-gray-500 border-solid"
            type="text"
            id="businessgoals"
            name="business_goals"
            placeholder="Business goals"
            autoComplete="off"
            value={formValues.business_goals}
            onChange={handleChange}
            onBlur={() => validate2("business_goals", formValues.business_goals)}
          />
          <p id="error-message">{formErrors.business_goals}</p>
        </div>
        <div className="pt-6">
          <div className="pb-2">
            <label htmlFor="companyname">
              Have you used short videos and livestreams before?
            </label>
          </div>
          <input
            className="w-full py-6 px-4 text-start border-2 rounded-8 border-warm-gray-500 border-solid"
            type="text"
            id="usedbefore"
            name="used_before"
            placeholder="Videos and Livestreams"
            autoComplete="off"
            value={formValues.used_before}
            onChange={handleChange}
            onBlur={() => validate2("used_before", formValues.used_before)}
          />
          <p id="error-message">{formErrors.used_before}</p>
        </div>
        <div className="pt-6">
          <div className="pb-2">
            <label htmlFor="companyname">
              Please share link to your company&#39;s website/ Instagram/ LinkedIn page
            </label>
          </div>
          <input
            className="w-full py-6 px-4 text-start border-2 rounded-8 border-warm-gray-500 border-solid"
            type="text"
            id="links"
            name="links"
            placeholder="Links"
            autoComplete="off"
            value={formValues.links}
            onChange={handleChange}
            onBlur={() => validate2("links", formValues.links)}
          />
          <p id="error-message">{formErrors.links}</p>
        </div>

        <div className="pt-6">
          <div className="pb-2">
            <label htmlFor="companyname">
              How did you find out about us?
            </label>
          </div>
          <input
            className="w-full py-6 px-4 text-start border-2 rounded-8 border-warm-gray-500 border-solid"
            type="text"
            id="howfindout"
            name="how_find_out"
            placeholder="How did you find out about us?"
            autoComplete="off"
            value={formValues.how_find_out}
            onChange={handleChange}
            onBlur={() => validate2("links", formValues.how_find_out)}
          />
          <p id="error-message">{formErrors.how_find_out}</p>
        </div>
        <div className="flex pt-6 pb-8 gap-x-3">
          <input
            id="check"
            className="text-start w-5 h-5"
            type="checkbox"
            autoComplete="off"
            checked={isPrivacyChecked}
            onChange={handlePrivacyChange}
          />
          <p>You agree to our friendly<Link className="text-blue-700 underline pl-1" href="/privacy-policy">privacy policy.</Link></p>
        </div>
        <Button text="Submit" btn_variant="primary_btn" width="w-full" disabled="true" />
      </form >
      {Object.keys(formErrors).length === 0 && showSuccessMessage && isSubmit ? (
        <div id="successfulsigned">Your request has been submitted successfully</div>
      ) : " "}
    </div>
  );

}
