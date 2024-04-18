import {React, useEffect, useState} from "react";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

import {c} from "./localStorageUtils"

import LoginForm from "./Componant/LoginForm/LoginForm";
import UserPages from "./Componant/UsersPages/UsersPages";

import AdminHomePage from "./Componant/AdminHomePage/AdminHomePage";
import Home from "./Componant/AdminHomePage/Home";

import CreateSchoolAdmin from "./Componant/AdminHomePage/CreateSchoolAdmin/CreateSchoolAdmin";
import ConfirmedSchoolAdmin from "./Componant/AdminHomePage/ConfirmedSchoolAdmin/ConfirmedSchoolAdmin";
import PendingSchoolsAdmin from "./Componant/AdminHomePage/PendingSchoolsAdmin/PendingSchoolsAdmin";

import UserAdminHomePage from "./Componant/UserAdminHomePage/UserAdminHomePage";
import ConfirmedSchoolUser from "./Componant/UserAdminHomePage/ConfirmedSchoolUser/ConfirmedSchoolUser";
import CreateSchoolUser from "./Componant/UserAdminHomePage/CreateSchoolUser/CreateSchoolUser";
import PendingSchoolsUser from "./Componant/UserAdminHomePage/PendingSchoolsUser/PendingSchoolsUser";


export default function App() {

  const [user, setUser]=useState(null);
  const [hastoken, setHastoken]=useState(null);

  const Admin= true;


 

  return (
    <BrowserRouter>
      <Routes>
      <Route path="admin/*" element={<Navigate to="/admin/login" />} />

        <Route path="/admin/login" element={<LoginForm />} />
        <Route path="/" element={<UserPages />} />


        {Admin ? (
          <>
            <Route path="UserAdminHomePage/*" element={<Navigate to="/AdminHomePage" />} />

            <Route path="AdminHomePage" element={<AdminHomePage />}>
                <Route path="home" element={<Home />} />
                <Route path="CreateSchoolAdmin" element={<CreateSchoolAdmin />} />
                <Route path="PendingSchoolsAdmin" element={<PendingSchoolsAdmin />} />
                <Route  path="ConfirmedSchoolAdmin" element={<ConfirmedSchoolAdmin />} />

            </Route>
          </>
        ) 
        :
        (
          <>
            <Route path="AdminHomepage/*" element={<Navigate to="/UserAdminHomePage" />} />

            <Route path="UserAdminHomePage" element={<UserAdminHomePage />}>
                <Route path="home" element={<Home />} />
                <Route path="CreateSchoolUser" element={<CreateSchoolUser />} />
                <Route path="PendingSchoolsUser" element={<PendingSchoolsUser />} />
                <Route path="ConfirmedSchoolUser" element={<ConfirmedSchoolUser />}/>

            </Route>
          </>
        )}

        {/* {!isAdmin ? (
          <>
            <Route path="AdminHomepage/*" element={<Navigate to="/UserAdminHomePage" />} />

            <Route path="UserAdminHomePage" element={<UserAdminHomePage />}>

                <Route path="CreateSchoolUser" element={<CreateSchoolUser />} />
                <Route path="PendingSchoolsUser" element={<PendingSchoolsUser />} />
                <Route path="ConfirmedSchoolUser" element={<ConfirmedSchoolUser />}/>

            </Route>
          </>
        ) : (
          <>
            <Route path="UserAdminHomePage/*" element={<Navigate to="/AdminHomePage" />} />

            <Route path="AdminHomePage" element={<AdminHomePage />}>

                <Route path="CreateSchoolAdmin" element={<CreateSchoolAdmin />} />
                <Route path="PendingSchoolsAdmin" element={<PendingSchoolsAdmin />} />
                <Route path="ConfirmedSchoolAdmin" element={<ConfirmedSchoolAdmin />} />

            </Route>
          </>
        )} */}
      </Routes>
    </BrowserRouter>
  );
}
