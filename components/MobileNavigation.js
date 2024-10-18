import MobileNavigationLinks from './MobileNavigationLinks';
import { useState } from 'react';

const MobileNavigation = () => {
    const [open, setOpen] = useState(false);

    const HamBurgerIcon = <i className="ri-menu-fill ri-2x text-white" onClick={() => setOpen(!open)} />
    const closeIcon = <i className="ri-close-line ri-2x text-white" onClick={() => setOpen(!open)}></i>

    const closeMobileMenu = () => setOpen(false);
    return (
        <nav>
            {open ? closeIcon : HamBurgerIcon}
            {open && <MobileNavigationLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
        </nav>
    );
}
export default MobileNavigation;