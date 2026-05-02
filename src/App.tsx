/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import { Sidebar } from './components/Sidebar';
import { Feed } from './components/Feed';
import { RightSidebar } from './components/RightSidebar';
import { WobblyFilter } from './components/ui/Sketchy';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black flex justify-center">
      <WobblyFilter />
      <div className="w-full max-w-[1260px] flex">
        <Sidebar />
        <Feed />
        <RightSidebar />
      </div>
    </div>
  );
}
