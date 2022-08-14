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
        <ul className="stacked-list list-none">
          <li className="stacked-list-item">
            <BsSearch className="md-icon" /><div className="stacked-list-item-text highlight-text">Discover</div>
          </li>
          <li className="stacked-list-item">
            <MdLocalFireDepartment className="md-icon" /><div className="stacked-list-item-text highlight-text">Trending</div>
          </li>
          <li className="stacked-list-item">
            <MdSubscriptions className="md-icon" /><div className="stacked-list-item-text highlight-text">Subscriptions</div>
          </li>
        </ul>
        <ul className="stacked-list list-none"> 
          <li className="stacked-list-item">
            <MdVideoLibrary className="md-icon" /><div className="stacked-list-item-text highlight-text">Library</div>
          </li>
          <li className="stacked-list-item">
            <FaHistory className="md-icon" /><div className="stacked-list-item-text highlight-text">History</div>
          </li>
          <li className="stacked-list-item">
            <AiFillLike className="md-icon" /><div className="stacked-list-item-text highlight-text">Liked videos</div>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
