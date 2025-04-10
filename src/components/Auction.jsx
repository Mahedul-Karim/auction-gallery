import React from "react";
import Container from "../util/Container";
import TableRow from "./TableRow";
import Sidebar from "./Sidebar";

const Auction = () => {
  return (
    <section className="py-16 bg-background">
      <Container>
        <h2 className="font-medium text-blue-dark text-xl">Active Auctions</h2>
        <p className="text-black/[0.8] my-3">
          Discover and bid on extraordinary items
        </p>
        <div className="grid lg:grid-cols-[1fr_0.4fr] gap-4">
          <div className="bg-white rounded-3xl">
            <div className="overflow-x-auto">
              <table className="table">
                <thead className="p-16">
                  <tr>
                    <th className="text-black font-medium">Items</th>
                    <th className="text-black font-medium">Current Bid</th>
                    <th className="text-black font-medium">Time Left</th>
                    <th className="text-black font-medium">Bid Now</th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow />
                  <TableRow />
                  <TableRow />
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-white rounded-3xl">
            <Sidebar />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Auction;
