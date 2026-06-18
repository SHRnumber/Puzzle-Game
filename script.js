(function() {
    const dragBoxes = document.querySelectorAll('.dragbox .image');
    const dropBoxes = document.querySelectorAll('.dropbox');
    const resetBtn = document.getElementById('reset');
    const completionMessage = document.getElementById('completionMessage');
    const timerDisplay = document.getElementById('timer');
    
    let dropMapping = new Array(9).fill(null);
    let resetTimer;
    let countdownInterval;
    let isPuzzleComplete = false;

    function getDropIndex(el) {
        return parseInt(el.getAttribute('data-index'), 10);
    }

    // Check if puzzle is complete (all dropboxes have images)
    function checkPuzzleCompletion() {
        const dropBoxes = document.querySelectorAll('.dropbox');
        let allFilled = true;
        
        dropBoxes.forEach(box => {
            if (!box.querySelector('.image')) {
                allFilled = false;
            }
        });

        if (allFilled && !isPuzzleComplete) {
            // Puzzle just got completed
            isPuzzleComplete = true;
            completionMessage.style.display = 'block';
            startCompletionTimer();
            
            // Add completion effect to dropboxes
            dropBoxes.forEach(box => {
                box.classList.add('completed');
            });
        } else if (!allFilled) {
            // Puzzle is not complete
            if (isPuzzleComplete) {
                // If it was complete but now isn't (someone moved a piece)
                cancelCompletionTimer();
            }
            isPuzzleComplete = false;
            completionMessage.style.display = 'none';
            timerDisplay.style.display = 'none';
            
            // Remove completion effect
            dropBoxes.forEach(box => {
                box.classList.remove('completed');
            });
        }
    }

    // Start 5-second timer after puzzle completion
    function startCompletionTimer() {
        // Clear any existing timer
        if (resetTimer) {
            clearTimeout(resetTimer);
        }
        if (countdownInterval) {
            clearInterval(countdownInterval);
        }

        let timeLeft = 5;
        timerDisplay.style.display = 'block';
        timerDisplay.textContent = `Resetting in ${timeLeft}s...`;

        countdownInterval = setInterval(() => {
            timeLeft--;
            if (timeLeft > 0) {
                timerDisplay.textContent = `Resetting in ${timeLeft}s...`;
            }
        }, 1000);

        resetTimer = setTimeout(() => {
            resetPuzzle();
            cancelCompletionTimer();
        }, 5000);
    }

    function cancelCompletionTimer() {
        if (resetTimer) {
            clearTimeout(resetTimer);
            resetTimer = null;
        }
        if (countdownInterval) {
            clearInterval(countdownInterval);
            countdownInterval = null;
        }
        timerDisplay.style.display = 'none';
    }

    // Reset puzzle function
    function resetPuzzle() {
        const allImages = document.querySelectorAll('.image');
        
        allImages.forEach(img => {
            if (img.parentNode.classList.contains('dropbox')) {
                img.parentNode.removeChild(img);
                
                const id = img.id;
                const dragBoxes = document.querySelectorAll('.drag .dragbox');
                let targetDragBox = null;
                
                if (id === 'block1') targetDragBox = dragBoxes[0];
                else if (id === 'block2') targetDragBox = dragBoxes[1];
                else if (id === 'block3') targetDragBox = dragBoxes[2];
                else if (id === 'block4') targetDragBox = dragBoxes[3];
                else if (id === 'block5') targetDragBox = dragBoxes[4];
                else if (id === 'block6') targetDragBox = dragBoxes[5];
                else if (id === 'block7') targetDragBox = dragBoxes[6];
                else if (id === 'block8') targetDragBox = dragBoxes[7];
                else if (id === 'block9') targetDragBox = dragBoxes[8];

                if (targetDragBox) {
                    targetDragBox.appendChild(img);
                }
            }
        });
        
        dropMapping.fill(null);
        document.querySelectorAll('.image').forEach(img => img.setAttribute('draggable', 'true'));
        
        // Reset completion state
        isPuzzleComplete = false;
        completionMessage.style.display = 'none';
        timerDisplay.style.display = 'none';
        
        // Remove completion effect
        document.querySelectorAll('.dropbox').forEach(box => {
            box.classList.remove('completed');
        });
        
        cancelCompletionTimer();
    }

    // Drag events
    dragBoxes.forEach(piece => {
        piece.addEventListener('dragstart', function(e) {
            e.dataTransfer.setData('text/plain', this.id);
            this.classList.add('dragging');
        });

        piece.addEventListener('dragend', function(e) {
            this.classList.remove('dragging');
        });
    });

    // Drop zone events
    dropBoxes.forEach(box => {
        box.addEventListener('dragover', function(e) {
            e.preventDefault();
        });

        box.addEventListener('dragenter', function(e) {
            e.preventDefault();
        });

        box.addEventListener('drop', function(e) {
            e.preventDefault();
            
            // If puzzle is complete, don't allow more drops
            if (isPuzzleComplete) {
                return;
            }
            
            const targetBox = e.currentTarget;
            const dropIndex = getDropIndex(targetBox);
            const draggedId = e.dataTransfer.getData('text/plain');
            const draggedElement = document.getElementById(draggedId);

            if (!draggedElement) return;

            if (targetBox.querySelector('.image')) {
                return;
            }

            const parentNow = draggedElement.parentNode;

            if (parentNow.classList.contains('dropbox')) {
                const oldDrop = parentNow;
                const oldIndex = getDropIndex(oldDrop);
                oldDrop.removeChild(draggedElement);
                dropMapping[oldIndex] = null;
            } else {
                parentNow.removeChild(draggedElement);
            }

            targetBox.appendChild(draggedElement);
            dropMapping[dropIndex] = draggedId;
            draggedElement.setAttribute('draggable', 'true');

            // Check if puzzle is now complete
            checkPuzzleCompletion();
        });
    });

    resetBtn.addEventListener('click', function() {
        resetPuzzle();
    });

    // Prevent default drag behaviors
    document.addEventListener('dragover', function(e) {
        e.preventDefault();
    });
    
    document.addEventListener('drop', function(e) {
        e.preventDefault();
    });

    // Initialize
    resetPuzzle();
})();