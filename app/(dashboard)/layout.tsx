import { Sidebar } from "./_components/sidebar";

const DashboardLayout = ({children}:{children:React.ReactNode}) => {
    return ( 
        <main className="h-full">
            <div className="h-full fixed hidden md:flex flex-col w-56 inset-y-0 z-50"><Sidebar/></div>
            <div className="h-full md:pl-56">{children}</div></main>
     );
}
 
export default DashboardLayout;