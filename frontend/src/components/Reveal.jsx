import useInView from '../hooks/useInView.js';

// Wrapper that adds the original `data-reveal` attribute and the `revealed`
// class once the element scrolls into view. Use `as` to pick the HTML tag.
export default function Reveal({ as: Tag = 'div', className = '', children, ...rest }) {
  const [ref, inView] = useInView(0.15);
  return (
    <Tag
      ref={ref}
      data-reveal
      className={`${className} ${inView ? 'revealed' : ''}`.trim()}
      {...rest}
    >
      {children}
    </Tag>
  );
}
