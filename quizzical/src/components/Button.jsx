export default function Button({ children, size, onClick }) {
    let sizeClass = size && `button-${size}`

    return (
        <button onClick={onClick} className={sizeClass}>{children}</button>
    )
}