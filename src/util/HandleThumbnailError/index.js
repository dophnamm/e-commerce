import { THUMBNAIL_DEFAULT, THUMBNAIL_URL } from 'constant/constant';

function handleThumbnailError(thumbnail) {
	return thumbnail ? `${THUMBNAIL_URL}${thumbnail?.url}` : THUMBNAIL_DEFAULT;
}

export default handleThumbnailError;
