import {Link} from "react-router-dom";

const Anchor = ({
    path,
    children,
    className,
    rel,
    target,
    onClick,
    onKeyPress,
    onFocus,
    onBlur,
    ...rest
}) => {
    if (!path) return null;
    const internal = /^\/(?!\/)/.test(path);
    if (!internal) {
        const isHash = path.startsWith("#");
        if (isHash) {
            return (
                <a
                    rel={rel}
                    className={className}
                    href={path}
                    onClick={onClick}
                    onKeyPress={onKeyPress}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    {...rest}
                >
                    {children}
                </a>
            );
        }
        return (
            <a
                rel={rel}
                className={className}
                href={path}
                target={target}
                onClick={onClick}
                onKeyPress={onKeyPress}
                onFocus={onFocus}
                onBlur={onBlur}
                {...rest}
            >
                {children}
            </a>
        );
    }

    return (
        <Link to={path} className={className} {...rest}>
            {children}
        </Link>
    );
};

Anchor.defaultProps = {
    target: "_blank",
    rel: "noopener noreferrer",
};

Anchor.displayName = "Anchor";

export default Anchor;