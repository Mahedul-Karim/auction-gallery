import React from "react";

const Footer = () => {
  return (
    <footer className="py-16 flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <p className="text-xl text-blue">
          Auction<span className="font-bold text-yellow">Gallery</span>
        </p>
        <div className="flex items-center justify-center gap-2">
          <p>Bid.</p>
          <p>Win.</p>
          <p>Own.</p>
        </div>
        <ul className="flex items-center justify-center gap-4 text-sm flex-wrap">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Auctions</a>
          </li>
          <li>
            <a href="#">Categories</a>
          </li>
          <li>
            <a href="#">How to works</a>
          </li>
        </ul>
        <p className="text-sm">&copy; 2025 AuctionHub. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
