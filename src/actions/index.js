export const selectLibrary = (libraryId) => {
    return {
        type: 'select_library',
        payload: libraryId
    }
}

export const selectMenu = (menuId) => {
    return {
        type: 'select_menu',
        payload: menuId
    }
}