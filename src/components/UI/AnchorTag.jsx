export const AnchorTag = ({ anchorClass, children, href, target, rel }) => {
	return (
		<a className={anchorClass} href={href} target={target} rel={rel}>
			{children}
		</a>
	);
};
