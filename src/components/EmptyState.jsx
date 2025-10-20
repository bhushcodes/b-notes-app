import React from 'react';
import { FileText, PlusCircle } from 'lucide-react';

const EmptyState = ({ onCreateNote }) => {
  return (
    <div className="h-full flex items-center justify-center bg-brutal-cream p-8">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-32 h-32 bg-brutal-accent-yellow border-4 border-black shadow-brutal-xl mb-6">
          <FileText size={64} className="text-black" />
        </div>
        
        <h2 className="text-4xl font-bold text-black mb-4">
          Welcome to B-NOTES
        </h2>
        
        <p className="text-lg text-gray-700 mb-8 max-w-md mx-auto">
          Start organizing your thoughts and ideas. Create your first note to get started!
        </p>
        
        <button
          onClick={onCreateNote}
          className="btn-primary inline-flex items-center space-x-2 text-lg px-6 py-3"
        >
          <PlusCircle size={24} />
          <span>Create Your First Note</span>
        </button>
        
        <div className="mt-12 grid grid-cols-3 gap-6 max-w-2xl mx-auto text-left">
          <div className="bg-brutal-pink border-4 border-black p-6 shadow-brutal hover:shadow-brutal-lg transition-all duration-150 hover:translate-x-[1px] hover:translate-y-[1px]">
            <div className="text-4xl mb-3">📝</div>
            <h3 className="font-bold text-black mb-2">Rich Notes</h3>
            <p className="text-sm text-gray-700">Create detailed notes with titles, content, and tags</p>
          </div>
          
          <div className="bg-brutal-blue border-4 border-black p-6 shadow-brutal hover:shadow-brutal-lg transition-all duration-150 hover:translate-x-[1px] hover:translate-y-[1px]">
            <div className="text-4xl mb-3">🏷️</div>
            <h3 className="font-bold text-black mb-2">Organize</h3>
            <p className="text-sm text-gray-700">Categorize notes and add custom tags</p>
          </div>
          
          <div className="bg-brutal-orange border-4 border-black p-6 shadow-brutal hover:shadow-brutal-lg transition-all duration-150 hover:translate-x-[1px] hover:translate-y-[1px]">
            <div className="text-4xl mb-3">🔍</div>
            <h3 className="font-bold text-black mb-2">Search</h3>
            <p className="text-sm text-gray-700">Quickly find any note with powerful search</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmptyState;
