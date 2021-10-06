import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-center text-white">
      <div className="text-center p-3 bckg">
        Created by
        {' '}
        <a className="text-white" href="https://github.com/medaminedev66">
          Amine
          {' '}
        </a>
        and
        {' '}
        <a className="text-white" href="https://github.com/ridaarif98">
          Rida
          {' '}
        </a>
        at Microverse Inc., US.
      </div>
    </footer>
  );
}

export default Footer;
