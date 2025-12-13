interface StarRatingProps {
  rating: number
  maxRating?: number
  showNumber?: boolean
  size?: "sm" | "md" | "lg"
}

export function StarRating({ rating, maxRating = 5, showNumber = true, size = "sm" }: StarRatingProps) {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
  }

  const StarIcon = ({ filled = false, className = "" }: { filled?: boolean; className?: string }) => (
    <svg
      className={className}
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
      />
    </svg>
  )

  return (
    <div className="flex items-center space-x-1">
      <div className="flex">
        {[...Array(maxRating)].map((_, index) => {
          const isFilled = index < Math.floor(rating)
          const isHalfFilled = index === Math.floor(rating) && rating % 1 !== 0

          return (
            <div key={index} className="relative">
              <StarIcon className={`${sizeClasses[size]} text-gray-300`} />
              {isFilled && <StarIcon filled className={`${sizeClasses[size]} text-yellow-400 absolute top-0 left-0`} />}
              {isHalfFilled && (
                <div className="absolute top-0 left-0 overflow-hidden" style={{ width: "50%" }}>
                  <StarIcon filled className={`${sizeClasses[size]} text-yellow-400`} />
                </div>
              )}
            </div>
          )
        })}
      </div>
      {showNumber && (
        <span className="text-sm text-gray-600 ml-2">
          {rating.toFixed(1)} ({Math.floor(Math.random() * 200) + 50} reviews)
        </span>
      )}
    </div>
  )
}
