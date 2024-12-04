import moon from "../assets/icons/icon-moon.svg";
const Header = () => {
    return ( 
        <div className="flex justify-between items-center mb-10">
            <h1 className="text-[40px] font-bold text-white tracking-[15px]">TODO</h1>
            <div><img src={moon} alt="moon" /></div>
        </div>
     );
}
 
export default Header;