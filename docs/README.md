# D&D Bot Toolkit - Wiki-Style Documentation

## Welcome to the Documentation Site! 📚

This is a **wiki-style online dictionary** for the D&D Bot Toolkit. Each component is documented with:
- ✅ Full method documentation
- ✅ Parameter descriptions  
- ✅ Return value explanations
- ✅ Code examples
- ✅ Cross-references to related components

## How to View the Documentation

### Option 1: Open Locally (Recommended)
1. Open `index.html` in your web browser
2. Navigate through components using the menu
3. Click component cards to go to detailed pages

### Option 2: File Structure
```
docs/
├── index.html              ← START HERE - Main page
├── css/
│   └── style.css          ← Shared styling
└── components/
    ├── dice-roller.html    ← 🎲 Dice Roller docs
    ├── character-system.html ← 👤 Character System docs
    ├── combat-system.html   ← ⚔️ Combat System docs
    ├── spell-system.html    ← ✨ Spell System docs
    ├── database-system.html ← 💾 Database System docs
    └── game-rules.html      ← 📖 Game Rules docs
```

## Features

### 📖 Complete Component Documentation
Each component page includes:
- **Overview** - What the component does
- **Core Methods** - All methods with full documentation
- **Parameters** - Detailed parameter descriptions
- **Returns** - What each method returns
- **Examples** - Real code examples you can use
- **Related Components** - Links to connected systems

### 🔗 Cross-References
Methods automatically link to related components. For example:
- Combat System links to Dice Roller (which it uses)
- Character System links to Database System (which saves characters)
- Spell System links to Combat System (where spells are cast)

### 📚 Reference Tables
Looking up D&D rules?
- Experience point tables
- Class hit dice
- Proficiency bonuses
- Spell information

### 💡 Code Examples
Every method includes practical examples showing:
- How to use the method
- What the output looks like
- How it connects with other components

## Navigation Guide

### From Home Page (index.html)
1. **Components Grid** - Click any component card to see full documentation
2. **Quick Start Guide** - Copy-paste examples for common tasks
3. **Component Reference Table** - Quick lookup of all components
4. **Navigation Links** - Jump between pages

### Between Pages
- **Top Navigation** - Always visible, navigate anywhere
- **Component Cards** - See related components at bottom of page
- **Cross-Reference Boxes** - Yellow boxes show related content
- **Navigation Section** - Previous/Next page links

## Component Overview

| Component | Purpose | Learn More |
|-----------|---------|------------|
| 🎲 **Dice Roller** | Roll any D&D dice with modifiers | [docs/components/dice-roller.html](components/dice-roller.html) |
| 👤 **Character** | Create and manage characters | [docs/components/character-system.html](components/character-system.html) |
| ⚔️ **Combat** | Turn-based battles | [docs/components/combat-system.html](components/combat-system.html) |
| ✨ **Spells** | Spellcasting and effects | [docs/components/spell-system.html](components/spell-system.html) |
| 💾 **Database** | Save/load characters | [docs/components/database-system.html](components/database-system.html) |
| 📖 **Rules** | D&D calculations | [docs/components/game-rules.html](components/game-rules.html) |

## Quick Access Shortcuts

**Just getting started?**
→ [Open index.html](index.html)

**Want to roll dice?**
→ [Dice Roller](components/dice-roller.html)

**Creating a character?**
→ [Character System](components/character-system.html)

**Running combat?**
→ [Combat System](components/combat-system.html)

**Looking up D&D rules?**
→ [Game Rules](components/game-rules.html)

## How This Documentation Works

### Visual Organization
- **Blue boxes** (method signatures) - Show the exact code
- **Yellow boxes** (cross-references) - Links to related components
- **Green boxes** (returns) - What the method gives back
- **Dark boxes** (code examples) - Copy-paste ready code

### Color Coding
- **Blue headings** - Component names and important sections
- **Green badges** - Success/working examples
- **Red text** - Parameters and variables
- **Gray text** - Helper information

## Using Code Examples

All code examples in this documentation are:
- ✅ Complete and runnable
- ✅ Copy-paste ready
- ✅ Follow D&D 5e rules
- ✅ Compatible with the toolkit

Just copy any code block into your Python file!

## Contributing & Extending

When you add new features to the toolkit:
1. Document them on the relevant component page
2. Add cross-references to related components
3. Include code examples
4. Update the component reference table

## For Your A-Level Project

Use this documentation to:
- **Understand** - Read component pages to understand how things work
- **Implement** - Copy code examples into your bot
- **Extend** - Add your own features and document them
- **Reference** - Show your examiner these pages to explain your system
- **Present** - Use this as part of your project portfolio

## Technical Details

- **HTML5** - Modern, semantic markup
- **CSS3** - Responsive design, works on mobile
- **No JavaScript needed** - Pure HTML/CSS
- **Fast** - No server required, works offline
- **Portable** - Share the entire `docs/` folder

## Keyboard Navigation

- **Tab** - Jump between links
- **Enter** - Follow links
- **Ctrl+F** - Search on page

## Browser Compatibility

Works on all modern browsers:
- ✅ Chrome/Edge
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers

---

**Ready to explore?** Start with [index.html](index.html)

**Need help?** Each page has examples and cross-references to guide you.

**Building something cool?** The toolkit is designed to be extended - add your own components and features!

---

*Last Updated: April 27, 2024*  
*For the D&D Bot Toolkit A-Level Project*
