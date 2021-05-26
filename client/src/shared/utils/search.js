export const handleSearch = (event, items, setIssues) => {
    const reg = new RegExp(event.target.value, "gi");
    const issues = items.filter((item) => item.title.match(reg));
    setIssues(issues);
};
