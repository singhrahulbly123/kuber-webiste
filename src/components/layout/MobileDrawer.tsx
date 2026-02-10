import { useState } from "react";
import { NavLink } from "react-router-dom";
import { X, ChevronDown } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
}

const MobileDrawer = ({ open, onClose }: Props) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const toggleMenu = (menu: string) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <>
      <div className={`drawer ${open ? "open" : ""}`}>
        <div className="drawer-header">
          <X size={24} onClick={onClose} className="close-btn" />
        </div>

        <div className="drawer-links">

          <NavLink to="/" onClick={onClose}>
            Home
          </NavLink>

          {/* ABOUT US */}
          <div className="drawer-dropdown">
            <div
              className="drawer-dropdown-title"
              onClick={() => toggleMenu("about")}
            >
              About Us <ChevronDown size={16} />
            </div>

            {activeMenu === "about" && (
              <div className="drawer-submenu">
                <NavLink to="/about-us" onClick={onClose}>
                  Company Profile
                </NavLink>
                <NavLink to="/about-us" onClick={onClose}>
                  Vision & Mission
                </NavLink>
              </div>
            )}
          </div>

          {/* DAIRY INGREDIENTS */}
          <div className="drawer-dropdown">
            <div
              className="drawer-dropdown-title"
              onClick={() => toggleMenu("dairy")}
            >
              Dairy Ingredients <ChevronDown size={16} />
            </div>

            {activeMenu === "dairy" && (
              <div className="drawer-submenu">
                <NavLink to="/dairy-ingredients" onClick={onClose}>
                  Milk Powder
                </NavLink>
                <NavLink to="/dairy-ingredients" onClick={onClose}>
                  Whey Protein
                </NavLink>
              </div>
            )}
          </div>

          {/* BABY NUTRITION */}
          <div className="drawer-dropdown">
            <div
              className="drawer-dropdown-title"
              onClick={() => toggleMenu("baby")}
            >
              Baby Nutrition <ChevronDown size={16} />
            </div>

            {activeMenu === "baby" && (
              <div className="drawer-submenu">
                <NavLink to="/baby-nutrition" onClick={onClose}>
                  Infant Formula
                </NavLink>
                <NavLink to="/baby-nutrition" onClick={onClose}>
                  Stage 2 Formula
                </NavLink>
              </div>
            )}
          </div>

          {/* BREAKFAST OFFERINGS */}
          <div className="drawer-dropdown">
            <div
              className="drawer-dropdown-title"
              onClick={() => toggleMenu("breakfast")}
            >
              Breakfast Offerings <ChevronDown size={16} />
            </div>

            {activeMenu === "breakfast" && (
              <div className="drawer-submenu">
                <NavLink to="/breakfast-offerings" onClick={onClose}>
                  Oats
                </NavLink>
                <NavLink to="/breakfast-offerings" onClick={onClose}>
                  Cereals
                </NavLink>
              </div>
            )}
          </div>

          <NavLink to="/milk-products" onClick={onClose}>
            Milk Products
          </NavLink>

          <NavLink to="/private-label" onClick={onClose}>
            Private Label
          </NavLink>

          <NavLink to="/blogs" onClick={onClose}>
            Blogs
          </NavLink>

          <NavLink to="/career" onClick={onClose}>
            Career
          </NavLink>

          <NavLink to="/contact-us" onClick={onClose}>
            Contact Us
          </NavLink>

        </div>
      </div>

      {open && <div className="overlay" onClick={onClose}></div>}
    </>
  );
};

export default MobileDrawer;
