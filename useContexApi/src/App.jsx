import LoginPage from "./Components/Login/Login/Login";
import ProfilePage from "./Components/Profile/ProfilePage";
import UserContextProvider from "./Components/UserProvider/userProvider";

function App() {
  return (
    <UserContextProvider>
      <div>
        Good moring my love
        <LoginPage />
        <ProfilePage />
      </div>
    </UserContextProvider>
  );
}

export default App;
