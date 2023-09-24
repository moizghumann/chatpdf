import { Button } from "@/components/ui/button";
import { SignOutButton, UserButton, auth } from "@clerk/nextjs";
import { LogIn } from 'lucide-react'
import Link from "next/link";
import { Balancer } from 'react-wrap-balancer'

export default async function Home() {
  const { userId } = await auth();
  // if userID exists
  const isAuth = !!userId;

  return (
    <div className=" w-screen min-h-screen bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
      <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className=" flex flex-col justify-center items-center text-center w-full">
          <div className=" flex items-center gap-4">
            <h1 className=" font-bold text-5xl tracking-tight">
              Chat with any PDF
            </h1>
            <UserButton afterSignOutUrl="/" />
          </div>
          <p className="mt-4 max-w-xl font-normal text-lg">
            <Balancer>
              The days of skimming through lengthy PDFs and extracting useful bits from them is gone.
              Built for students, researchers and professionals to super charge their productivity.
            </Balancer>
          </p>
          <div className=" w-full mt-5">
            {/* remove ! */}
            {isAuth ?
              <Button>
                File Upload
              </Button> :
              <Link href={'/sign-in'}>
                <Button>
                  Login to get Started!
                  <LogIn className=" ml-2 w-4 h-4" />
                </Button>
              </Link>
            }
          </div>
        </div>
      </div>
    </div>
  )
}
