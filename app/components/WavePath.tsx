'use client';

import { useRef, useEffect, useCallback } from 'react';

type WavePathProps = React.ComponentProps<'div'>;

const MID_Y = 50;

export function WavePath({ className, ...props }: WavePathProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	const pathRef = useRef<SVGPathElement>(null);
	const progress = useRef(0);
	const x = useRef(0.2);
	const time = useRef(Math.PI / 2);
	const reqId = useRef<number | null>(null);

	const getContainerWidth = useCallback(() => {
		return containerRef.current?.getBoundingClientRect().width ?? 400;
	}, []);

	const setPath = useCallback(
		(currentProgress: number) => {
			const width = getContainerWidth();
			if (pathRef.current) {
				pathRef.current.setAttributeNS(
					null,
					'd',
					`M0 ${MID_Y} Q${width * x.current} ${MID_Y + currentProgress * 0.5}, ${width} ${MID_Y}`,
				);
			}
		},
		[getContainerWidth],
	);

	const lerp = (a: number, b: number, t: number) => a * (1 - t) + b * t;

	const resetAnimation = useCallback(() => {
		time.current = Math.PI / 2;
		progress.current = 0;
	}, []);

	const animateOutRef = useRef<() => void>(() => {});

	useEffect(() => {
		animateOutRef.current = () => {
			const newProgress = progress.current * Math.sin(time.current);
			progress.current = lerp(progress.current, 0, 0.025);
			time.current += 0.2;
			setPath(newProgress);
			if (Math.abs(progress.current) > 0.75) {
				reqId.current = requestAnimationFrame(animateOutRef.current);
			} else {
				resetAnimation();
			}
		};
	}, [setPath, resetAnimation]);

	useEffect(() => {
		setPath(0);

		const handleResize = () => setPath(progress.current);
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
			if (reqId.current) cancelAnimationFrame(reqId.current);
		};
	}, [setPath]);

	const manageMouseEnter = useCallback(() => {
		if (reqId.current) {
			cancelAnimationFrame(reqId.current);
			resetAnimation();
		}
	}, [resetAnimation]);

	const manageMouseMove = useCallback(
		(e: React.MouseEvent) => {
			const { movementY, clientX } = e;
			if (pathRef.current) {
				const pathBound = pathRef.current.getBoundingClientRect();
				x.current = (clientX - pathBound.left) / pathBound.width;
				progress.current += movementY;
				setPath(progress.current);
			}
		},
		[setPath],
	);

	const manageMouseLeave = useCallback(() => {
		animateOutRef.current();
	}, []);

	return (
		<div ref={containerRef} className={`relative h-px w-full ${className ?? ''}`} {...props}>
			<div
				onMouseEnter={manageMouseEnter}
				onMouseMove={manageMouseMove}
				onMouseLeave={manageMouseLeave}
				className="relative -top-5 z-10 h-10 w-full hover:-top-[75px] hover:h-[150px]"
			/>
			<svg className="absolute -top-[50px] h-[100px] w-full">
				<path ref={pathRef} className="fill-none stroke-current" strokeWidth={1} />
			</svg>
		</div>
	);
}
