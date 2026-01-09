/**
 * Generate a simple blur placeholder data URL for images
 * @param color - Hex color for the blur placeholder (default: #626262)
 * @returns Base64 encoded blur placeholder data URL
 */
export function getBlurDataURL(color: string = '#626262'): string {
  // Remove # if present
  const hexColor = color.replace('#', '')

  // Convert hex to RGB
  const r = parseInt(hexColor.substring(0, 2), 16)
  const g = parseInt(hexColor.substring(2, 4), 16)
  const b = parseInt(hexColor.substring(4, 6), 16)

  // Create a 4x4 pixel SVG with the specified color
  const svg = `
    <svg width="4" height="4" xmlns="http://www.w3.org/2000/svg">
      <rect width="4" height="4" fill="rgb(${r},${g},${b})" />
    </svg>
  `

  // Convert to base64
  const base64 = Buffer.from(svg).toString('base64')
  return `data:image/svg+xml;base64,${base64}`
}

/**
 * Get blur placeholder for light backgrounds
 */
export function getLightBlurDataURL(): string {
  return getBlurDataURL('#EAEEF1')
}

/**
 * Get blur placeholder for dark backgrounds
 */
export function getDarkBlurDataURL(): string {
  return getBlurDataURL('#626262')
}

/**
 * Image size configurations for common use cases
 */
export const imageSizes = {
  portrait: { width: 400, height: 500 },
  landscape: { width: 800, height: 600 },
  hero: { width: 1440, height: 810 },
  thumbnail: { width: 600, height: 400 },
  icon: { width: 48, height: 48 },
} as const

/**
 * Responsive image sizes for srcSet
 */
export const responsiveSizes = {
  mobile: '(max-width: 640px) 100vw',
  tablet: '(max-width: 1024px) 50vw',
  desktop: '33vw',
} as const
