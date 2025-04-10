import React, { useEffect, useState } from "react";
import Container from "../util/Container";
import TableRow from "./TableRow";
import Sidebar from "./Sidebar";
import { toast } from "react-toastify";

const Auction = () => {
  const [auctionItems, setAuctionItems] = useState([]);
  const [favouriteItems, setFavouriteItems] = useState([]);

  const favouritemItemIds =
    favouriteItems.length === 0 ? [] : favouriteItems.map((item) => item.id);

  useEffect(() => {
    (async function () {
      const res = await fetch("/data.json");
      const data = await res.json();

      setAuctionItems(data);
    })();
  }, []);

  const addToFvourites = (id) => {
    const item = auctionItems.find((item) => item.id === id);

    const existingFavouriteItems = [...favouriteItems];
    existingFavouriteItems.push(item);

    setFavouriteItems(existingFavouriteItems);

    toast("🦄 An item is added to favorites.!");
  };

  const removeFvourites = (id) => {
    const existingFavouriteItems = [...favouriteItems];

    const newItems = existingFavouriteItems.filter((item) => item.id !== id);

    setFavouriteItems(newItems);

    toast.warn("An item was removed from favorites.!");
  };

  return (
    <section className="py-16 bg-background">
      <Container>
        <h2 className="font-medium text-blue-dark text-xl">Active Auctions</h2>
        <p className="text-black/[0.8] my-3">
          Discover and bid on extraordinary items
        </p>
        <div className="grid lg:grid-cols-[1fr_0.4fr] gap-4">
          <div className="bg-white rounded-3xl overflow-auto">
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
                  {auctionItems.length > 0 &&
                    auctionItems.map((auc) => (
                      <TableRow
                        key={auc.id}
                        image={auc.image}
                        title={auc.title}
                        price={auc.currentBidPrice}
                        timeLeft={auc.timeLeft}
                        id={auc.id}
                        onAdd={addToFvourites}
                        isFavourite={favouritemItemIds.includes(auc.id)}
                      />
                    ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-white rounded-3xl h-max">
            <Sidebar
              favouriteItems={favouriteItems}
              onRemove={removeFvourites}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Auction;
