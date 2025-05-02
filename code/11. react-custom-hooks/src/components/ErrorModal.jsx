// **************************************************
// A-01:
// **************************************************
export default function ErrorModal({ title, message, onConfirm }) {
    return (
        <div className="error">
            <h2>{title}</h2>
            <p>{String(message)}</p>
            {onConfirm && (
                <div id="confirmation-actions">
                    <button onClick={onConfirm} className="button">
                        Okay
                    </button>
                </div>
            )}
        </div>
    );
}
// **************************************************