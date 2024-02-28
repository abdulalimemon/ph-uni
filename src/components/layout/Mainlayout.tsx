import { FC } from "react";
import { Button, Layout, theme } from "antd";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useAppDispatch } from "../../redux/hooks";
import { logout } from "../../redux/features/auth/authSlice";

const { Header, Content, Footer } = Layout;

const Mainlayout: FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const dispatch = useAppDispatch();
  const handleLogOut = () => {
    dispatch(logout());
  };
  return (
    <Layout style={{ height: "100vh" }}>
      <Sidebar />
      <Layout>
        <Header style={{ padding: 0 }}>
          <Button onClick={handleLogOut}>Logout</Button>
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          University Management Website ©{new Date().getFullYear()} Created by
          Emon.
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Mainlayout;
