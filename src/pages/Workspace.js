import React, { useRef, useEffect } from "react";
import { useTool } from "../contexts/ToolContext";

function Workspace({window}) {
  const canvasRef = useRef(null);
  const { selectedTool } = useTool();
  console.log(window.isFullscreen);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = 800;
    canvas.height = 600;
    ctx.lineWidth = 2;

    let drawing = false;

    const startDrawing = (e) => {
      drawing = true;
      ctx.beginPath();
      ctx.moveTo(e.offsetX, e.offsetY);
    };

    const draw = (e) => {
      if (!drawing) return;

      if (selectedTool === "eraser") {
        ctx.globalCompositeOperation = "destination-out";
        ctx.lineWidth = 10;
      } else {
        ctx.globalCompositeOperation = "source-over";
        ctx.lineWidth = 2;
      }

      ctx.lineTo(e.offsetX, e.offsetY);
      ctx.stroke();
    };

    const stopDrawing = () => {
      drawing = false;
      ctx.closePath();
    };

    const clearCanvas = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };

    if (selectedTool === "clear") {
      clearCanvas();
    }

    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", stopDrawing);
    canvas.addEventListener("mouseout", stopDrawing);

    return () => {
      canvas.removeEventListener("mousedown", startDrawing);
      canvas.removeEventListener("mousemove", draw);
      canvas.removeEventListener("mouseup", stopDrawing);
      canvas.removeEventListener("mouseout", stopDrawing);
    };
  }, [selectedTool]);

  return <canvas ref={canvasRef} className="workspace-canvas"></canvas>;
}

export default Workspace;
