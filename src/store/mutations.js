/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
export default {
    appendPet: (state, { species, pet }) => {
        state[species].push(pet)
    }
}
