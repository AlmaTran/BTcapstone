const signupButton = document.getElementById("signupButton");

const signup = async (credential) => {
  return await fetch(`https://shop.cyberlearn.vn/api/Users/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credential),
  });
};

function signupHandler(event) {
  event.preventDefault();

  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var name = document.getElementById("name").value;
  var gender = document.querySelector('input[name="gender"]:checked').value;
  var phone = document.getElementById("phone").value;

  var signupData = {
    email: email,
    password: password,
    name: name,
    gender: gender === "male" ? true : false,
    phone: phone,
  };

  signup(signupData)
    .then((res) => {
      if (res.status === 200) {
        window.location.href = "../index.html";
      }
      return res.json();
    })
    .then((data) => {
      alert(data.message);
    })
    .catch((err) => {
      err.json().then((e) => {
        console.log(e);
      });
    });
}

signupButton.addEventListener("click", signupHandler);