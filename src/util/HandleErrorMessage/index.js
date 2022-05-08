export const handleErrorMessage = (data) => {
	if (!data) return;

	const listError = data.data || [];
	const firstError = listError.length > 0 ? listError[0] : {};
	const listMessage = firstError.messages || [];
	const firstMessage = listMessage.length > 0 ? listMessage[0] : {};

	throw new Error(firstMessage.message);
};
