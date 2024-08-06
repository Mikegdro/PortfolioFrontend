
const months = ["January", "February", "March", "april", "May","June", "July", "August", "September", "October", "November", "December"]

/**
 *  Parses a string into a date, validating it and returning an Error in case it isn't valid. 
 * 
 *  @param date 
 *  @returns Error if it isn't valid, Date if it is
 */
export const getDayAndMonth = (date: string): Array<string> => {

    let placeholderDate = new Date()

    if (!date || date === null || !validateDate(date)) {
        return [months[placeholderDate.getDay()], placeholderDate.getFullYear().toString()]
    }

    const parsedDate = new Date(Date.parse(date))

    const month = months[parsedDate.getMonth()]
    const year = parsedDate.getFullYear().toString()

    return [month, year]
}

/**
 *  Validates a string into a date and returns a boolean.
 * 
 *  @param date 
 *  @returns 
 */
const validateDate = (date: string): boolean => {
    return !isNaN(Date.parse(date))
}

/**
 *   This function accepts an Error object or a string, it types what kind of object it is and returns the 
 *   string with the error message.
 * 
 *   @param err 
 *   @returns 
 */
export const handleError = (err: unknown): string => {

    if (err instanceof Error) {
        return err.message
    }

    if (typeof err === 'string') {
        return err
    }

    return 'Unparseable error.'
}