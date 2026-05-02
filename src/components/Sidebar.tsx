import React from 'react';
import { Home, Search, Bell, Mail, Zap, CheckCircle, Bookmark, PenTool, FileText, User, MoreHorizontal, X } from 'lucide-react';
import { SketchIcon } from './ui/Sketchy';

const navItems = [
  { icon: Home, label: 'Home' },
  { icon: Search, label: 'Explore' },
  { icon: Bell, label: 'Notifications' },
  { icon: Mail, label: 'Chat' },
  { icon: Zap, label: 'SuperGrok' },
  { icon: CheckCircle, label: 'Premium+' },
  { icon: Bookmark, label: 'Bookmarks' },
  { icon: PenTool, label: 'Creator Studio' },
  { icon: FileText, label: 'Articles' },
  { icon: User, label: 'Profile' },
  { icon: MoreHorizontal, label: 'More' },
];

export const Sidebar = () => {
  return (
    <div className="w-[275px] h-full flex flex-col justify-between py-4 pr-6 shrink-0">
      <div className="space-y-2">
        <div className="pl-4 pb-4">
          <SketchIcon Icon={X} size={36} strokeWidth={2.5} />
        </div>
        <nav className="space-y-1 mt-2">
          {navItems.map((item) => (
            <button 
              key={item.label} 
              className="flex items-center gap-4 px-4 py-3 hover:bg-gray-100 rounded-full w-fit transition-colors text-xl"
            >
              <SketchIcon Icon={item.icon} size={28} strokeWidth={2} />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </div>
      
      <div className="mt-8">
        <button 
          className="w-[220px] bg-black text-white rounded-full py-4 text-xl font-bold hover:bg-gray-800 transition-colors"
          style={{ filter: 'url(#wobbly-border)' }}
        >
          Post
        </button>
      </div>
    </div>
  );
};
