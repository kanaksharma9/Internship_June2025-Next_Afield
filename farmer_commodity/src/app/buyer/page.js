'use client'

import { React} from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import "../globals.css";

function Page() {
     const searchParams = useSearchParams();

  return (
        <div>
        <div className="flex justify-between bg-emerald-600 px-4">
            <div className="order-1">
            <h3 className="text-2xl">MarketPlace</h3>
            </div>

            <div className="flex order-2 space-x-8">
            <Link href={{ pathname: '/anotherpage' }}>
                <h5>Home</h5>
            </Link>

            <Link href={{ pathname: '/anotherpage' }}>
                <h5>Search</h5>
            </Link>

            <Link href={{ pathname: '/anotherpage' }}>
                <h5>Cart</h5>
            </Link>
            </div>

            <h5 className="order-3">LogOut</h5>
        </div>

        <p className="text-2xl font-extrabold">
            Welcome {searchParams.get('name')}
        </p>
        </div>

  )
}

export default Page;
