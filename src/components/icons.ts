const tint = 'fill="currentColor" fill-opacity="0.22"';
const solid = 'fill="currentColor"';

export const iconMarkup = {
	blocks: `<rect x="4" y="4" width="16" height="6" rx="2" ${tint}/><rect x="4" y="14" width="16" height="6" rx="2"/>`,
	calendar: `<path d="M3.5 7.5A2.5 2.5 0 0 1 6 5h12a2.5 2.5 0 0 1 2.5 2.5V10h-17z" ${tint} stroke="none"/><rect x="3.5" y="5" width="17" height="15" rx="2.5"/><path d="M3.5 10h17M8 3v4M16 3v4"/><rect x="7" y="13" width="4" height="3.5" rx="1" ${solid} stroke="none"/>`,
	sync: `<path d="M18.5 10A7 7 0 0 0 6 6.5M5.5 3.5V7H9M5.5 14A7 7 0 0 0 18 17.5M18.5 20.5V17H15"/><circle cx="12" cy="12" r="2.5" ${tint}/>`,
	contrast: `<circle cx="12" cy="12" r="8.5"/><path d="M12 3.5a8.5 8.5 0 0 1 0 17z" ${solid}/>`,
	people: `<circle cx="9" cy="8.5" r="3.5" ${tint}/><path d="M3 19.5c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5"/><circle cx="17" cy="9.5" r="2.5"/><path d="M16.5 14.2c2.6.2 4.5 2.2 4.5 5"/>`,
	sparkle: `<path d="M12 4c.8 4.6 2.4 6.2 7 7-4.6.8-6.2 2.4-7 7-.8-4.6-2.4-6.2-7-7 4.6-.8 6.2-2.4 7-7z" ${tint}/><path d="M19 3v3M17.5 4.5h3"/>`,
	text: `<path d="M4 7V5h10v2M9 5v14M7 19h4M15 11h5M15 15h5M15 19h3"/>`,
	checkbox: `<rect x="4" y="4" width="16" height="16" rx="4" ${tint}/><path d="m8.5 12.5 2.5 2.5 5-5.5"/>`,
	toggle: `<path d="M5 6.5 9 9l-4 2.5z" ${solid}/><path d="M12 9h7.5M9 15h10.5M9 19h7"/>`,
	table: `<path d="M3.5 7A2.5 2.5 0 0 1 6 4.5h12A2.5 2.5 0 0 1 20.5 7v2.5h-17z" ${tint} stroke="none"/><rect x="3.5" y="4.5" width="17" height="15" rx="2.5"/><path d="M3.5 9.5h17M3.5 14.5h17M10 9.5v10"/>`,
	database: `<ellipse cx="12" cy="6" rx="7.5" ry="2.5" ${tint}/><path d="M4.5 6v12c0 1.4 3.4 2.5 7.5 2.5s7.5-1.1 7.5-2.5V6M4.5 12c0 1.4 3.4 2.5 7.5 2.5s7.5-1.1 7.5-2.5"/>`,
	canvas: `<rect x="3" y="4" width="7" height="6" rx="1.5" ${tint}/><rect x="14" y="14" width="7" height="6" rx="1.5"/><path d="M10 7h3a2 2 0 0 1 2 2v5M13 12l2 2 2-2"/>`,
	code: `<path d="m8.5 7-5 5 5 5M15.5 7l5 5-5 5M13.5 5l-3 14"/>`,
	image: `<path d="M3.5 18.5 9 13l3.5 3.5L15 14l5.5 5.5H3.5z" ${tint} stroke="none"/><rect x="3.5" y="4.5" width="17" height="15" rx="2.5"/><circle cx="9" cy="9.5" r="1.75" ${solid} stroke="none"/><path d="M4 18 9 13l3.5 3.5L15 14l5 5"/>`,
	document: `<path d="M6.5 3.5h7L18 8v11a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 5 19V5a1.5 1.5 0 0 1 1.5-1.5z"/><path d="M13.5 3.5V8H18z" ${tint}/><path d="M8.5 12.5h6M8.5 16h6"/>`,
	voice: `<rect x="9" y="3" width="6" height="11" rx="3" ${tint}/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21M9 21h6"/>`,
	link: `<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>`,
	key: `<circle cx="8" cy="15" r="4.5" ${tint}/><path d="m11.2 11.8 8.3-8.3M16.5 6.5 19 9M14 9l2 2"/>`,
	film: `<path d="M3.5 7.5A2.5 2.5 0 0 1 6 5h12a2.5 2.5 0 0 1 2.5 2.5v2h-17z" ${tint} stroke="none"/><rect x="3.5" y="5" width="17" height="14" rx="2.5"/><path d="M3.5 9.5h17M7.5 5l2 4.5M12.5 5l2 4.5M17.5 5l2 4.5"/><path d="M10.5 12.5v4l3.5-2z" ${solid}/>`,
	shield: `<path d="M12 3 5 5.5v6c0 4.4 3 7.9 7 9.5 4-1.6 7-5.1 7-9.5v-6z" ${tint}/><path d="m9 12 2.2 2.2L15.5 10"/>`,
	phone: `<rect x="8.5" y="5" width="7" height="10.5" rx="1" ${tint} stroke="none"/><rect x="6.5" y="2.5" width="11" height="19" rx="2.5"/><path d="M10.5 18.5h3"/>`,
	eyeOff: `<path d="M3 12s3.5-6 9-6 9 6 9 6-3.5 6-9 6-9-6-9-6z" ${tint}/><circle cx="12" cy="12" r="2.5"/><path d="M4 4l16 16"/>`,
	wifi: `<path d="M3.5 9.5a12 12 0 0 1 17 0M6.5 12.8a7.5 7.5 0 0 1 11 0M9.5 16a3.2 3.2 0 0 1 5 0"/><circle cx="12" cy="19" r="1.2" ${solid}/>`,
	terminal: `<rect x="3" y="4.5" width="18" height="15" rx="2.5" ${tint}/><path d="m7 10 3 2.5L7 15M12.5 15.5H17"/>`,
	monitor: `<rect x="3" y="4" width="18" height="12" rx="2" ${tint}/><path d="M8.5 20h7M12 16v4"/>`,
	globe: `<circle cx="12" cy="12" r="8.5"/><path d="M12 3.5c2.4 2.4 3.5 5.3 3.5 8.5s-1.1 6.1-3.5 8.5c-2.4-2.4-3.5-5.3-3.5-8.5s1.1-6.1 3.5-8.5z" ${tint}/><path d="M3.5 12h17"/>`,
	columns: `<rect x="9.2" y="4.5" width="5.6" height="15" ${tint} stroke="none"/><rect x="3.5" y="4.5" width="17" height="15" rx="2.5"/><path d="M9.2 4.5v15M14.8 4.5v15"/>`,
	scale: `<circle cx="10.5" cy="10.5" r="6.5" ${tint}/><path d="m15.5 15.5 5 5M10.5 8v5M8 10.5h5"/>`,
	download: `<path d="M12 3.5v10M8 9.5l4 4 4-4M4 14.5v3A2.5 2.5 0 0 0 6.5 20h11a2.5 2.5 0 0 0 2.5-2.5v-3"/>`,
	bell: `<path d="M6 16.5V11a6 6 0 0 1 12 0v5.5l1.5 2h-15z" ${tint}/><path d="M10 21h4"/>`
} as const;

export type IconName = keyof typeof iconMarkup;

export type HighlightColorName = 'yellow' | 'lime' | 'red' | 'blue' | 'green' | 'orange' | 'pink' | 'purple';
