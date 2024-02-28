import { Layout, Menu } from "antd";
import { sidebarGenerator } from "../../utils/sidebarGenerator";
import { adminPaths } from "../../routes/admin.routes";
import { facultyPaths } from "../../routes/faculty.routes";
import { useAppSelector } from "../../redux/hooks";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";

const { Sider } = Layout;

const userRole = {
  ADMIN: "admin",
  FACULTY: "faculty",
  STUDENT: "student",
};

const Sidebar = () => {
  const user = useAppSelector(selectCurrentUser);
  let sidebarItems;

  switch (user!.role) {
    case userRole.ADMIN:
      sidebarItems = sidebarGenerator(adminPaths, userRole.ADMIN);
      break;
    case userRole.FACULTY:
      sidebarItems = sidebarGenerator(facultyPaths, userRole.FACULTY);
      break;
    default:
      break;
  }

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={() => {}}
      onCollapse={() => {}}
    >
      <div className="demo-logo-vertical">
        <h2
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            padding: "10px 0",
            height: "4 rem",
          }}
        >
          PH Uni
        </h2>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems}
      />
    </Sider>
  );
};

export default Sidebar;
