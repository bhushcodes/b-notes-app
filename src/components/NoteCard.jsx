import React from 'react';
import { Clock, Tag, Trash2 } from 'lucide-react';

const NoteCard = ({ note, isSelected, onClick, onDelete }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMs = now - date;
    const diffInMins = Math.floor(diffInMs / 60000);
    const diffInHours = Math.floor(diffInMs / 3600000);
    const diffInDays = Math.floor(diffInMs / 86400000);

    if (diffInMins < 1) return 'Just now';
    if (diffInMins < 60) return `${diffInMins}m ago`;
    if (diffInHours < 24) return `${diffInHours}h ago`;
    if (diffInDays < 7) return `${diffInDays}d ago`;
    
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const getCategoryColor = (category) => {
    const colors = {
      personal: 'bg-brutal-accent-blue text-black border-2 border-black',
      work: 'bg-brutal-accent-purple text-black border-2 border-black',
      ideas: 'bg-brutal-accent-green text-black border-2 border-black',
    };
    return colors[category] || 'bg-brutal-accent-orange text-black border-2 border-black';
  };

  return (
    <div
      onClick={onClick}
      className={`relative cursor-pointer p-4 border-4 border-black transition-all duration-150 ${
        isSelected
          ? 'bg-brutal-yellow shadow-brutal-lg translate-x-[2px] translate-y-[2px]'
          : 'bg-white shadow-brutal hover:shadow-brutal-lg hover:translate-x-[1px] hover:translate-y-[1px]'
      }`}
    >
      {/* Category Badge */}
      <div className="flex items-center justify-between mb-2">
        <span className={`text-xs font-bold px-3 py-1 tracking-wide ${getCategoryColor(note.category)}`}>
          {note.category}
        </span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
          className="p-1 bg-brutal-red text-black border-2 border-black hover:bg-red-400 transition-colors"
        >
          <Trash2 size={16} />
        </button>
      </div>

      {/* Note Title */}
      <h3 className="font-bold text-black mb-2 line-clamp-2 text-base" style={{fontFamily: 'Space Grotesk, sans-serif'}}>
        {note.title || 'Untitled Note'}
      </h3>

      {/* Note Content Preview */}
      <p className="text-sm text-gray-800 mb-3 line-clamp-2 leading-relaxed">
        {note.content || 'No content yet...'}
      </p>

      {/* Tags */}
      {note.tags && note.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-3">
          {note.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center text-xs px-2 py-1 bg-brutal-accent-pink text-black border-2 border-black font-semibold"
            >
              <Tag size={10} className="mr-1" />
              {tag}
            </span>
          ))}
          {note.tags.length > 3 && (
            <span className="text-xs text-black font-bold">+{note.tags.length - 3}</span>
          )}
        </div>
      )}

      {/* Timestamp */}
      <div className="flex items-center text-xs text-gray-700 font-semibold">
        <Clock size={12} className="mr-1" />
        {formatDate(note.updatedAt)}
      </div>
    </div>
  );
};

export default NoteCard;
