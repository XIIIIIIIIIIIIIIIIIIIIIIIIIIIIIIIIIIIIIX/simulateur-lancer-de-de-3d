document.addEventListener('DOMContentLoaded', () => {
    const rollBtn = document.getElementById('roll-btn');
    const diceTypeSelect = document.getElementById('dice-type');
    const diceFace = document.getElementById('dice-face');
    const resultDisplay = document.getElementById('result');
    
    rollBtn.addEventListener('click', rollDice);
    
    function rollDice() {
        const diceType = parseInt(diceTypeSelect.value);
        if (isNaN(diceType)) return;
        
        // Désactiver le bouton pendant l'animation
        rollBtn.disabled = true;
        
        // État de roulement
        diceFace.textContent = '?';
        diceFace.classList.add('rolling');
        resultDisplay.textContent = '?';
        resultDisplay.classList.remove('result-pop');
        
        setTimeout(() => {
            const result = Math.floor(Math.random() * diceType) + 1;
            
            // Fin de l'animation
            diceFace.classList.remove('rolling');
            diceFace.textContent = result;
            resultDisplay.textContent = result;
            resultDisplay.classList.add('result-pop');
            
            // Réactiver le bouton
            rollBtn.disabled = false;
        }, 1200);
    }
});