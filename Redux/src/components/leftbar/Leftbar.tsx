import HomeIcon from '@mui/icons-material/Home';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import GroupIcon from '@mui/icons-material/Group';
import LayersIcon from '@mui/icons-material/Layers';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import TimelapseIcon from '@mui/icons-material/Timelapse';
import StormIcon from '@mui/icons-material/Storm';
import LoginIcon from '@mui/icons-material/Login';
import MenuLink from "../menuLink/MenuLink";
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import SettingsIcon from '@mui/icons-material/Settings';
import "./leftbar.css";

export default function Leftbar() {
  return (
    <div className="leftbar">
      <div className="leftbarWrapper">
        <MenuLink icon={<HomeIcon />} text="Homepage" />
        <MenuLink icon={<FormatListBulletedIcon />} text="Lists" />
        <MenuLink icon={<ShoppingCartIcon />} text="Products" />
        <MenuLink icon={<GroupIcon />} text="Groups" />
        <MenuLink icon={<LayersIcon />} text="Pages" />
        <MenuLink icon={<PhotoSizeSelectActualIcon />} text="Photos" />
        <MenuLink icon={<OndemandVideoIcon />} text="Videos" />
        <MenuLink icon={<TimelapseIcon />} text="Schedule" />
        <MenuLink icon={<StormIcon />} text="Wishlist" />
        <MenuLink icon={<SettingsIcon />} text="Settings" />
        <MenuLink icon={<LoginIcon />} text="Logout" />
      </div>
    </div>
  );
}
