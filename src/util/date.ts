import { formatDistanceToNow, parseISO } from "date-fns";

export const formatTimeAgo = (isoDate: string) => {
    return formatDistanceToNow(parseISO(isoDate), { addSuffix: true });
};