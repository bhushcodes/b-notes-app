import React, { useState, useEffect } from 'react';
import { Edit3, Check, X, Tag, Plus } from 'lucide-react';

const NoteEditor = ({ note, isEditing, onUpdate, onEdit, onCancel }) => {
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);
  const [category, setCategory] = useState(note.category);
  const [tags, setTags] = useState(note.tags);
  const [newTag, setNewTag] = useState('');

  useEffect(() => {
    setTitle(note.title);
    setContent(note.content);
    setCategory(note.category);
    setTags(note.tags);
  }, [note]);

  const handleSave = () => {
    onUpdate({
      ...note,
      title,
      content,
      category,
      tags,
    });
    onCancel();
  };

  const handleAddTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()]);
      setNewTag('');
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="h-full flex flex-col p-4 sm:p-6 md:p-8 max-w-4xl mx-auto bg-brutal-cream">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4 sm:mb-6 bg-brutal-yellow border-4 border-black p-3 sm:p-4 shadow-brutal">
        <div className="text-xs sm:text-sm text-black font-bold" style={{fontFamily: 'Inter, sans-serif'}}>
          <p className="truncate">Created: {formatDate(note.createdAt)}</p>
          <p className="truncate">Updated: {formatDate(note.updatedAt)}</p>
        </div>
        
        <div className="flex items-center gap-2">
          {isEditing ? (
            <>
              <button onClick={onCancel} className="btn-secondary flex items-center space-x-2">
                <X size={18} />
                <span>Cancel</span>
              </button>
              <button onClick={handleSave} className="btn-primary flex items-center space-x-2">
                <Check size={18} />
                <span>Save</span>
              </button>
            </>
          ) : (
            <button onClick={onEdit} className="btn-primary flex items-center space-x-2">
              <Edit3 size={18} />
              <span>Edit</span>
            </button>
          )}
        </div>
      </div>

      {/* Category Selector */}
      {isEditing && (
        <div className="mb-4 sm:mb-6 bg-white border-4 border-black p-4 sm:p-6 shadow-brutal">
          <label className="block text-sm font-extrabold text-black mb-3 sm:mb-4 tracking-wide uppercase" style={{fontFamily: 'Space Grotesk, sans-serif'}}>Category</label>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {['personal', 'work', 'ideas'].map(cat => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 sm:px-6 sm:py-3 border-3 sm:border-4 border-black capitalize transition-all duration-150 font-bold text-sm sm:text-base ${
                  category === cat
                    ? 'bg-brutal-accent-yellow text-black shadow-brutal-lg translate-x-[2px] translate-y-[2px]'
                    : 'bg-white text-black shadow-brutal hover:shadow-brutal-lg hover:translate-x-[2px] hover:translate-y-[2px]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Title */}
      {isEditing ? (
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Note title..."
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 border-4 border-black p-3 sm:p-4 focus:outline-none bg-white shadow-brutal placeholder:text-gray-500"
          style={{fontFamily: 'Space Grotesk, sans-serif'}}
        />
      ) : (
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-black bg-white border-4 border-black p-3 sm:p-4 shadow-brutal break-words" style={{fontFamily: 'Space Grotesk, sans-serif'}}>{title}</h1>
      )}

      {/* Tags */}
      <div className="mb-4 sm:mb-6 bg-white border-4 border-black p-4 sm:p-6 shadow-brutal">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm font-bold bg-brutal-accent-pink text-black border-2 border-black"
            >
              <Tag size={14} className="mr-1" />
              {tag}
              {isEditing && (
                <button
                  onClick={() => handleRemoveTag(tag)}
                  className="ml-2 text-black hover:text-red-600 font-bold"
                >
                  <X size={14} />
                </button>
              )}
            </span>
          ))}
        </div>
        
        {isEditing && (
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
            <input
              type="text"
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleAddTag()}
              placeholder="Add a tag..."
              className="input-field flex-1 text-sm"
            />
            <button
              onClick={handleAddTag}
              className="btn-secondary flex items-center space-x-2"
            >
              <Plus size={16} />
              <span>Add</span>
            </button>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 bg-white border-4 border-black shadow-brutal">
        {isEditing ? (
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Start writing your note..."
            className="w-full h-full min-h-64 sm:min-h-96 p-4 sm:p-6 border-4 border-black focus:outline-none focus:shadow-brutal-lg resize-none text-base sm:text-lg bg-white placeholder:text-gray-500 leading-relaxed"
            style={{fontFamily: 'Inter, sans-serif'}}
          />
        ) : (
          <div className="prose max-w-none p-6">
            <p className="text-lg text-gray-900 whitespace-pre-wrap leading-relaxed" style={{fontFamily: 'Inter, sans-serif'}}>
              {content || 'No content yet. Click Edit to add content.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NoteEditor;
