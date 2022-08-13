import { Banner } from "./home/Banner";
import { Categories } from "./home/Categories";
import { SideNavBar } from "./customComponents/Navbar/SideNavBar";

export const Main = () => {
  return (
    <>
      <div className="main-container-wrapper">
        <SideNavBar/>
        <main>
          <Banner />
          <Categories />
        </main>
      </div>
    </>
  );
};
