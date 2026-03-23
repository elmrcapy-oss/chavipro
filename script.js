// Simple js for subtle dynamic effects

document.addEventListener('DOMContentLoaded', () => {
    // Add 3D tilt effect parameter for benefit items
    const benefitItems = document.querySelectorAll('.benefit-item');
    
    benefitItems.forEach(item => {
        item.addEventListener('mousemove', (e) => {
            const rect = item.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const xPct = x / rect.width - 0.5;
            const yPct = y / rect.height - 0.5;
            
            item.style.transform = `perspective(1000px) rotateY(${xPct * 10}deg) rotateX(${yPct * -10}deg) translateY(-5px)`;
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'perspective(1000px) rotateY(0) rotateX(0) translateY(0)';
        });
    });
});
