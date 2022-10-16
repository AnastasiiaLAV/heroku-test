export const getContacts = ({contacts}) => contacts.items;

export const getFilter = ({contacts}) => contacts.filter;

export const getFilteredContacts = (({contacts, filter}) => {
    const filterNormal = filter.toLowerCase();
    const result = contacts.items.filter(({name}) => {
        const normalizedName = name.toLowerCase();
        return normalizedName.includes(filterNormal)
    })
    return result;
});