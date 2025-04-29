const baseUrl = "http://localhost:3000";

export async function getAvailablePlacesAsync() {
    const errorMessage = 'Failed to fetch places';

    try {
        const url = `${baseUrl}/places`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(errorMessage);
        }

        const responseData = await response.json();

        const places = responseData.places;

        return places;
    } catch (error) {
        throw new Error(errorMessage);
    }
}


export async function getUserSelectedPlacesAsync() {
    const errorMessage = 'Failed to fetch user places';

    try {
        const url = `${baseUrl}/user-places`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(errorMessage);
        }

        const responseData = await response.json();

        const places = responseData.places;

        return places;
    } catch (error) {
        throw new Error(errorMessage);
    }
}

export async function updateUserSelectedPlacesAsync(placeIds) {
    const errorMessage = 'Failed to update user data.';
    
    try {
        const url = `${baseUrl}/user-places`;

        const response = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify({ placeIds }),
            headers: {
                'Content-Type': 'application/json'
            },
        });

        if (!response.ok) {
            throw new Error(errorMessage);
        }

        const responseData = await response.json();

        return responseData.places;
    } catch (error) {
        throw new Error(errorMessage);
    }
}