"use client"
import NavBar from "./Header/page"
import Dashboard from "./barChart/page";
import BusinessMetricCard from "./businessMetricCard/page";
import OrdersSummary from "./orderSummary-grid/page";
import SellerCard from "./topSellers/page"

export default function Home() {
  return (
    <>
    <header className="fixed top-0 left-0 w-full z-50 bg-white">
      <NavBar />
    </header>

    <main className="z-0 mt-30 p-[0_56px_50px_56px]">
      <Dashboard />
      <section className="businessMetrics grid grid-cols-4 gap-10">
        <BusinessMetricCard title="total revenue" prefix="N" value={85460.90} />
        <BusinessMetricCard title="profit" prefix="N" value={85460.90} />
        <BusinessMetricCard title="product in stock" value={5000} useComma = {false}/>
        <BusinessMetricCard title="average customer satisfaction" value={4.75} />
      </section>
      <section className="orderSummary grid grid-cols-[2fr_1.2fr] mt-10 gap-8">
        <OrdersSummary />
        <div className="topSellers">
          <h1 className="text-2xl mb-2">
            Top Sellers
          </h1>
          <div className="soldItems rounded-md shadow-md w-full p-[15px_20px]">
            <SellerCard />
            <SellerCard />
            <SellerCard />
            <SellerCard />
            <SellerCard />
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
