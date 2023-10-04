import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import MainAppLayout from "./layouts/MainAppLayout";
import PageNotFound from "./pages/PageNotFound";
import AllRolesPage from "./pages/AllRolesPage";
import Users from "./pages/Users";
import CreateUser from "./pages/CreateUser";
import CreateRole from "./pages/CreateRole";
import Settings from "./pages/Settings";
import Login from "./pages/Login";

function App() {
  return (
    <div className=" ">
      <BrowserRouter>
        <Routes>
          <Route element={<MainAppLayout />}>
            <Route index element={<Navigate replace to="roles" />} />
            <Route path="create_role" element={<CreateRole />} />
            <Route path="create_user" element={<CreateUser />} />
            <Route path="roles" element={<AllRolesPage />} />
            <Route path="users" element={<Users />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
