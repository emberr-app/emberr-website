import { useEffect, useState, type ReactNode } from 'react';
import styles from './DownloadCards.module.css';
import type { IconFunction } from 'reicon/createIcon';
import Mobile from 'reicon/icons/Mobile';
import Monitor from 'reicon/icons/Monitor';
import TerminalSquare from 'reicon/icons/TerminalSquare';
import type { HighlightColorName } from './icons';

type Platform = 'android' | 'linux' | 'windows';

const defaultPlatformOrder: Platform[] = ['android', 'linux', 'windows'];
const latestReleaseDownloadUrl = 'https://github.com/emberr-app/Emberr/releases/latest/download';
const cardButtonClass = `button-link button-link-regular button-link-outline ${styles.cardButton}`;

function detectVisitorPlatform(): Platform | null {
	const userAgent = navigator.userAgent;
	if (/Android/i.test(userAgent)) return 'android';
	if (/Windows/i.test(userAgent)) return 'windows';
	if (/Linux/i.test(userAgent) && !/CrOS/i.test(userAgent)) return 'linux';
	return null;
}

function PlatformIcon({ icon, color }: { icon: IconFunction; color: HighlightColorName }) {
	return (
		<span className={`icon-tile icon-tile-small icon-tile-${color}`} aria-hidden="true">
			<svg viewBox="0 0 24 24" fill="none" dangerouslySetInnerHTML={{ __html: icon.iconData.O ?? '' }} />
		</span>
	);
}

function AndroidDownload() {
	return (
		<>
			<a className={cardButtonClass} href={`${latestReleaseDownloadUrl}/Emberr-android.apk`}>
				Download APK
			</a>
			<p className={styles.note}>Android may ask you to allow installing apps from your browser.</p>
			<div className={styles.option}>
				<h4 className={styles.optionTitle}>Google Play (closed testing)</h4>
				<p className={styles.note}>
					Help Emberr reach Google Play. Join the{' '}
					<a href="https://groups.google.com/g/emberr-testers">Emberr testers group</a>, then install
					Emberr: Private Workspace from Google Play using the link in the group.
				</p>
			</div>
			<div className={styles.option}>
				<h4 className={styles.optionTitle}>Obtainium</h4>
				<p className={styles.note}>
					Get updates automatically.{' '}
					<a href="https://apps.obtainium.imranr.dev/redirect?r=obtainium://add/https://github.com/emberr-app/Emberr">
						Add Emberr to Obtainium
					</a>
					, or paste the GitHub link into Add App.
				</p>
			</div>
		</>
	);
}

function LinuxDownload() {
	return (
		<>
			<a className={cardButtonClass} href={`${latestReleaseDownloadUrl}/emberr-x86_64.tar.gz`}>
				Download tarball
			</a>
			<p className={styles.note}>Recommended. Adds Emberr to your app menu, for your user only, with no root needed.</p>
			<pre className={styles.commands}>
				<code>{'cd ~/Downloads\ntar -xzf emberr-x86_64.tar.gz\n./emberr-*-x86_64/install.sh'}</code>
			</pre>
			<div className={styles.option}>
				<h4 className={styles.optionTitle}>AppImage</h4>
				<p className={styles.note}>One file, nothing to install.</p>
				<a className={cardButtonClass} href={`${latestReleaseDownloadUrl}/Emberr-x86_64.AppImage`}>
					Download AppImage
				</a>
				<pre className={styles.commands}>
					<code>{'cd ~/Downloads\nchmod +x Emberr-x86_64.AppImage\n./Emberr-x86_64.AppImage'}</code>
				</pre>
			</div>
		</>
	);
}

function WindowsDownload() {
	return (
		<>
			<a className={cardButtonClass} href={`${latestReleaseDownloadUrl}/Emberr-Setup-x86_64.exe`}>
				Download installer
			</a>
			<p className={styles.note}>
				The installer isn't code-signed yet, so Windows may show "Windows protected your PC". Click{' '}
				<strong>More info</strong>, then <strong>Run anyway</strong>.
			</p>
		</>
	);
}

const platformCards: Record<
	Platform,
	{ name: string; icon: IconFunction; color: HighlightColorName; content: ReactNode }
> = {
	android: { name: 'Android', icon: Mobile, color: 'green', content: <AndroidDownload /> },
	linux: { name: 'Linux', icon: TerminalSquare, color: 'orange', content: <LinuxDownload /> },
	windows: { name: 'Windows', icon: Monitor, color: 'blue', content: <WindowsDownload /> }
};

export default function DownloadCards() {
	const [visitorPlatform, setVisitorPlatform] = useState<Platform | null>(null);

	useEffect(() => {
		setVisitorPlatform(detectVisitorPlatform());
	}, []);

	const platformOrder = visitorPlatform
		? [visitorPlatform, ...defaultPlatformOrder.filter((platform) => platform !== visitorPlatform)]
		: defaultPlatformOrder;

	return (
		<ul className={styles.grid}>
			{platformOrder.map((platform) => (
				<li key={platform} className={styles.card}>
					<div className={styles.cardHeader}>
						<div className={styles.cardName}>
							<PlatformIcon icon={platformCards[platform].icon} color={platformCards[platform].color} />
							<h3 className={styles.cardTitle}>{platformCards[platform].name}</h3>
						</div>
						{platform === visitorPlatform && <span className={styles.visitorBadge}>Your system</span>}
					</div>
					{platformCards[platform].content}
				</li>
			))}
		</ul>
	);
}
