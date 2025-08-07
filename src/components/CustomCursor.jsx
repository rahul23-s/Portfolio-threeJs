import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isCollapsing, setIsCollapsing] = useState(false);
  const [gridTiles, setGridTiles] = useState([]);
  const tileIdRef = useRef(0);
  const lastPositionRef = useRef({ x: 0, y: 0 });
  const inactivityTimeoutRef = useRef(null);

  // Coding-related icons and symbols
  const codingIcons = [
    "<",
    ">",
    "{",
    "}",
    "[",
    "]",
    "(",
    ")",
    ";",
    ":",
    "=",
    "+",
    "-",
    "*",
    "/",
    "%",
    "&",
    "|",
    "!",
    "?",
    "$",
    "#",
    "@",
    ".",
    "~",
    "^",
    "\\",
    "_",
    "`",
    '"',
    "'",
    ",",
    "→",
    "←",
    "↑",
    "↓",
    "⟨",
    "⟩",
    "⟪",
    "⟫",
    "⌘",
    "⏎",
    "⌥",
    "⌃",
    "⇧",
    "⌫",
    "⌦",
    "⎋",
    "◆",
    "●",
    "■",
    "▲",
    "▶",
    "▼",
    "◀",
    "★",
    "☆",
    "♦",
    "♠",
    "♣",
    "♥",
    "◉",
    "○",
    "□",
    "✓",
    "✗",
    "✦",
    "✧",
    "⚡",
    "⚙",
    "⚛",
    "∞",
    "λ",
    "π",
    "Σ",
    "Δ",
    "Ω",
    "α",
    "β",
    "γ",
    "∅",
    "∈",
    "∉",
    "∩",
    "∪",
    "⊂",
    "⊃",
    "≡",
    "≠",
    "≤",
    "≥",
    "≈",
    "±",
    "÷",
    "×",
    "√",
  ];

  // CTA selectors - elements that should trigger pointer cursor
  const ctaSelectors = [
    "a[href]", // All links
    "button", // All buttons
    ".cursor-pointer", // Elements with cursor-pointer class
    '[role="button"]', // Elements with button role
    ".nav-link", // Navigation links
    ".download-resume", // Resume download in contact
    ".linkedin", // LinkedIn link
    ".send-btn", // Send button and download CV button
    ".arrow-container", // Hero arrow
    'img[src*="menu"]', // Mobile menu
    'img[src*="close"]', // Mobile close
  ];

  // Clear all existing tiles
  const clearAllTiles = useCallback(() => {
    setGridTiles([]);
  }, []);

  // Clear inactivity timeout
  const clearInactivityTimeout = useCallback(() => {
    if (inactivityTimeoutRef.current) {
      clearTimeout(inactivityTimeoutRef.current);
      inactivityTimeoutRef.current = null;
    }
  }, []);

  // Start inactivity timeout
  const startInactivityTimeout = useCallback(() => {
    clearInactivityTimeout(); // Clear any existing timeout

    // Only start timeout if not hovering CTAs and tiles exist
    if (!isHovering && !isCollapsing && gridTiles.length > 0) {
      inactivityTimeoutRef.current = setTimeout(() => {
        clearAllTiles();
      }, 200); // 500ms of inactivity
    }
  }, [
    clearInactivityTimeout,
    isHovering,
    isCollapsing,
    gridTiles.length,
    clearAllTiles,
  ]);

  // Create diamond/pyramid-shaped grid tiles around cursor position
  const createGridTiles = useCallback(
    (centerX, centerY) => {
      // Don't create tiles when hovering over CTAs
      if (isHovering || isCollapsing) return;

      const tileSize = 35;
      const maxRadius = 2; // Smaller grid - only 2 levels out from center
      const newTiles = [];

      // Calculate center grid position
      const centerGridX = Math.floor(centerX / tileSize) * tileSize;
      const centerGridY = Math.floor(centerY / tileSize) * tileSize;

      // Create diamond pattern - for each row, calculate how many tiles
      for (let row = -maxRadius; row <= maxRadius; row++) {
        // Calculate width of this row (diamond shape)
        const rowWidth = maxRadius - Math.abs(row);

        // Create tiles for this row
        for (let col = -rowWidth; col <= rowWidth; col++) {
          const gridX = centerGridX + col * tileSize;
          const gridY = centerGridY + row * tileSize;

          // Skip if tile already exists at this position
          const tileExists = gridTiles.some(
            (tile) => tile.x === gridX && tile.y === gridY
          );
          if (tileExists) continue;

          const randomIcon =
            codingIcons[Math.floor(Math.random() * codingIcons.length)];
          const randomColor = [
            "rgba(186, 122, 255, 0.9)",
            "rgba(255, 122, 186, 0.9)",
            "rgba(122, 255, 186, 0.9)",
            "rgba(255, 186, 122, 0.9)",
            "rgba(122, 186, 255, 0.9)",
            "rgba(255, 255, 122, 0.9)",
          ][Math.floor(Math.random() * 6)];

          const newTile = {
            id: tileIdRef.current++,
            x: gridX,
            y: gridY,
            icon: randomIcon,
            color: randomColor,
            timestamp: Date.now(),
            delay: Math.abs(row) + Math.abs(col), // Stagger animation based on distance from center
          };

          newTiles.push(newTile);
        }
      }

      if (newTiles.length > 0) {
        setGridTiles((prevTiles) => {
          const updatedTiles = [...prevTiles, ...newTiles];
          return updatedTiles.slice(-40); // Keep only last 40 tiles
        });

        // Remove tiles after 1.5 seconds
        setTimeout(() => {
          setGridTiles((prevTiles) =>
            prevTiles.filter(
              (tile) => !newTiles.some((newTile) => newTile.id === tile.id)
            )
          );
        }, 1500);
      }
    },
    [gridTiles, codingIcons, isHovering, isCollapsing]
  );

  // Move useCallback hooks to top level
  const updateMousePosition = useCallback(
    (e) => {
      const newX = e.clientX;
      const newY = e.clientY;

      setMousePosition({ x: newX, y: newY });

      if (!isVisible) setIsVisible(true);

      // Clear any existing inactivity timeout since cursor is moving
      clearInactivityTimeout();

      // Only create grid tiles if not hovering CTAs
      if (!isHovering && !isCollapsing) {
        const distance = Math.sqrt(
          Math.pow(newX - lastPositionRef.current.x, 2) +
            Math.pow(newY - lastPositionRef.current.y, 2)
        );

        if (distance > 60) {
          // Create grid every 60px of movement
          createGridTiles(newX, newY);
          lastPositionRef.current = { x: newX, y: newY };
        }

        // Start new inactivity timeout
        startInactivityTimeout();
      }
    },
    [
      isVisible,
      createGridTiles,
      isHovering,
      isCollapsing,
      clearInactivityTimeout,
      startInactivityTimeout,
    ]
  );

  const handleMouseLeave = useCallback(() => {
    setIsVisible(false);
    setIsHovering(false);
    setIsCollapsing(false);
    clearAllTiles(); // Clear tiles when leaving the page
    clearInactivityTimeout(); // Clear timeout when leaving
  }, [clearAllTiles, clearInactivityTimeout]);

  const handleMouseEnter = useCallback(() => {
    setIsVisible(true);
  }, []);

  const handleMouseOver = useCallback(
    (e) => {
      const target = e.target;
      const isCTA = ctaSelectors.some((selector) => {
        try {
          return target.matches(selector) || target.closest(selector);
        } catch {
          return false;
        }
      });

      if (isCTA && !isHovering) {
        // Entering CTA area
        setIsCollapsing(true);
        clearAllTiles(); // Immediately clear all existing tiles
        clearInactivityTimeout(); // Clear timeout when entering CTA

        setTimeout(() => {
          setIsHovering(true);
          setIsCollapsing(false);
        }, 150); // Faster transition
      } else if (!isCTA && isHovering) {
        // Leaving CTA area
        setIsHovering(false);
        setIsCollapsing(false);
      }
    },
    [ctaSelectors, isHovering, clearAllTiles, clearInactivityTimeout]
  );

  const handleMouseOut = useCallback(() => {
    // This handles the case when moving from CTA to non-CTA areas
    setTimeout(() => {
      // Check if we're still over a CTA after a small delay
      const elementUnderCursor = document.elementFromPoint(
        mousePosition.x,
        mousePosition.y
      );
      if (elementUnderCursor) {
        const stillOverCTA = ctaSelectors.some((selector) => {
          try {
            return (
              elementUnderCursor.matches(selector) ||
              elementUnderCursor.closest(selector)
            );
          } catch {
            return false;
          }
        });

        if (!stillOverCTA && isHovering) {
          setIsHovering(false);
          setIsCollapsing(false);
        }
      }
    }, 10);
  }, [isHovering, mousePosition.x, mousePosition.y, ctaSelectors]);

  // Effect to handle inactivity timeout when tiles change
  useEffect(() => {
    if (!isHovering && !isCollapsing && gridTiles.length > 0) {
      startInactivityTimeout();
    }

    // Cleanup timeout on unmount
    return () => {
      clearInactivityTimeout();
    };
  }, [
    gridTiles.length,
    isHovering,
    isCollapsing,
    startInactivityTimeout,
    clearInactivityTimeout,
  ]);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      const isMobileDevice =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ) || window.matchMedia("(hover: none) and (pointer: coarse)").matches;
      setIsMobile(isMobileDevice);
      return isMobileDevice;
    };

    if (checkMobile()) {
      return; // Don't initialize cursor on mobile
    }

    // Add event listeners
    document.addEventListener("mousemove", updateMousePosition);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      clearInactivityTimeout(); // Cleanup on unmount
    };
  }, [
    updateMousePosition,
    handleMouseLeave,
    handleMouseEnter,
    handleMouseOver,
    handleMouseOut,
    clearInactivityTimeout,
  ]);

  // Don't render cursor on mobile devices
  if (isMobile || !isVisible) return null;

  return (
    <>
      {/* Grid Tiles with Coding Icons - only show when not hovering CTAs */}
      <AnimatePresence>
        {!isHovering &&
          !isCollapsing &&
          gridTiles.map((tile) => (
            <motion.div
              key={tile.id}
              className="grid-tile coding-tile"
              initial={{
                scale: 0,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 0.5,
              }}
              exit={{
                scale: 0,
                opacity: 0,
              }}
              transition={{
                duration: 0.2,
                delay: tile.delay * 0.03,
                ease: "easeOut",
                scale: { type: "spring", stiffness: 500, damping: 30 },
              }}
              style={{
                position: "fixed",
                left: tile.x,
                top: tile.y,
                width: "35px",
                height: "35px",
                backgroundColor: "rgba(0, 0, 0, 0.85)",
                border: `1.5px solid ${tile.color}`,
                borderRadius: "4px",
                pointerEvents: "none",
                zIndex: -10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "16px",
                fontWeight: "bold",
                color: tile.color,
                fontFamily: "'Fira Code', 'Courier New', monospace",
                textShadow: `0 0 10px ${tile.color}`,
                boxShadow: `
                0 0 15px ${tile.color.replace("0.9", "0.4")},
                inset 0 0 8px rgba(255, 255, 255, 0.1)
              `,
              }}
            >
              {tile.icon}
            </motion.div>
          ))}
      </AnimatePresence>

      {/* Main cursor dot - only show when not hovering CTAs and not collapsing */}
      <AnimatePresence>
        {!isHovering && !isCollapsing && (
          <motion.div
            className="cursor-center"
            animate={{
              x: mousePosition.x - 6,
              y: mousePosition.y - 6,
              scale: 1,
              opacity: 1,
            }}
            exit={{
              scale: 0,
              opacity: 0,
              transition: { duration: 0.15, ease: "easeInOut" },
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 25,
              mass: 0.3,
            }}
            initial={{
              scale: 0,
              opacity: 0,
            }}
            style={{
              position: "fixed",
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              background: "rgba(255, 255, 255, 0.9)",
              pointerEvents: "none",
              zIndex: 9999,
              boxShadow: `
                0 0 15px rgba(255, 255, 255, 0.6),
                0 0 25px rgba(186, 122, 255, 0.4)
              `,
            }}
          />
        )}
      </AnimatePresence>

      {/* Pointer indicator when hovering CTAs */}
      <AnimatePresence>
        {isHovering && (
          <motion.div
            className="custom-cursor-pointer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              x: mousePosition.x - 10,
              y: mousePosition.y - 10,
              scale: 1,
              opacity: 1,
            }}
            exit={{
              scale: 0,
              opacity: 0,
              transition: { duration: 0.15, ease: "easeInOut" },
            }}
            transition={{
              type: "spring",
              stiffness: 600,
              damping: 25,
              mass: 0.2,
            }}
            style={{
              position: "fixed",
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(186, 122, 255, 0.9) 50%, rgba(255, 122, 186, 0.9) 100%)",
              pointerEvents: "none",
              zIndex: 10000,
              boxShadow: `
                0 0 30px rgba(186, 122, 255, 0.8),
                0 0 60px rgba(186, 122, 255, 0.5),
                0 0 90px rgba(255, 122, 186, 0.3),
                inset 0 0 10px rgba(255, 255, 255, 0.5)
              `,
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default CustomCursor;
