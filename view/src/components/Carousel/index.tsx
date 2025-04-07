import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

interface CarouselProps {
	children: React.ReactNode;
	className?: string;
}

export function Carousel({ children, className = "" }: CarouselProps) {
	const [emblaRef, emblaApi] = useEmblaCarousel({
		align: "start",
		containScroll: "trimSnaps",
		dragFree: true,
	});

	const [canScrollPrev, setCanScrollPrev] = useState(false);
	const [canScrollNext, setCanScrollNext] = useState(false);

	const onSelect = useCallback(() => {
		if (!emblaApi) return;
		setCanScrollPrev(emblaApi.canScrollPrev());
		setCanScrollNext(emblaApi.canScrollNext());
	}, [emblaApi]);

	useEffect(() => {
		if (!emblaApi) return;
		onSelect();
		emblaApi.on("select", onSelect);
		emblaApi.on("reInit", onSelect);
	}, [emblaApi, onSelect]);

	const scrollPrev = useCallback(() => {
		if (emblaApi) emblaApi.scrollPrev();
	}, [emblaApi]);

	const scrollNext = useCallback(() => {
		if (emblaApi) emblaApi.scrollNext();
	}, [emblaApi]);

	return (
		<div className={`relative ${className}`}>
			<div className="overflow-hidden" ref={emblaRef}>
				<div className="flex gap-6">
					{Array.isArray(children) ? (
						children.map((child, index) => (
							<div
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								key={index}
								className="min-w-[210px] md:min-w-[304px] flex-shrink-0"
							>
								{child}
							</div>
						))
					) : (
						<div className="min-w-[210px] md:min-w-[304px] flex-shrink-0">
							{children}
						</div>
					)}
				</div>
			</div>

			{/* Botões de navegação - visíveis apenas em telas maiores que mobile e quando necessário */}
			<div className="hidden md:block">
				{canScrollPrev && (
					<button
						type="button"
						onClick={scrollPrev}
						className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-dark-600 p-2 rounded-full text-light-100 hover:bg-dark-500 transition-colors"
					>
						<IoChevronBack size={24} />
					</button>
				)}
				{canScrollNext && (
					<button
						type="button"
						onClick={scrollNext}
						className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-dark-600 p-2 rounded-full text-light-100 hover:bg-dark-500 transition-colors"
					>
						<IoChevronForward size={24} />
					</button>
				)}
			</div>
		</div>
	);
}
