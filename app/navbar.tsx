"use client";
import { useState, useEffect } from "react";
import {
  ShoppingBag,
  User,
  Menu as MenuIcon,
  X as XIcon,
  Clock,
  Home,
  Store,
  Newspaper,
  Phone,
  TicketPercent,
  HouseHeart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { sora } from "@/fonts/config";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState(7200);
  const router = useRouter();
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev <= 1 ? 7200 : prev - 1));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs}:${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const navLinks = [
    { title: "Home", href: "/", icon: HouseHeart },
    { title: "Shop", href: "/shop", icon: Store },
    { title: "News", href: "/news", icon: Newspaper },
    { title: "Contact", href: "/contact", icon: Phone },
  ];

  return (
    <>
      <div className="w-full bg-black text-secondary py-2.5 text-center text-base font-medium z-50 relative">
        <div className="flex text-xs md:text-sm items-center justify-center space-x-2">
          <Clock size={18} className="text-primary mt-0.5" />
          <span>Get 10% off if ordered within {formatTime(timeLeft)}</span>
          <TicketPercent size={19} className="text-primary mt-0.5" />
        </div>
      </div>

      <nav className="sticky top-0 w-full z-50 bg-background/95 backdrop-blur-md text-foreground border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 relative">
          <div className="flex items-center justify-between">
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.title}
                    href={link.href}
                    className="flex items-center space-x-2 text-foreground hover:text-black transition-colors duration-200 font-medium "
                  >
                    <Icon size={16} />
                    <span>{link.title}</span>
                  </a>
                );
              })}
            </div>

            <div className="flex md:hidden items-center space-x-3">
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 rounded-lg hover:bg-muted transition-colors duration-200 relative z-[60]"
              >
                <div className="relative w-6 h-6 flex items-center justify-center">
                  <MenuIcon
                    size={24}
                    className={`absolute transition-all duration-300 text-foreground ${
                      mobileOpen
                        ? "opacity-0 rotate-180 scale-0"
                        : "opacity-100 rotate-0 scale-100"
                    }`}
                  />
                  <XIcon
                    size={24}
                    className={`absolute transition-all duration-300 text-foreground ${
                      mobileOpen
                        ? "opacity-100 rotate-0 scale-100"
                        : "opacity-0 -rotate-180 scale-0"
                    }`}
                  />
                </div>
              </button>

              <a href="/">
                <span
                  className={`${sora.className} text-lg font-bold tracking-tight`}
                >
                  TRENDSWEAR<span className="text-primary">.</span>
                </span>
              </a>
            </div>

            <div className="absolute left-1/2 -translate-x-1/2 hidden md:block">
              <a href="/">
                <span
                  className={`${sora.className} text-xl md:text-2xl font-bold tracking-tight`}
                >
                  TRENDSWEAR<span className="text-primary">.</span>
                </span>
              </a>
            </div>

            <div className="flex items-center space-x-3 md:space-x-4">
              <Button
                variant="default"
                size="md"
                radius="lg"
                onClick={() => router.push("/admin/dashboard")}
                leftIcon={<User />}
                className="hidden md:flex items-center space-x-2 font-medium shadow-sm hover:shadow-md transition-all duration-200"
              >
                <span>Login</span>
              </Button>

              <User className="md:hidden text-foreground" size={22} />

              <button className="relative group">
                <ShoppingBag
                  size={24}
                  className="text-foreground group-hover:text-primary transition-colors duration-200"
                />
                <span className="absolute -top-1 -right-2 text-xs bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center font-medium shadow-sm">
                  2
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      <div
        className={`md:hidden fixed top-0 right-0 w-full max-w-sm h-full bg-background shadow-2xl z-50 transform transition-transform duration-500 ease-in-out ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-border">
            <span
              className={`${sora.className} text-xl font-bold tracking-tight`}
            >
              TRENDSWEAR<span className="text-primary">.</span>
            </span>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 rounded-lg hover:bg-muted transition-colors duration-200"
            >
              <XIcon size={24} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-6">
            <nav className="space-y-2">
              {navLinks.map((link, idx) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.title}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center space-x-3 px-6 py-4 border-b border-border text-base font-medium text-foreground hover:bg-muted hover:text-primary rounded-lg transition-all duration-200"
                    style={{
                      animation: mobileOpen
                        ? `slideInRight 0.4s ease-out ${idx * 0.1}s both`
                        : "none",
                    }}
                  >
                    <Icon size={18} />
                    <span>{link.title}</span>
                  </a>
                );
              })}
            </nav>

            <div className="mt-6 p-4 m-4 bg-primary/10 border border-primary/20 rounded-lg">
              <div className="flex items-start space-x-3">
                <Clock size={20} className="text-primary mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Limited Time Offer
                  </p>
                  <p className="text-xs mt-1">Ends in {formatTime(timeLeft)}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 border-t border-border space-y-3">
            <Button
              variant="default"
              leftIcon={<User />}
              size="lg"
              className="w-full flex items-center justify-center space-x-2 font-medium shadow-md hover:shadow-lg transition-all duration-200"
              onClick={() => setMobileOpen(false)}
            >
              <span>Login</span>
            </Button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}
