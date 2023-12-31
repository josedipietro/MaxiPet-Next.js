import { IconsProps } from './types';

export const UserIcon = ({ size = 18, color = '#333333' }: IconsProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.0917 13.4133C10.505 13.5867 9.8117 13.6667 8.99836 13.6667H4.99836C4.18503 13.6667 3.4917 13.5867 2.90503 13.4133C3.0517 11.68 4.8317 10.3133 6.99836 10.3133C9.16503 10.3133 10.945 11.68 11.0917 13.4133Z"
        stroke={color}
        strokeWidth="0.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.99821 0.333344H4.99821C1.66488 0.333344 0.331543 1.66668 0.331543 5.00001V9.00001C0.331543 11.52 1.09154 12.9 2.90488 13.4133C3.05154 11.68 4.83154 10.3133 6.99821 10.3133C9.16488 10.3133 10.9449 11.68 11.0915 13.4133C12.9049 12.9 13.6649 11.52 13.6649 9.00001V5.00001C13.6649 1.66668 12.3315 0.333344 8.99821 0.333344ZM6.99821 8.44667C5.67821 8.44667 4.61154 7.37335 4.61154 6.05335C4.61154 4.73335 5.67821 3.66668 6.99821 3.66668C8.31821 3.66668 9.38488 4.73335 9.38488 6.05335C9.38488 7.37335 8.31821 8.44667 6.99821 8.44667Z"
        stroke={color}
        strokeWidth="0.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
