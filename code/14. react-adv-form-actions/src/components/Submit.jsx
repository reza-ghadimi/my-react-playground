import { useFormStatus } from 'react-dom';


export default function Submit() {
    // could retrieve data, pending, and etc
    const { pending } = useFormStatus();

    return (
        <p className="actions">
            <button type="submit" disabled={pending}>
                {pending ? 'Submitting...' : 'Submit'}
            </button>
        </p>
    );
}