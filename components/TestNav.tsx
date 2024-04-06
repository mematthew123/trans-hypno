import React from 'react';

interface TestNavProps {
  children?: React.ReactNode;
}

interface Document {
  querySelector: (selector: string) => Element | null;
}

export default function TestNav({ children }: TestNavProps) {
  // we need to define document as any because it is not defined in the global scope

  // check if the document is defined

  if (typeof document !== 'undefined') {
    // add classes for mobile navigation toggling
    const CSbody = document.querySelector('body');
    const CSnavbarMenu = document.querySelector('#cs-navigation');
    const CShamburgerMenu = document.querySelector('#cs-navigation .cs-toggle');

    if (CShamburgerMenu) {
      CShamburgerMenu.addEventListener('click', function () {
        CShamburgerMenu.classList.toggle('cs-active');
        CSnavbarMenu?.classList.toggle('cs-active');
        CSbody?.classList.toggle('cs-open');
        // run the function to check the aria-expanded value
        ariaExpanded();
      });
    }

    // checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not
    function ariaExpanded() {
      const csUL = document.querySelector('#cs-expanded');
      const csExpanded = csUL?.getAttribute('aria-expanded');

      if (csExpanded === 'false') {
        csUL?.setAttribute('aria-expanded', 'true');
      } else {
        csUL?.setAttribute('aria-expanded', 'false');
      }
    }

    // mobile nav toggle code
    const dropDowns = Array.from(
      document.querySelectorAll('#cs-navigation .cs-dropdown')
    );
    for (const item of dropDowns) {
      const onClick = () => {
        item.classList.toggle('cs-active');
      };
      item.addEventListener('click', onClick);
    }
  }

  return (
    <header id='cs-navigation'>
      <div className='cs-container'>
        <a href='' className='cs-logo' aria-label='back to home'>
          <img
            src='https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons%2Flogo-black.svg'
            alt='logo'
            width='210'
            height='29'
            aria-hidden='true'
            decoding='async'
          />
        </a>
        <nav className='cs-nav' role='navigation'>
          <button className='cs-toggle' aria-label='mobile menu toggle'>
            <div className='cs-box' aria-hidden='true'>
              <span className='cs-line cs-line1' aria-hidden='true'></span>
              <span className='cs-line cs-line2' aria-hidden='true'></span>
              <span className='cs-line cs-line3' aria-hidden='true'></span>
            </div>
          </button>
          <div className='cs-ul-wrapper'>
            <ul id='cs-expanded' className='cs-ul' aria-expanded='false'>
              <li className='cs-li'>
                <a href='' className='cs-li-link cs-active'>
                  Home
                </a>
              </li>
              <li className='cs-li'>
                <a href='' className='cs-li-link'>
                  About
                </a>
              </li>
              <li className='cs-li'>
                <a href='' className='cs-li-link'>
                  Services
                </a>
              </li>
              <li className='cs-li'>
                <a href='' className='cs-li-link'>
                  About Us
                </a>
              </li>
              <li className='cs-li'>
                <a href='' className='cs-li-link'>
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <a href='' className='cs-button-solid cs-nav-button'>
          Contact Us
        </a>
      </div>
    </header>
  );
}
