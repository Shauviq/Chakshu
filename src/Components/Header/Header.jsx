import { Eye } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="relative z-10 flex justify-between items-center p-6 border-b border-[#263140] bg-[#101921] shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
      {/* Logo & Title */}
      <div className="flex items-center space-x-3">
        <div className="relative">
          <Eye className="h-8 w-8 text-[#36D399] animate-pulse drop-shadow-[0_0_6px_#36D399]" />
          <div className="absolute inset-0 animate-ping">
            <Eye className="h-8 w-8 text-[#36D399] opacity-50" />
          </div>
        </div>
        <Link to="/" className="text-2xl font-bold text-[#F2F2F2] drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]">
          Chak<span className="text-[#36D399]">shu</span>
        </Link>
      </div>

      {/* Action Button */}
      <Link to="/login" className="bg-[#101921] border border-[#36D399] text-[#36D399] px-6 py-2 rounded-xl hover:bg-[#36D399] hover:text-[#101921] transition-all duration-300 shadow-[0_0_10px_#36D39966] hover:shadow-[0_0_15px_#36D399AA]">
        Get Started
      </Link>
    </header>
  );
};

export default Header;
