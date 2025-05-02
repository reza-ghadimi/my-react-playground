import { useState, useEffect } from "react";

export default function useFetch({ fetchDataAsync, defaultValue, beforeFetchAsync = null, afterFetchAsync = null }) {
    const [hasError, setHasError] = useState(false);
    const [isFetching, setIsFetching] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [data, setData] = useState(defaultValue);

    useEffect(() => {
        async function fetchAsync() {
            if (beforeFetchAsync) {
                await beforeFetchAsync();
            }

            setIsFetching(true);
            try {
                const returnValue = await fetchDataAsync();

                setData(returnValue);

                if (afterFetchAsync) {
                    await afterFetchAsync(returnValue);
                }
            } catch (error) {
                setHasError(true);
                setErrorMessage(error?.message ?? 'An unhandled error occurred!');
            } finally {
                setIsFetching(false);
            }
        }

        fetchAsync();
    }, []);

    return {
        data,
        setData,
        hasError,
        isFetching,
        errorMessage,
    };
}
