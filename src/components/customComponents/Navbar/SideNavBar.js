import { BsSearch } from "react-icons/bs";
import { MdLocalFireDepartment } from "react-icons/md";
import { MdSubscriptions } from "react-icons/md";
import { MdVideoLibrary } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
export const SideNavBar = () => {
  return (
    <aside>
      <nav>
        <ul class="stacked-list list-none">
          <li class="stacked-list-item">
            <BsSearch size={"1.2rem"} color="grey" /><div class="stacked-list-item-text highlight-text">Discover</div>
          </li>
          <li class="stacked-list-item">
            <MdLocalFireDepartment size={"1.2rem"} color="grey" /><div class="stacked-list-item-text highlight-text">Trending</div>
          </li>
          <li class="stacked-list-item">
            <MdSubscriptions size={"1.2rem"} color="grey" /><div class="stacked-list-item-text highlight-text">Subscriptions</div>
          </li>
        </ul>
        <ul class="stacked-list list-none"> 
          <li class="stacked-list-item">
            <MdVideoLibrary size={"1.2rem"} color="grey" /><div class="stacked-list-item-text highlight-text">Library</div>
          </li>
          <li class="stacked-list-item">
            <FaHistory size={"1.2rem"} color="grey" /><div class="stacked-list-item-text highlight-text">History</div>
          </li>
          <li class="stacked-list-item">
            <AiFillLike size={"1.2rem"} color="grey" /><div class="stacked-list-item-text highlight-text">Liked videos</div>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
