document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('drawingCanvas');
    const ctx = canvas.getContext('2d');
    let isDrawing = false;
    let currentTool = 'pen';

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mousemove', draw);

    document.getElementById('penTool').addEventListener('click', () => {
        currentTool = 'pen';
    });

    document.getElementById('eraserTool').addEventListener('click', () => {
        currentTool = 'eraser';
    });

    function startDrawing(e) {
        isDrawing = true;
        draw(e);
    }

    function stopDrawing() {
        isDrawing = false;
        ctx.beginPath();
    }

    function draw(e) {
        if (!isDrawing) return;

        ctx.lineWidth = 5;
        ctx.lineCap = 'round';

        if (currentTool === 'pen') {
            ctx.strokeStyle = '#000';
        } else if (currentTool === 'eraser') {
            ctx.strokeStyle = '#fff';
        }

        ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    }
});
