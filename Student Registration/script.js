console.log("Hello");
function fetchAndDisplayPhoto() {
  let xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20",
    true
  );
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        const actualdata = JSON.parse(xhr.responseText);
        const numPhotos = actualdata.photos.length;
        const randomIndex = Math.floor(Math.random() * 19);
        const mydata = actualdata.photos[randomIndex].url;
        document.getElementById("buildingImage").src = mydata;
      } else {
        console.log("Error fetching data");
      }
    }
  };
  xhr.send();
}
fetchAndDisplayPhoto();
setInterval(() => {
  fetchAndDisplayPhoto();
}, 5000);
document.addEventListener("DOMContentLoaded", () => {
  const countrySelect = document.getElementById("countrySelect");
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://restcountries.com/v3.1/all", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        populateSelect(data);
      } else {
        console.log("Error fetching data");
      }
    }
  };
  xhr.send();
  function populateSelect(countriesData) {
    const countries = countriesData.map((country) => country.name.common);
    countries.forEach((country) => {
      const option = document.createElement("option");
      option.text = country;
      countrySelect.add(option);
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  let collegeInput = document.querySelector("#collegeInput");
  let collegeSelect = document.querySelector("#collegeSelect");
  let realdata = [];
  //Onchange function
  let countryInput = document.getElementById("countrySelect");
  countryInput.addEventListener("change", function () {
    fetchColleges();
  });
  function fetchColleges() {
    let xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      `http://universities.hipolabs.com/search?country=${countryInput.value}`,
      true
    );
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          realdata = JSON.parse(xhr.responseText);
          updateCollegeSelect(""); 
        } else {
          console.log("Error fetching data");
        }
      }
    };
    xhr.send();
  }
  function updateCollegeSelect(inputText) {
    collegeSelect.innerHTML = '<option value="">Select a college</option>';
    let filteredColleges = realdata.filter((college) => {
      let collegeName = college.name;
      return collegeName.includes(inputText);
    });

    filteredColleges.forEach((college) => {
      const option = document.createElement("option");
      option.text = college.name;
      collegeSelect.add(option);
    });
  }

  collegeInput.addEventListener("DOMContentLoaded", () => {
    let inputText = collegeInput.value
    if (inputText === "") {
      updateCollegeSelect("");
      return;
    }
    updateCollegeSelect(inputText);
  });

  // document.addEventListener("click", (event) => {
  //   if (event.target !== collegeInput) {
  //     collegeSelect.style.display = "none";
  //   }
  // });

  // collegeSelect.addEventListener("change", () => {
  //   collegeInput.value = collegeSelect.value;
  //   collegeSelect.style.display = "none";
  // });
});

function validateForm() {
  const firstNameInput = document.getElementById("firstName");
  const lastNameInput = document.getElementById("lastName");
  const emailInput = document.getElementById("exampleInputEmail1");
  const dobInput = document.getElementById("dob");
  const joiningDateInput = document.getElementById("joiningDate");
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("conpassword");
  const firstNameError = document.getElementById("firstnameError");
  const lastNameError = document.getElementById("lastnameError");
  const emailError = document.getElementById("email");
  const dobError = document.getElementById("dateofbirth");
  const joiningDateError = document.getElementById("dataofjoining");
  const passwordError = document.getElementById("pass");
  const confirmPasswordError = document.getElementById("repass");
  const radioError = document.getElementById('radioError');

  const firstName = firstNameInput.value.trim();
  const lastName = lastNameInput.value.trim();
  const email = emailInput.value.trim();
  const dobValue = dobInput.value;
  const joiningDateValue = joiningDateInput.value;
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;
  

  firstNameError.textContent = "";
  lastNameError.textContent = "";
  emailError.textContent = "";
  dobError.textContent = "";
  joiningDateError.textContent = "";
  passwordError.textContent = "";
  confirmPasswordError.textContent = "";
  radioError.textContent = "";
  const phoneNumberInput = document.getElementById("exampleInputPhone");

  const alphabeticRegex = /^[A-Za-z]+$/;
  const emailRegex = /^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,25}$/;
  const phoneRegex = /^[0-9]{10}$/;
  let hasErrors = false;

  if (firstName === "") {
    firstNameError.textContent = "*First name cannot be empty.";
    hasErrors = true;
  } else if (firstName.length < 2 || firstName.length > 50) {
    firstNameError.textContent = "*Must be between 2 and 50 characters.";
    hasErrors = true;
  } else if (!alphabeticRegex.test(firstName)) {
    firstNameError.textContent = "*Must contain alphabetic characters only.";
    hasErrors = true;
  }

  if (lastName === "") {
    lastNameError.textContent = "*Last name cannot be empty.";
    hasErrors = true;
  } else if (lastName.length < 2 || lastName.length > 50) {
    lastNameError.textContent = "*Must be between 2 and 50 characters.";
    hasErrors = true;
  } else if (!alphabeticRegex.test(lastName)) {
    lastNameError.textContent = "*Must contain alphabetic characters only.";
    hasErrors = true;
  }

  if (email === "") {
    emailError.textContent = "*Email address cannot be empty.";
    hasErrors = true;
  } else if (email.length > 60) {
    emailError.textContent = "*Email address exceeds the maximum length.";
    hasErrors = true;
  } else if (!emailRegex.test(email)) {
    emailError.textContent = "*Invalid email address format.";
    hasErrors = true;
  }
  const currentDate = new Date();
  const dob = new Date(dobValue);
  if (dobValue === "") {
    dobError.textContent = "*DOB cannot be empty.";
    hasErrors = true;}
    else if (dob >= currentDate) {
      dobError.textContent = "*DOB must be in the past.";
      hasErrors = true;
    }

  const age = currentDate.getFullYear() - dob.getFullYear();
  if (age < 18) {
    dobError.textContent = "* Must be at least 18 years old.";
    hasErrors = true;
  }

  const joiningDate = new Date(joiningDateValue);
  if (joiningDateValue === "") {
    joiningDateError.textContent = "*DOJ cannot be empty.";
    hasErrors = true;
  } 
  else if (joiningDate <= dob) {
    joiningDateError.textContent = "*DOJ must be after the DOB.";
    hasErrors = true;
  }

  const ageRestriction = joiningDate.getFullYear() - dob.getFullYear();
  if (ageRestriction < 18) {
    joiningDateError.textContent = "*Must be at least 18 years old from DOB.";
    hasErrors = true;
  }

  if (password === "") {
    passwordError.textContent = "*Password cannot be empty.";
    hasErrors = true;
  } else if (password.length < 5 || password.length > 25) {
    passwordError.textContent = "*Password must be between 5 and 25 characters.";
    hasErrors = true;
  } else if (!passwordRegex.test(password)) {
    passwordError.textContent = "*Invalid password format.";
    hasErrors = true;
  }

  if (confirmPassword === "") {
    confirmPasswordError.textContent = "*Confirmed password cannot be empty.";
    hasErrors = true;
  } else if (password !== confirmPassword) {
    confirmPasswordError.textContent = "*Passwords do not match.";
    hasErrors = true;
  }
  if (!phoneRegex.test(phoneNumberInput.value)) {
    document.getElementById("phonenumber").textContent =
      "*Invalid Phone Number. Please enter a 10-digit numeric number.";
    hasErrors = true;
  }
   else{
    document.getElementById("phonenumber").textContent = "";
  }
  const agreementCheckbox = document.getElementById("exampleCheck1");
  if (!agreementCheckbox.checked) {
    radioError.textContent =
      "*Please agree with Jabel's User Agreement and Privacy Policy.";
    hasErrors = true;
  }



  if (hasErrors) {
    return false;
  }

  return true;
}

document.addEventListener("DOMContentLoaded", () => {
  let countrycode = document.querySelector("#countrycode");
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "https://restcountries.com/v2/all", true);
  xhr.onload = function () {
    if (xhr.status === 200) {
      let contcode = JSON.parse(xhr.responseText);
      let coding = "";
      contcode.forEach((country) => {
        coding += `<option>+${country.callingCodes}</option>`;
      });
      countrycode.innerHTML = coding;
    } else {
      console.log("Error fetching data");
    }
  };

  xhr.onerror = function () {
    console.log("Error fetching data");
  };
  xhr.send();
});
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    fetch("https://demo-api-wh0x.onrender.com/register", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("API response:", data);
      })
      .catch((error) => {
        console.error("Error sending data:", error);
      });
  });
});
