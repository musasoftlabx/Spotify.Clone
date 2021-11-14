import { Avatar } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { useDataLayerValue } from "./DataLayer";
import "./Header.css";

const Header = () => {
  const [{ user }, dispatch] = useDataLayerValue();
  return (
    <div>
      <div className="header">
        <div className="header__left">
          <Search />
          <input type="text" placeholder="Search for Artists, Songs, Albums" />
        </div>
        <div className="header__right">
          <Avatar src={user?.images[0]?.url} alt="RQ" />
          <h4>{user?.display_name}</h4>
        </div>
      </div>
    </div>
  );
};

export default Header;
