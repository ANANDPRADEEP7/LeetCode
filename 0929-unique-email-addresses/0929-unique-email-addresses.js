/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    const set = new Set()
    for (let email of emails) {
        let [name, domain] = email.split("@")
        if ( domain.length <= 4) continue
        name = name.split("+")[0].replaceAll(".", "")
        set.add(name + "@" + domain);
    }
    return set.size;
};