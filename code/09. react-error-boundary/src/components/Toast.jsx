function Toast({ visible, message }) {
    if (!visible) {
        return null; // Don't render the Toast if it's not visible
    }

    return (
        <div className="toast">
            <p>{message}</p>
        </div>
    );
}

export default Toast;
