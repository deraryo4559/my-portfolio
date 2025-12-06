interface SectionDividerProps {
  variant?: 'wave' | 'curve' | 'diagonal'
  className?: string
}

const SectionDivider = ({ variant = 'wave', className = '' }: SectionDividerProps) => {
  const renderDivider = () => {
    switch (variant) {
      case 'wave':
        return (
          <svg
            className="w-full h-16"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
              fill="currentColor"
              className="text-gray-50"
            />
          </svg>
        )
      case 'curve':
        return (
          <svg
            className="w-full h-20"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,120 Q300,0 600,60 T1200,60 L1200,120 Z"
              fill="currentColor"
              className="text-gray-50"
            />
          </svg>
        )
      case 'diagonal':
        return (
          <div className="w-full h-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gray-50 transform -skew-y-1 origin-top-left"></div>
          </div>
        )
      default:
        return null
    }
  }

  return <div className={className}>{renderDivider()}</div>
}

export default SectionDivider

