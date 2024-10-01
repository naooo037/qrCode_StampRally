export const dateFormate = (date: string) => {
	const d = new Date(date)
	return `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()} ${d.getHours()}:${d.getMinutes()}`
}
