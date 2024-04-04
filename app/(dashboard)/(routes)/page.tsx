import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main>
      <h1 className='text-3xl font-medium text-sky-700'>hello world!!!!!!</h1>
      <UserButton afterSignOutUrl="/"/>
    </main>
  )
}
