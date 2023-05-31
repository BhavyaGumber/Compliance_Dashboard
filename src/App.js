import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignIn from "./components/signin&signup/SignIn";
import SignUp from "./components/signin&signup/SignUp";
import MainDash from "./components/homePage/MainDash";
import SecondDash from "./components/secondDashboard/SecondDash";
function App() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route
        path="/dashboard"
        element={
          <>
            <MainDash />
            <SecondDash />
          </>
        }
      />
    </Routes>
  );
}

export default App;


// import React, { useState } from "react";

// const App = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [loginError, setLoginError] = useState(false);

//   const handleUsernameChange = (e) => {
//     setUsername(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Define your user data array
//     const users = [
//       { username: "user1", password: "password1" },
//       { username: "user2", password: "password2" },
//       { username: "2550", password: "1563" },
//       { username: "2260", password: "785" },
//       // Add more users as needed
//     ];

//     // Find the matching user in the user data array
//     const user = users.find(
//       (user) => user.username === username && user.password === password
//     );

//     if (user) {
//       // Login successful, perform further actions
//       console.log("Login successful");
//       setLoginError(false);
//     } else {
//       // Login failed, display error message
//       console.log("Invalid username or password");
//       setLoginError(true);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Username:</label>
//         <input
//           type="text"
//           value={username}
//           onChange={handleUsernameChange}
//         />
//       </div>
//       <div>
//         <label>Password:</label>
//         <input
//           type="password"
//           value={password}
//           onChange={handlePasswordChange}
//         />
//       </div>
//       {loginError && <p>Invalid username or password</p>}
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default App;

