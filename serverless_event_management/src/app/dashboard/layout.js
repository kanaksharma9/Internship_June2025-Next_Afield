import Link from "next/link"

export default function RootLayout({ children }) {
  return (
        <main className='bg-gray-200 h-screen'>
            <div className="flex justify-center bg-gray-500 text-white p-3">
                <Link href='/events' className="mx-2 hover:text-black"><button>Events</button></Link>
                <Link href='dashboard' className="mx-2 hover:text-black"><button>Dashboard</button></Link>
                <Link href='/' className="mx-2 hover:text-black"><button>LogOut</button></Link>
            </div>
          {children}
        </main>
  )
}