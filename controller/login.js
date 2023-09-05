// Lấy ra các phần tử input và nút đăng nhập từ DOM
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("loginButton");

// Gán sự kiện click cho nút đăng nhập
loginButton.addEventListener("click", loginHandler);

// Hàm xử lý sự kiện đăng nhập
function loginHandler() {
  // Lấy giá trị email và password từ các input
  const email = emailInput.value;
  const password = passwordInput.value;

  // Kiểm tra xem email và password có được cung cấp không
  if (!email || !password) {
    alert("Vui lòng điền đầy đủ email và mật khẩu.");
    return;
  }

  // Tạo đối tượng chứa thông tin đăng nhập
  const loginData = {
    email: email,
    password: password,
  };

  // Gửi yêu cầu đăng nhập đến API
  fetch("https://your-api-url/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Đăng nhập không thành công.");
      }
      return response.json();
    })
    .then((data) => {
      // Xử lý dữ liệu đăng nhập thành công ở đây
      alert("Đăng nhập thành công.");
      console.log(data);
    })
    .catch((error) => {
      // Xử lý lỗi đăng nhập ở đây
      alert("Đăng nhập thất bại: " + error.message);
      console.error(error);
    });
}
