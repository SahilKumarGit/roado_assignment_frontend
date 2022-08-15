import "./nav.style.css";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { mainActivity, searchActivity } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { setSearchList } from "../../redux/actions";
import axios from "axios";
import apiUrls from "../../environment";

const NavBarComponent = () => {
  const myState = useSelector((state) => state.activityStatus);
  const dispatch = useDispatch();

  const searchNow = (text) => {
    if (!text.trim()) return dispatch(setSearchList([]));
    axios.get(apiUrls.search + text).then((e) => {
      dispatch(setSearchList(e.data.data));
      console.log(e.data.data);
    }).catch(e => {
      dispatch(setSearchList([]));
    });
  }

  const Normal = () => {
    return (
      <div className="navBar">
        <div className="title">Vocab</div>
        <div
          className="iconBox"
          onClick={() => {
            dispatch(searchActivity());
          }}
        >
          <SearchIcon sx={{ fontSize: 25 }}></SearchIcon>
        </div>
      </div>
    );
  };

  const Search = () => {
    return (
      <div className="navBar">
        <div className="searchInput">
          <input className="input" onChange={(e) => { searchNow(e.target.value) }} placeholder="Search" type="text" />
        </div>
        <div
          className="iconBox"
          onClick={() => {
            dispatch(mainActivity());
          }}
        >
          <CloseIcon sx={{ fontSize: 25 }}></CloseIcon>
        </div>
      </div>
    );
  };

  return (
    <div className="main">{myState === "MAIN" ? <Normal /> : <Search />}</div>
  );
};

export default NavBarComponent;
