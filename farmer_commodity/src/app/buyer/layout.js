import "../globals.css"
import Link from "next/link"

export default function BuyerLayout({ children }) {
  return (
        <main>
            <div className="flex justify-between bg-emerald-600 px-4">
                <div className="order-1">
                <h3 className="text-2xl">MarketPlace</h3>
                </div>

                <div className="flex order-2 space-x-8">
                <Link href={{ pathname: '/buyer/home' }}>
                    <h5>Home</h5>
                </Link>

                <Link href={{ pathname: '/buyer/search' }}>
                    <h5>Search</h5>
                </Link>

                <Link href={{ pathname: '/buyer/cart' }}>
                    <h5>Cart</h5>
                </Link>
                </div>
                <Link className="order-3" href={{ pathname: '/' }}>
                  <h5 >LogOut</h5>
                </Link>
        </div>
            {children}
        </main>
  )
}