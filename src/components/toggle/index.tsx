"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {useEffect} from "react";

export function ModeToggle() {
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		if (theme === undefined) {
			setTheme("light");
		}
	}, [theme, setTheme]);

	const toggleTheme = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};

	return (
		<Button variant="outline" size="icon" onClick={toggleTheme}>
			<Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-transform dark:hidden" />
			<Moon className="h-[1.2rem] w-[1.2rem] hidden transition-transform dark:block" />
			<span className="sr-only">Toggle theme</span>
		</Button>
	);
}
