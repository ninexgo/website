interface BrandIconProps {
  className?: string;
}

export default function BrandIcon({ className = "h-5 w-auto" }: BrandIconProps) {
  return (
    <svg viewBox="0 0 192 128" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M136.575 110.414L157.634 82.5656L192 128H151.871C150.618 128 149.437 127.413 148.681 126.414L136.575 110.414Z" className="fill-brand-500"/>
      <path d="M42 31.6572C42 32.9546 40.7838 33.9087 39.5237 33.5997L6 25.3793V4C6 1.79086 7.79086 0 10 0H42V31.6572Z" className="fill-brand-500"/>
      <path d="M192 0L157.634 45.4343L136.575 17.6433L148.681 1.5914C149.437 0.589237 150.619 0 151.875 0H192Z" className="fill-brand-dark dark:fill-white/80"/>
      <path d="M89.4948 128C93.1286 128 96.5514 126.299 98.7376 123.406L143.633 63.9998H101.514L53.147 128H89.4948Z" className="fill-brand-dark dark:fill-white/80"/>
      <path d="M89.4948 0C93.1286 0 96.5514 1.70126 98.7376 4.59405L143.633 64.0002H101.514L53.147 0H89.4948Z" className="fill-black dark:fill-white"/>
      <path d="M42 124C42 126.209 40.2091 128 38 128H6V37.5172L40.639 49.1963C41.4523 49.4705 42 50.2331 42 51.0915V124Z" className="fill-black dark:fill-white"/>
    </svg>
  );
}
