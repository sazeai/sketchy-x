import React from 'react';
import { SketchBox, SketchDivider, SketchIcon } from './ui/Sketchy';
import { Search, MoreHorizontal } from 'lucide-react';

const trendingTopics = [
  { category: 'Trending in Netherlands', title: '#mafsnl', posts: null },
  { category: 'Sports · Trending', title: 'Eredivisie', posts: null },
  { category: 'Trending in Netherlands', title: 'Jazeker', posts: null },
  { category: 'Trending in Netherlands', title: 'Griekse', posts: null },
];

const whoToFollow = [
  { name: 'Ryan Kaufman', handle: '@ryankaufman' },
  { name: 'Andrew Clark', handle: '@acdlite', verified: true },
  { name: 'Brooklyn!', handle: '@imbabybrooklyn', verified: true },
];

export const RightSidebar = () => {
  return (
    <div className="w-[350px] pl-8 shrink-0 flex flex-col gap-4 py-3">
      {/* Search */}
      <SketchBox borderRadius="40px" className="bg-white">
        <div className="flex items-center gap-3 px-4 py-3">
          <SketchIcon Icon={Search} size={20} className="text-gray-500" />
          <input 
            type="text" 
            placeholder="Search" 
            className="bg-transparent outline-none w-full text-lg placeholder-gray-500"
          />
        </div>
      </SketchBox>

      {/* Today's News */}
      <SketchBox borderRadius="16px" className="bg-white">
        <div className="p-4 flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Today's News</h2>
            <SketchIcon Icon={MoreHorizontal} size={20} className="text-gray-500 cursor-pointer" />
          </div>
          
          <div className="flex flex-col gap-1 cursor-pointer">
            <h3 className="font-bold leading-tight">Standard Intelligence Raises $75M for Video-Trained AI Agents</h3>
            <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
              <div className="flex -space-x-1">
                <div className="w-5 h-5 rounded-full bg-red-400" style={{ filter: 'url(#wobbly-border)' }} />
                <div className="w-5 h-5 rounded-full bg-green-400" style={{ filter: 'url(#wobbly-border)' }} />
                <div className="w-5 h-5 rounded-full bg-blue-400" style={{ filter: 'url(#wobbly-border)' }} />
              </div>
              <span>15 hours ago · News · 486 posts</span>
            </div>
          </div>

          <div className="flex flex-col gap-1 cursor-pointer">
            <h3 className="font-bold leading-tight">ChatGPT Prompt Turns Images into Hilarious MS Paint Disasters</h3>
            <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
              <div className="flex -space-x-1">
                <div className="w-5 h-5 rounded-full bg-purple-400" style={{ filter: 'url(#wobbly-border)' }} />
                <div className="w-5 h-5 rounded-full bg-yellow-400" style={{ filter: 'url(#wobbly-border)' }} />
              </div>
              <span>23 hours ago · Other · 9,947 posts</span>
            </div>
          </div>

           <div className="flex flex-col gap-1 cursor-pointer">
            <h3 className="font-bold leading-tight">X Teases New Streaming Dashboard with Early Beta Access</h3>
            <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
              <div className="flex -space-x-1">
                 <div className="w-5 h-5 rounded-full bg-blue-600" style={{ filter: 'url(#wobbly-border)' }} />
                <div className="w-5 h-5 rounded-full bg-green-500" style={{ filter: 'url(#wobbly-border)' }} />
              </div>
              <span>Trending now · News · 148 posts</span>
            </div>
          </div>
        </div>
      </SketchBox>

      {/* What's happening */}
      <SketchBox borderRadius="16px" className="bg-white">
        <div className="p-4 flex flex-col gap-4">
          <h2 className="text-xl font-bold mb-2">What's happening</h2>
          
          {trendingTopics.map((topic, i) => (
            <div key={i} className="flex justify-between items-start cursor-pointer group">
              <div className="flex flex-col">
                <span className="text-sm text-gray-600">{topic.category}</span>
                <span className="font-bold text-lg">{topic.title}</span>
              </div>
              <SketchIcon Icon={MoreHorizontal} size={18} className="text-gray-500 group-hover:text-black" />
            </div>
          ))}
          
          <button className="text-blue-500 text-left hover:underline w-fit mt-2">Show more</button>
        </div>
      </SketchBox>

      {/* Who to follow */}
      <SketchBox borderRadius="16px" className="bg-white">
        <div className="p-4 flex flex-col gap-4">
          <h2 className="text-xl font-bold">Who to follow</h2>
          
          {whoToFollow.map((person, i) => (
            <div key={i} className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                {/* Hand-drawn style avatars (using colored circles with wobbly borders for now) */}
                <div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-black flex items-center justify-center overflow-hidden" style={{ filter: 'url(#wobbly-border)' }}>
                   <div className="w-6 h-6 rounded-full bg-orange-200" />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1">
                    <span className="font-bold">{person.name}</span>
                    {person.verified && <span className="text-blue-500 text-sm">✓</span>}
                  </div>
                  <span className="text-gray-600 text-sm">{person.handle}</span>
                </div>
              </div>
              <button 
                className="bg-black text-white px-4 py-1.5 rounded-full font-bold text-sm"
                style={{ filter: 'url(#wobbly-border)' }}
              >
                Follow
              </button>
            </div>
          ))}

          <button className="text-blue-500 text-left hover:underline w-fit mt-2">Show more</button>
        </div>
      </SketchBox>

      <div className="text-xs text-gray-500 flex flex-wrap gap-x-2 gap-y-1 px-2 mt-2">
        <a href="#" className="hover:underline">Terms of Service</a>
        <a href="#" className="hover:underline">Privacy Policy</a>
        <a href="#" className="hover:underline">Cookie Policy</a>
        <a href="#" className="hover:underline">Accessibility</a>
        <a href="#" className="hover:underline">Ads info</a>
        <a href="#" className="hover:underline">More ...</a>
        <span>© 2026 X Corp.</span>
      </div>
    </div>
  );
};
