export function changeTheme(theme) {
    return { type: 'CHANGE_THEME', payload: theme }
}

export function changeAnimal(animal) {
    return { type: 'CHANGE_ANIMAL', payload: animal }
}

export function changeBreed(breed) {
    return { type: 'CHANGE_BREED', payload: breed }
}

export function changeLocation(location) {
    return { type: 'CHANGE_LOCATION', payload: location }
}