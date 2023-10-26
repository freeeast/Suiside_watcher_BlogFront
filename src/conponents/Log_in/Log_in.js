import { useState } from "react";

import classes from "./Log_in.module.css";

function Log_in() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();

    // 在此处可以添加验证逻辑，例如向服务器发送验证请求
    // 根据验证结果设置 isLoggedIn 状态

    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
  };

  if (isLoggedIn) {
    return (
      <div>
        <h1>Welcome {username}!</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }

  return (
    <div className={classes.background}>
    <div className={classes.card}>
      <form className={classes.form} onSubmit={handleLogin}>
        <h1>Login</h1>
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <br />
        <button type="submit">Login</button>
        <button>Sign up</ button>
      </form>
    </div >
    </div>
  );
}

export default Log_in;
