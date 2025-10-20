import React from 'react';
import { FileText, PlusCircle } from 'lucide-react';

const EmptyState = ({ onCreateNote }) => {
  return (
    <div className="h-full flex items-center justify-center bg-brutal-cream p-4 sm:p-6 md:p-8">
      <div className="text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center justify-center w-24 h-24 sm:w-32 sm:h-32 bg-brutal-accent-yellow border-4 border-black shadow-brutal-xl mb-4 sm:mb-6">
          <FileText size={48} className="text-black sm:w-16 sm:h-16" />
        </div>
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3 sm:mb-4 px-4">
          Welcome to B-NOTES
        </h2>
        
        <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 max-w-md mx-auto px-4">
          Start organizing your thoughts and ideas. Create your first note to get started!
        </p>
        
        <button
          onClick={onCreateNote}
          className="btn-primary inline-flex items-center space-x-2 text-base sm:text-lg px-4 sm:px-6 py-2 sm:py-3"
        >
          <PlusCircle size={20} className="sm:w-6 sm:h-6" />
          <span>Create Your First Note</span>
        </button>
        
        <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto text-left px-4">
          <div className="bg-brutal-pink border-4 border-black p-4 sm:p-6 shadow-brutal hover:shadow-brutal-lg transition-all duration-150 hover:translate-x-[1px] hover:translate-y-[1px]">
            <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">📝</div>
            <h3 className="font-bold text-black mb-1 sm:mb-2 text-sm sm:text-base">Rich Notes</h3>
            <p className="text-xs sm:text-sm text-gray-700">Create detailed notes with titles, content, and tags</p>
          </div>
          
          <div className="bg-brutal-blue border-4 border-black p-4 sm:p-6 shadow-brutal hover:shadow-brutal-lg transition-all duration-150 hover:translate-x-[1px] hover:translate-y-[1px]">
            <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">🏷️</div>
            <h3 className="font-bold text-black mb-1 sm:mb-2 text-sm sm:text-base">Organize</h3>
            <p className="text-xs sm:text-sm text-gray-700">Categorize notes and add custom tags</p>
          </div>
          
          <div className="bg-brutal-orange border-4 border-black p-4 sm:p-6 shadow-brutal hover:shadow-brutal-lg transition-all duration-150 hover:translate-x-[1px] hover:translate-y-[1px]">
            <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">🔍</div>
            <h3 className="font-bold text-black mb-1 sm:mb-2 text-sm sm:text-base">Search</h3>
            <p className="text-xs sm:text-sm text-gray-700">Quickly find any note with powerful search</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmptyState;
