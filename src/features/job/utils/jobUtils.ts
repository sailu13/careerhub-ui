export function formatPostedDate(date: string) {
    return new Date(date).toLocaleDateString("en-IN", {
        day: "numeric", month: "short", year: "numeric"
    });
}

export function skillList(skills: string) {
    return skills.split(",");
}