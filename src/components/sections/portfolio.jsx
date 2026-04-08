import { cn } from "@/lib/utils";
import { ZapIcon, CpuIcon, FingerprintIcon, PencilIcon, Settings2Icon, SparklesIcon } from "lucide-react";
import { Badge } from "../ui/badge";

export default function Portfolio() {
	return (
		<div className="mx-auto w-full container space-y-8 min-h-screen flex items-center">
			<div className="mx-auto max-w-3xl text-left space-y-4">
        <Badge>Portfolio</Badge>
				<h2 className="text-balance font-medium text-2xl md:text-4xl lg:text-5xl">
					The <span className="bg-linear-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">Crescent</span><br/> Collection.
				</h2>
				<p className="text-balance text-muted-foreground text-sm md:text-base">
					Our work spans across various industries and domains, showcasing our versatility and expertise.
				</p>
			</div>

			<div className="overflow-hidden rounded-lg border">
				<div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2 md:grid-cols-3">
					{features.map((feature) => (
						<FeatureCard feature={feature} key={feature.title} />
					))}
				</div>
			</div>
		</div>
	);
}

export function FeatureCard({ feature, className, ...props }) {
	return (
		<div
			className={cn("relative overflow-hidden bg-background p-6", className)}
			{...props}
		>
			<div className="pointer-events-none absolute inset-0 size-full">
				<svg className="absolute inset-0 size-full stroke-amber-500/2" xmlns="http://www.w3.org/2000/svg">
					<defs>
						<pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse" x="20">
							<path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.3"/>
						</pattern>
					</defs>
					<rect width="100%" height="100%" fill="url(#grid)" />
				</svg>
			</div>
      <div className="size-full absolute top-0 left-0 bg-linear-to-r from-background via-background/90 to-transparent" />
      <div className="w-full h-[50%] absolute bottom-0 left-0 bg-linear-to-t from-background via-background/90 to-background/10" />
			<div className="[&_svg]:size-6 [&_svg]:text-foreground/75 relative z-10">
				{feature.icon}
			</div>
			<h3 className="mt-10 text-sm md:text-base relative z-10">{feature.title}</h3>
			<p className="mt-2 font-light text-muted-foreground text-xs relative z-10">
				{feature.description}
			</p>
		</div>
	);
}

const features = [
	{
		title: "Faaast",
		icon: <ZapIcon />,
		description: "It supports an entire helping developers and innovate.",
	},
	{
		title: "Powerful",
		icon: <CpuIcon />,
		description: "It supports an entire helping developers and businesses.",
	},
	{
		title: "Security",
		icon: <FingerprintIcon />,
		description: "It supports an helping developers businesses.",
	},
	{
		title: "Customization",
		icon: <PencilIcon />,
		description: "It supports helping developers and businesses innovate.",
	},
	{
		title: "Control",
		icon: <Settings2Icon />,
		description: "It supports helping developers and businesses innovate.",
	},
	{
		title: "Built for AI",
		icon: <SparklesIcon />,
		description: "It supports helping developers and businesses innovate.",
	},
];