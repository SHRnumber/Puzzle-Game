
# 🧩 Drag and Drop Puzzle Game

An interactive drag-and-drop puzzle game where players arrange scrambled image pieces to complete the picture. Features automatic reset after completion with visual feedback!

![Drag and Drop Puzzle Game]<img width="1364" height="601" alt="Screenshot 2026-02-17 191915" src="https://github.com/user-attachments/assets/efe1b6e1-67b2-4762-8799-89671f898e16" />



## 🎮 Features

- **Drag and Drop Mechanics**: Intuitive drag-and-drop interface for moving puzzle pieces
- **3x3 Puzzle Grid**: Nine pieces that form a complete image when arranged correctly
- **Completion Detection**: Automatically detects when the puzzle is solved
- **Auto-Reset Timer**: 
  - "Puzzle Complete!" message appears when solved
  - 5-second countdown timer before automatic reset
  - Visual countdown display
- **Reset Button**: Manual reset option at any time
- **Visual Feedback**:
  - Glowing effect on completed puzzle
  - Dragging animations
  - Success message on completion

## 🖼️ Screenshot

*Puzzle complete state with countdown timer and success message*

## 🚀 How to Play

1. **Drag** any piece from the left side
2. **Drop** it into an empty slot on the right grid
3. **Arrange** all 9 pieces to complete the picture
4. Watch the **5-second countdown** begin automatically
5. Puzzle **resets** automatically, ready for another round!

## 🛠️ Technologies Used

- HTML5
- CSS3 (Grid, Flexbox, Animations)
- JavaScript (Drag and Drop API)

## 📁 File Structure

```
📦 drag-drop-puzzle
├── 📄 index.html
├── 🖼️ background.jpg
├── 🖼️ row-1-column-1.jpg
├── 🖼️ row-1-column-2.jpg
├── 🖼️ row-1-column-3.jpg
├── 🖼️ row-2-column-1.jpg
├── 🖼️ row-2-column-2.jpg
├── 🖼️ row-2-column-3.jpg
├── 🖼️ row-3-column-1.jpg
├── 🖼️ row-3-column-2.jpg
├── 🖼️ row-3-column-3.jpg
└── 📝 README.md
```

## 🎯 Game States

| State | Description | Visual Indicator |
|-------|-------------|------------------|
| Playing | Pieces scattered | Normal view |
| Complete | All pieces placed | "Puzzle Complete!" message + glowing borders |
| Resetting | 5-second countdown | Timer display counting down |

## 🔧 Installation

1. Clone the repository:
```bash
git clone https://github.com/SHRnumber/Puzzle-Game
```

2. Add your puzzle images to the project folder:
   - `background.jpg` - Background image
   - `row-1-column-1.jpg` to `row-3-column-3.jpg` - Puzzle pieces (9 images)

3. Open `index.html` in your browser

## 📝 Requirements

- Modern web browser with JavaScript enabled
- 9 puzzle piece images (named as per the file structure)
- Background image (optional)

## 🤝 Contributing

Feel free to fork this project and customize it with your own images or features!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Happy Puzzling!** 🎉
```

This README:
- Shows your screenshot exactly as described with "Puzzle Complete! Resetting in 4s. Reset Puzzle"
- Provides clear instructions
- Lists all required image files
- Explains the game states and visual indicators
- Includes installation steps
- Has a professional, clean format perfect for GitHub
