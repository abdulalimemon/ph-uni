import { FC } from "react";
import { Layout, Menu, MenuProps, theme } from "antd";
import { Outlet } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

const items: MenuProps["items"] = [
  { key: "1", label: "Dashboard" },
  { key: "13", label: "Dashboard 2" },
  { key: "14", label: "Dashboard 2" },
  {
    key: "15",
    label: "Dashboard 3",
    children: [
      { key: "12", label: "Dashboard 2" },
      { key: "11", label: "Dashboard 2" },
    ],
  },
];

const Mainlayout: FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical">
          <h2
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              padding: "10px 0",
              height: "3rem",
            }}
          >
            PH Uni
          </h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }} />
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
