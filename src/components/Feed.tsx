import React, { useState } from 'react';
import { SketchBox, SketchIcon } from './ui/Sketchy';
import { Image, FileType, CheckSquare, Smile, Calendar, MapPin, Bold, Italic, MessageCircle, Repeat2, Heart, BarChart2, Bookmark, Share, MoreHorizontal, ArrowLeft } from 'lucide-react';

const PostAction = ({ icon: Icon, value, active, onClick, className = '' }: { icon: any, value?: string | number, active?: boolean, onClick?: (e: React.MouseEvent) => void, className?: string }) => (
  <button 
    onClick={(e) => {
      e.stopPropagation();
      onClick?.(e);
    }} 
    className={`flex items-center gap-2 text-gray-600 hover:text-black group ${active ? className : ''}`}
  >
    <SketchIcon Icon={Icon} size={18} className={`text-gray-500 group-hover:text-black ${active ? className : ''}`} />
    {value !== undefined && <span className="text-sm">{value}</span>}
  </button>
);

const Post1Quote = () => (
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
);

const Post2Quote = () => (
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
);

interface PostType {
  id: string;
  authorName: string;
  authorHandle: string;
  authorAvatar: string;
  verified: boolean;
  time: string;
  tags?: string;
  content: React.ReactNode;
  quote?: React.ReactNode;
  replies: number;
  reposts: number;
  likes: number;
  views: number;
  isLiked?: boolean;
  isReposted?: boolean;
}

const initialPosts: PostType[] = [
  {
    id: '1',
    authorName: 'Noah Smith',
    authorHandle: '@Noahpinion',
    authorAvatar: 'https://api.dicebear.com/7.x/notionists/svg?seed=Noah&backgroundColor=e2e8f0',
    verified: true,
    tags: '🇺🇸🇺🇦',
    time: '3h',
    content: (
      <>
        This guy torpedoed his whole career just so he could get the whole world to read a porn fanfic he wrote about his boss
        <br/><br/>
        Not the hero we asked for, but the hero we deserve
      </>
    ),
    quote: <Post1Quote />,
    replies: 20,
    reposts: 28,
    likes: 465,
    views: 30000
  },
  {
    id: '2',
    authorName: 'Dago Supremacy',
    authorHandle: '@DagoSupremacy',
    authorAvatar: 'https://api.dicebear.com/7.x/notionists/svg?seed=Dago&backgroundColor=1d4ed8',
    verified: true,
    time: '16h',
    content: "This JP Morgan sex slave story is one of the most bizarre things I've ever heard. If it really is all made up by the underling it's one of the most Indian-coded fictions ever brought to the US justice system.",
    quote: <Post2Quote />,
    replies: 136,
    reposts: 377,
    likes: 6600,
    views: 217000
  },
  {
    id: '3',
    authorName: 'Tech Sketcher',
    authorHandle: '@techsketcher',
    authorAvatar: 'https://api.dicebear.com/7.x/notionists/svg?seed=Tech&backgroundColor=fef08a',
    verified: false,
    time: '1d',
    content: "I built this entire UI using only Sketch and a lot of caffeine. Actually this is React but it looks like a sketch right? Hand-drawn UIs are making a comeback and I am so here for it. Let's make everything wobbly!",
    replies: 42,
    reposts: 12,
    likes: 312,
    views: 15400
  }
];

export const Feed = () => {
  const [posts, setPosts] = useState(initialPosts);
  const [activeTab, setActiveTab] = useState('For you');
  const [newPostText, setNewPostText] = useState('');
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

  const handlePostSubmit = () => {
    if (!newPostText.trim()) return;
    
    const newPost: PostType = {
      id: Date.now().toString(),
      authorName: 'You',
      authorHandle: '@yourhandle',
      authorAvatar: 'https://api.dicebear.com/7.x/notionists/svg?seed=Felix&backgroundColor=e2e8f0',
      verified: false,
      time: '1s',
      content: newPostText,
      replies: 0,
      reposts: 0,
      likes: 0,
      views: 0
    };
    
    setPosts([newPost, ...posts]);
    setNewPostText('');
  };

  const toggleLike = (id: string) => {
    setPosts(posts.map(p => {
      if (p.id === id) {
        return {
          ...p,
          isLiked: !p.isLiked,
          likes: p.isLiked ? p.likes - 1 : p.likes + 1
        };
      }
      return p;
    }));
  };

  const toggleRepost = (id: string) => {
    setPosts(posts.map(p => {
      if (p.id === id) {
        return {
          ...p,
          isReposted: !p.isReposted,
          reposts: p.isReposted ? p.reposts - 1 : p.reposts + 1
        };
      }
      return p;
    }));
  };

  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  const filteredPosts = posts.filter(p => {
    if (activeTab === 'Following') return p.verified; // fake filter for demo
    if (activeTab === 'AI Video & Filmmakers') return p.content?.toString().toLowerCase().includes('video') || p.id === '3';
    return true; // For You
  });

  const selectedPost = posts.find(p => p.id === selectedPostId);

  return (
    <div className="w-[600px] border-x-2 border-black flex flex-col min-h-screen relative bg-white" style={{ filter: 'url(#wobbly-border)' }}>
      <div className="absolute inset-y-0 left-[-2px] w-[2px] bg-black" style={{ filter: 'url(#wobbly-border)' }} />
      <div className="absolute inset-y-0 right-[-2px] w-[2px] bg-black" style={{ filter: 'url(#wobbly-border)' }} />
      
      {selectedPostId ? (
         <>
          <div className="sticky top-0 bg-white/90 backdrop-blur-sm z-30 pt-2 pb-2 px-4 flex items-center gap-6 border-b-2 border-black" style={{ filter: 'url(#wobbly-border)' }}>
            <button onClick={() => setSelectedPostId(null)} className="p-2 hover:bg-gray-200 rounded-full transition-colors">
              <SketchIcon Icon={ArrowLeft} size={20} />
            </button>
            <h2 className="text-xl font-bold font-sans">Post</h2>
          </div>
          
          <div className="p-4 flex flex-col gap-3 border-b-2 border-black" style={{ filter: 'url(#wobbly-border)' }}>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gray-200 border-2 border-black shrink-0 overflow-hidden" style={{ filter: 'url(#wobbly-border)' }}>
                <img src={selectedPost?.authorAvatar} alt="avatar" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <span className="font-bold text-lg">{selectedPost?.authorName}</span>
                  {selectedPost?.tags && <span>{selectedPost.tags}</span>}
                  {selectedPost?.verified && <span className="text-blue-500">✓</span>}
                </div>
                <span className="text-gray-600">{selectedPost?.authorHandle}</span>
              </div>
            </div>
            
            <div className="text-xl leading-snug mt-2">
              <p className="mb-2 whitespace-pre-wrap">{selectedPost?.content}</p>
              {selectedPost?.quote}
            </div>
            
            <div className="text-gray-600 text-sm py-3 border-b border-gray-300">
              {selectedPost?.time} · <b>{formatNumber(selectedPost?.views || 0)}</b> Views
            </div>
            
             {/* Action Footer */}
             <div className="flex justify-around py-3">
                <PostAction icon={MessageCircle} value={selectedPost?.replies} />
                <PostAction 
                  icon={Repeat2} 
                  value={selectedPost?.reposts} 
                  active={selectedPost?.isReposted} 
                  className="!text-green-500"
                  onClick={() => toggleRepost(selectedPost!.id)} 
                />
                <PostAction 
                  icon={Heart} 
                  value={selectedPost?.likes} 
                  active={selectedPost?.isLiked} 
                  className="!text-red-500"
                  onClick={() => toggleLike(selectedPost!.id)} 
                />
                <PostAction icon={Bookmark} />
                <PostAction icon={Share} />
            </div>
          </div>
         </>
      ) : (
        <>
          {/* Header Tabs */}
          <div className="sticky top-0 bg-white/90 backdrop-blur-sm z-30 pt-2 border-b-2 border-black" style={{ filter: 'url(#wobbly-border)' }}>
            <div className="flex text-lg font-bold w-full h-[53px]">
              {['For you', 'Following', 'AI Video & Filmmakers'].map(tab => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 hover:bg-gray-100 flex justify-center items-center relative ${activeTab === tab ? 'text-black' : 'text-gray-600'}`}
                >
                  <span className="px-4 whitespace-nowrap">{tab}</span>
                  {activeTab === tab && (
                    <div className="absolute bottom-0 w-16 h-1 bg-blue-500 rounded-full" style={{ filter: 'url(#wobbly-border)' }} />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Compose Tweet */}
          <div className="px-4 py-3 flex gap-4 border-b-2 border-black" style={{ filter: 'url(#wobbly-border)' }}>
            <div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-black shrink-0 overflow-hidden" style={{ filter: 'url(#wobbly-border)' }}>
              <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix&backgroundColor=e2e8f0" alt="avatar" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 flex flex-col gap-3">
              <textarea 
                placeholder="What's happening?" 
                value={newPostText}
                onChange={e => setNewPostText(e.target.value)}
                className="w-full text-xl outline-none bg-transparent placeholder-gray-500 mt-1 resize-none"
                rows={newPostText.split('\n').length > 1 ? newPostText.split('\n').length : 1}
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
                  onClick={handlePostSubmit}
                  disabled={!newPostText.trim()}
                  className={`px-5 py-2 rounded-full font-bold transition-all shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:shadow-none bg-gray-300 text-gray-600 ${newPostText.trim() ? 'bg-blue-300 text-black' : ''}`}
                  style={{ filter: 'url(#wobbly-border)' }}
                >
                  Post
                </button>
              </div>
            </div>
          </div>

          {/* Posts List */}
          <div>
            {filteredPosts.map(post => (
              <div 
                key={post.id} 
                onClick={() => setSelectedPostId(post.id)}
                className="p-4 flex gap-3 border-b-2 border-black cursor-pointer hover:bg-gray-50 transition-colors" 
                style={{ filter: 'url(#wobbly-border)' }}
              >
                <div className="w-10 h-10 rounded-full border-2 border-black shrink-0 overflow-hidden" style={{ filter: 'url(#wobbly-border)' }}>
                  <img src={post.authorAvatar} alt="avatar" className="w-full h-full object-cover bg-gray-300" />
                </div>
                <div className="flex-1 flex flex-col gap-1 text-lg leading-snug w-full">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-1 flex-wrap">
                      <span className="font-bold">{post.authorName}</span>
                      {post.tags && <span>{post.tags}</span>}
                      {post.verified && <span className="text-blue-500">✓</span>}
                      <span className="text-gray-600">{post.authorHandle} · {post.time}</span>
                    </div>
                    <SketchIcon Icon={MoreHorizontal} size={20} className="text-gray-500 hover:text-blue-500" onClick={(e: any) => e.stopPropagation()} />
                  </div>
                  
                  <p className="mb-2 whitespace-pre-wrap">{post.content}</p>

                  <div onClick={(e) => e.stopPropagation()}>
                    {post.quote}
                  </div>

                  {/* Action Footer */}
                  <div className="flex justify-between mt-1 pt-1 max-w-[425px]">
                    <PostAction icon={MessageCircle} value={formatNumber(post.replies)} />
                    <PostAction 
                      icon={Repeat2} 
                      value={formatNumber(post.reposts)} 
                      active={post.isReposted} 
                      className="!text-green-500"
                      onClick={() => toggleRepost(post.id)} 
                    />
                    <PostAction 
                      icon={Heart} 
                      value={formatNumber(post.likes)} 
                      active={post.isLiked} 
                      className="!text-red-500"
                      onClick={() => toggleLike(post.id)} 
                    />
                    <PostAction icon={BarChart2} value={formatNumber(post.views)} />
                    <div className="flex gap-4">
                      <PostAction icon={Bookmark} />
                      <PostAction icon={Share} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {filteredPosts.length === 0 && (
              <div className="p-10 text-center text-gray-500 text-lg">
                No posts found here!
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

