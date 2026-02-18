import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, ChevronDown } from "lucide-react";
import MobileDrawer from "./MobileDrawer";
import logo from "../../assets/kuber.png";
import TopBar from "./TopBar";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

// const toggleDropdown = (menu: string) => {
//   setActiveDropdown(activeDropdown === menu ? null : menu);
// };

  return (
    <>
      <div className="container">
        <div className="navbar">
          <NavLink to="/">
            <img src={logo} alt="logo" className="logo" />
          </NavLink>

          <div className="dm-kuber">
            <TopBar />

            <div className="nav-links">
              <NavLink to="/" className="nav-item">
                Home
              </NavLink>
               <NavLink to="/products" className="nav-item">
                Products
              </NavLink>

              {/* ABOUT DROPDOWN */}
              <div
                className="dropdown"
                onMouseEnter={() => setActiveDropdown("about")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span className="nav-item">
                  <NavLink to="/about-us">About Us</NavLink>  <ChevronDown size={16} />
                </span>

                {activeDropdown === "about" && (
                  <div className="dropdown-menu">
                    <NavLink to="/managing-director-desk">From MD's Desk</NavLink>
                    <NavLink to="/technology">Technology</NavLink>
                    <NavLink to="/achievements">Achievements in dairy</NavLink>
                  </div>
                )}
              </div>

              {/* Milk Products */}
              <div
                className="dropdown"
                onMouseLeave={() => {
                  setActiveDropdown(null);
                  setActiveSubmenu(null);
                }}
              >
                <span
                  className="nav-item"
                  onMouseEnter={() => setActiveDropdown("milk")}
                >
                  Milk Products <ChevronDown size={16} />
                </span>

                {activeDropdown === "milk" && (
                  <div className="dropdown-menu">

                    {/* Dry Milk (Has Submenu) */}
                    <div
                      className="dropdown-sub"
                      onMouseEnter={() => setActiveSubmenu("dry")}
                    >
                      <span className="submenu-title">
                        Dry Milk <ChevronDown size={14} />
                      </span>

                      {activeSubmenu === "dry" && (
                        <div className="dropdown-submenu">
                          <NavLink to="/instant-full-cream">
                            Instant full cream milk powder
                          </NavLink>
                          <NavLink to="/instant-fat-filled">
                            Instant fat filled milk powder
                          </NavLink>
                        </div>
                      )}
                    </div>


                    {/* Liquid Milk (Has Submenu) */}
                    <div
                      className="dropdown-sub"
                      onMouseEnter={() => setActiveSubmenu("liquid")}
                    >
                      <span className="submenu-title">
                        Liquid Milk <ChevronDown size={14} />
                      </span>

                      {activeSubmenu === "liquid" && (
                        <div className="dropdown-submenu">
                          <NavLink to="/instant-full-cream">
                            Evaporated milk
                          </NavLink>
                          <NavLink to="/instant-fat-filled">
                            Sweetend condensed milk
                          </NavLink>
                          <NavLink to="/instant-fat-filled">
                            UHT Milk
                          </NavLink>
                        </div>
                      )}
                    </div>

                    <NavLink to="/milk-fat">Milk Fat</NavLink>
                    <NavLink to="/cheese">Cheese</NavLink>

                  </div>
                )}
              </div>


              {/* DAIRY INGREDIENTS */}
              <div
                className="dropdown"
                onMouseEnter={() => setActiveDropdown("dairy")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span className="nav-item">
                  Dairy Ingredients <ChevronDown size={16} />
                </span>

                {activeDropdown === "dairy" && (
                  <div className="dropdown-menu">
                    <NavLink to="/dairy-ingredients">Milk Powder</NavLink>
                    <NavLink to="/dairy-ingredients">Whey Protein</NavLink>
                  </div>
                )}
              </div>

              {/* BABY NUTRITION */}
              <div
                className="dropdown"
                onMouseEnter={() => setActiveDropdown("baby")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span className="nav-item">
                  Baby Nutrition <ChevronDown size={16} />
                </span>

                {activeDropdown === "baby" && (
                  <div className="dropdown-menu">
                    <NavLink to="/baby-nutrition">Infant Formula</NavLink>
                    <NavLink to="/baby-nutrition">Stage 2</NavLink>
                  </div>
                )}
              </div>

              {/* BABY NUTRITION */}
              <div
                className="dropdown"
                onMouseEnter={() => setActiveDropdown("offerings")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span className="nav-item">
                  Breakfast offerings <ChevronDown size={16} />
                </span>

                {activeDropdown === "offerings" && (
                  <div className="dropdown-menu">
                    <NavLink to="/baby-nutrition">Infant Formula</NavLink>
                    <NavLink to="/baby-nutrition">Stage 2</NavLink>
                  </div>
                )}
              </div>

              <NavLink to="/private-label" className="nav-item">
                Private Label
              </NavLink>

              <NavLink to="/blogs" className="nav-item">
                Blogs
              </NavLink>

              <NavLink to="/" className="nav-item">
                Career
              </NavLink>

              <NavLink to="/contact" className="nav-item">
                Contact Us
              </NavLink>

            </div>
          </div>

          <div className="mobile-menu" onClick={() => setOpen(true)}>
            <Menu size={26} />
          </div>
        </div>
      </div>

      <MobileDrawer open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default Navbar;

