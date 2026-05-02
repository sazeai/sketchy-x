import React from 'react';
import { SketchBox, SketchDivider, SketchIcon } from './ui/Sketchy';
import { Image, FileType, CheckSquare, Smile, Calendar, MapPin, Bold, Italic, MessageCircle, Repeat2, Heart, BarChart2, Bookmark, Share, MoreHorizontal } from 'lucide-react';

const PostAction = ({ icon: Icon, value }: { icon: any, value?: string }) => (
  <button className="flex items-center gap-2 text-gray-600 hover:text-black group">
    <SketchIcon Icon={Icon} size={18} className="text-gray-500 group-hover:text-black" />
    {value && <span className="text-sm">{value}</span>}
  </button>
);

export const Feed = () => {
  return (
    <div className="w-[600px] border-x-2 border-black flex flex-col min-h-screen relative" style={{ filter: 'url(#wobbly-border)' }}>
      {/* We need to reset the filter inside so it doesn't double apply to children, 
          OR we can just use normal border here and rely on the wobbly lines explicitly where needed. 
          Actually, let's use the explicit SketchDivider for layout to avoid double filtering. */}
      <div className="absolute inset-y-0 left-[-2px] w-[2px] bg-black" style={{ filter: 'url(#wobbly-border)' }} />
      <div className="absolute inset-y-0 right-[-2px] w-[2px] bg-black" style={{ filter: 'url(#wobbly-border)' }} />
      
      {/* Header Tabs */}
      <div className="sticky top-0 bg-white/90 backdrop-blur-sm z-30 pt-2 border-b-2 border-black" style={{ filter: 'url(#wobbly-border)' }}>
        <div className="flex text-lg font-bold w-full h-[53px]">
          <button className="flex-1 hover:bg-gray-100 flex justify-center items-center relative">
            <span>For you</span>
            <div className="absolute bottom-0 w-16 h-1 bg-blue-500 rounded-full" style={{ filter: 'url(#wobbly-border)' }} />
          </button>
          <button className="flex-1 hover:bg-gray-100 flex justify-center items-center text-gray-600">
            <span>Following</span>
          </button>
           <button className="flex-1 hover:bg-gray-100 flex justify-center items-center text-gray-600 px-4 whitespace-nowrap">
            <span>AI Video & Filmmakers</span>
          </button>
        </div>
      </div>

      {/* Compose Tweet */}
      <div className="px-4 py-3 flex gap-4 border-b-2 border-black" style={{ filter: 'url(#wobbly-border)' }}>
        <div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-black shrink-0 overflow-hidden" style={{ filter: 'url(#wobbly-border)' }}>
          <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix&backgroundColor=e2e8f0" alt="avatar" className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 flex flex-col gap-3">
          <input 
            type="text" 
            placeholder="What's happening?" 
            className="w-full text-xl outline-none bg-transparent placeholder-gray-500 mt-1"
          />
          <div className="flex justify-between items-center pt-2">
            <div className="flex gap-4 text-blue-500">
              <SketchIcon Icon={Image} size={20} className="cursor-pointer hover:text-blue-600" />
              <SketchIcon Icon={FileType} size={20} className="cursor-pointer hover:text-blue-600" />
              <SketchIcon Icon={CheckSquare} size={20} className="cursor-pointer hover:text-blue-600" />
              <SketchIcon Icon={Smile} size={20} className="cursor-pointer hover:text-blue-600" />
              <SketchIcon Icon={Calendar} size={20} className="cursor-pointer hover:text-blue-600" />
              <SketchIcon Icon={MapPin} size={20} className="cursor-pointer hover:text-blue-600" />
               <div className="w-[2px] h-5 bg-gray-300 mx-1" />
              <SketchIcon Icon={Bold} size={20} className="cursor-pointer hover:text-blue-600" />
              <SketchIcon Icon={Italic} size={20} className="cursor-pointer hover:text-blue-600" />
            </div>
            <button 
              className="bg-gray-300 text-gray-600 px-5 py-2 rounded-full font-bold shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:shadow-none transition-all"
              style={{ filter: 'url(#wobbly-border)' }}
            >
              Post
            </button>
          </div>
        </div>
      </div>

      {/* Post 1 */}
      <div className="p-4 flex gap-3 border-b-2 border-black cursor-pointer hover:bg-gray-50" style={{ filter: 'url(#wobbly-border)' }}>
        <div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-black shrink-0 overflow-hidden" style={{ filter: 'url(#wobbly-border)' }}>
          <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Noah&backgroundColor=e2e8f0" alt="avatar" className="w-full h-full object-cover bg-gray-300" />
        </div>
        <div className="flex-1 flex flex-col gap-1 text-lg leading-snug">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-1 flex-wrap">
              <span className="font-bold">Noah Smith</span>
              <span>🇺🇸🇺🇦</span>
              <span className="text-blue-500">✓</span>
              <span className="text-gray-600">@Noahpinion · 3h</span>
            </div>
            <SketchIcon Icon={MoreHorizontal} size={20} className="text-gray-500" />
          </div>
          
          <p className="mb-2">
            This guy torpedoed his whole career just so he could get the whole world to read a porn fanfic he wrote about his boss
            <br/><br/>
            Not the hero we asked for, but the hero we deserve
          </p>

          {/* Quoted Post embedded */}
          <SketchBox borderRadius="12px" className="mt-2 mb-3 bg-white">
            <div className="p-3">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-5 h-5 bg-red-600 rounded flex items-center justify-center text-white text-[10px] font-bold shadow-sm" style={{ filter: 'url(#wobbly-border)' }}>NYP</div>
                <span className="font-bold text-sm">New York Post</span>
                <span className="text-yellow-500 text-sm">✓</span>
                <span className="text-gray-600 text-sm">@nypost · 11h</span>
              </div>
              <p className="text-sm mb-3">
                Bombshell sex harassment suit against Lorna Hajdini, JPMorgan branded 'complete fabrication' as John Doe unmasked trib.al/UwsWCbT
              </p>
              
              {/* Illustration placeholder */}
              <div className="w-full h-[250px] bg-[#d9d9d9] rounded-lg border-2 border-black overflow-hidden relative flex" style={{ filter: 'url(#wobbly-border)' }}>
                 {/* Left Person */}
                 <div className="flex-1 flex flex-col justify-end items-center relative">
                    <div className="w-32 h-40 bg-[#e8c39e] rounded-t-[60px] border-black border-2 border-b-0 relative z-10 flex flex-col items-center pt-8">
                       {/* Eyes */}
                       <div className="flex gap-4">
                         <div className="w-6 h-6 bg-white rounded-full border-2 border-black flex items-center justify-center"><div className="w-2 h-2 bg-black rounded-full"/></div>
                         <div className="w-6 h-6 bg-white rounded-full border-2 border-black flex items-center justify-center"><div className="w-2 h-2 bg-black rounded-full"/></div>
                       </div>
                       {/* Nose/Smile */}
                       <div className="w-2 h-6 border-l-2 border-b-2 border-black rounded-bl-lg mt-2"/>
                       <div className="w-10 h-3 border-b-2 border-black rounded-full mt-2"/>
                    </div>
                    {/* Hair */}
                    <div className="absolute top-2 w-36 h-16 bg-black rounded-[40px] z-20" style={{ filter: 'url(#wobbly-border)' }}/>
                    {/* Suit */}
                    <div className="w-full h-32 bg-[#1a237e] border-t-2 border-r-2 border-black absolute bottom-0 z-0"/>
                 </div>

                 {/* Right Person */}
                 <div className="flex-1 flex flex-col justify-end items-center relative">
                     <div className="w-28 h-36 bg-[#f5d0b5] rounded-t-[50px] border-black border-2 border-b-0 relative z-10 flex flex-col items-center pt-8">
                       <div className="flex gap-4">
                         <div className="w-4 h-4 rounded-full border-2 border-black bg-black relative"><div className="absolute top-0.5 right-0.5 w-1 h-1 bg-white rounded-full"/></div>
                         <div className="w-4 h-4 rounded-full border-2 border-black bg-black relative"><div className="absolute top-0.5 right-0.5 w-1 h-1 bg-white rounded-full"/></div>
                       </div>
                       <div className="w-1 h-4 border-l-2 border-black mt-2"/>
                       <div className="w-8 h-2 border-b-2 border-black rounded-full mt-2"/>
                    </div>
                    {/* Hair */}
                    <div className="absolute top-6 w-44 h-32 bg-[#d4a373] rounded-t-[50px] rounded-br-[60px] rounded-bl-[60px] z-0" style={{ filter: 'url(#wobbly-border)' }}/>
                    {/* Shirt */}
                    <div className="w-full h-28 bg-[#111] border-t-2 border-black absolute bottom-0 z-20 flex justify-around px-8 pt-4">
                       <div className="w-2 h-2 bg-white rounded-full"/>
                       <div className="w-2 h-2 bg-white rounded-full"/>
                       <div className="w-2 h-2 bg-white rounded-full"/>
                    </div>
                 </div>
              </div>
            </div>
          </SketchBox>

          {/* Action Footer */}
          <div className="flex justify-between mt-1 pt-1 max-w-[425px]">
            <PostAction icon={MessageCircle} value="20" />
            <PostAction icon={Repeat2} value="28" />
            <PostAction icon={Heart} value="465" />
            <PostAction icon={BarChart2} value="30K" />
            <div className="flex gap-4">
              <PostAction icon={Bookmark} />
              <PostAction icon={Share} />
            </div>
          </div>
        </div>
      </div>

       {/* Post 2 */}
       <div className="p-4 flex gap-3 border-b-2 border-black cursor-pointer hover:bg-gray-50" style={{ filter: 'url(#wobbly-border)' }}>
        <div className="w-10 h-10 rounded-full bg-blue-100 border-2 border-black shrink-0 overflow-hidden" style={{ filter: 'url(#wobbly-border)' }}>
          <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Dago&backgroundColor=1d4ed8" alt="avatar" className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 flex flex-col gap-1 text-lg leading-snug">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-1 flex-wrap">
              <span className="font-bold">Dago Supremacy</span>
              <span className="text-blue-500">✓</span>
              <span className="text-gray-600">@DagoSupremacy · 16h</span>
            </div>
            <SketchIcon Icon={MoreHorizontal} size={20} className="text-gray-500" />
          </div>
          
          <p className="mb-2">
            This JP Morgan sex slave story is one of the most bizarre things I've ever heard. If it really is all made up by the underling it's one of the most Indian-coded fictions ever brought to the US justice system.
          </p>

          {/* Quoted Post embedded */}
          <SketchBox borderRadius="12px" className="mt-2 mb-3 bg-white overflow-hidden">
            <div className="flex">
               {/* Left article snippet */}
               <div className="bg-black text-white w-[200px] p-2 flex flex-col border-r-2 border-black shrink-0" style={{ filter: 'url(#wobbly-border)' }}>
                  <div className="flex items-center gap-2 mb-1">
                     <div className="w-6 h-6 bg-blue-800 rounded-full flex items-center justify-center font-serif italic border border-white">m</div>
                     <div className="flex flex-col text-[10px]">
                        <span className="font-bold">Daily Mail ✓</span>
                        <span className="text-gray-400">@DailyMail</span>
                     </div>
                     <span className="ml-auto font-bold">X.com</span>
                  </div>
                  <p className="text-[10px] leading-tight mb-2">
                     Glamorous JP Morgan exec accused of turning married male broker into her office sex slave: Viagra spiking and litany of obscene forced acts that made him cry
                  </p>
                  <div className="flex gap-1 h-20 mt-auto">
                     <div className="flex-1 bg-[#111] overflow-hidden rounded relative">
                         <div className="absolute bottom-0 w-full h-12 bg-[#e8c39e] rounded-t-[20px] ml-2"></div>
                         <div className="absolute bottom-8 w-12 h-6 bg-[#d4a373] rounded-t-[20px] mx-auto left-0 right-0"></div>
                     </div>
                     <div className="flex-1 bg-blue-900 border-l border-gray-700 flex flex-col justify-end p-1 overflow-hidden">
                         <div className="w-full h-16 bg-[#222] skew-x-12 translate-x-1"></div>
                         <div className="w-full h-24 bg-[#333] -skew-x-12 -translate-x-1 absolute bottom-0 mix-blend-screen opacity-50"></div>
                     </div>
                  </div>
               </div>
               
               {/* Right side text snippet */}
               <div className="p-3 flex items-center justify-center bg-white flex-1 relative overflow-hidden">
                  <p className="text-xl font-bold leading-tight -rotate-2 relative z-10">
                    the second encou<br/>
                    dly ordered him to<br/>
                    d him to the ground<br/>
                    perating him when<br/>
                    tain arousal.
                  </p>
               </div>
            </div>
          </SketchBox>

          <div className="flex justify-between mt-1 pt-1 max-w-[425px]">
            <PostAction icon={MessageCircle} value="136" />
            <PostAction icon={Repeat2} value="377" />
            <PostAction icon={Heart} value="6.6K" />
            <PostAction icon={BarChart2} value="217K" />
            <div className="flex gap-4">
              <PostAction icon={Bookmark} />
              <PostAction icon={Share} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
