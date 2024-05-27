import dynamic from 'next/dynamic';

const Dashboard = dynamic(() => import('@/components/Dashboard'), { ssr: false });
const Header = dynamic(() => import('@/components/Header'), { ssr: false });
const SideMenu = dynamic(() => import('@/components/Sidebar'), { ssr: false });

const Home = () => {
  return (
    <>
    <Header/>
    <div className="flex">
      <SideMenu />
      <div className="mx-auto w-[75rem] mt-20">
        <Dashboard/>
      </div>
    </div>
    
    </>
  )
}

export default Home