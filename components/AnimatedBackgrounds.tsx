'use client'

export function LeftPanelBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-15">
      {/* Animated organic shapes */}
      <svg
        className="absolute top-0 right-0 w-full h-full"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Floating circles with blur effect */}
        <circle
          cx="80"
          cy="100"
          r="50"
          fill="currentColor"
          className="text-white animate-float-slow"
          opacity="0.4"
        />
        <circle
          cx="320"
          cy="250"
          r="40"
          fill="currentColor"
          className="text-white animate-float-medium"
          opacity="0.3"
        />
        <circle
          cx="200"
          cy="350"
          r="35"
          fill="currentColor"
          className="text-white animate-float-fast"
          opacity="0.35"
        />
        <circle
          cx="350"
          cy="150"
          r="30"
          fill="currentColor"
          className="text-white animate-float-slow"
          opacity="0.25"
        />

        {/* Organic leaf-like shapes */}
        <path
          d="M150 80 Q180 60 200 80 T250 80"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          className="text-white"
          opacity="0.4"
        >
          <animate
            attributeName="opacity"
            values="0.2;0.5;0.2"
            dur="6s"
            repeatCount="indefinite"
          />
        </path>
        <path
          d="M100 200 Q130 180 150 200 T200 200"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          className="text-white"
          opacity="0.3"
        >
          <animate
            attributeName="opacity"
            values="0.1;0.4;0.1"
            dur="7s"
            repeatCount="indefinite"
          />
        </path>
        <path
          d="M250 300 Q280 280 300 300 T350 300"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          className="text-white"
          opacity="0.25"
        >
          <animate
            attributeName="opacity"
            values="0.15;0.35;0.15"
            dur="8s"
            repeatCount="indefinite"
          />
        </path>

        {/* Subtle wave patterns */}
        <path
          d="M0 150 Q100 130 200 150 T400 150"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          className="text-white"
          opacity="0.2"
        >
          <animate
            attributeName="d"
            values="M0 150 Q100 130 200 150 T400 150;M0 155 Q100 135 200 155 T400 155;M0 150 Q100 130 200 150 T400 150"
            dur="10s"
            repeatCount="indefinite"
          />
        </path>
      </svg>

      {/* Gradient mesh overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/20"></div>
    </div>
  )
}

export function RightPanelBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-8">
      {/* Animated geometric patterns */}
      <svg
        className="absolute top-0 left-0 w-full h-full"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Flowing lines with varying opacity */}
        <path
          d="M0 100 Q100 50 200 100 T400 100"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          className="text-primary animate-flow-right"
          opacity="0.3"
        />
        <path
          d="M0 200 Q100 150 200 200 T400 200"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          className="text-primary animate-flow-left"
          opacity="0.25"
        />
        <path
          d="M0 300 Q100 250 200 300 T400 300"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          className="text-primary animate-flow-right"
          opacity="0.2"
        />

        {/* Floating geometric shapes */}
        <polygon
          points="50,150 80,120 110,150 80,180"
          fill="currentColor"
          className="text-primary animate-rotate-slow"
          opacity="0.15"
        />
        <polygon
          points="300,100 330,70 360,100 330,130"
          fill="currentColor"
          className="text-primary animate-rotate-medium"
          opacity="0.12"
        />
        <circle
          cx="350"
          cy="250"
          r="25"
          fill="currentColor"
          className="text-primary animate-scale-slow"
          opacity="0.1"
        />
        <circle
          cx="100"
          cy="300"
          r="20"
          fill="currentColor"
          className="text-primary animate-float-slow"
          opacity="0.15"
        />

        {/* Subtle dots pattern */}
        <circle cx="150" cy="80" r="2" fill="currentColor" className="text-primary" opacity="0.2">
          <animate
            attributeName="opacity"
            values="0.1;0.3;0.1"
            dur="4s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="250" cy="180" r="2" fill="currentColor" className="text-primary" opacity="0.2">
          <animate
            attributeName="opacity"
            values="0.1;0.3;0.1"
            dur="5s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="180" cy="320" r="2" fill="currentColor" className="text-primary" opacity="0.2">
          <animate
            attributeName="opacity"
            values="0.1;0.3;0.1"
            dur="6s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Subtle grid pattern */}
        <defs>
          <pattern
            id="grid"
            width="50"
            height="50"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 50 0 L 0 0 0 50"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.3"
              className="text-primary"
              opacity="0.08"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Additional gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/3 to-transparent"></div>
    </div>
  )
}

