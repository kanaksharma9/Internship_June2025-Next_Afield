'use client'

import { React} from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import "../globals.css";

function Page() {
     const searchParams = useSearchParams();

  return (
        <div>
            <p className="text-2xl font-extrabold">
                Welcome {searchParams.get('name')}
            </p>
        </div>

  )
}

export default Page;
