import type { IconFunction } from 'reicon/createIcon';
import Bell from 'reicon/icons/Bell';
import Calendar from 'reicon/icons/Calendar';
import CheckSquare from 'reicon/icons/CheckSquare';
import ClapperboardPlay from 'reicon/icons/ClapperboardPlay';
import Code from 'reicon/icons/Code';
import Database from 'reicon/icons/Database';
import EyeClosed from 'reicon/icons/EyeClosed';
import Gallery from 'reicon/icons/Gallery';
import Globe from 'reicon/icons/Globe';
import Grid from 'reicon/icons/Grid';
import Import from 'reicon/icons/Import';
import Key from 'reicon/icons/Key';
import Link from 'reicon/icons/Link';
import ListArrowDown from 'reicon/icons/ListArrowDown';
import MagicStar from 'reicon/icons/MagicStar';
import Microphone from 'reicon/icons/Microphone';
import Mobile from 'reicon/icons/Mobile';
import Notes from 'reicon/icons/Notes';
import Palette from 'reicon/icons/Palette';
import Refresh from 'reicon/icons/Refresh';
import RowVertical from 'reicon/icons/RowVertical';
import SearchZoomIn from 'reicon/icons/SearchZoomIn';
import Shapes from 'reicon/icons/Shapes';
import ShieldCheck from 'reicon/icons/ShieldCheck';
import Text from 'reicon/icons/Text';
import Users from 'reicon/icons/Users';
import Widget from 'reicon/icons/Widget';
import Wifi from 'reicon/icons/Wifi';

const reiconIcons = {
	blocks: Widget,
	calendar: Calendar,
	sync: Refresh,
	themes: Palette,
	people: Users,
	sparkle: MagicStar,
	text: Text,
	checkbox: CheckSquare,
	toggle: ListArrowDown,
	table: Grid,
	database: Database,
	canvas: Shapes,
	code: Code,
	image: Gallery,
	voice: Microphone,
	link: Link,
	key: Key,
	film: ClapperboardPlay,
	shield: ShieldCheck,
	phone: Mobile,
	eyeOff: EyeClosed,
	wifi: Wifi,
	globe: Globe,
	columns: RowVertical,
	scale: SearchZoomIn,
	import: Import,
	bell: Bell,
	notes: Notes
} satisfies Record<string, IconFunction>;

export type IconName = keyof typeof reiconIcons;

export type HighlightColorName = 'yellow' | 'lime' | 'red' | 'blue' | 'green' | 'orange' | 'pink' | 'purple';

export function outlineIconMarkup(icon: IconName): string {
	return reiconIcons[icon].iconData.O ?? '';
}
