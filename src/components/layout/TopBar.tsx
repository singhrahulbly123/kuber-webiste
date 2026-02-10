import { Mail, MapPin, Facebook, Instagram } from "lucide-react";

const TopBar = () => {
  return (
    <div className="topbar-wrapper">
      <div className="topbar-pill">
        <div className="topbar-left">
          <span>
            <Mail size={14} />
            info@kuber-globalgroup.com
          </span>
          <span>
            <MapPin size={14} />
            Narva mnt 5, 10117 Tallinn, Tallinn, Estonia
          </span>
        </div>

        <div className="topbar-right">
          <Facebook size={16} />
          <Instagram size={16} />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
