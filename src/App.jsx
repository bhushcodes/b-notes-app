import React, { useState, useEffect } from 'react';
import { PlusCircle, Search, Tag, Clock, Trash2, Edit3, X, Check, Menu } from 'lucide-react';
import NoteCard from './components/NoteCard';
import NoteEditor from './components/NoteEditor';
import Sidebar from './components/Sidebar';
import EmptyState from './components/EmptyState';

function App() {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Load notes from localStorage on mount
  useEffect(() => {
    const savedNotes = localStorage.getItem('bNotes');
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  // Save notes to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('bNotes', JSON.stringify(notes));
  }, [notes]);

  // Create a new note
  const createNote = () => {
    const newNote = {
      id: Date.now(),
      title: 'Untitled Note',
      content: '',
      category: 'personal',
      tags: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setNotes([newNote, ...notes]);
    setSelectedNote(newNote);
    setIsEditing(true);
  };

  // Update a note
  const updateNote = (updatedNote) => {
    setNotes(notes.map(note => 
      note.id === updatedNote.id 
        ? { ...updatedNote, updatedAt: new Date().toISOString() }
        : note
    ));
    setSelectedNote(updatedNote);
  };

  // Delete a note
  const deleteNote = (noteId) => {
    setNotes(notes.filter(note => note.id !== noteId));
    if (selectedNote?.id === noteId) {
      setSelectedNote(null);
      setIsEditing(false);
    }
  };

  // Filter notes based on search and category
  const filteredNotes = notes.filter(note => {
    const matchesSearch = note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         note.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         note.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || note.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Get categories with counts
  const categories = [
    { id: 'all', name: 'All Notes', count: notes.length },
    { id: 'personal', name: 'Personal', count: notes.filter(n => n.category === 'personal').length },
    { id: 'work', name: 'Work', count: notes.filter(n => n.category === 'work').length },
    { id: 'ideas', name: 'Ideas', count: notes.filter(n => n.category === 'ideas').length },
  ];

  return (
    <div className="flex h-screen bg-brutal-cream">
      {/* Sidebar */}
      <Sidebar
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        isOpen={isSidebarOpen}
        onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b-4 border-black px-4 sm:px-6 py-3 sm:py-4 shadow-brutal" style={{minHeight: '80px'}}>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex items-center justify-between sm:justify-start gap-2 sm:gap-4">
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="lg:hidden p-2 bg-brutal-accent-yellow border-3 border-black shadow-brutal"
              >
                <Menu size={20} className="text-black" />
              </button>
              
              <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-black tracking-tight" style={{fontFamily: 'Space Grotesk, sans-serif'}}>B-NOTES</h1>
              
              <button
                onClick={createNote}
                className="btn-primary flex items-center gap-2 text-sm sm:text-base px-3 sm:px-6 py-2 sm:py-3"
              >
                <PlusCircle size={18} className="sm:w-5 sm:h-5" />
                <span className="hidden sm:inline">New Note</span>
                <span className="sm:hidden">New</span>
              </button>
            </div>
            
            {/* Search Bar */}
            <div className="relative w-full sm:w-64 md:w-80 lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" size={18} />
              <input
                type="text"
                placeholder="Search notes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input-field pl-10 text-sm sm:text-base placeholder:text-gray-500"
              />
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
          {/* Notes List */}
          <div className={`${selectedNote && !isEditing ? 'hidden md:flex' : 'flex'} md:w-80 lg:w-96 w-full bg-brutal-blue border-r-0 md:border-r-4 border-black overflow-y-auto flex-shrink-0`}>
            <div className="p-4">
              <h2 className="text-sm font-extrabold text-black mb-4 tracking-wide uppercase" style={{fontFamily: 'Space Grotesk, sans-serif'}}>
                {filteredNotes.length} {filteredNotes.length === 1 ? 'Note' : 'Notes'}
              </h2>
              
              {filteredNotes.length === 0 ? (
                <div className="text-center py-8 bg-white border-4 border-black shadow-brutal p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-brutal-yellow border-3 border-black shadow-brutal mb-4">
                    <Search size={32} className="text-black" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-sm font-extrabold text-black mb-2 uppercase tracking-wide" style={{fontFamily: 'Space Grotesk, sans-serif'}}>
                    No Notes Found
                  </h3>
                  <p className="text-xs text-black font-medium leading-relaxed">
                    {searchQuery ? 'Try a different search term' : 'Create your first note to get started'}
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {filteredNotes.map(note => (
                    <NoteCard
                      key={note.id}
                      note={note}
                      isSelected={selectedNote?.id === note.id}
                      onClick={() => {
                        setSelectedNote(note);
                        setIsEditing(false);
                      }}
                      onDelete={() => deleteNote(note.id)}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Note Editor/Viewer */}
          <div className={`${selectedNote ? 'flex' : 'hidden md:flex'} flex-1 overflow-y-auto`}>
            {selectedNote ? (
              <NoteEditor
                note={selectedNote}
                isEditing={isEditing}
                onUpdate={updateNote}
                onEdit={() => setIsEditing(true)}
                onCancel={() => setIsEditing(false)}
              />
            ) : (
              <EmptyState onCreateNote={createNote} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
