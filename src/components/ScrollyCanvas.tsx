'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

const FRAME_COUNT = 74; // 0 to 74 -> 75 frames total
const FRAME_PREFIX = 'frame_';
const FRAME_SUFFIX = '_delay-0.066s.png';

interface ScrollyCanvasProps {
  children?: React.ReactNode;
}

export default function ScrollyCanvas({ children }: ScrollyCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i <= FRAME_COUNT; i++) {
      const img = new Image();
      const frameIndex = i.toString().padStart(2, '0');
      img.src = `/sequence/${FRAME_PREFIX}${frameIndex}${FRAME_SUFFIX}`;

      img.onload = () => {
        loadedCount++;
        if (loadedCount === 1) { // Render the first frame as soon as it loads
          drawImage(0);
        }
      };

      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  const drawImage = useCallback((index: number) => {
    if (!canvasRef.current || images.length === 0 || !images[index]) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Use window.innerWidth/innerHeight or parent container dimensions for better resolution
    const width = window.innerWidth;
    const height = window.innerHeight;

    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
    }

    const img = images[index];
    if (!img.complete || img.naturalHeight === 0) return;

    // object-fit: cover logic
    const canvasRatio = width / height;
    const imgRatio = img.width / img.height;

    let drawWidth, drawHeight, offsetX, offsetY;

    if (imgRatio > canvasRatio) {
      drawHeight = height;
      drawWidth = img.width * (height / img.height);
      offsetX = (width - drawWidth) / 2;
      offsetY = 0;
    } else {
      drawWidth = width;
      drawHeight = img.height * (width / img.width);
      offsetX = 0;
      offsetY = (height - drawHeight) / 2;
    }

    // Fill background with same color to prevent flickering borders
    ctx.fillStyle = '#121212';
    ctx.fillRect(0, 0, width, height);

    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  }, [images]);

  // Frame calculation based on scroll
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT]);

  useMotionValueEvent(frameIndex, 'change', (latest) => {
    drawImage(Math.round(latest));
  });

  useEffect(() => {
    const handleResize = () => drawImage(Math.round(frameIndex.get()));
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [drawImage, frameIndex]);

  return (
    <div ref={containerRef} className="relative w-full h-[500vh] bg-[#0a0a0a]">
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-10">
          {children}
        </div>
      </div>
    </div>
  );
}
