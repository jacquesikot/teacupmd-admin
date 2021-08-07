import { useEffect } from 'react';

import firebaseFunc from '../../firebase/init';

const useNavBar = () => {
  useEffect(() => {
    showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header');
    /*===== LINK ACTIVE  =====*/
    const linkColor = document.querySelectorAll('.nav__link');

    function colorLink() {
      if (linkColor) {
        linkColor.forEach((l) => l.classList.remove('active'));
        this.classList.add('active');
      }
    }
    linkColor.forEach((l) => l.addEventListener('click', colorLink));
  }, []);

  /*===== SHOW NAVBAR  =====*/
  const showNavbar = (toggleId, navId, bodyId, headerId) => {
    const toggle =
        typeof window !== 'undefined' && document.getElementById(toggleId),
      nav = typeof window !== 'undefined' && document.getElementById(navId),
      bodypd = typeof window !== 'undefined' && document.getElementById(bodyId),
      headerpd =
        typeof window !== 'undefined' && document.getElementById(headerId);

    // Validate that all variables exist
    if (toggle && nav && bodypd && headerpd) {
      toggle.addEventListener('click', () => {
        // show navbar
        nav.classList.toggle('show');
        // change icon
        toggle.classList.toggle('bx-x');
        // add padding to body
        bodypd.classList.toggle('body-pd');
        // add padding to header
        headerpd.classList.toggle('body-pd');
      });
    }
  };

  const logout = async () => {
    await firebaseFunc.logOutUser();
  };

  return {
    logout,
  };
};

export default useNavBar;
