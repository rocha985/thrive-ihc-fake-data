import { IconProps } from '@/types/components/icons'

export const FillHeart: React.FC<IconProps> = props => {
  return (
    <svg
      fill="none"
      height="20"
      viewBox="0 0 23 20"
      width="23"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20.4574 1.84538C19.2893 0.686577 17.7317 0.0106074 15.9795 0.0106074C14.2273 0.0106074 12.4751 0.783144 11.307 2.03852C10.4308 1.07285 9.2627 0.396876 7.89987 0.107174C6.245 -0.182527 4.59014 0.107175 3.12996 1.07285C1.37775 2.23165 0.404297 4.16299 0.404297 6.1909C0.404297 14.9785 11.0149 19.8069 11.2096 19.9034L11.4043 20L11.599 19.9034C11.6963 19.9034 22.4043 14.9785 22.4043 6.1909C22.307 4.54926 21.6255 3.00419 20.4574 1.84538Z"
        fill="#3b82f6"
      />
    </svg>
  )
}
