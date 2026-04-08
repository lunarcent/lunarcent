"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function LogoCloud() {
	const logos = [
		{ src: "https://cdn.worldvectorlogo.com/logos/nextjs-13.svg", alt: "Next.js Logo" },
		{ src: "https://cdn.worldvectorlogo.com/logos/react-2.svg", alt: "React Logo" },
		{ src: "https://cdn.worldvectorlogo.com/logos/vue-9.svg", alt: "Vue.js Logo" },
		{ src: "https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg", alt: "Angular Logo" },
		{ src: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg", alt: "JavaScript Logo" },
		{ src: "https://cdn.worldvectorlogo.com/logos/typescript.svg", alt: "TypeScript Logo" },
		{ src: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg", alt: "Node.js Logo" },
		{ src: "https://cdn.worldvectorlogo.com/logos/python-5.svg", alt: "Python Logo" },
		{ src: "https://cdn.worldvectorlogo.com/logos/java-4.svg", alt: "Java Logo" },
		{ src: "https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_Blue.png", alt: "Go Logo" },
		{ src: "https://cdn.worldvectorlogo.com/logos/rust.svg", alt: "Rust Logo" },
		{ src: "https://cdn.worldvectorlogo.com/logos/kotlin-2.svg", alt: "Kotlin Logo" },
		{ src: "https://cdn.worldvectorlogo.com/logos/swift-15.svg", alt: "Swift Logo" },
		{ src: "https://cdn.worldvectorlogo.com/logos/flutter.svg", alt: "Flutter Logo" },
		{ src: "https://cdn.worldvectorlogo.com/logos/react-native-1.svg", alt: "React Native Logo" },
		{ src: "https://cdn.worldvectorlogo.com/logos/tailwind-css-wordmark.svg", alt: "Tailwind CSS Logo" },
		{ src: "https://cdn.worldvectorlogo.com/logos/sass-1.svg", alt: "Sass Logo" },
		{ src: "https://cdn.worldvectorlogo.com/logos/bootstrap-4.svg", alt: "Bootstrap Logo" },
		{ src: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg", alt: "MongoDB Logo" },
		{ src: "https://cdn.worldvectorlogo.com/logos/postgresql.svg", alt: "PostgreSQL Logo" },
		{ src: "https://cdn.worldvectorlogo.com/logos/mysql-logo-pure.svg", alt: "MySQL Logo" },
		{ src: "https://cdn.worldvectorlogo.com/logos/redis.svg", alt: "Redis Logo" },
		{ src: "https://cdn.worldvectorlogo.com/logos/firebase-1.svg", alt: "Firebase Logo" },
		{ src: "https://cdn.brandfetch.io/idsSceG8fK/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1668081495951", alt: "Supabase Logo" },
		{ src: "https://cdn.worldvectorlogo.com/logos/docker.svg", alt: "Docker Logo" },
		{ src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/960px-Kubernetes_logo_without_workmark.svg.png?_=20190926210707", alt: "Kubernetes Logo" },
		{ src: "https://cdn.worldvectorlogo.com/logos/aws-2.svg", alt: "AWS Logo" },
		{ src: "https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg", alt: "Google Cloud Logo" },
		{ src: "https://cdn.worldvectorlogo.com/logos/azure-2.svg", alt: "Azure Logo" },
		{ src: "https://cdn.worldvectorlogo.com/logos/vercel.svg", alt: "Vercel Logo" },
		{ src: "https://cdn.worldvectorlogo.com/logos/netlify.svg", alt: "Netlify Logo" },
		{ src: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg", alt: "GitHub Logo" },
		{ src: "https://cdn.worldvectorlogo.com/logos/gitlab.svg", alt: "GitLab Logo" },
		{ src: "https://graphql.org/_next/static/media/dont-change-typeface.9dffe8d7.svg", alt: "GraphQL Logo" },
		{ src: "https://cdn.worldvectorlogo.com/logos/webpack.svg", alt: "Webpack Logo" },
		{ src: "https://cdn.worldvectorlogo.com/logos/vitejs.svg", alt: "Vite Logo" },
		{ src: "https://cdn.worldvectorlogo.com/logos/babel-10.svg", alt: "Babel Logo" },
		{ src: "https://cdn.worldvectorlogo.com/logos/eslint.svg", alt: "ESLint Logo" },
		{ src: "https://cdn.worldvectorlogo.com/logos/prettier-2.svg", alt: "Prettier Logo" },
		{ src: "https://cdn.brandfetch.io/idZHcZ_i7F/theme/dark/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1729268241679", alt: "Figma Logo" },
		{ src: "https://cdn.worldvectorlogo.com/logos/adobe-xd-1.svg", alt: "Adobe XD Logo" },
		{ src: "https://cdn.worldvectorlogo.com/logos/sketch-2.svg", alt: "Sketch Logo" },
		{ src: "https://cdn.worldvectorlogo.com/logos/elasticsearch.svg", alt: "Elasticsearch Logo" },
	];

	const midPoint = Math.ceil(logos.length / 2);
	const firstRowLogos = logos.slice(0, midPoint);
	const secondRowLogos = logos.slice(midPoint);

	return (
		<div className="relative w-full py-8 overflow-x-hidden">
			<div className="relative transform -rotate-2">
				<div className="absolute left-0 top-0 z-10 h-full w-20 bg-linear-to-r from-background via-background/50 to-transparent" />
				<div className="absolute right-0 top-0 z-10 h-full w-20 bg-linear-to-l from-background via-background/50 to-transparent" />
				<motion.div
					className="flex"
					animate={{
						x: [0, -1920],
					}}
					transition={{
						x: {
							repeat: Infinity,
							repeatType: "loop",
							duration: 25,
							ease: "linear",
						},
					}}
				>
					{[...firstRowLogos, ...firstRowLogos].map((logo, index) => (
						<LogoCard
							key={`row1-${logo.alt}-${index}`}
							className="relative shrink-0"
							logo={logo}
						/>
					))}
				</motion.div>
			</div>
			<div className="relative transform -rotate-2">
				<div className="absolute left-0 top-0 z-10 h-full w-20 bg-linear-to-r from-background via-background/50 to-transparent" />
				<div className="absolute right-0 top-0 z-10 h-full w-20 bg-linear-to-l from-background via-background/50 to-transparent" />

				<motion.div
					className="flex"
					animate={{
						x: [-1920, 0],
					}}
					transition={{
						x: {
							repeat: Infinity,
							repeatType: "loop",
							duration: 25,
							ease: "linear",
						},
					}}
				>
					{[...secondRowLogos, ...secondRowLogos].map((logo, index) => (
						<LogoCard
							key={`row2-${logo.alt}-${index}`}
							className="relative shrink-0"
							logo={logo}
						>
						</LogoCard>
					))}
				</motion.div>
			</div>
		</div>
	);
}

function LogoCard({ logo, className, children, ...props }) {
	return (
		<div
			className={cn(
				"flex items-center justify-center bg-background px-6 py-4 md:px-8 md:py-6 cursor-pointer",
				className
			)}
			{...props}
		>
			<img
				alt={logo.alt}
				className="pointer-events-none h-6 select-none md:h-8 w-auto dark:grayscale dark:invert"
				src={logo.src}
			/>
			{children}
		</div>
	);
}